"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import cube from "./assets/cube.png";
import cone from "./assets/cone.png";
import deca from "./assets/deca.png";
import ring from "./assets/ring.png";
import { gsap } from "gsap";
import { Power4 } from "gsap/dist/gsap";

import logo from "./assets/Logo.png";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const images = [
    { src: logo, alt: "logo", className: "absolute bottom-40 left-1/2 transform -translate-x-1/2", width: 400, height: 400, delay: 0.5 },
    { src: cube, alt: "Cube", className: "absolute top-0 right-10 z-0 rotate-45", width: 300, height: 300 },
    { src: cone, alt: "Cone", className: "absolute bottom-5 left-10 z-0", width: 200, height: 200 },
    { src: deca, alt: "deca", className: "absolute top-2 left-14 z-0 rotate-45", width: 300, height: 300 },
    { src: ring, alt: "ring", className: "absolute bottom-0 right-0 z-0", width: 400, height: 400 },
  ];

  useEffect(() => {
    const preloaderTimeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); // Simulating a 2-second loading time

    return () => clearTimeout(preloaderTimeout);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setIsVisible(true);

      gsap.fromTo(
        ".image-container",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          delay: 3, // Delay before images start appearing
          ease: Power4.easeOut,
        }
      );

      gsap.to(".text", {
        opacity: 1,
        duration: 2,
        delay: 3, // Delay before text appears
        ease: Power4.easeOut,
      });
    }
  }, [isLoaded]);

  return (
    <div className="h-screen w-full bg-black flex items-center justify-center text-white">
      {!isLoaded && <h1 className="">Loading....</h1>}
      <main className={`h-[50rem] w-full bg-black bg-grid-white/[0.1] relative flex items-center justify-center ${isLoaded ? 'block' : 'hidden'}`}>
        <div
          className="absolute inset-0 flex items-center justify-center bg-black"
          style={{ maskImage: "radial-gradient(ellipse at center, transparent 20%, black)" }}
        ></div>
        <div className={`image-container ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {images.map((img, index) => (
            <Image
              key={index}
              src={img.src}
              alt={img.alt}
              className={img.className}
              width={img.width}
              height={img.height}
              style={{ transitionDelay: `${img.delay}s` }} />
          ))}
        </div>
        <div className="mx-12 flex z-10">
          <TextGenerateEffectDemo />
        </div>
      </main>
    </div>
  );
}
