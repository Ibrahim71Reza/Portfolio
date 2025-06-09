// src/components/Navbar.jsx

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    // Effect to detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { id: 'about', title: '01. About' },
        { id: 'skills', title: '02. Skills' },
        { id: 'projects', title: '03. Projects' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Animation variants for Framer Motion
    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const mobileMenuVariants = {
        opened: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
        closed: { opacity: 0, y: '-100%', transition: { type: 'spring', stiffness: 120, damping: 20 } },
    }

    return (
        <header className={clsx(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            hasScrolled ? "bg-navy/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        )}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo / Initials with a subtle animation */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <RouterLink 
                        to="/" 
                        onClick={handleLinkClick} 
                        className="text-2xl font-bold text-green tracking-wider group"
                    >
                        {"Ibrahim_Reza".split("").map((char, index) => (
                            <span 
                            key={index}
                            className="inline-block transition-all duration-300 ease-in-out group-hover:text-white group-hover:-translate-y-1 animate-breathing-glow group-hover:animate-none"
                            style={{ 
                                transitionDelay: `${index * 30}ms`,
                                animationDelay: `${index * 100}ms` 
                            }}
                        >
                                {char}
                            </span>
                        ))}
                    </RouterLink>
                </motion.div>

                {/* Desktop Menu with Staggered Animation */}
                <motion.ul
                    className="hidden md:flex items-center space-x-8 font-mono"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {navItems.map((item) => (
                        <motion.li key={item.id} variants={itemVariants}>
                            <ScrollLink
                                to={item.id}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                className="text-light-slate hover:text-green cursor-pointer transition-colors duration-300"
                            >
                                {item.title}
                            </ScrollLink>
                        </motion.li>
                    ))}
                    <motion.li variants={itemVariants}>
                        <RouterLink to="/writeups" className="border border-green text-green px-4 py-2 rounded-md hover:bg-green/10 transition-colors duration-300">
                            Writeups
                        </RouterLink>
                    </motion.li>
                </motion.ul>

                {/* Stylish Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-green focus:outline-none z-50 relative p-2">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>

            {/* Animated Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden absolute top-0 left-0 w-full h-screen bg-navy flex flex-col items-center justify-center space-y-8 font-mono"
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="opened"
                        exit="closed"
                    >
                        {navItems.map((item, i) => (
                            <motion.li key={item.id}
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.2 + i * 0.1}}
                                className="list-none"
                            >
                                <ScrollLink
                                    to={item.id}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    onClick={handleLinkClick}
                                    className="text-2xl text-lightest-slate hover:text-green cursor-pointer"
                                >
                                    {item.title}
                                </ScrollLink>
                            </motion.li>
                        ))}
                        <motion.li
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.2 + navItems.length * 0.1}}
                            className="list-none"
                        >
                            <RouterLink to="/writeups" onClick={handleLinkClick} className="border border-green text-green px-6 py-3 rounded-md text-xl hover:bg-green/10">
                                Writeups
                            </RouterLink>
                        </motion.li>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;