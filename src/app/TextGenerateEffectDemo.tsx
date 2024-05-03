"use client";
import { TextGenerateEffect } from "../app/components/ui/text-generate-effect";
import Image from "next/image";

const words = `Welcome to`;

export function TextGenerateEffectDemo() {
  return (
    <>
      <TextGenerateEffect words={words} />
    </>
  );
}
