import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

export default function NavBar() {
    const navItems = [
        { title: "Home", href: "/" },
        { title: "Contact", href: "/contact" },
        { title: "Services", href: "/services" },
        { title: "Login", href: "/login" }
    ];

    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="py-40 flex items-center justify-center">
            <nav className="max-w-full mx-auto bg-gray-100 rounded-full px-4 py-1 flex gap-10">
                {navItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="py-2 relative"
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <Link
                            to={item.href}
                            className="relative text-center py-3 px-4 text-sm text-neutral-500 block"
                        >
                            <span className="relative z-10">{item.title}</span>

                            <AnimatePresence>
                                {hovered === idx && (
                                    <motion.div
                                        key={`hover-${idx}`}  // Unique key per element
                                        layoutId="hover"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 rounded-full bg-black/90 z-0"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                            duration: 0.2
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
}