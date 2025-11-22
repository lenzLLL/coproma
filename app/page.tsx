"use client";

import COPROMAHeader from "@/components/COPROMAHeader";
import COPROMAFooter from "@/components/COPROMAFooter";
import {
  Sprout,
  GraduationCap,
  Repeat,
  TrendingUp,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80",
      alt: "Fermes de production agricole",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1920&q=80",
      alt: "Culture de champignons",
    },
    {
      image:
        "https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg",
      alt: "Formation agricole",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    setIsVisible(true);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-700">
      <COPROMAHeader />

      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-[#F8FAF5] via-white to-[#E8F5E9] dark:from-[#1A1F1A] dark:via-[#121212] dark:to-[#1B3A1B] overflow-hidden shadow-2xl rounded-b-3xl border-b-4 border-[#2E7D32]/10">
        {/* Animated geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-[#2E7D32]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-[#4CAF50]/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        {/* Animated background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(46, 125, 50, 0.4) 0%, transparent 70%), linear-gradient(rgba(46, 125, 50, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 125, 50, 0.1) 1px, transparent 1px)`,
            backgroundSize: "cover, 60px 60px, 60px 60px",
          }}
        />
        <div className="relative max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 py-16 md:py-24">
            {/* Left Column */}
            <div
              className={`flex-1 text-center md:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#2E7D32]/10 to-[#4CAF50]/10 dark:from-[#4CAF50]/10 dark:to-[#66BB6A]/10 border border-[#2E7D32]/20 dark:border-[#4CAF50]/20 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
                <span className="text-sm font-semibold text-[#2E7D32] dark:text-[#4CAF50]">
                  Leader en agro-pastoral
                </span>
              </div>
              <h1 className="font-bold leading-tight mb-6 md:mb-10">
                <span className="block text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-linear-to-r from-[#2E7D32] via-[#388E3C] to-[#4CAF50] dark:from-[#4CAF50] dark:via-[#66BB6A] dark:to-[#81C784] animate-gradient">
                  COPROMA/RAFAM
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-[#2E7D32] dark:text-[#4CAF50] font-extrabold">
                  L'expertise agro-pastorale
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl mt-2 font-light text-[#6E6E6E] dark:text-[#B3B3B3]">
                  au service de la production et de l'autonomisation des femmes rurales
                </span>
              </h1>
              <p className="font-light text-[#6E6E6E] dark:text-[#B3B3B3] text-lg md:text-xl leading-relaxed max-w-[540px] mb-8 md:mb-12 mx-auto md:mx-0">
                Valoriser la nature, transformer les vies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="/contact"
                  className="group relative font-medium bg-linear-to-r from-[#2E7D32] to-[#388E3C] dark:from-[#4CAF50] dark:to-[#66BB6A] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base hover:shadow-2xl hover:shadow-[#2E7D32]/30 hover:scale-105 active:scale-95 transition-all duration-300 text-center shadow-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Demander un devis
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#1B5E20] to-[#2E7D32] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a
                  href="/formations"
                  className="group relative font-medium bg-linear-to-r from-[#FFB300] to-[#FF8F00] dark:from-[#FFC107] dark:to-[#FFB300] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-sm md:text-base hover:shadow-2xl hover:shadow-[#FFB300]/30 hover:scale-105 active:scale-95 transition-all duration-300 text-center shadow-lg overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    S'inscrire à une formation
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-[#FF8F00] to-[#F57C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
            {/* Right Column - Image Slider */}
            <div
              className={`flex-1 relative max-w-lg w-full transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-linear-to-br from-[#2E7D32]/20 via-[#4CAF50]/20 to-[#66BB6A]/20 dark:from-[#4CAF50]/10 dark:to-[#66BB6A]/10 rounded-[200px] blur-3xl opacity-60"></div>
                <div className="absolute -inset-4 bg-linear-to-tl from-[#388E3C]/30 to-transparent rounded-[160px] blur-2xl"></div>
                <div
                  className="aspect-4/3 overflow-hidden relative shadow-2xl group"
                  style={{ borderRadius: "120px 24px 120px 24px" }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#2E7D32]/40 via-[#2E7D32]/10 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/90 dark:bg-[#121212]/90 rounded-2xl p-4 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-sm font-semibold text-[#2E7D32] dark:text-[#4CAF50]">
                          {slide.alt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-linear-to-r from-[#2E7D32] to-[#4CAF50] w-12 shadow-lg shadow-[#2E7D32]/50" : "bg-gray-300 dark:bg-gray-600 w-2 hover:w-4"}`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s ease infinite;
          }
        `}</style>
      </section>

      {/* Ce que nous faisons */}
      <section className="relative bg-[#F5F6F8] dark:bg-[#1E1E1E] py-16 md:py-24 overflow-hidden shadow-xl rounded-3xl mx-4 md:mx-0 border-2 border-[#2E7D32]/10">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#2E7D32]/20 to-transparent"></div>
        <div className="relative max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#121212] border border-[#E9E9E9] dark:border-[#333333] rounded-full mb-6 shadow-sm">
              <div className="w-2 h-2 bg-linear-to-r from-[#2E7D32] to-[#4CAF50] rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-[#6E6E6E] dark:text-[#B3B3B3] uppercase tracking-wider">
                Nos Services
              </span>
            </div>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              <span className="text-[#121212] dark:text-white">
                Ce que nous{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2E7D32] to-[#4CAF50] dark:from-[#4CAF50] dark:to-[#66BB6A]">
                faisons
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#B3B3B3] max-w-3xl mx-auto leading-relaxed">
              Chez COPROMA/RAFAM, nous transformons les idées en projets
              rentables. Nous accompagnons les particuliers, les jeunes, les
              coopératives et les organisations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                icon: Sprout,
                title: "Produire",
                desc: "Production de larves d'hannetons, champignons, escargots, miel",
                gradient: "from-[#2E7D32] to-[#388E3C]",
                number: "01",
              },
              {
                icon: GraduationCap,
                title: "Se former",
                desc: "Formation technique et pratique sur le terrain",
                gradient: "from-[#5D4037] to-[#6D4C41]",
                number: "02",
              },
              {
                icon: Repeat,
                title: "Transformer",
                desc: "Transformation et valorisation des produits",
                gradient: "from-[#388E3C] to-[#4CAF50]",
                number: "03",
              },
              {
                icon: TrendingUp,
                title: "Réussir",
                desc: "Accompagnement de projets et conseil stratégique",
                gradient: "from-[#FFB300] to-[#FF8F00]",
                number: "04",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-[#121212] p-8 rounded-3xl border-2 border-[#E9E9E9] dark:border-[#333333] hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-[#E9E9E9] dark:text-[#1E1E1E] group-hover:text-[#F5F6F8] dark:group-hover:text-[#2A2A2A] transition-colors duration-500">
                  {item.number}
                </div>
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute -inset-1 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                ></div>
                <div
                  className={`relative w-16 h-16 bg-linear-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                >
                  <item.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="relative font-bold text-xl text-[#121212] dark:text-white mb-3 group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="relative text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                  {item.desc}
                </p>
                <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r from-[#2E7D32] to-[#4CAF50] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>En savoir plus</span>
                  <ArrowRight className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="relative bg-white dark:bg-[#121212] py-16 md:py-24 overflow-hidden shadow-xl rounded-3xl mx-4 md:mx-0 border-2 border-[#4CAF50]/10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-linear-to-br from-[#4CAF50]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-linear-to-tl from-[#2E7D32]/5 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#F5F6F8] to-white dark:from-[#1E1E1E] dark:to-[#121212] border border-[#E9E9E9] dark:border-[#333333] rounded-full shadow-sm">
              <Check className="w-4 h-4 text-[#2E7D32] dark:text-[#4CAF50]" />
              <span className="text-xs font-semibold text-[#6E6E6E] dark:text-[#B3B3B3] uppercase tracking-wider">
                Nos Avantages
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-7">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                <span className="block text-[#121212] dark:text-white">
                  Pourquoi nous{" "}
                </span>
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#2E7D32] via-[#388E3C] to-[#4CAF50] dark:from-[#4CAF50] dark:via-[#66BB6A] dark:to-[#81C784] mt-2">
                  choisir ?
                </span>
                <span className="block text-[#2E7D32] dark:text-[#4CAF50] text-2xl md:text-3xl mt-3">
                  Des résultats concrets
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                Notre expertise de terrain et notre engagement social font de
                nous le partenaire idéal pour vos projets agro-pastoraux.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                text: "Une expertise de terrain : fermes opérationnelles dans la Sanaga Maritime",
                icon: "🏭",
              },
              {
                text: "Des formations 100 % pratiques : démonstrations réelles sur sites de production",
                icon: "🎓",
              },
              {
                text: "Impact social fort : programmes dédiés aux femmes rurales et aux jeunes",
                icon: "💚",
              },
              {
                text: "Accompagnement personnalisé : de l'idée au projet rentable",
                icon: "🚀",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-[#2E7D32] to-[#4CAF50] rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500"></div>
                <div className="relative flex items-start gap-4 p-6 bg-[#F5F6F8] dark:bg-[#1E1E1E] rounded-2xl border border-[#E9E9E9] dark:border-[#333333] group-hover:border-[#2E7D32]/30 dark:group-hover:border-[#4CAF50]/30 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1 cursor-default">
                  <div className="shrink-0 relative">
                    <div className="absolute inset-0 bg-linear-to-br from-[#2E7D32] to-[#4CAF50] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative w-12 h-12 bg-linear-to-br from-[#2E7D32] to-[#388E3C] dark:from-[#4CAF50] dark:to-[#66BB6A] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-[#121212] dark:text-white text-lg leading-relaxed group-hover:text-[#2E7D32] dark:group-hover:text-[#4CAF50] transition-colors duration-300">
                      {item.text}
                    </p>
                    <div className="mt-3 h-1 bg-[#E9E9E9] dark:bg-[#333333] rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-[#2E7D32] to-[#4CAF50] w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>
                  <div className="shrink-0 w-6 h-6 bg-linear-to-br from-[#2E7D32] to-[#4CAF50] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="inline-block relative">
              <div className="absolute -inset-2 bg-linear-to-r from-[#2E7D32] to-[#4CAF50] rounded-full blur-xl opacity-30 animate-pulse"></div>
              <a
                href="/contact"
                className="relative group inline-flex items-center gap-3 bg-linear-to-r from-[#2E7D32] to-[#388E3C] dark:from-[#4CAF50] dark:to-[#66BB6A] text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Démarrer votre projet</span>
                <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-linear-to-r from-[#1B5E20] to-[#2E7D32] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <COPROMAFooter />
    </div>
  );
}