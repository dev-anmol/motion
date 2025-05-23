import { GlobeIcon, RocketIcon, SparklesIcon } from "lucide-react"
import { easeInOut, motion, useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";


export default function Content() {

    const backgrounds = ['#171717', '#0f172a', '#272640'];
    const containerRef = useRef<HTMLDivElement>(null);
    const [background, setBackground] = useState(backgrounds[0]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    //used to track anything, and get its value
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const finalValue = Math.floor(latest * backgrounds.length);
        console.log(finalValue);
        setBackground(backgrounds[finalValue])
    })

    return (
        <>
            <motion.div
                ref={containerRef}
                animate={{ background }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                }}
                className="min-h-screen flex flex-col items-center justify-center gap-50 bg-neutral-900 p-40">
                <div className="flex flex-col mx-auto"></div>
                {
                    features.map((feature) => (
                        <Card key={feature.title} feature={feature} />
                    ))
                }
            </motion.div>
        </>
    )
}

const Card = ({ feature }: { feature: Feature }) => {

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] //element is visible when it enters the viewport, element is hidden when it leaves the viewport (element = start, viewport = end --- i want to trigger the animation when the element is visible)
    })

    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("value changed", latest);
    // })

    const translateContent = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), {
        damping: 30,
        stiffness: 100,
        mass: 1
    });

    // we can use useTransform on any value and transform it using anything
    // const translateContent = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);




    return (
        <div
            ref={ref}
            key={feature.title}

            className="grid grid-cols-2 max-w-[90%] gap-14 place-items-center">
            <motion.div
                style={{
                    filter: useMotionTemplate`blur(${blur}px)`, //we cannot use motion values directly we have to use useMotionTemplate
                    scale
                }}
                className="flex flex-col gap-4">
                {feature.icon}
                <h2 className="text-xl font-bold text-white">{feature.title}</h2>
                <p className="text-lg text-neutral-400">{feature.description}</p>
            </motion.div>
            <motion.div style={{
                y: translateContent,
                opacity,
            }}>{feature.content}
            </motion.div>
        </div>

    );
}

type Feature = {
    icon: React.ReactNode,
    title: string,
    description: string,
    content: React.ReactNode
}

const features: Feature[] = [
    {
        icon: <RocketIcon className="h-8 w-8" />,
        title: "Generate ultra realistic images in seconds",
        description: "With our state of the art AI, you can generate ultra realistic images in no time at all.",
        content: (
            <div>
                <img
                    src="https://assets.aceternity.com/pro/car-1.jpg"
                    alt="car"
                    height={350}
                    width={350}
                    className="rounded-lg"
                />
            </div>
        )
    },
    {
        icon: <SparklesIcon className="h-8 w-8" />,
        title: "Enhance your creativity with AI",
        description: "Let AI help you brainstorm, design, and visualize ideas faster than ever before.",
        content: (
            <div>
                <img
                    src="https://assets.aceternity.com/pro/art.jpeg"
                    alt="creative concept"
                    height={350}
                    width={350}
                    className="rounded-lg"
                />
            </div>
        )
    },
    {
        icon: <GlobeIcon className="h-8 w-8" />,
        title: "Seamless global collaboration",
        description: "Work with teams around the world effortlessly using our integrated platform.",
        content: (
            <div>
                <img
                    src="https://assets.aceternity.com/pro/car-1.jpg"
                    alt="collaboration"
                    height={350}
                    width={350}
                    className="rounded-lg"
                />
            </div>
        )
    }
];