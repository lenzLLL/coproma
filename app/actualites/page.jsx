"use client";

import COPROMAHeader from "@/components/COPROMAHeader";
import COPROMAFooter from "@/components/COPROMAFooter";
import { Calendar, User } from "lucide-react";

export default function Actualites() {
  const articles = [
    {
      title: "Nouvelle formation en fossiculture prévue en janvier 2025",
      excerpt:
        "Nous sommes heureux d'annoncer le lancement d'une nouvelle session de formation en fossiculture. Cette formation intensive de 5 jours aura lieu dans nos fermes de Sanaga Maritime.",
      date: "15 Décembre 2024",
      author: "Équipe COPROMA/RAFAM",
      category: "Formations",
      image:
        "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
    },
    {
      title: "Installation d'une nouvelle unité de myssiculture à Yaoundé",
      excerpt:
        "Dans le cadre de notre programme d'autonomisation des femmes rurales, nous avons accompagné un groupe de 10 femmes dans la mise en place d'une unité de production de champignons.",
      date: "10 Décembre 2024",
      author: "Équipe COPROMA/RAFAM",
      category: "Actualités",
      image:
        "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title:
        "Les larves d'hannetons : une protéine d'avenir pour l'alimentation animale",
      excerpt:
        "Article pédagogique sur l'importance des larves d'hannetons dans la nutrition animale et comment elles peuvent remplacer avantageusement les protéines traditionnelles.",
      date: "5 Décembre 2024",
      author: "Équipe COPROMA/RAFAM",
      category: "Articles",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Témoignage : Marie transforme sa vie grâce à l'héliciculture",
      excerpt:
        "Découvrez le parcours inspirant de Marie, une femme rurale qui a réussi à créer sa propre ferme d'escargots après avoir suivi notre formation.",
      date: "28 Novembre 2024",
      author: "Équipe COPROMA/RAFAM",
      category: "Témoignages",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "L'apiculture moderne : techniques et bonnes pratiques",
      excerpt:
        "Un guide complet sur les techniques modernes d'apiculture et comment maximiser la production de miel tout en respectant les abeilles et l'environnement.",
      date: "20 Novembre 2024",
      author: "Équipe COPROMA/RAFAM",
      category: "Articles",
      image:
        "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg",
    },
    {
      title: "Partenariat avec une coopérative locale pour la distribution",
      excerpt:
        "COPROMA/RAFAM signe un partenariat stratégique avec une coopérative locale pour faciliter la commercialisation des produits de nos bénéficiaires.",
      date: "15 Novembre 2024",
      author: "Équipe COPROMA/RAFAM",
      category: "Actualités",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <COPROMAHeader />

      {/* Hero Banner Section - premium immersif */}
      <section className="relative h-[60vh]   lg:h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAF5] via-[#E8F5E9] to-[#C8E6C9] dark:from-[#1A1F1A] dark:via-[#121212] dark:to-[#1B3A1B]">
        {/* Images de fond superposées */}
        <img
          src="https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg"
          alt="Formation"
          className="absolute left-0 top-0 w-2/5 h-full object-cover opacity-80 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=1200&q=80"
          alt="Champignons"
          className="absolute right-0 bottom-0 w-2/5 h-full object-cover opacity-70 scale-105 animate-fadeIn"
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
              backgroundImage: `linear-gradient(to right, rgba(46,125,50,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(46,125,50,0.12) 1px, transparent 1px)`,
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
                alt="Formation"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=400&q=80"
                alt="Champignons"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
            </div>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] via-[#388E3C] to-[#4CAF50] dark:from-[#4CAF50] dark:via-[#66BB6A] dark:to-[#81C784] animate-fadeInUp">
            Actualités & Blog
          </h1>
          <p className="text-xl md:text-2xl text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed mb-2 max-w-2xl animate-fadeInUp">
            Suivez nos dernières nouvelles, formations et articles pédagogiques
          </p>
        </div>
      </section>

      {/* Cards articles - glassmorphism, ombres, avatars auteur, animations */}
      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-white/90 dark:bg-[#222]/90 rounded-3xl shadow-2xl p-4 flex flex-col items-center text-center border-2 border-[#2E7D32] dark:border-[#4CAF50] backdrop-blur-xl animate-fadeInUp hover:scale-105 hover:shadow-3xl hover:border-[#43A047] dark:hover:border-[#388E3C] transition-all duration-300 group cursor-pointer"
                style={{ boxShadow: '0 8px 32px rgba(46,125,50,0.12)' }}
              >
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#F5F6F8] dark:bg-[#1E1E1E] shadow-lg mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="mb-3 flex items-center justify-center gap-2">
                  <span className="inline-block px-4 py-1 bg-[#2E7D32] dark:bg-[#4CAF50] text-white text-sm font-semibold rounded-full">
                    {article.category}
                  </span>
                  {/* Avatar auteur */}
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(article.author)}`}
                    alt={article.author}
                    className="w-8 h-8 rounded-full border-2 border-[#2E7D32] dark:border-[#4CAF50] shadow-md object-cover"
                  />
                </div>
                <h2 className="font-extrabold text-xl md:text-2xl text-[#121212] dark:text-white mb-3 group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors duration-300 tracking-tight animate-fadeInUp">
                  {article.title}
                </h2>
                <p className="text-[#6E6E6E] dark:text-[#B3B3B3] mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-[#6E6E6E] dark:text-[#B3B3B3]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <COPROMAFooter />
    </div>
  );
}
