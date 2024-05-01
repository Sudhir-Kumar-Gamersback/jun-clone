"use client";
import { TextGenerateEffect } from "../app/components/ui/text-generate-effect";

const words = `And to turn ideas into reality\nWe all work together with this in mind`;

export function TextGenerateEffectDemo() {
  return (
    <>
      <TextGenerateEffect words={words} />
    </>
  );
}
