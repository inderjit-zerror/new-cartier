'use client'
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useEffect } from "react";
import ThirdScene from "@/functions/ThirdScene";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {

    useEffect(() => {
    // Parelex Effect
    gsap.fromTo(
      ".ThirdSectionContainer",
      {
        y: -200,
      },
      {
        y: 200,
        ease: "linear",
        scrollTrigger: {
          trigger: ".ThirdSectionMain",
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
        trigger:'.ThirdSectionMain',
        start:'top 50%',
        end:'top 40%',
        scrub:true,
        // markers:true
      }
     })
     PN1.to('.SecondNavigator',{
      width:'4px',
      height: '4px',
      ease:'linear'
     },'p1')
     PN1.to('.ThirdNavigator',{
      width:'10px',
      height: '10px',
      ease:'linear'
     },'p1')

  },[])




  return (
    <div className="ThirdSectionMain w-full h-screen overflow-hidden flex justify-center items-center">
      <div className=" ThirdSectionContainer w-full h-[200vh] overflow-y-scroll  flex">
        <Canvas dpr={2} gl={{ antialias: true }} className="w-full h-full">
          <Environment
            files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/mirrored_hall_1k.hdr"
            background
          />
          
          <ThirdScene />

          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
            // Allow left-right rotation
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
            // // Lock up-down rotation
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>
    </div>
  )
}

export default ThirdSection
