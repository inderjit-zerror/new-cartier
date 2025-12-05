"use client";
import SecondScene from "@/functions/SecondScene";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useEffect } from "react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
  useEffect(() => {
    // Parelex Effect
    gsap.fromTo(
      ".SecondSectionContainer",
      {
        y: -200,
      },
      {
        y: 200,
        ease: "linear",
        scrollTrigger: {
          trigger: ".SecondSectionMain",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, []);

  // FOR PAGE NAVIGATOR
  useEffect(()=>{
     const PN1 = gsap.timeline({
      scrollTrigger:{
        trigger:'.SecondSectionMain',
        start:'top 50%',
        end:'top 40%',
        scrub:true,
        // markers:true
      }
     })
     PN1.to('.FirstNavigator',{
      width:'4px',
      height: '4px',
      ease:'linear'
     },'p1')
     PN1.to('.SecondNavigator',{
      width:'10px',
      height: '10px',
      ease:'linear'
     },'p1')

  },[])


  useEffect(() => {
    const SS = gsap.timeline({
      scrollTrigger: {
        trigger: ".SecondSectionMain",
        start: "top bottom",
        end: "top top",
        scrub: true,
        // markers: true,
      },
    });
    SS.to(".tex-1-cont", {
      opacity: 0,
      ease: "none",
    });
    SS.to(".tex-2-cont", {
      opacity: 1,
      ease: "none",
    });
    SS.to(".Title2-text-1", {
      y: "0%",
      opacity: 1,
      stagger: 0.1,
      ease: "linear",
    });
    SS.to(".Title2-text-2", {
      y: "0%",
      opacity: 1,
      stagger: 0.1,
      ease: "linear",
    });
    SS.to(".Section2Btn", {
      backgroundColor: "white",
      ease: "linear",
    });
  }, []);

  return (
    <div className="SecondSectionMain w-full h-screen overflow-hidden flex justify-center items-center">
      <div className=" SecondSectionContainer w-full h-[200vh] overflow-y-scroll  flex">
        <Canvas dpr={2} gl={{ antialias: true }} className="w-full h-full">
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/2k/photo_studio_loft_hall_2k.exr"
            background
          />
          <SecondScene />
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

export default SecondSection;
