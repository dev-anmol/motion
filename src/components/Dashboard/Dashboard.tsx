import { useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Home,
    BarChart2,
    Users,
    Settings
} from "lucide-react";
import { motion } from 'motion/react'

// Animation Orchestration - child items animates when hovering on parent
// can be done using variants

export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(true);

    const items = [
        { label: "Home", icon: <Home size={18} /> },
        { label: "Analytics", icon: <BarChart2 size={18} /> },
        { label: "Users", icon: <Users size={18} /> },
        { label: "Settings", icon: <Settings size={18} /> }
    ];

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const sideBarVariants = {
        open: {
            width: "14rem"
        },
        closed: {
            width: "5rem"
        }
    }

    const childVariants = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y: -5
        }
    }

    const parentVariants = {
        open: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.05
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.1
            }
        }
    }

    const landingPageVariants = {
        open: {
            opacity: 1,
            filter: "blur(0px)"
        },
        closed: {
            opacity: 1,
            filter: "blur(0px)"
        }
    }
    //we don't need to mention
    // animate = {isOpen ? "open" : "closed"} in child items if we have mentioned it for the parent
    // just simply specify the variants
    //in motion animations goes from top to down (orchestrate upar se niche hote hai)

    //if we want to stager child i.e one after another
    // i have to make the parent of their as motion

    return (
        <motion.div className="flex h-screen bg-gray-100"
            initial={{
                opacity: 0,
                filter: "blur(10px)"
            }}
            animate={isOpen ? "open" : "closed"}
            transition={{
                duration: 0.3
            }}
            variants={landingPageVariants}
        >
            <motion.div
                initial={false}
                variants={sideBarVariants}
                animate={isOpen ? "open" : "closed"}
                className={`flex flex-col gap-6 shadow-2xl p-4 bg-white`}
            >
                <div className="flex items-center justify-center gap-4">
                    {isOpen && (
                        <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
                    )}
                    <button
                        onClick={handleToggle}
                        className="p-1.5 rounded-full bg-neutral-100 text-gray-500 hover:bg-neutral-200"
                    >
                        {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                    </button>
                </div>

                <motion.ul
                    animate={isOpen ? "open" : "closed"}
                    variants={parentVariants}
                    className="flex flex-col gap-3"
                >
                    {items.map((item, idx) => (
                        <motion.li
                            variants={childVariants}
                            key={idx}
                            className="flex items-center gap-3 text-sm font-medium px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition text-gray-700"
                        >
                            {item.icon}
                            {isOpen && <span>{item.label}</span>}
                        </motion.li>
                    ))}
                </motion.ul>

            </motion.div>

            <div className="flex-1 p-8">
                <h1 className="text-2xl font-bold text-gray-800">Right Content</h1>
                <p className="mt-2 text-gray-600">
                    Here’s where your main application content will appear.
                </p>
            </div>
        </motion.div>
    );
}
