import { useRef, useEffect } from 'react';

const CinematicBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Configuration for High Visibility "Liquid Light"
        // Increased Opacity values significantly
        const orbs = [
            { x: 0.3, y: 0.3, r: 0.8, color: 'rgba(217, 119, 6, 0.4)', speed: 0.3 }, // Amber - Opacity 0.4
            { x: 0.7, y: 0.7, r: 0.6, color: 'rgba(124, 63, 22, 0.3)', speed: 0.4 }, // Brown - Opacity 0.3
            { x: 0.5, y: 0.5, r: 0.5, color: 'rgba(251, 146, 60, 0.25)', speed: 0.2 }, // Light Orange - Opacity 0.25
            { x: 0.2, y: 0.8, r: 0.7, color: 'rgba(67, 20, 7, 0.5)', speed: 0.15 },  // Dark Roast - Opacity 0.5
        ];

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.003;

            // 1. Base Background - Use FillRect to ensure previous frames are gone
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 2. Draw Orbs with Standard Blending (Safer for visibility than 'screen')
            // but 'screen' looks better. Let's try 'source-over' with alpha to build up color.
            // or 'lighter' (additive) but controlled.
            // Let's stick to default blending but high opacity to ensure it shows.

            orbs.forEach((orb, i) => {
                const moveX = Math.sin(time * orb.speed + i) * 150;
                const moveY = Math.cos(time * orb.speed * 0.8 + i) * 100;

                const x = (orb.x * canvas.width) + moveX;
                const y = (orb.y * canvas.height) + moveY;
                const radius = Math.max(canvas.width, canvas.height) * orb.r;

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
                gradient.addColorStop(0, orb.color);
                gradient.addColorStop(1, 'rgba(0,0,0,0)');

                // Draw
                ctx.globalCompositeOperation = 'lighter'; // Additive blending for "Glow"
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // 3. Reset Blend Mode
            ctx.globalCompositeOperation = 'source-over';

            // 4. System Texture - Thicker, Brighter Lines
            const lineSpacing = 50; // Tighter grid
            const cols = Math.ceil(canvas.width / lineSpacing);
            const rows = Math.ceil(canvas.height / lineSpacing);

            ctx.lineWidth = 1.5; // Thicker lines

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * lineSpacing;
                    const y = j * lineSpacing;

                    const angle = (Math.cos(x * 0.002 + time * 0.3) + Math.sin(y * 0.002 + time * 0.3)) * Math.PI;

                    const length = 25; // Longer lines
                    const x2 = x + Math.cos(angle) * length;
                    const y2 = y + Math.sin(angle) * length;

                    // Higher opacity: 0.1 to 0.3
                    const opacity = 0.1 + (Math.sin(time * 2 + i) * 0.2);

                    // Allow negatives to clamp to 0 for flashing effect
                    if (opacity > 0) {
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden pointer-events-none">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
};

export default CinematicBackground;
