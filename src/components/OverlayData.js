export const sectionsData = [
    {
        id: 'intro',
        startFrame: 0,
        endFrame: 48, // 0-20%
        align: 'center',
        heading: "Hi, I'm Pritam Singh.",
        subheading: "Fullstack Developer & Creative Engineer",
    },
    {
        id: 'skills',
        startFrame: 49,
        endFrame: 96, // 20-40% -> 30% focus
        align: 'left',
        heading: "I build modern, high-performance web experiences.",
        subheading: "React · Tailwind · Framer Motion · UI Engineering",
    },
    {
        id: 'projects',
        startFrame: 97,
        endFrame: 144, // 40-60% -> 60% focus
        align: 'right',
        heading: "Projects built with precision and purpose.",
        subheading: "Performance · Design · Scalability",
    },
    {
        id: 'achievements',
        startFrame: 145,
        endFrame: 192, // 60-80% -> 75% focus
        align: 'left', // Requested "Left or center", choosing Left for balance with previous Right
        heading: "Consistent problem solver.",
        subheading: "DSA · Clean Architecture · Production-ready code",
    },
    {
        id: 'cta',
        startFrame: 193,
        endFrame: 239, // 80-100% -> 90% focus
        align: 'center',
        heading: "Let's build something impactful.",
        subheading: "Available for roles and collaborations.",
        cta: true
    }
];
