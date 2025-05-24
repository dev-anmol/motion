import { motion } from "motion/react"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function handleNavigation(route: string) {
        setTimeout(() => {
            navigate(`/${route}`)
        }, 200)
    }

    const content: string[] = ['Subscribe', 'Dashboard', 'Content', 'Layout']
    return (
        <>

            <div className="h-screen w-full bg-neutral-900 flex items-center justify-center flex-col gap-12"
                style={{
                    backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
                    backgroundSize: "8px 8px",
                    backgroundRepeat: "repeat",
                    boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)"
                }}
            >
                {content.map((item, idx) => (
                    <div className="flex flex-col gap-6">
                        <motion.button
                            initial={{
                                rotate: 0,
                                opacity: 0
                            }}
                            animate={{
                                opacity: 1
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut"
                            }}
                            whileTap={{
                                y: 0
                            }}
                            whileHover={{
                                rotateX: 10,
                                rotateY: 30,
                                boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
                                y: -10
                            }}
                            style={{
                                translateZ: 100
                            }}
                            onClick={() => handleNavigation(item)}
                            className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black
            shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]
            ">
                            <span className="group-hover:text-cyan-400 transition-colors duration-300">{item}</span>

                            <span
                                className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4   mx-auto "></span>
                            <span
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-md "></span>
                        </motion.button>

                    </div>
                ))}

                {/* <motion.button
                    initial={{
                        rotate: 0,
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    whileTap={{
                        y: 0
                    }}
                    whileHover={{
                        rotateX: 10,
                        rotateY: 30,
                        boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
                        y: -10
                    }}
                    style={{
                        translateZ: 100
                    }}
                    onClick={() => handleNavigation('dashboard')}
                    className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black
            shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]
            ">
                    <span className="group-hover:text-cyan-400 transition-colors duration-300">Dashboard</span>

                    <span
                        className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4   mx-auto "></span>
                    <span
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-3/4 mx-auto blur-md "></span>
                </motion.button> */}

            </div>

        </>





    )
}

export default Home