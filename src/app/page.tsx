import Image from "next/image";
import { TextGenerateEffectDemo } from './TextGenerateEffectDemo'

export default function Home() {
  return (
    <main className=" h-[50rem] w-full  bg-black  bg-grid-white/[0.1] relative flex items-center justify-center">
       <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
       <TextGenerateEffectDemo />
       </div>
      {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p> */}

   
    </main>
  );
}