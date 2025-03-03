"use client";
import React from "react";

interface VideoSectionProps {
  src: string;
}

export default function VideoSection({ src }: VideoSectionProps) {
  return (
    <section className="w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[500px] object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </section>
  );
}
