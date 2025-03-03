"use client";
import Image from "next/image";

export default function ImageSection({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="w-full py-8 flex justify-center">
      <Image src={src} alt={alt} width={800} height={450} className="rounded-lg shadow-lg object-cover" />
    </section>
  );
}
