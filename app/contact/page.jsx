"use client";

import COPROMAHeader from "@/components/COPROMAHeader";
import COPROMAFooter from "@/components/COPROMAFooter";
import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
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
        "Votre message a été envoyé avec succès ! Nous vous contacterons bientôt.",
      );
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
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

      {/* Hero Banner Section - premium immersif */}
      <section className="relative h-[60vh]  lg:h-[480px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2E7D32] via-[#43A047] to-[#1B5E20] dark:from-[#1B5E20] dark:via-[#388E3C] dark:to-[#121212]">
        {/* Images de fond superposées */}
        <img
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
          alt="Contact"
          className="absolute left-0 top-0 w-2/5 h-full object-cover opacity-90 scale-105 animate-fadeIn"
          style={{ zIndex: 1 }}
        />
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
          alt="Devis"
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
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80"
                alt="Contact"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80"
                alt="Devis"
                className="w-20 h-20 rounded-full border-4 border-white shadow-xl object-cover hover:scale-105 transition-transform duration-300 z-0"
              />
            </div>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 drop-shadow-2xl text-white animate-fadeInUp">
            Contact & Devis
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-2 max-w-2xl animate-fadeInUp">
            Contactez-nous pour toute question ou demande de devis
          </p>
        </div>
      </section>

      {/* Section coordonnées & formulaire - glassmorphism, ombres, avatars, animations, CTA premium */}
      <section className="bg-white dark:bg-[#121212] py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-extrabold text-3xl md:text-4xl text-[#121212] dark:text-white mb-8 animate-fadeInUp">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                {/* Siège social */}
                <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#e8f5e9] via-[#f1f8e9] to-[#c8e6c9] dark:from-[#1B5E20] dark:via-[#222] dark:to-[#388E3C] rounded-3xl shadow-2xl border-2 border-[#2E7D32] dark:border-[#4CAF50] backdrop-blur-xl animate-fadeInUp hover:scale-105 hover:shadow-3xl hover:border-[#43A047] dark:hover:border-[#388E3C] transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E7D32] dark:bg-[#4CAF50] shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#1B5E20] dark:text-[#A5D6A7] mb-2">Siège social</h3>
                    <p className="text-[#388E3C] dark:text-[#C8E6C9] font-semibold">Yaoundé, Quartier Damas</p>
                  </div>
                </div>
                {/* Fermes de production */}
                <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#fff3e0] via-[#ffe0b2] to-[#ffcc80] dark:from-[#795548] dark:via-[#222] dark:to-[#FFC107] rounded-3xl shadow-2xl border-2 border-[#795548] dark:border-[#FFC107] backdrop-blur-xl animate-fadeInUp hover:scale-105 hover:shadow-3xl hover:border-[#A1887F] dark:hover:border-[#FFD54F] transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#795548] dark:bg-[#FFC107] shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#5D4037] dark:text-[#FFD54F] mb-2">Fermes de production</h3>
                    <p className="text-[#A1887F] dark:text-[#FFECB3] font-semibold">Sanaga Maritime</p>
                  </div>
                </div>
                {/* Téléphone / WhatsApp */}
                <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#fffde7] via-[#fff9c4] to-[#fff176] dark:from-[#FFB300] dark:via-[#222] dark:to-[#FFC107] rounded-3xl shadow-2xl border-2 border-[#FFB300] dark:border-[#FFC107] backdrop-blur-xl animate-fadeInUp hover:scale-105 hover:shadow-3xl hover:border-[#FFD54F] dark:hover:border-[#FFECB3] transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FFB300] dark:bg-[#FFC107] shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#FFB300] dark:text-[#FFC107] mb-2">Téléphone / WhatsApp</h3>
                    <p className="text-[#FFD54F] dark:text-[#FFECB3] font-semibold">+237 XXX XXX XXX</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[#e8f5e9] via-[#f1f8e9] to-[#c8e6c9] dark:from-[#1B5E20] dark:via-[#222] dark:to-[#388E3C] rounded-3xl shadow-2xl border-2 border-[#2E7D32] dark:border-[#4CAF50] backdrop-blur-xl animate-fadeInUp hover:scale-105 hover:shadow-3xl hover:border-[#43A047] dark:hover:border-[#388E3C] transition-all duration-300">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2E7D32] dark:bg-[#4CAF50] shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-[#1B5E20] dark:text-[#A5D6A7] mb-2">Email</h3>
                    <p className="text-[#388E3C] dark:text-[#C8E6C9] font-semibold">contact@copromarafam.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-extrabold text-xl text-[#121212] dark:text-white mb-4 animate-fadeInUp">Suivez-nous</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 bg-[#2E7D32] dark:bg-[#4CAF50] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#FFB300] dark:bg-[#FFC107] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div>
              <h2 className="font-extrabold text-3xl md:text-4xl text-[#121212] dark:text-white mb-8 animate-fadeInUp">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#121212] dark:text-white mb-2">Nom complet *</label>
                  <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="w-full px-4 py-3 rounded-xl border-2 border-[#2E7D32] dark:border-[#4CAF50] bg-white/90 dark:bg-[#222]/90 text-[#121212] dark:text-white focus:outline-none focus:border-[#43A047] dark:focus:border-[#388E3C] shadow-lg backdrop-blur-xl transition-all duration-300" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#121212] dark:text-white mb-2">Téléphone *</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className="w-full px-4 py-3 rounded-xl border-2 border-[#FFB300] dark:border-[#FFC107] bg-white/90 dark:bg-[#222]/90 text-[#121212] dark:text-white focus:outline-none focus:border-[#FFD54F] dark:focus:border-[#FFECB3] shadow-lg backdrop-blur-xl transition-all duration-300" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#121212] dark:text-white mb-2">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border-2 border-[#2E7D32] dark:border-[#4CAF50] bg-white/90 dark:bg-[#222]/90 text-[#121212] dark:text-white focus:outline-none focus:border-[#43A047] dark:focus:border-[#388E3C] shadow-lg backdrop-blur-xl transition-all duration-300" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#121212] dark:text-white mb-2">Objet *</label>
                  <input type="text" id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} required className="w-full px-4 py-3 rounded-xl border-2 border-[#2E7D32] dark:border-[#4CAF50] bg-white/90 dark:bg-[#222]/90 text-[#121212] dark:text-white focus:outline-none focus:border-[#43A047] dark:focus:border-[#388E3C] shadow-lg backdrop-blur-xl transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#121212] dark:text-white mb-2">Message *</label>
                  <textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={6} className="w-full px-4 py-3 rounded-xl border-2 border-[#2E7D32] dark:border-[#4CAF50] bg-white/90 dark:bg-[#222]/90 text-[#121212] dark:text-white focus:outline-none focus:border-[#43A047] dark:focus:border-[#388E3C] shadow-lg backdrop-blur-xl transition-all duration-300" />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-[#2E7D32] via-[#43A047] to-[#4CAF50] dark:from-[#4CAF50] dark:via-[#66BB6A] dark:to-[#81C784] text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed animate-fadeInUp">{isSubmitting ? "Envoi en cours..." : "Envoyer le message"}</button>
                {submitMessage && (
                  <div className={`p-4 rounded-xl ${submitMessage.includes("succès") ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"}`}>{submitMessage}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <COPROMAFooter />
    </div>
  );
}
