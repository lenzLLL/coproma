
// You can add icons from react-icons or similar libraries for more visual appeal
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function COPROMAFooter() {
  return (
    <footer className="relative bg-gradient-to-br from-[#174a1c] via-[#2E7D32] to-[#174a1c] dark:from-[#0D3D0D] dark:via-[#1B5E20] dark:to-[#0D3D0D] text-white overflow-hidden shadow-2xl">
      {/* Animated decorative pattern overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-12 md:pb-20">
        {/* Call-to-action row with enhanced design */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-20 mb-14 md:mb-20">
          {/* Headline with gradient text and subtle animation */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight max-w-[720px] mx-auto lg:mx-0">
              <span className="text-white/90 drop-shadow-lg">
                Transformez votre projet agricole —
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB300] via-[#FFC107] to-[#FFD54F] animate-gradient-x">
                Contactez-nous
              </span>
              <span className="text-white/90"> pour un devis gratuit</span>
            </h2>
          </div>

          {/* Enhanced Circular CTA button with icon and glow */}
          <div className="flex-shrink-0 text-center lg:text-right">
            <div className="inline-block relative group">
              {/* Animated glow effect */}
              <div className="absolute -inset-5 bg-gradient-to-br from-[#FFB300]/40 to-[#FF8F00]/40 rounded-full blur-3xl opacity-70 group-hover:opacity-100 transition-all"></div>

              {/* Outer ring with gradient */}
              <div className="absolute -inset-2 w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-white/10"></div>

              {/* Main button with gradient and icon */}
              <a
                href="/contact"
                className="relative bg-gradient-to-br from-[#FFB300] to-[#FF8F00] w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full text-white font-extrabold text-xl md:text-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FFB300]/60 active:scale-95 flex flex-col items-center justify-center touch-manipulation shadow-xl border-4 border-white/10"
              >
                <FaEnvelope className="mb-2 text-4xl md:text-5xl drop-shadow-lg animate-bounce" />
               <span className="text-sm">Démarrer un projet</span> 
              </a>
            </div>
          </div>
        </div>

        {/* Mega footer navigation with enhanced styling and icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 md:mb-16">
          {/* Column 1 - Menu */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base mb-4 relative inline-block tracking-wide">
              Menu
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FFB300] to-transparent"></span>
            </h3>
            <nav className="space-y-3">
              <a href="/" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                <FaMapMarkerAlt className="text-[#FFB300]" /> Accueil
              </a>
              <a href="/qui-sommes-nous" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                <FaMapMarkerAlt className="text-[#FFB300]" /> Qui sommes-nous ?
              </a>
              <a href="/poles-activite" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                <FaMapMarkerAlt className="text-[#FFB300]" /> Nos pôles d'activité
              </a>
              <a href="/formations" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                <FaMapMarkerAlt className="text-[#FFB300]" /> Formations
              </a>
            </nav>
          </div>

          {/* Column 2 - Nos pôles */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base mb-4 tracking-wide">
              Nos pôles d'activité
            </h3>
            <nav className="space-y-3">
              <a href="/poles-activite#fossiculture" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                🌱 Fossiculture
              </a>
              <a href="/poles-activite#myssiculture" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                🍄 Myssiculture
              </a>
              <a href="/poles-activite#heliciculture" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                🐌 Héliciculture
              </a>
              <a href="/poles-activite#apiculture" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                🐝 Apiculture
              </a>
            </nav>
          </div>

          {/* Column 3 - Ressources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base mb-4 tracking-wide">
              Ressources
            </h3>
            <nav className="space-y-3">
              <a href="/femmes-rurales" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                👩‍🌾 Femmes rurales
              </a>
              <a href="/galerie" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                🖼️ Galerie
              </a>
              <a href="/actualites" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                📰 Actualités
              </a>
              <a href="/contact" className="flex items-center gap-2 text-sm text-white opacity-70 hover:opacity-100 hover:underline transition-all duration-200">
                <FaEnvelope className="text-[#FFB300]" /> Contact
              </a>
            </nav>
          </div>

          {/* Column 4 - Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base mb-4 tracking-wide">
              Localisation & Contact
            </h3>
            <div className="space-y-3 text-sm text-white opacity-70">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#FFB300]" /> <span><strong className="opacity-100">Siège social:</strong> Yaoundé, Quartier Damas</span>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#FFB300]" /> <span><strong className="opacity-100">Fermes:</strong> Sanaga Maritime</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#FFB300]" /> <span>+237 6 99 99 99 99</span>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#FFB300]" /> <span>contact@coproma.com</span>
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook"><FaFacebookF className="text-xl text-[#FFB300]" /></a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram"><FaInstagram className="text-xl text-[#FFB300]" /></a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Twitter"><FaTwitter className="text-xl text-[#FFB300]" /></a>
            </div>
          </div>
        </div>

        {/* Legal bar with gradient border and fade-in */}
        <div className="border-t border-white/10 pt-8 md:pt-10 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Legal links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-4">
              <a href="#" className="text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200">Mentions légales</a>
              <span className="text-xs text-white opacity-70">|</span>
              <a href="#" className="text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200">Confidentialité</a>
              <span className="text-xs text-white opacity-70">|</span>
              <a href="#" className="text-xs text-white opacity-70 hover:opacity-100 transition-all duration-200">Conditions</a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-xs text-white opacity-70">
                © 2024 COPROMA/RAFAM - Valoriser la nature, transformer les vies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
