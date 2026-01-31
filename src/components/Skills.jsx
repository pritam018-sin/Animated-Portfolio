import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { skills, categories } from '../Utils/skillData';
import AbstractBackground from './AbstractBackground';

const Skills = () => {
    // Filter out 'all' category if needed, but if the user provided it, maybe they want it usable.
    // However, sticking to the "One Category at a time" flow works best with distinct categories.
    // The user's category list has 'all' at index 0. 'All' is redundant for scrollytelling steps.
    const activeCategories = categories.filter(c => c.id !== 'all');

    // State to track scroll progress step
    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollYProgress } = useScroll();

    // Map scroll (0-1) to active category index
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const total = activeCategories.length;
        const index = Math.min(
            total - 1,
            Math.floor(latest * total)
        );
        setActiveIndex(index);
    });

    // Animation variants
    const panelVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(10px)" },
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } },
        exit: { opacity: 0, y: -50, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.6, ease: "easeIn" } }
    };

    return (
        <div className="relative min-h-screen text-white font-['Inter']">

            {/* Abstract System Background */}
            <AbstractBackground />

            {/* Overlay Gradient for that "Orange Color" UI request, but kept subtle */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-t from-orange-950/20 via-transparent to-transparent mix-blend-screen" />

            {/* Scroll Container */}
            <div style={{ height: `${activeCategories.length * 100}vh` }} className="relative z-10">

                {/* Sticky Viewport */}
                <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">

                    {/* Progress Indicator Side Bar */}
                    <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-20">
                        {activeCategories.map((cat, i) => (
                            <div key={cat.id} className="group flex items-center gap-4">
                                <span className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${activeIndex === i ? 'text-orange-400 translate-x-1' : 'text-white/20'}`}>
                                    0{i + 1}
                                </span>
                                <div className={`w-[1px] transition-all duration-500 ${activeIndex === i ? 'h-12 bg-orange-400' : 'h-4 bg-white/10'}`} />
                            </div>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="relative w-full max-w-6xl h-[80vh] flex items-center justify-center">
                        {activeCategories.map((cat, index) => {
                            const isActive = index === activeIndex;
                            if (!isActive) return null;

                            const catSkills = skills.filter(s => s.category === cat.id);

                            return (
                                <motion.div
                                    key={cat.id}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={panelVariants}
                                    className="absolute w-full flex flex-col items-center"
                                >
                                    {/* Category Header */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="mb-12 text-center"
                                    >
                                        <div className="flex items-center justify-center gap-3 text-orange-500/80 mb-2">
                                            <span className="text-2xl">{cat.icon}</span>
                                            <span className="text-xs font-mono uppercase tracking-[0.3em] text-orange-200/50">System Module</span>
                                        </div>
                                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">{cat.name}</h2>
                                    </motion.div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-6">
                                        {catSkills.map((skill, i) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-orange-900/10 hover:border-orange-500/30 transition-all duration-300 group"
                                            >
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="text-xl font-bold text-orange-50 group-hover:text-white">{skill.name}</h3>
                                                    {skill.icon && <span className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity">{skill.icon}</span>}
                                                </div>

                                                <p className="text-xs text-stone-400 mb-6 font-medium leading-relaxed">
                                                    {skill.experience}
                                                </p>

                                                <div className="space-y-3">
                                                    <div className="text-[10px] uppercase tracking-wider text-orange-200/40 font-mono">Used In:</div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {skill.usedIn && skill.usedIn.slice(0, 3).map((proj, idx) => (
                                                            <span key={idx} className="text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded-sm text-stone-400">
                                                                {proj}
                                                            </span>
                                                        ))}
                                                        {skill.usedIn && skill.usedIn.length > 3 && (
                                                            <span className="text-[10px] text-stone-600 px-1 pt-1">+{skill.usedIn.length - 3}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
