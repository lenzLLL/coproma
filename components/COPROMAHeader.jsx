"use client";

import { Facebook, Youtube, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function COPROMAHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-linear-to-b from-[#F8FAF5] to-white dark:from-[#1A1F1A] dark:to-[#121212]">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm h-20 border-b-2 border-[#2E7D32]/10 dark:border-[#4CAF50]/20 shadow-lg shadow-[#2E7D32]/5">
        <div className="h-full max-w-[1320px] mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Left Section - Social Icons */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <Link href="/" aria-label="Accueil">
              <img src="/logo2.png" alt="logo" className="h-[100px] cursor-pointer transition-transform hover:scale-105" />
            </Link>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-semibold tracking-tight hover:text-[#2E7D32] dark:hover:text-[#4CAF50] transition-all duration-200 pb-1 relative group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#2E7D32] to-[#4CAF50] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/qui-sommes-nous"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50] transition-all duration-200 pb-1"
            >
              Qui sommes-nous ?
            </Link>
            <Link
              href="/poles-activite"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50] transition-all duration-200 pb-1"
            >
              Nos pôles
            </Link>

            {/* Logo */}
   

            <Link
              href="/formations"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50] transition-all duration-200 pb-1"
            >
              Formations
            </Link>
            <Link
              href="/femmes-rurales"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50] transition-all duration-200 pb-1"
            >
              Femmes rurales
            </Link>
            <Link
              href="/galerie"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50] transition-all duration-200 pb-1"
            >
              Galerie
            </Link>
            <Link
              href="/actualites"
              className="text-[#030303] dark:text-white opacity-80 hover:opacity-100 text-sm font-medium tracking-tight hover:border-b-2 hover:border-[#2E7D32] dark:hover:border-[#4CAF50] transition-all duration-200 pb-1"
            >
              Actualités
            </Link>
          </nav>

          {/* Mobile - Logo and Hamburger */}
          <div className="lg:hidden flex items-center space-x-3 md:space-x-4">
      
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#030303] dark:text-white hover:text-[#2E7D32] dark:hover:text-[#4CAF50] p-2 touch-manipulation transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Right Section - Contact Button */}
          <Link
            href="/contact"
            className="hidden lg:block bg-linear-to-r from-[#2E7D32] via-[#43A047] to-[#4CAF50] dark:from-[#4CAF50] dark:via-[#66BB6A] dark:to-[#81C784] text-white px-8 xl:px-10 py-3 rounded-full font-extrabold text-base shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-0 focus:outline-none focus:ring-2 focus:ring-[#2E7D32] dark:focus:ring-[#4CAF50] animate-fadeInUp"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[70px] left-0 right-0 bg-white dark:bg-[#121212] border-b border-[#E9E9E9] dark:border-[#333333] shadow-lg">
            <nav className="flex flex-col px-6 py-4 space-y-3">
              <Link
                href="/"
                className="text-[#030303] dark:text-white py-2 border-b border-[#E9E9E9] dark:border-[#333333]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                href="/qui-sommes-nous"
                className="text-[#030303] dark:text-white py-2 border-b border-[#E9E9E9] dark:border-[#333333]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Qui sommes-nous ?
              </Link>
              <Link
                href="/poles-activite"
                className="text-[#030303] dark:text-white py-2 border-b border-[#E9E9E9] dark:border-[#333333]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Nos pôles d'activité
              </Link>
              <Link
                href="/formations"
                className="text-[#030303] dark:text-white py-2 border-b border-[#E9E9E9] dark:border-[#333333]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Formations
              </Link>
              <Link
                href="/femmes-rurales"
                className="text-[#030303] dark:text-white py-2 border-b border-[#E9E9E9] dark:border-[#333333]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Femmes rurales
              </Link>
              <Link
                href="/galerie"
                className="text-[#030303] dark:text-white py-2 border-b border-[#E9E9E9] dark:border-[#333333]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Galerie
              </Link>
              <Link
                href="/actualites"
                className="text-[#030303] dark:text-white py-2 border-b border-[#E9E9E9] dark:border-[#333333]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Actualités
              </Link>
              <Link
                href="/contact"
                className="bg-[#2E7D32] text-white px-6 py-3 rounded-full font-semibold text-sm text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
