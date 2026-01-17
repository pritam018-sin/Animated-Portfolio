import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

const ImageScroll = () => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const totalFrames = 240;

    // Track scroll progress of the window (since we are using native body scroll now with sticky)
    // Or we can track a specific container. The requirement says "outer container h-[400vh]".
    // We'll rely on global window scroll mapping if the component is mounted in a long page, 
    // but usually userScroll() tracks the viewport progress relative to the target.
    // Let's use basic `useScroll` targetting the document for simplicity in this specific "Scrollytelling" setup.
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        let loadedCount = 0;
        const loadedImages = [];
        const promises = [];

        for (let i = 1; i <= totalFrames; i++) {
            const promise = new Promise((resolve) => {
                const img = new Image();
                const frameNumber = i.toString().padStart(3, '0');
                // Using .jpg as verified in file system
                img.src = `/video_seq/ezgif-frame-${frameNumber}.jpg`;
                img.onload = () => {
                    resolve(img);
                };
                img.onerror = () => {
                    // Fallback or skip
                    console.warn(`Frame ${i} failed to load`);
                    resolve(null);
                };
                loadedImages[i - 1] = img;
            });
            promises.push(promise);
        }

        Promise.all(promises).then(() => {
            setImages(loadedImages);
            setIsLoaded(true);
        });
    }, []);

    // Draw frame function
    const drawFrame = (index) => {
        const canvas = canvasRef.current;
        const img = images[index];
        if (!canvas || !img) return;

        const ctx = canvas.getContext('2d');

        // Accurate Object-Fit: Cover logic
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.width;
        const ih = img.height;

        const scale = Math.max(cw / iw, ch / ih);
        const x = (cw - iw * scale) / 2;
        const y = (ch - ih * scale) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, iw * scale, ih * scale);
    };

    // Update on scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map 0-1 to frame index
        const frameIndex = Math.min(
            totalFrames - 1,
            Math.floor(latest * totalFrames)
        );

        requestAnimationFrame(() => drawFrame(frameIndex));
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame if possible? 
                // The scroll listener will catch up, or we could force a redraw.
                // For now, next scroll tick fixes it.
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initial draw when loaded
    useEffect(() => {
        if (isLoaded) {
            drawFrame(0);
        }
    }, [isLoaded]);

    return (
        <>
            {!isLoaded && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505] text-white/50 font-mono text-sm">
                    LOADING SEQUENCE...
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="sticky top-0 w-full h-screen object-cover block"
            />
        </>
    );
};

export default ImageScroll;
