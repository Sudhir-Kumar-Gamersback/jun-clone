"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import cube from "./assets/cube.png";
import cone from "./assets/cone.png";
import deca from "./assets/deca.png";
import iso from "./assets/iso.png";
import ring from "./assets/ring.png";
import { gsap } from "gsap";
import { Power4 } from "gsap/dist/gsap";

export default function Home() {
  const images = [
    { ref: useRef(null), src: cube, alt: "Cube", className: "absolute top-0 right-10 z-0 rotate-45", width: 300, height: 300, delay: 0 },
    { ref: useRef(null), src: cone, alt: "Cone", className: "absolute bottom-5 left-10 z-0", width: 200, height: 200, delay: 0.5 },
    { ref: useRef(null), src: deca, alt: "deca", className: "absolute top-2 left-14 z-0 rotate-45", width: 500, height: 300, delay: 1 },
    { ref: useRef(null), src: iso, alt: "iso", className: "absolute bottom-14 right-15 z-0", width: 300, height: 200, delay: 1.5 },
    { ref: useRef(null), src: ring, alt: "ring", className: "absolute bottom-0 right-0 z-0", width: 400, height: 400, delay: 2 },
  ];

  useEffect(() => {
    images.forEach((img) => {
      gsap.set(img.ref.current, { scale: 0.1, opacity: 0 });
      gsap.to(img.ref.current, {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        delay: img.delay,
        ease: Power4.easeOut,
      });
    });
  }, []);
  return (
    <main className="h-[50rem] w-full bg-black bg-grid-white/[0.1] relative flex items-center justify-center">
      <div
        className="absolute inset-0 flex items-center justify-center bg-black"
        style={{ maskImage: "radial-gradient(ellipse at center, transparent 20%, black)" }}
      ></div>
      {images.map((img, index) => (
        <Image
          key={index}
          ref={img.ref}
          src={img.src}
          alt={img.alt}
          className={img.className}
          width={img.width}
          height={img.height}
        />
      ))}
      <div className="mx-12 flex z-10">
        <TextGenerateEffectDemo />
      </div>
    </main>
  );
}
