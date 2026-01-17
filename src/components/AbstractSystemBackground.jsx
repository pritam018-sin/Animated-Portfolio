import { useRef, useEffect } from 'react';

const AbstractSystemBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const particleCount = 60; // Number of floating nodes
        const connectionDistance = 150; // Max distance to draw line
        const mouseDistance = 200; // Interaction radius

        let width = window.innerWidth;
        let height = window.innerHeight;

        let mouse = { x: -1000, y: -1000 };

        // Resize handler
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles();
        };

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow velocity X
                this.vy = (Math.random() - 0.5) * 0.5; // Slow velocity Y
                this.size = Math.random() * 2 + 1; // Size 1-3
                this.opacity = Math.random() * 0.5 + 0.2; // Opacity 0.2-0.7
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction - slight repel
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseDistance) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouseDistance - distance) / mouseDistance;
                    const directionX = forceDirectionX * force * 0.5;
                    const directionY = forceDirectionY * force * 0.5;

                    this.x += directionX;
                    this.y += directionY;
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(217, 119, 6, ${this.opacity})`; // Orange-600
                ctx.fill();
            }
        }

        let particles = [];

        const initParticles = () => {
            particles = [];
            let count = particleCount;
            // Adjust count based on screen size
            if (width < 768) count = 30;

            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const drawGrid = (time) => {
            // Subtle rotating grid effect
            const gridSize = 60;
            const offsetX = (Math.sin(time * 0.0005) * 20);
            const offsetY = (Math.cos(time * 0.0005) * 20);

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = -gridSize + (offsetX % gridSize); x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines
            for (let y = -gridSize + (offsetY % gridSize); y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        }

        const animate = (time) => {
            ctx.clearRect(0, 0, width, height);

            // 1. Fill Background
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, width, height);

            // 2. Draw Subtle Grid
            drawGrid(time);

            // 3. Update & Draw Particles
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // 4. Draw Connections
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.strokeStyle = `rgba(255, 165, 0, ${opacity * 0.2})`; // Faint orange line
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // 5. Draw Mouse Connections
            if (mouse.x > 0 && mouse.y > 0) {
                particles.forEach(particle => {
                    const dx = particle.x - mouse.x;
                    const dy = particle.y - mouse.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouseDistance) {
                        const opacity = 1 - (distance / mouseDistance);
                        ctx.strokeStyle = `rgba(217, 119, 6, ${opacity * 0.4})`; // Stronger connection to mouse
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(particle.x, particle.y);
                        ctx.stroke();
                    }
                });
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        resize(); // Init
        animate(0);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden pointer-events-none">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
        </div>
    );
};

export default AbstractSystemBackground;
