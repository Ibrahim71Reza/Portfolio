// src/components/Hero.jsx
import { FaGithub, FaYoutube } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center container mx-auto px-6">
            <div className="max-w-3xl">
                {/* No change needed here, 'text-lg' is fine on all screens */}
                <h1 className="text-lg text-green font-mono mb-4">Hi, my name is</h1>

                {/* --- RESPONSIVE UPGRADE --- */}
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-lightest-slate">Md. Ibrahim Reza.</h2>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-slate mt-2">I build things for the web & break them.</h3>
                
                {/* --- END UPGRADE --- */}

                <p className="mt-6 text-lg text-slate max-w-xl">
                    I'm a passionate CSE student and a CTF player, dedicated to making a positive impact through innovative cybersecurity and software solutions.
                </p>
                <div className="mt-8 flex items-center space-x-4">
                    <a href="https://github.com/Ibrahim71Reza" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors duration-300">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.youtube.com/@ibrareza9367" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors duration-300">
                        <FaYoutube size={30} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;