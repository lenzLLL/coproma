"use client";

import COPROMAHeader from "@/components/COPROMAHeader";
import COPROMAFooter from "@/components/COPROMAFooter";
import { useState } from "react";

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState("tous");

  const categories = [
    { id: "tous", label: "Tous" },
    { id: "fossiculture", label: "Fossiculture" },
    { id: "myssiculture", label: "Myssiculture" },
    { id: "heliciculture", label: "Héliciculture" },
    { id: "apiculture", label: "Apiculture" },
    { id: "formations", label: "Formations" },
  ];

  const images = [
    {
      category: "fossiculture",
      url: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      title: "Boxs de larves d'hannetons",
    },
    {
      category: "myssiculture",
      url: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=800&q=80",
      title: "Unités de champignons",
    },
    {
      category: "heliciculture",
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
      title: "Escargotières",
    },
    {
      category: "apiculture",
      url: "https://images.unsplash.com/photo-1587049352846-4a222e784dfd?auto=format&fit=crop&w=800&q=80",
      title: "Ruchers modernes",
    },
    {
      category: "formations",
      url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      title: "Formation sur le terrain",
    },
    {
      category: "formations",
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      title: "Groupe de participants",
    },
    {
      category: "fossiculture",
      url: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
      title: "Production de larves",
    },
    {
      category: "myssiculture",
      url: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=800&q=80",
      title: "Récolte de champignons",
    },
    {
      category: "apiculture",
      url: "https://images.unsplash.com/photo-1587049352846-4a222e784dfd?auto=format&fit=crop&w=800&q=80",
      title: "Production de miel",
    },
  ];

  const filteredImages =
    selectedCategory === "tous"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <COPROMAHeader />

      {/* Hero Banner Section - moderne et immersif */}
      <section className="relative h-[60vh]   lg:h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#1B5E20] dark:from-[#1B5E20] dark:via-[#388E3C] dark:to-[#121212]">
        {/* Images de fond superposées */}
        <img
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80"
          alt="Fossiculture"
          className="absolute left-0 top-0 w-2/5 h-full object-cover opacity-90 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=1200&q=80"
          alt="Champignons"
          className="absolute right-0 bottom-0 w-2/5 h-full object-cover opacity-80 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        {/* Overlay glassmorphism très léger */}
        <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-sm" style={{ zIndex: 3 }} />
        {/* Overlay dégradé premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E7D32]/40 via-transparent to-transparent dark:from-[#1B5E20]/40" style={{ zIndex: 4 }} />
        {/* Motif quadrillage */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ zIndex: 5 }}>
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        {/* Contenu principal du banner */}
        <div className="relative z-20 max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-center text-center animate-fadeInUp">
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="flex -space-x-6">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80"
                alt="Fossiculture"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=400&q=80"
                alt="Champignons"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
            </div>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-2xl text-white animate-fadeInUp">
            Galerie
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-2 max-w-2xl animate-fadeInUp">
            Découvrez nos fermes, nos formations et nos productions en images
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-[#2E7D32] dark:bg-[#4CAF50] text-white"
                    : "bg-[#F5F6F8] dark:bg-[#1E1E1E] text-[#121212] dark:text-white hover:bg-[#E9E9E9] dark:hover:bg-[#333333]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid - cards glassmorphism, ombres, animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-[#222]/90 rounded-3xl shadow-2xl p-4 flex flex-col items-center text-center border-2 border-[#2E7D32] dark:border-[#4CAF50] backdrop-blur-xl animate-fadeInUp hover:scale-105 hover:shadow-3xl hover:border-[#43A047] dark:hover:border-[#388E3C] transition-all duration-300 group cursor-pointer"
                style={{ boxShadow: '0 8px 32px rgba(46,125,50,0.12)' }}
              >
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F5F6F8] dark:bg-[#1E1E1E] shadow-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="mt-4 font-extrabold text-lg md:text-xl text-[#121212] dark:text-white group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors duration-300 tracking-tight">
                  {image.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <COPROMAFooter />
    </div>
  );
}
