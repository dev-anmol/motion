import { GlobeIcon, RocketIcon, SparklesIcon } from "lucide-react"


export default function Content() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900">

                <div className="flex flex-col gap-10"></div>
                {
                    features.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-2 gap-20">
                            <div>
                                {item.icon}
                                <h2 className="text-4xl font-bold text-white">{item.title}</h2>
                                <p className="text-neutral-400">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
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
                    height={500}
                    width={500}
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
                    height={500}
                    width={500}
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
                    height={500}
                    width={500}
                    className="rounded-lg"
                />
            </div>
        )
    }
];