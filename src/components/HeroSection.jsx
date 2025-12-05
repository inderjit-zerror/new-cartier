"use client";
import Scene from "@/functions/Scene";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  useEffect(() => {
    // Parelex Effect
    gsap.fromTo(
      ".HeroSectionContainer",
      {
        y: -200,
      },
      {
        y: 200,
        ease: "linear",
        scrollTrigger: {
          trigger: ".HeroSectionMain",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );

    if (window.innerWidth <= 1024) return;
    else {
      gsap.to(".MainNavBarCont", {
        top: "-70px",
        ease: "linear",

        scrollTrigger: {
          trigger: ".HeroSectionMain",
          start: "top -2%",
          end: " top -7%",
          scrub: true,
          // markers: true,
        },
      });
    }
  }, []);

  return (
    <div className="HeroSectionMain w-full h-screen overflow-hidden flex justify-center items-center relative">
      <div className="HeroSectionContainer w-full h-[200vh] overflow-y-scroll  flex ">
        <Canvas dpr={2} gl={{ antialias: true }} className="w-full h-full">
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/christmas_photo_studio_07_2k.exr"
            background
          />
          <Scene />
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
            // Allow left-right rotation
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
            // Lock up-down rotation
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default HeroSection;
