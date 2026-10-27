import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Vehicles } from "@/components/sections/Vehicles"; {/* <-- Import de la section véhicules */}
import { Logistics } from "@/components/sections/Logistics";
import { CallToAction } from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Le Hero avec image de fond et formulaire */}
      <Hero />
      
      {/* 2. Les 4 chiffres clés (24h, +500...) */}
      <Stats />
      
      {/* 3. LA SECTION DES VÉHICULES (Maritime, Aérien, Routier) */}
      <Vehicles />
      
      {/* 4. Le bloc "Nous gérons tout de A à Z" + les 3 axes (Chine, Dubai, Turquie) */}
      <Logistics />
      
      {/* 5. Le bouton final "Prêt à expédier ?" */}
      <CallToAction />
    </div>
  );
}