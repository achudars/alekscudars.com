import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  // this should be run only once per application lifetime
  useEffect(() => {
    (async () => {
      await initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        await loadFull(engine);
      });
    })();
  }, []);

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
    []
  );

  return (
    <Particles
      id="particles-box"
      className="particles"
      options={options}
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
