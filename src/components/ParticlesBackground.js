import { useMemo, useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesInner = () => {
  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 18,
          },
          repulse: {
            distance: 200,
            duration: 0.18,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.88,
          width: 0.18,
        },
        collisions: {
          enable: false,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 8 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <Particles id="particles-box" className="particles" options={options} />
  );
};

const ParticlesBackground = () => {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <ParticlesProvider init={init}>
      <ParticlesInner />
    </ParticlesProvider>
  );
};

export default ParticlesBackground;
