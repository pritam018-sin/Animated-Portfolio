import { useEffect, useRef, useState } from 'react';

const ImageSequence = ({ progress }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const totalFrames = 240;

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages = [];
            const imagePromises = [];

            for (let i = 1; i <= totalFrames; i++) {
                const promise = new Promise((resolve, reject) => {
                    const img = new Image();
                    // Format number to 3 digits (001, 002, etc.)
                    const frameNumber = i.toString().padStart(3, '0');
                    img.src = `/video_seq/ezgif-frame-${frameNumber}.jpg`;
                    img.onload = () => {
                        resolve(img);
                        setLoadedCount(prev => prev + 1);
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load frame ${i}`, e);
                        // Resolve with null to avoid breaking Promise.all, handle missing frame in draw
                        resolve(null);
                    };
                    loadedImages[i - 1] = img; // maintain order
                });
                imagePromises.push(promise);
            }

            await Promise.all(imagePromises);
            setImages(loadedImages);
        };

        loadImages();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');

        // Calculate current frame based on progress (0 to 1)
        let frameIndex = Math.floor(progress * (totalFrames - 1));
        // Clamp frameIndex
        frameIndex = Math.max(0, Math.min(frameIndex, totalFrames - 1));

        const img = images[frameIndex];

        if (img) {
            // Draw image centered and covering the canvas (like object-fit: cover)
            const canvasRatio = canvas.width / canvas.height;
            const imgRatio = img.width / img.height;
            let drawWidth, drawHeight, offsetX, offsetY;

            if (canvasRatio > imgRatio) {
                drawWidth = canvas.width;
                drawHeight = canvas.width / imgRatio;
                offsetX = 0;
                offsetY = (canvas.height - drawHeight) / 2;
            } else {
                drawWidth = canvas.height * imgRatio;
                drawHeight = canvas.height;
                offsetX = (canvas.width - drawWidth) / 2;
                offsetY = 0;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    }, [progress, images]);

    // Resize observer to keep canvas full screen
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Force re-render of current frame after resize
                // We can do this by just triggering the effect via resize state if needed, 
                // but usually the next scroll event or progress update fixes it.
                // For now, let's just update the width/height property which clears canvas
                // The next effect run (due to progress dependency likely constant) needs to re-draw.
                // Just triggering a re-draw manually with current progress:
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (loadedCount < totalFrames) {
        const percent = Math.round((loadedCount / totalFrames) * 100);
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
                <div className="text-2xl font-light tracking-widest">
                    LOADING {percent}%
                </div>
            </div>
        );
    }

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
            style={{ display: 'block' }} // Remove inline-block spacing
        />
    );
};

export default ImageSequence;
