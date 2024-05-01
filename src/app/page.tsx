"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import cube from "./assets/cube.png";
import cone from "./assets/cone.png";
import deca from "./assets/deca.png";
import iso from "./assets/iso.png";
import ring from "./assets/ring.png"
import { gsap } from "gsap";

export default function Home() {
  const cubeRef = useRef(null);
  const coneRef = useRef(null);
  const decaRef = useRef(null);
  const isoRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cubeRef.current, { scale: 0.5 }, { scale: 1, duration: 1, ease: "power4.out" });
    gsap.fromTo(coneRef.current, { scale: 0 }, { scale: 1, duration: 1, delay: 0.5, ease: "power4.out" });
    gsap.fromTo(decaRef.current, { scale: 0 }, { scale: 1, duration: 1, delay: 1, ease: "power4.out" });
    gsap.fromTo(isoRef.current, { scale: 0 }, { scale: 1, duration: 1, delay: 1.5, ease: "power4.out" });
    gsap.fromTo(ringRef.current, { scale: 0 }, { scale: 1, duration: 1, delay: 2, ease: "power4.out" });
  }, []);

  return (
    <main className="h-[50rem] w-full bg-black bg-grid-white/[0.1] relative flex items-center justify-center">
      <div
        className="absolute inset-0 flex items-center justify-center bg-black"
        style={{ maskImage: "radial-gradient(ellipse at center, transparent 20%, black)" }}
      ></div>
      <Image ref={cubeRef} src={cube} alt="Cube" className="absolute top-0 right-10 z-0 rotate-45" width={300} height={300} />
      <Image ref={coneRef} src={cone} alt="Cone" className="absolute bottom-5 left-10 z-0" width={200} height={200} />
      <Image ref={decaRef} src={deca} alt="deca" className="absolute top-5 left-1 z-0" width={300} height={300} />
      <Image ref={isoRef} src={iso} alt="iso" className="absolute bottom-14 right-15 z-0" width={300} height={200} />
      <Image ref={ringRef} src={ring} alt="ring" className="absolute bottom-0 right-0 z-0" width={400} height={400} />
      <div className="mx-12 flex z-10">
        <TextGenerateEffectDemo />
      </div>
    </main>
  );
}

