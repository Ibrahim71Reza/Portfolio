// src/pages/Home.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
    return (
        <>
            <ParticlesBackground />

            {/* This new wrapper lifts all content above the particles */}
            <div className="relative z-10">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                </main>
            </div>
        </>
    );
};

export default Home;