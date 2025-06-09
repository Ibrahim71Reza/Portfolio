import { motion } from 'framer-motion';

const Skills = () => {
    const coreConcepts = ["Data Structures & Algorithms", "Object-Oriented Programming", "Computer Networking", "Exploit Development", "Database Management (Oracle)"];
    const technologies = ["Cybersecurity", "Python", "C/C++/C#", "JavaScript", "Web Development", "Penetration Testing", "Blender", "Unreal Engine"];

    return (
        <motion.section 
            id="skills" 
            className="py-24 container mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-8 flex items-center">
                <span className="text-green font-mono mr-3">02.</span> Skills
                <span className="flex-grow ml-4 h-px bg-lightest-navy"></span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-xl font-semibold text-light-slate mb-4">Core Concepts</h3>
                    <ul className="space-y-2">
                        {coreConcepts.map((skill, i) => (
                            <li key={i} className="flex items-center">
                                <span className="text-green mr-3">▹</span>
                                <span className="text-slate">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-light-slate mb-4">Technologies & Expertise</h3>
                    <ul className="space-y-2">
                        {technologies.map((skill, i) => (
                            <li key={i} className="flex items-center">
                                <span className="text-green mr-3">▹</span>
                                <span className="text-slate">{skill}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;