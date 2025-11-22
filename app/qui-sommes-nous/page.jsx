"use client";

import COPROMAHeader from "@/components/COPROMAHeader";
import COPROMAFooter from "@/components/COPROMAFooter";
import { Lightbulb, Users, Award, Leaf } from "lucide-react";

export default function QuiSommesNous() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Développement de filières agro-pastorales innovantes et durables",
    },
    {
      icon: Users,
      title: "Impact social",
      desc: "Autonomisation des femmes rurales et des jeunes producteurs",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Formations de qualité et accompagnement personnalisé",
    },
    {
      icon: Leaf,
      title: "Durabilité",
      desc: "Respect de l'environnement et pratiques agricoles responsables",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <COPROMAHeader />

      {/* Hero Banner Section - images plus visibles */}
      <section className="relative   h-[60vh]   lg:h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#1B5E20] dark:from-[#1B5E20] dark:via-[#388E3C] dark:to-[#121212]">
        {/* Images de fond superposées */}
        <img
          src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg"
          alt="Nature"
          className="absolute left-0 top-0 w-2/5 h-full object-cover opacity-95 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.pexels.com/photos/2382665/pexels-photo-2382665.jpeg"
          alt="Champ"
          className="absolute right-0 bottom-0 w-2/5 h-full object-cover opacity-90 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg"
          alt="Champignons"
          className="absolute left-1/3 top-1/4 w-1/5 h-2/3 object-cover opacity-85 rounded-3xl animate-fadeIn"
          style={{ zIndex: 2 }}
        />
        {/* Overlay glassmorphism très léger */}
        <div className="absolute inset-0 bg-white/5 dark:bg-black/10 backdrop-blur-sm" style={{ zIndex: 3 }} />
        {/* Overlay dégradé premium */}
        <div className="absolute inset-0 bg-linear-to-t from-[#2E7D32]/40 via-transparent to-transparent dark:from-[#1B5E20]/40" style={{ zIndex: 4 }} />
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
        {/* Animations de particules lumineuses */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(18)].map((_, i) => (
            <span
              key={i}
              className={`absolute rounded-full bg-white/30 blur-lg animate-pulse`}
              style={{
                left: `${Math.random() * 90 + 5}%`,
                top: `${Math.random() * 80 + 10}%`,
                width: `${Math.random() * 18 + 8}px`,
                height: `${Math.random() * 18 + 8}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        {/* Contenu principal du banner */}
        <div className="relative z-20 max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-center text-center animate-fadeInUp">
          <div className="flex flex-col items-center gap-4 mb-4">
            <div className="flex -space-x-6">
              <img
                src="https://images.pexels.com/photos/965740/pexels-photo-965740.jpeg"
                alt="Equipe"
                className="w-24 h-24 rounded-full border-4 border-white shadow-2xl object-cover hover:scale-105 transition-transform duration-300 z-10"
                style={{ boxShadow: '0 8px 32px rgba(46,125,50,0.25)' }}
              />
              <img
                src="https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg"
                alt="Champignons"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
              <img
                src="https://images.pexels.com/photos/702935/pexels-photo-702935.jpeg"
                alt="Nature"
                className="w-16 h-16 rounded-full border-4 border-white shadow-lg object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
            </div>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-2xl text-white animate-fadeInUp">
            Qui sommes-nous ?
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-2 max-w-2xl animate-fadeInUp">
            Un centre de compétences agro-pastorales engagé dans le développement de filières innovantes
          </p>
        </div>
      </section>

      {/* Présentation - glassmorphism, animation, image */}
      <section className="relative bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none">
          <img
            src="https://images.pexels.com/photos/1414642/pexels-photo-1414642.jpeg"
            alt="Champignons"
            className="w-1/2 h-full object-cover opacity-10 blur-lg"
          />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="bg-white/80 dark:bg-[#222]/80 rounded-3xl shadow-xl p-8 md:p-12 backdrop-blur-md animate-fadeInUp">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#121212] dark:text-white mb-6">
                Présentation
              </h2>
              <div className="space-y-4 text-lg text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                <p>
                  COPROMA/RAFAM est un centre de compétences agro-pastorales,
                  engagé dans le développement de filières innovantes comme la{' '}
                  <strong className="text-[#2E7D32] dark:text-[#4CAF50]">
                    fossiculture
                  </strong>{' '}
                  (larves d'hannetons) et la{' '}
                  <strong className="text-[#2E7D32] dark:text-[#4CAF50]">
                    myssiculture
                  </strong>{' '}
                  (champignons), ainsi que l'héliciculture et l'apiculture.
                </p>
                <p>
                  Nous intervenons sur toute la chaîne :{' '}
                  <span className="font-semibold text-[#121212] dark:text-white">
                    idée – formation – production – transformation – commercialisation
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="relative animate-fadeInUp">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#2E7D32] dark:border-[#4CAF50]">
                <img
                  src="https://images.pexels.com/photos/1414642/pexels-photo-1414642.jpeg"
                  alt="Équipe COPROMA/RAFAM"
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision et Mission - glassmorphism, animation */}
      <section className="bg-[#F5F6F8] dark:bg-[#1E1E1E] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Vision */}
            <div className="bg-white/80 dark:bg-[#222]/80 p-8 md:p-10 rounded-3xl border border-[#E9E9E9] dark:border-[#333333] hover:border-[#2E7D32] dark:hover:border-[#4CAF50] transition-all duration-300 hover:shadow-2xl backdrop-blur-md animate-fadeInUp">
              <div className="w-16 h-16 bg-[#FFB300] dark:bg-[#FFC107] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl md:text-3xl text-[#121212] dark:text-white mb-4">
                Vision
              </h3>
              <p className="text-lg text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                Devenir une référence nationale et sous-régionale dans le développement de filières agro-pastorales innovantes et durables.
              </p>
            </div>
            {/* Mission */}
            <div className="bg-white/80 dark:bg-[#222]/80 p-8 md:p-10 rounded-3xl border border-[#E9E9E9] dark:border-[#333333] hover:border-[#2E7D32] dark:hover:border-[#4CAF50] transition-all duration-300 hover:shadow-2xl backdrop-blur-md animate-fadeInUp">
              <div className="w-16 h-16 bg-[#2E7D32] dark:bg-[#4CAF50] rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-2xl md:text-3xl text-[#121212] dark:text-white mb-4">
                Mission
              </h3>
              <p className="text-lg text-[#6E6E6E] dark:text-[#B3B3B3] leading-relaxed">
                Former, accompagner et équiper les producteurs, avec une attention particulière aux femmes rurales et aux jeunes, pour faire de l'agriculture et de l'élevage de véritables leviers d'autonomisation et de prospérité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs - animations, glassmorphism */}
      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#121212] dark:text-white mb-6">
              Nos valeurs
            </h2>
            <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#B3B3B3] max-w-3xl mx-auto">
              Les principes qui guident notre action au quotidien
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group animate-fadeInUp">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#4CAF50] dark:from-[#4CAF50] dark:via-[#388E3C] dark:to-[#2E7D32] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl border-4 border-white/60 dark:border-[#222]/60">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-xl text-[#121212] dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-[#6E6E6E] dark:text-[#B3B3B3]">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <COPROMAFooter />
    </div>
  );
}
