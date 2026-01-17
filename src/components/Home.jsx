import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import ImageScroll from './ImageScroll';
import ScrollSection from './ScrollSection';
import { sectionsData } from './OverlayData';

const Home = ({ onSectionChange }) => {
    const [activeSection, setActiveSection] = useState(0);
    const { scrollYProgress } = useScroll();

    // Determine active section based on scroll progress
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // 5 sections over 0-1 range
        const index = Math.min(
            sectionsData.length - 1,
            Math.floor(latest * sectionsData.length)
        );
        if (activeSection !== index) {
            setActiveSection(index);
            if (onSectionChange) onSectionChange(index);
        }
    });

    return (
        <div className="relative">
            {/* Container height: 400vh as requested */}
            <div className="h-[400vh] relative">

                {/* The component containing the sticky canvas */}
                <ImageScroll />

                {/* Text Overlays - Fixed on top, visibility toggled by state */}
                {sectionsData.map((section, index) => (
                    <ScrollSection
                        key={section.id}
                        data={section}
                        active={activeSection === index}
                    />
                ))}

                {/* Progress Bar */}
                <div className="fixed top-0 left-0 h-1 bg-white/10 w-full z-50 pointer-events-none">
                    <div
                        className="h-full bg-orange-200/40 transition-all duration-75 ease-out"
                        style={{ width: `${Math.max(0, Math.min(100, (activeSection + 1) / sectionsData.length * 100))}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
