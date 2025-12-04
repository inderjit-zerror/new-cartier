"use client";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const audioRef = useRef();
  const tlRef = useRef(null); // GSAP timeline store
  const [isPlaying, setIsPlaying] = useState(false);

  const t1 = ["T", "I", "M", "E", "L", "E", "S", "S"];
  const t2 = ["D", "E", "S", "I", "G", "N"];
  // -------------------------------------------------------
  const t3 = ["D", "I", "A", "M", "O", "N", "D"];
  const t4 = ["G", "I", "F", "T", "S"];
  // -------------------------------------------------------

  ////////////////////////////////////////////////////////// FUNCTION

  const handleToggleSound = () => {
    if (!isPlaying) {
      audioRef.current.play();
      tlRef.current.play(); // 🔥 Start animation
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      tlRef.current.pause(); // 🔥 Stop animation
      tlRef.current.progress(0); // (optional) Reset wave to small
      gsap.to(".audiowave", {
        height: "3px",
        duration: 0.25,
        ease: "power1.out",
      });
      setIsPlaying(false);
    }
  };

  // PRETEXT_ANIMATION
  const PreTextAnimation = () => {
    gsap.to(".Title1-text-1", {
      y: "0%",
      opacity: 1,
      stagger: 0.1,
      ease: "linear",
      delay: 1,
    });
    gsap.to(".Title1-text-2", {
      y: "0%",
      opacity: 1,
      stagger: 0.1,
      ease: "linear",
      delay: 1.5,
    });
    gsap.to(".Section1Btn", {
      backgroundColor: "white",
      ease: "linear",
      delay: 2,
    });
  };

  ////////////////////////////////////////////////////////// CALL

  // Create GSAP animation only once
  useEffect(() => {
    tlRef.current = gsap.timeline({ repeat: -1, paused: true });

    tlRef.current.to(".audiowave", {
      height: "12px",
      yoyo: true,
      duration: 0.3,
      ease: "power1.inOut",
      stagger: {
        each: 0.1,
        from: "random",
      },
    });
  }, []);

  useEffect(() => {
    PreTextAnimation();
  }, []);

  useEffect(() => {
    // Initialize a new Lenis instance for smooth scrolling
    const lenis = new Lenis();

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      {/* ☑️ Background Music */}
      <audio ref={audioRef} src="/sound/BackgroundSound.mp3" loop />

      {/* ☑️ Audio On/Off Btn */}
      <div
        onClick={handleToggleSound}
        className="w-fit h-fit select-none flex justify-end text-white items-end text-[14px] tracking-tight leading-[14px] gap-[7px] cursor-pointer fixed top-[90%] right-[5%] z-[100] px-[20px]"
      >
        {isPlaying ? "OFF" : "ON"}

        {/* Audio-Waves */}
        <div className="w-fit h-fit flex justify-end items-end gap-[4px]">
          <div className="audiowave w-[2px] h-[3px] bg-white"></div>
          <div className="audiowave w-[2px] h-[3px] bg-white"></div>
          <div className="audiowave w-[2px] h-[3px] bg-white"></div>
          <div className="audiowave w-[2px] h-[3px] bg-white"></div>
        </div>
      </div>

      {/* Text_detail-div-1 */}
      <div className="w-full h-fit fixed top-[75%] left-[0%] px-[4vw] z-[100] tex-1-cont  z-[100]">
        {/* Title-1 */}
        <div className="w-fit h-[35px] flex overflow-hidden">
          {t1.map((item, index) => {
            return (
              <span
                className="Title1-text-1 w-fit h-fit f7  flex text-[35px] leading-[35px] text-white font-bold translate-y-[20%] opacity-0"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>

        {/* Title-2 */}
        <div className="w-fit h-[35px] flex overflow-hidden">
          {t2.map((item, index) => {
            return (
              <span
                className="Title1-text-2 w-fit h-fit f7 flex  text-[35px] leading-[35px] text-white font-bold translate-y-[20%] opacity-0"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>

        {/* BTN-DIV */}
        <div className="w-fit Section1Btn h-fit px-[22px] py-[15px]  border-[1px] border-white mt-[20px]">
          <p className="text-[14px] leading-[14px] f3">SHOP</p>
        </div>
      </div>

      {/* Text_detail-div-2 */}
      <div className="w-full h-fit fixed top-[75%] left-[0%] px-[4vw] z-[100] opacity-0 tex-2-cont z-[100] ">
        {/* Title-1 */}
        <div className="w-fit h-[35px] flex overflow-hidden">
          {t3.map((item, index) => {
            return (
              <span
                className="w-fit h-fit Title2-text-1 f7 text-[35px] flex leading-[35px] text-white font-bold translate-y-[20%] opacity-0"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>

        {/* Title-2 */}
        <div className="w-fit h-[35px] flex overflow-hidden">
          {t4.map((item, index) => {
            return (
              <span
                className="w-fit h-fit Title2-text-2 f7 text-[35px] flex leading-[35px] text-white font-bold translate-y-[20%] opacity-0"
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>

        {/* BTN-DIV */}
        <div className="w-fit Section2Btn h-fit px-[22px] py-[15px]  border-[1px] border-white mt-[20px]">
          <p className="text-[14px] leading-[14px] f3">SHOP</p>
        </div>
      </div>

      {/* ☑️ All Sections */}
      <div className="w-full h-fit relative">
      <HeroSection />
      <SecondSection />
      </div>

      <Footer />
    </>
  );
}
