import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { aboutNarrative, education, achievements, skills } from '../Utils/aboutData';
import AboutBackground from './AboutBackground';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    return (
        <div ref={containerRef} className="relative bg-[#050505] text-white/90 font-['Inter'] selection:bg-orange-500/30 selection:text-orange-100">

            <AboutBackground />

            {/* Ambient Background - Reduced opacity to show animation */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-orange-950/20 via-black/20 to-transparent mix-blend-screen" />

            {/* Scroll Container: 400vh */}
            <div className="h-[400vh] relative z-10 w-full">

                <div className="sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-20 overflow-hidden">

                    {/* PROGRESS INDICATOR - FIXED */}
                    {/* Removed 'hidden md:flex' to ensure it's always visible if space permits, or scale it down. */}
                    <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
                        <ProgressItem scrollY={scrollYProgress} number="01" label="ORIGIN" start={0} end={0.15} />
                        <ProgressItem scrollY={scrollYProgress} number="02" label="FOUNDATION" start={0.15} end={0.40} />
                        <ProgressItem scrollY={scrollYProgress} number="03" label="GROWTH" start={0.40} end={0.65} />
                        <ProgressItem scrollY={scrollYProgress} number="04" label="PHILOSOPHY" start={0.65} end={0.88} />
                        <ProgressItem scrollY={scrollYProgress} number="05" label="IMPACT" start={0.88} end={1.0} />
                    </div>

                    {/* SECTION 1: ENTRY */}
                    <FirstSection end={0.15}>
                        <div className="text-center max-w-4xl px-8 ml-10 md:ml-0">
                            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-tight text-white/90">
                                I didn’t start with frameworks.
                            </h1>
                            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-orange-100/80">
                                I started with <span className="italic font-serif">curiosity.</span>
                            </h1>
                        </div>
                    </FirstSection>


                    {/* SECTION 2: FOUNDATION */}
                    <SectionRange start={0.15} end={0.40}>
                        <div className="max-w-4xl w-full flex flex-col md:flex-row gap-12 items-start pl-8 md:pl-0">
                            <div className="md:w-1/3">
                                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-orange-400 mb-6 opacity-70">Foundation</h2>
                                <div className="space-y-4 text-lg md:text-xl font-light text-white/80">
                                    {aboutNarrative.foundation.map((line, i) => (
                                        <p key={i} className="text-white/60 leading-relaxed">{line}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="md:w-2/3 space-y-6">
                                {education.map((edu, i) => (
                                    <div key={i} className="border-l-2 border-orange-500/20 pl-6 py-1">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-lg font-bold text-orange-100">{edu.degree}</h3>
                                            <span className="text-xs font-mono text-orange-400/60">{edu.duration}</span>
                                        </div>
                                        <p className="text-sm text-white/50 mb-2">{edu.institution} • {edu.field}</p>
                                        <p className="text-xs text-white/40 leading-relaxed max-w-lg">{edu.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SectionRange>


                    {/* SECTION 3: GROWTH */}
                    <SectionRange start={0.40} end={0.65}>
                        <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 items-start pl-8 md:pl-0">
                            <div className="md:w-1/3 sticky top-20">
                                <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-orange-400 mb-6 opacity-70">Growth</h2>
                                <div className="space-y-4 text-lg md:text-xl font-light text-white/80">
                                    {aboutNarrative.growth.map((line, i) => (
                                        <p key={i} className="text-white/60 leading-relaxed">{line}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 gap-6">
                                {achievements.slice(0, 3).map((ach, i) => (
                                    <div key={i} className="bg-white/[0.03] border border-white/5 p-6 rounded-lg backdrop-blur-sm hover:border-orange-500/20 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-base font-bold text-orange-50">{ach.title}</h3>
                                            <span className="text-xs font-mono text-orange-400/50 bg-orange-900/10 px-2 py-1 rounded">{ach.year}</span>
                                        </div>
                                        <p className="text-sm text-white/50 leading-relaxed">{ach.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SectionRange>


                    {/* SECTION 4: PHILOSOPHY */}
                    <SectionRange start={0.65} end={0.88}>
                        <div className="max-w-4xl w-full text-center pl-8 md:pl-0">
                            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-orange-400 mb-8 opacity-70">Philosophy</h2>
                            <div className="mb-12">
                                {aboutNarrative.philosophy.map((line, i) => (
                                    <p key={i} className="text-xl md:text-3xl font-light text-white/80 mb-2">{line}</p>
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                                {skills.map((skill, i) => (
                                    <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-orange-100/60 hover:border-orange-500/30 hover:bg-orange-900/10 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SectionRange>


                    {/* SECTION 5: VERDICT */}
                    <LastSection start={0.88}>
                        <div className="text-center max-w-2xl px-4 pl-8 md:pl-0">
                            <div className="w-16 h-[1px] bg-orange-500 mx-auto mb-8 shadow-[0_0_10px_orange]" />
                            <p className="text-2xl md:text-4xl font-light leading-snug mb-8 text-white/90">
                                "The code is just the vehicle. <br />
                                <span className="text-orange-200">The impact is the destination.</span>"
                            </p>
                            <h3 className="text-lg font-mono tracking-widest text-orange-400/60 uppercase">
                                Pritam Singh
                            </h3>
                            <p className="text-xs text-white/30 mt-2 tracking-widest">ENGINEER & PROBLEM SOLVER</p>
                        </div>
                    </LastSection>

                </div>
            </div>
        </div>
    );
};

// --- Animations Components ---

const FirstSection = ({ end, children }) => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, end - 0.05, end], [1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, end - 0.05, end], [0, 0, -20]);
    return <motion.div style={{ opacity, y }} className="absolute w-full flex justify-center items-center pointer-events-none"><div className="pointer-events-auto">{children}</div></motion.div>;
};

const SectionRange = ({ start, end, children }) => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [20, 0, 0, -20]);
    return <motion.div style={{ opacity, y }} className="absolute w-full flex justify-center items-center pointer-events-none"><div className="pointer-events-auto">{children}</div></motion.div>;
};

const LastSection = ({ start, children }) => {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [start, start + 0.05], [0, 1]);
    const y = useTransform(scrollYProgress, [start, start + 0.05], [20, 0]);
    return <motion.div style={{ opacity, y }} className="absolute w-full flex justify-center items-center pointer-events-none"><div className="pointer-events-auto">{children}</div></motion.div>;
};


// --- Progress Item using usageTransform directly ---
const ProgressItem = ({ scrollY, number, label, start, end }) => {
    // We map opacity and color weight based on scroll ranges
    // Since useTransform takes discrete values, we can't do simple conditional logic easily for exact range without multiple points.
    // Instead, we use a custom transform that output 1 (active) or 0 (inactive) based on range.

    // Create a smooth transition around the edges
    const activeState = useTransform(scrollY, [start, start + 0.01, end - 0.01, end], [0, 1, 1, 0]);

    const color = useTransform(activeState, [0, 1], ["rgba(255,255,255,0.2)", "#fb923c"]); // orange-400
    const scale = useTransform(activeState, [0, 1], [1, 1.1]);
    const lineW = useTransform(activeState, [0, 1], ["16px", "32px"]);
    const labelX = useTransform(activeState, [0, 1], [-10, 0]);
    const labelOpacity = useTransform(activeState, [0, 1], [0, 1]);
    const labelBlur = useTransform(activeState, [0, 1], ["4px", "0px"]);

    return (
        <div className="flex items-center gap-3">
            <motion.span
                style={{ color, scale }}
                className="text-[10px] font-mono transition-colors"
            >
                {number}
            </motion.span>

            <motion.div
                style={{ width: lineW, backgroundColor: color }}
                className="h-[1px]"
            />

            <motion.span
                style={{
                    x: labelX,
                    opacity: labelOpacity,
                    filter: useTransform(labelBlur, (v) => `blur(${v})`),
                    color: "#fed7aa" // orange-200
                }}
                className="text-[10px] tracking-widest uppercase absolute left-14 whitespace-nowrap"
            >
                {label}
            </motion.span>
        </div>
    );
};

export default About;
