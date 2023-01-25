import React from 'react';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function Particle() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          zIndex: '-1',
        },
        // background: {
        //   color: {
        //     value: '#000000',
        //   },
        // },
        fpsLimit: 50,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
              //   parallax: { enable: true, smooth: 1 },
            },

            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          //   links: {
          //     color: '#ffffff',
          //     distance: 200,
          //     enable: true,
          //     opacity: 0.5,
          //     width: 1,
          //   },
          collisions: {
            enable: false,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
