// src/components/ParticlesBackground.jsx

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
const [init, setInit] = useState(false);

useEffect(() => {
    initParticlesEngine(async (engine) => {
    await loadSlim(engine);
    }).then(() => {
    setInit(true);
    });
}, []);

const options = useMemo(
    () => ({
    background: {
        color: {
        value: "#0a192f", // Deep navy background
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
        onHover: {
            enable: true,
            mode: ["grab", "repulse"],
        },
        onClick: {
            enable: true,
            mode: "push",
        },
        },
        modes: {
        grab: {
            distance: 140,
            links: {
            opacity: 0.5,
            },
        },
        repulse: {
            distance: 100,
            duration: 0.4,
        },
        push: {
            quantity: 4,
        },
        },
    },
    particles: {
        color: {
        value: ["#64ffda", "#00f7ff", "#ffffff"], // Multiple colors for vibrancy
        },
        links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
        },
        move: {
        direction: "none", // Random directions
        enable: true,
        outModes: {
            default: "out",
        },
        random: true,
        speed: 1.5,
        straight: false,
        },
        number: {
        value: 120,
        density: {
            enable: true,
            area: 800,
        },
        },
        opacity: {
        value: 0.6,
        animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.2,
            sync: false,
        },
        },
        shape: {
        type: "circle",
        },
        size: {
        value: { min: 1, max: 4 },
        animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
            sync: false,
        },
        },
    },
    detectRetina: true,
    }),
    []
);

return init ? (
    <Particles
    id="tsparticles"
    options={options}
    className="fixed top-0 left-0 w-full h-screen z-0"
    />
) : (
    <></>
);
};

export default ParticlesBackground;
