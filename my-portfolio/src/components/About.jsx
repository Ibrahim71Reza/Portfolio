import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.section 
            id="about" 
            className="py-24 container mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-8 flex items-center">
                <span className="text-green font-mono mr-3">01.</span> About Me
                <span className="flex-grow ml-4 h-px bg-lightest-navy"></span>
            </h2>
            <div className="text-slate text-lg max-w-3xl">
                <p className="mb-4">
                    Passionate. Driven. Creative. I thrive on challenges, constantly pushing boundaries to achieve greatness. With a curious mind and a relentless pursuit of knowledge, I'm dedicated to making a positive impact through innovative solutions.
                </p>
                <p className="mb-4">
                    As an undergraduate Computer Science student at the Military Institute of Science & Technology (MIST), I am deeply involved in both software development and cybersecurity. My participation in various CTF (Capture The Flag) contexts like "Leetcon Hack me if you can" and programming contests has sharpened my problem-solving skills and my ability to think like an attacker.
                </p>
            </div>
        </motion.section>
    );
};

export default About;