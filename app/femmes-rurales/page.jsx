"use client";

import COPROMAHeader from "@/components/COPROMAHeader";
import COPROMAFooter from "@/components/COPROMAFooter";
import { Heart, Users, TrendingUp, Award } from "lucide-react";

export default function FemmesRurales() {
  const programs = [
    {
      icon: Heart,
      title: "Formations adaptées",
      desc: "Formations au temps et au contexte des femmes rurales",
    },
    {
      icon: Users,
      title: "Unités de production",
      desc: "Création de petites unités (champignons, escargots, larves, miel)",
    },
    {
      icon: TrendingUp,
      title: "Suivi et coaching",
      desc: "Accompagnement, coaching et appui à la gestion",
    },
    {
      icon: Award,
      title: "Mise en réseau",
      desc: "Connexion avec des partenaires et marchés",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <COPROMAHeader />

      {/* Hero Banner Section - moderne et immersif */}
      <section className="relative h-[60vh]  lg:h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFB300] via-[#FFA000] to-[#FF8F00] dark:from-[#FFA000] dark:via-[#FFC107] dark:to-[#FFB300]">
        {/* Images de fond superposées */}
        <img
          src="https://images.pexels.com/photos/13009244/pexels-photo-13009244.jpeg"
          alt="Femmes rurales"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFB300]/40 via-transparent to-transparent dark:from-[#FFA000]/40" style={{ zIndex: 4 }} />
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
                alt="Femmes rurales"
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
            Autonomisation des femmes rurales
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-2 max-w-2xl animate-fadeInUp">
            Quand une femme rurale gagne en autonomie, c'est toute une communauté qui progresse
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#121212] dark:text-white mb-6">
                Notre engagement
              </h2>
              <div className="space-y-4 text-lg text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                <p>
                  L'un des piliers de COPROMA/RAFAM est l'
                  <strong className="text-[#FFB300]">
                    autonomisation économique des femmes rurales
                  </strong>
                  .
                </p>
                <p>
                  Nous croyons fermement que l'autonomisation des femmes rurales
                  est un levier de développement communautaire. C'est pourquoi
                  nous développons des programmes spécifiques adaptés à leurs
                  besoins et contraintes.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/13009244/pexels-photo-13009244.jpeg"
                alt="Femmes rurales en formation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos programmes - cards glassmorphism, ombres, animations */}
      <section className="bg-[#F5F6F8] dark:bg-[#1E1E1E] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#121212] dark:text-white mb-6">
              Nos programmes
            </h2>
            <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#B3B3B3] max-w-3xl mx-auto">
              Des programmes conçus pour accompagner les femmes rurales vers l'autonomie économique
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-[#222]/90 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border-2 border-[#FFB300] dark:border-[#FFC107] backdrop-blur-xl animate-fadeInUp hover:scale-105 hover:shadow-3xl hover:border-[#FFA000] dark:hover:border-[#FFB300] transition-all duration-300 group"
                style={{ boxShadow: '0 8px 32px rgba(255,179,0,0.12)' }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#FFB300] via-[#FFA000] to-[#FF8F00] dark:from-[#FFC107] dark:via-[#FFB300] dark:to-[#FFA000] rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300 border-4 border-white dark:border-[#222]">
                  <program.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <h3 className="font-extrabold text-xl md:text-2xl text-[#121212] dark:text-white mb-3 tracking-tight group-hover:text-[#FFA000] dark:group-hover:text-[#FFC107] transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#B3B3B3] text-base md:text-lg group-hover:text-[#121212] dark:group-hover:text-white transition-colors duration-300">
                  {program.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - premium */}
      <section className="bg-white dark:bg-[#121212] py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#121212] dark:text-white mb-8">
            Rejoindre un programme
          </h2>
          <p className="text-xl text-[#6E6E6E] dark:text-[#B3B3B3] mb-8 max-w-2xl mx-auto">
            Intéressée par nos programmes dédiés aux femmes rurales ?
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#FFB300] via-[#FFA000] to-[#FF8F00] dark:from-[#FFC107] dark:via-[#FFB300] dark:to-[#FFA000] text-white px-10 py-5 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-transform duration-200"
          >
            Nous contacter
          </a>
        </div>
      </section>

      <COPROMAFooter />
    </div>
  );
}
