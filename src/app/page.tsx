import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Vehicles } from "@/components/sections/Vehicles"; // <-- Nouvel import
import { Logistics } from "@/components/sections/Logistics";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stats />
      <Vehicles /> {/* <-- Nouvelle section ici */}
      <Logistics />
      <CallToAction />
    </div>
  );
}