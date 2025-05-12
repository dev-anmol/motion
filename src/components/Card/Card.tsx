import {motion, AnimatePresence} from 'motion/react'
import {useState} from "react";

export default function Card() {

    const [open, setOpen] = useState(true);


    return (
        <>
            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.98,
                                filter: "blur(10px)"
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: 'blur(0px)'
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.98,
                                filter: "blur(10px)"
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                            className="h-screen w-full flex justify-center items-center">
                            <div
                                className="bg-white p-6 flex flex-col w-72 min-h-[29rem] h-[26rem] rounded-xl shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]">
                                <h2 className="geist-bold font-bold text-[11px]">Aceternity UI component</h2>
                                <p className="geist text-neutral-700 mt-2 text-[10px]">A collection of beautiful UI
                                    Components,
                                    let's
                                    get on with it</p>
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="text-[10px] flex items-center gap-1 mt-4 shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
                                        <img src="public/logo.png"
                                             className="h-4 w-4"
                                             alt="ui" width={50} height={50}/>
                                        Aceternity
                                    </button>
                                </div>
                                <div
                                    className="relative bg-gray-200 mt-4 border border-dashed border-neutral-200 flex-1 rounded-lg  shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)]">
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.98,
                                            filter: 'blur(10px)'
                                        }}

                                        whileHover={{
                                            opacity: 1,
                                            scale: 1.05,
                                            filter: "blur(0px)"
                                        }}

                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 15
                                        }}

                                        className="absolute border border-neutral-200 inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200">
                                        <div className="flex gap-2 p-4 items-center">
                                            <div
                                                className="text-xs text-neutral-600 h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center"
                                            >X
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-[8px] font-bold text-neutral-600">
                                                    Aceternity UI components
                                                </p>
                                                <p className="text-neutral-400 text-[8px] mt-1">
                                                    A collection of UI components
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 p-4 items-center">
                                            <div
                                                className="text-xs text-neutral-600 h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center"
                                            >X
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-[8px] font-bold text-neutral-600">
                                                    24 hours turnaround
                                                </p>
                                                <p className="text-neutral-400 text-[8px] mt-1">
                                                    Super fast delivery at warp speed
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 p-4 items-center">
                                            <div
                                                className="text-xs text-neutral-600 h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center"
                                            >X
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-[8px] font-bold text-neutral-600">
                                                    360 days all around
                                                </p>
                                                <p className="text-neutral-400 text-[8px] mt-1">
                                                    We're here to help you 24/7.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 p-4 items-center">
                                            <div
                                                className="text-xs text-neutral-600 h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center"
                                            >X
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-[8px] font-bold text-neutral-600">
                                                    Some another components
                                                </p>
                                                <p className="text-neutral-400 text-[8px] mt-1">
                                                    Here goes another subtitle
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 p-4 items-center">
                                            <div
                                                className="text-xs text-neutral-600 h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_4px_6px_rgba(34,42,53,0.04),_0_24px_48px_rgba(47,48,55,0.05),_0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center"
                                            >X
                                            </div>
                                            <div className="flex flex-col">
                                                <p className="text-neutral-400 text-[8px] mt-1">
                                                    Create Project
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}