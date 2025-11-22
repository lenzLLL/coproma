"use client";

import COPROMAHeader from "@/components/COPROMAHeader";
import COPROMAFooter from "@/components/COPROMAFooter";
import { useState } from "react";
import { Bug, Flower2, Shell, Droplets, Briefcase, Check } from "lucide-react";

export default function Formations() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    domain: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const formations = [
    {
      icon: Bug,
      title: "Fossiculture (larves d'hannetons)",
      duration: "3-5 jours",
      level: "Débutant à avancé",
      color: "bg-[#2E7D32]",
    },
    {
      icon: Flower2,
      title: "Myssiculture (champignons)",
      duration: "5-7 jours",
      level: "Débutant à avancé",
      color: "bg-[#5D4037]",
    },
    {
      icon: Shell,
      title: "Héliciculture (escargots)",
      duration: "4-6 jours",
      level: "Débutant à avancé",
      color: "bg-[#388E3C]",
    },
    {
      icon: Droplets,
      title: "Apiculture (abeilles & miel)",
      duration: "5-7 jours",
      level: "Débutant à avancé",
      color: "bg-[#FFB300]",
    },
    {
      icon: Briefcase,
      title: "Montage de projet et business plan agro-pastoral",
      duration: "3 jours",
      level: "Tous niveaux",
      color: "bg-[#2E7D32]",
    },
  ];

  const advantages = [
    "Formations 100% pratiques sur le terrain",
    "Démonstrations réelles dans nos fermes",
    "Études de cas concrets",
    "Suivi après la formation",
    "Formateurs expérimentés",
    "Certificat de formation",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/training-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitMessage(
        "Votre inscription a été envoyée avec succès ! Nous vous contacterons bientôt.",
      );
      setFormData({ name: "", phone: "", domain: "", message: "" });
    } catch (error) {
      console.error(error);
      setSubmitMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <COPROMAHeader />

      {/* Hero Banner Section - moderne et immersif */}
      <section className="relative h-[60vh] lg:h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#1B5E20] dark:from-[#1B5E20] dark:via-[#388E3C] dark:to-[#121212]">
        {/* Images de fond superposées */}
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
          alt="Formation terrain"
          className="absolute left-0 top-0 w-2/5 h-full object-cover opacity-90 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=1200&q=80"
          alt="Champignons"
          className="absolute right-0 bottom-0 w-2/5 h-full object-cover opacity-80 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
          alt="Escargots"
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
                alt="Formation terrain"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=400&q=80"
                alt="Champignons"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80"
                alt="Escargots"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
            </div>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-2xl text-white animate-fadeInUp">
            Formations & Accompagnement
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-2 max-w-2xl animate-fadeInUp">
            Des formations pratiques et orientées résultats dans nos fermes de production
          </p>
        </div>
      </section>

      {/* Nos formations - cards glassmorphism, ombres, animations */}
      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#121212] dark:text-white mb-6">
              Nos formations
            </h2>
            <p className="text-lg md:text-xl text-[#6E6E6E] dark:text-[#B3B3B3] max-w-3xl mx-auto">
              Nous proposons des formations pratiques dans chacun de nos domaines d'expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-[#222]/80 p-8 rounded-3xl border border-[#E9E9E9] dark:border-[#333333] shadow-xl hover:shadow-2xl backdrop-blur-md transition-all duration-300 animate-fadeInUp flex flex-col items-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${formation.color} rounded-full mb-6 shadow-lg`}>
                  <formation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-[#121212] dark:text-white mb-4 text-center">
                  {formation.title}
                </h3>
                <div className="space-y-2 text-[#6E6E6E] dark:text-[#B3B3B3] text-center">
                  <p>
                    <span className="font-semibold">Durée :</span> {formation.duration}
                  </p>
                  <p>
                    <span className="font-semibold">Niveau :</span> {formation.level}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nos formations */}
      <section className="bg-[#F5F6F8] dark:bg-[#1E1E1E] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#121212] dark:text-white mb-6">
                Pourquoi choisir nos formations ?
              </h2>
              <p className="text-lg text-[#6E6E6E] dark:text-[#B3B3B3] mb-8 leading-relaxed">
                Nos formations se déroulent sur le terrain, dans nos fermes,
                avec démonstrations réelles, études de cas et suivi après la
                session.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#2E7D32] dark:bg-[#4CAF50] rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-[#121212] dark:text-white">
                      {advantage}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/34842217/pexels-photo-34842217.jpeg"
                alt="Formation sur le terrain"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire d'inscription - design élégant glassmorphism */}
      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#121212] dark:text-white mb-6">
              S'inscrire à une formation
            </h2>
            <p className="text-lg text-[#6E6E6E] dark:text-[#B3B3B3]">
              Remplissez le formulaire ci-dessous et nous vous contacterons pour confirmer votre inscription
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 dark:bg-[#222]/80 p-8 md:p-10 rounded-3xl border border-[#E9E9E9] dark:border-[#333333] shadow-xl backdrop-blur-md animate-fadeInUp"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#121212] dark:text-white mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#121212] text-[#121212] dark:text-white focus:outline-none focus:border-[#2E7D32] dark:focus:border-[#4CAF50] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#121212] dark:text-white mb-2"
                >
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#121212] text-[#121212] dark:text-white focus:outline-none focus:border-[#2E7D32] dark:focus:border-[#4CAF50] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="domain"
                  className="block text-sm font-semibold text-[#121212] dark:text-white mb-2"
                >
                  Domaine choisi *
                </label>
                <select
                  id="domain"
                  value={formData.domain}
                  onChange={(e) =>
                    setFormData({ ...formData, domain: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#121212] text-[#121212] dark:text-white focus:outline-none focus:border-[#2E7D32] dark:focus:border-[#4CAF50] transition-colors"
                >
                  <option value="">Sélectionner une formation</option>
                  {formations.map((formation, index) => (
                    <option key={index} value={formation.title}>
                      {formation.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#121212] dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-[#E9E9E9] dark:border-[#333333] bg-white dark:bg-[#121212] text-[#121212] dark:text-white focus:outline-none focus:border-[#2E7D32] dark:focus:border-[#4CAF50] transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#2E7D32] via-[#43A047] to-[#4CAF50] text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
              {submitMessage && (
                <div
                  className={`p-4 rounded-xl ${submitMessage.includes("succès") ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"}`}
                >
                  {submitMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      <COPROMAFooter />
    </div>
  );
}
