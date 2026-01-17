import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ScrollSection = ({ data, active }) => {
    const navigate = useNavigate();
    // Simple fade in/out
    const variants = {
        hidden: { opacity: 0, y: 15, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Decide layout classes based on alignment
    let alignClass = "items-center text-center"; // Default center
    if (data.align === 'left') alignClass = "items-start text-left md:pl-20";
    if (data.align === 'right') alignClass = "items-end text-right md:pr-20";

    if (!active) return null;

    return (
        // Added translate-y-[100px] to shift everything down as requested
        <div className={`fixed inset-0 z-10 flex flex-col justify-center p-8 pointer-events-none ${alignClass} translate-y-[100px]`}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                // Glassmorphism: Orange-to-Brown tint, blur, shadow
                className="max-w-xl p-8 rounded-xl bg-gradient-to-br from-orange-900/30 to-amber-950/40 backdrop-blur-md border border-orange-500/10 shadow-2xl"
            >
                {/* Reduced text size by ~50% (7xl -> 3xl/4xl) */}
                {/* Text Color: Light Brown (orange-200/amber-100) */}
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-orange-100/90 mb-3">
                    {data.heading}
                </h2>
                <p className="text-sm md:text-lg text-orange-200/70 font-medium tracking-wide">
                    {data.subheading}
                </p>

                {data.cta && (
                    <div className="mt-8 flex gap-4 justify-center pointer-events-auto">
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-6 py-2 bg-orange-100 text-orange-950 font-semibold rounded-full hover:bg-white transition-colors text-sm pointer-events-auto cursor-pointer"
                        >
                            Contact Me
                        </button>
                        <a
                            href="/Resume_pritam.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-transparent border border-orange-200/30 text-orange-100 font-semibold rounded-full hover:bg-orange-900/30 transition-colors text-sm pointer-events-auto cursor-pointer flex items-center justify-center decoration-0"
                        >
                            View Resume
                        </a>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default ScrollSection;
