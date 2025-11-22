"use client";

import COPROMAHeader from "@/components/COPROMAHeader";
import COPROMAFooter from "@/components/COPROMAFooter";
import { Bug, Flower2, Shell, Droplets, ChevronRight } from "lucide-react";

export default function PolesActivite() {
  const activities = [
    {
      id: "fossiculture",
      icon: Bug,
      title: "Fossiculture",
      subtitle: "Élevage des larves d'hannetons",
      description:
        "La fossiculture chez COPROMA/RAFAM, c'est l'élevage maîtrisé des larves d'hannetons, une source de protéines de haute qualité pour l'alimentation animale (volailles, poissons, porcs, etc.).",
      details:
        "Nous mettons en place des systèmes de production performants : choix des substrats, gestion des box, conduite d'élevage, récolte et conservation des larves.",
      offers: [
        "Production et vente de larves d'hannetons",
        "Mise en place d'unités de fossiculture",
        "Formations pratiques et suivi technique",
        "Conseil pour l'intégration des larves dans les rations alimentaires",
      ],
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      color: "bg-gradient-to-br from-[#2E7D32] to-[#388E3C]",
      darkColor: "dark:from-[#4CAF50] dark:to-[#66BB6A]",
    },
    {
      id: "myssiculture",
      icon: Flower2,
      title: "Myssiculture",
      subtitle: "Culture de champignons",
      description:
        "La myssiculture est la culture de champignons comestibles, un marché en pleine croissance dans l'agroalimentaire.",
      details:
        "COPROMA/RAFAM accompagne les producteurs dans la mise en place de salles de culture, la préparation des substrats, l'ensemencement, l'entretien, la récolte et la commercialisation des champignons.",
      offers: [
        "Production de champignons",
        "Formations pratiques en myssiculture",
        "Appui technique et suivi",
        "Conseil en transformation et vente",
      ],
      image:
        "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=800&q=80",
      color: "bg-gradient-to-br from-[#5D4037] to-[#6D4C41]",
      darkColor: "dark:from-[#795548] dark:to-[#8D6E63]",
    },
    {
      id: "heliciculture",
      icon: Shell,
      title: "Héliciculture",
      subtitle: "Élevage d'escargots",
      description: "L'héliciculture est une filière à forte valeur ajoutée.",
      details:
        "Nous élevons et formons à l'élevage d'escargots de table, depuis la reproduction jusqu'à l'engraissement, avec des méthodes adaptées au contexte local.",
      offers: [
        "Escargots vivants et transformés",
        "Formations sur les parcs d'élevage",
        "Accompagnement à la mise en place de fermes d'escargots",
      ],
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
      color: "bg-gradient-to-br from-[#388E3C] to-[#4CAF50]",
      darkColor: "dark:from-[#66BB6A] dark:to-[#81C784]",
    },
    {
      id: "apiculture",
      icon: Droplets,
      title: "Apiculture",
      subtitle: "Abeilles & miel",
      description:
        "À travers l'apiculture, nous développons des ruchers modernes pour la production de miel et de produits dérivés (cire, propolis…).",
      details:
        "Notre approche combine tradition et modernité pour une production de qualité supérieure.",
      offers: [
        "Mise en place de ruches",
        "Formations en apiculture moderne",
        "Appui à la récolte et au conditionnement du miel",
        "Conseil en commercialisation",
      ],
      image:
        "https://images.pexels.com/photos/928978/pexels-photo-928978.jpeg",
      color: "bg-gradient-to-br from-[#FFB300] to-[#FF8F00]",
      darkColor: "dark:from-[#FFC107] dark:to-[#FFB300]",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <COPROMAHeader />

      {/* Hero Banner Section - moderne et immersif */}
      <section className="relative h-[320px] md:h-[400px] lg:h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#1B5E20] dark:from-[#1B5E20] dark:via-[#388E3C] dark:to-[#121212]">
        {/* Images de fond superposées */}
        <img
          src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1200&q=80"
          alt="Fossiculture"
          className="absolute left-0 top-0 w-2/5 h-full object-cover opacity-90 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=1200&q=80"
          alt="Myssiculture"
          className="absolute right-0 bottom-0 w-2/5 h-full object-cover opacity-80 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
          alt="Héliciculture"
          className="absolute left-1/3 top-1/4 w-1/5 h-2/3 object-cover opacity-70 rounded-3xl animate-fadeIn"
          style={{ zIndex: 2 }}
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
                alt="Myssiculture"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80"
                alt="Héliciculture"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
            </div>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-2xl text-white animate-fadeInUp">
            Nos pôles d'activité
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-2 max-w-2xl animate-fadeInUp">
            Quatre filières innovantes pour transformer l'agriculture
          </p>
        </div>
      </section>

      {/* Activities Sections - cards glassmorphism, ombres, animations */}
      <div className="bg-white dark:bg-[#121212]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
          {activities.map((activity, index) => (
            <section
              key={activity.id}
              id={activity.id}
              className={`rounded-3xl shadow-2xl overflow-hidden bg-white/80 dark:bg-[#222]/80 backdrop-blur-md border border-[#E9E9E9] dark:border-[#333333] hover:shadow-3xl transition-all duration-300 animate-fadeInUp flex flex-col`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 inline-flex items-center justify-center w-16 h-16 bg-white/80 dark:bg-[#222]/80 rounded-full shadow-lg">
                  <activity.icon className="w-8 h-8 text-[#2E7D32] dark:text-[#4CAF50]" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-[#121212] dark:text-white mb-2">
                  {activity.title}
                </h2>
                <p className="text-lg text-[#6E6E6E] dark:text-[#B3B3B3] mb-4">
                  {activity.subtitle}
                </p>
                <div className="space-y-3 mb-6">
                  <p className="text-base text-[#121212] dark:text-white leading-relaxed">
                    {activity.description}
                  </p>
                  <p className="text-base text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                    {activity.details}
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold text-lg text-[#121212] dark:text-white mb-2">
                    Nos offres :
                  </h3>
                  <ul className="space-y-2">
                    {activity.offers.map((offer, offerIndex) => (
                      <li key={offerIndex} className="flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-[#2E7D32] dark:text-[#4CAF50] flex-shrink-0 mt-0.5" />
                        <span className="text-[#121212] dark:text-white text-base">
                          {offer}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-[#2E7D32] via-[#43A047] to-[#4CAF50] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200 self-start"
                >
                  En savoir plus
                </a>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-[#2E7D32] dark:bg-[#1B5E20] text-white py-16 md:py-20">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            Intéressé par l'une de nos filières ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour en savoir plus ou pour démarrer votre propre
            projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-[#2E7D32] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200"
            >
              Demander un devis
            </a>
            <a
              href="/formations"
              className="bg-[#FFB300] dark:bg-[#FFC107] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#FFA000] dark:hover:bg-[#FFB300] active:bg-[#FF8F00] transition-colors duration-200"
            >
              Voir les formations
            </a>
          </div>
        </div>
      </section>

      <COPROMAFooter />
    </div>
  );
}
