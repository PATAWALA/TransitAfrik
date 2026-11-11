"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, ChevronLeft, ChevronRight, Package } from "lucide-react";
import type { Kind } from "@/lib/types";

export function Gallery({ images, title, kind, sold }: { images: string[]; title: string; kind: Kind; sold: boolean }) {
  const [i, setI] = useState(0);

  if (images.length === 0) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-slate-900 text-slate-700 border border-slate-800">
        {kind === "vehicle" ? <Car size={80} /> : <Package size={80} />}
      </div>
    );
  }
  const go = (d: number) => setI((i + d + images.length) % images.length);

  return (
    <div>
      <div className="relative aspect-[4/3] bg-slate-900 border border-slate-800 overflow-hidden">
        <Image
          src={images[i]}
          alt={`${title} — photo ${i + 1}`}
          fill
          priority
          sizes="(min-width:1024px) 60vw, 100vw"
          className={`object-cover ${sold ? "grayscale opacity-70" : ""}`}
        />
        {images.length > 1 && (
          <>
            <button onClick={() => go(-1)} aria-label="Photo précédente" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 hover:bg-brand-red">
              <ChevronLeft />
            </button>
            <button onClick={() => go(1)} aria-label="Photo suivante" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 hover:bg-brand-red">
              <ChevronRight />
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-2 grid grid-cols-5 gap-2 sm:grid-cols-6">
          {images.map((src, idx) => (
            <button
              key={src}
              onClick={() => setI(idx)}
              aria-label={`Voir photo ${idx + 1}`}
              className={`relative aspect-square border ${idx === i ? "border-brand-red" : "border-slate-800 opacity-70 hover:opacity-100"}`}
            >
              <Image src={src} alt="" fill sizes="100px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
