import { useEffect, useRef } from 'react';

const AboutBackground = () => {
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

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.005; // Slightly faster for visibility

            // Theme: Clarity & Structure (Flow Field)
            // Increased density
            const cols = 25;
            const rows = 15;
            const cellW = canvas.width / cols;
            const cellH = canvas.height / rows;

            // Thicker lines
            ctx.lineWidth = 1.0;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * cellW;
                    const y = j * cellH;

                    // Wave offset
                    const noise = Math.sin(i * 0.2 + time) * Math.cos(j * 0.2 + time) * 20;

                    // MUCH Higher Opacity for debugging/visibility
                    // Base 0.2, variance up to 0.5
                    ctx.strokeStyle = `rgba(255, 165, 0, ${0.2 + (Math.sin(time + i * 0.2) * 0.2)})`;

                    ctx.beginPath();
                    ctx.moveTo(x + noise, y);
                    ctx.lineTo(x + cellW + noise, y + cellH);
                    ctx.stroke();

                    // More dots
                    if (Math.random() > 0.92) {
                        ctx.fillStyle = `rgba(255, 165, 0, ${Math.random() * 0.6})`;
                        ctx.beginPath();
                        ctx.arc(x + noise, y, 1.5, 0, Math.PI * 2);
                        ctx.fill();
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
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: '#050505' }}
        />
    );
};

export default AboutBackground;
