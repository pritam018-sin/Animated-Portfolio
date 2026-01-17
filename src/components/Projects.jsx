import { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { projects } from '../Utils/projectData';
import AbstractSystemBackground from './AbstractSystemBackground';

const Projects = () => {
    return (
        <div className="min-h-screen text-white font-['Inter'] relative selection:bg-orange-500/30 selection:text-orange-100">

            <AbstractSystemBackground />

            {/* Main Scroll Container */}
            <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-24 text-center md:text-left"
                >
                    <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-orange-500/80 mb-4 block">Selected Works</h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white/90">
                        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500/80">Systems.</span>
                    </h1>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-20">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

            </div>
        </div>
    );
};

// --- Premium 3D Tilt Card Component ---
const ProjectCard = ({ project, index }) => {
    const ref = useRef(null);

    // Mouse position state for Spotlight
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Rotation values
    const xSpring = useSpring(0, { stiffness: 300, damping: 20 }); // Smooth rot X
    const ySpring = useSpring(0, { stiffness: 300, damping: 20 }); // Smooth rot Y

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        // Calculate mouse relative to element center
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Update spotlight coordinates
        x.set(mouseX);
        y.set(mouseY);

        // Calculate rotation (max +/- 5 degrees? Keep it subtle premium)
        // Center is (0,0) for rotation calcs
        const rX = (mouseY / height - 0.5) * 10 * -1; // Inverted Y Axis for natural feel
        const rY = (mouseX / width - 0.5) * 10;

        xSpring.set(rX);
        ySpring.set(rY);
    };

    const handleMouseLeave = () => {
        xSpring.set(0);
        ySpring.set(0);
    };

    // Glare Gradient - moves with mouse
    const glareBackground = useMotionTemplate`
        radial-gradient(
          600px circle at ${x}px ${y}px,
          rgba(255, 165, 0, 0.15),
          transparent 80%
        )
    `;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: xSpring,
                rotateY: ySpring,
                transformStyle: "preserve-3d",
            }}
            className="group relative perspective-1000"
        >
            {/* Spotlight / Glare Effect Container */}
            <motion.div
                style={{ background: glareBackground }}
                className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
            />

            {/* Card Content Wrapper - Needs bg to block lines behind if desired, or semi-transparent */}
            <div className="relative z-10 bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden backdrop-blur-sm shadow-xl transition-colors duration-500 group-hover:border-white/10">

                {/* Project Image / Preview Area */}
                <div className="relative w-full aspect-video overflow-hidden">
                    {project.image ? (
                        <div className="w-full h-full overflow-hidden">
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                                style={{ scale: 1.05 }}
                                whileHover={{ scale: 1.1 }}
                            />
                            {/* Cinematic Vignette on Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/20 font-mono text-xs uppercase tracking-widest bg-orange-900/5">
                            No Preview
                        </div>
                    )}

                    {/* Links Overlay - Appears on hover */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hover:bg-orange-500 hover:border-orange-500 text-white transition-all transform hover:scale-110 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                        )}
                        {project.live && (
                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full hover:bg-orange-500 hover:border-orange-500 text-white transition-all transform hover:scale-110 shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                            </a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4 relative">
                    {/* Subtle Shine Reflection */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors">{project.title}</h3>
                            <span className="text-[10px] font-mono text-orange-400/60 uppercase tracking-widest mt-1 block">{project.category}</span>
                        </div>
                    </div>

                    <p className="text-white/50 leading-relaxed font-light text-sm line-clamp-3 group-hover:text-white/70 transition-colors">
                        {project.description}
                    </p>

                    {/* Tech Stack - Minimal Clean Chips */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                            <span key={i} className="text-[10px] uppercase font-mono font-medium tracking-wider text-white/40 bg-white/[0.03] px-3 py-1.5 rounded-md border border-white/5 group-hover:border-orange-500/30 group-hover:text-orange-200/70 transition-all">
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 4 && (
                            <span className="text-[10px] uppercase font-mono tracking-wider text-white/20 px-1 py-1.5">
                                +{project.technologies.length - 4}
                            </span>
                        )}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Projects;
