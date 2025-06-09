import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: "Job Employee Management System",
        tech: ["Java"],
        description: "A platform for employers to post job offers and for job seekers to apply. Features include job search filters, resume uploads, application tracking, and employer-employee communication.",
        github: "https://github.com/Ibrahim71Reza", // Replace with actual link
    },
    {
        title: "Food Management System",
        tech: ["TypeScript", "JavaScript", "PL/SQL"],
        description: "A system designed to manage food inventory and order processes for restaurants or cafeterias. Includes stock level updates, order placement, and analytical reports.",
        github: "https://github.com/Ibrahim71Reza", // Replace with actual link
        link: "#", // Replace with actual deployed link if you have one
    },
];

const Projects = () => {
    return (
        <motion.section 
            id="projects" 
            className="py-24 container mx-auto px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-2xl sm:text-3xl font-bold text-lightest-slate mb-8 flex items-center">
                <span className="text-green font-mono mr-3">03.</span> Things I’ve Built
                <span className="flex-grow ml-4 h-px bg-lightest-navy"></span>
            </h2>
            <div className="space-y-12">
                {projects.map((project, i) => (
                    <div key={i} className="bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-2xl font-bold text-lightest-slate hover:text-green transition-colors duration-300">
                                {project.title}
                            </h3>
                            <div className="flex space-x-4">
                                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green"><FaGithub size={24} /></a>}
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green"><FiExternalLink size={24} /></a>}
                            </div>
                        </div>
                        <p className="text-slate mb-4">{project.description}</p>
                        <ul className="flex flex-wrap gap-2">
                            {project.tech.map((t, ti) => (
                                <li key={ti} className="font-mono text-sm text-green bg-navy px-2 py-1 rounded">{t}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;