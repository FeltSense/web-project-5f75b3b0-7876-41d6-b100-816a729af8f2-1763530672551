'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-950/95 to-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10">
  <div className="max-w-7xl mx-auto px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo/Brand */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <div className="hidden sm:block">
          <h1 className="text-lg font-bold text-white tracking-tight">Retail Business</h1>
          <p className="text-xs text-cyan-400/70 -mt-1">Intelligence Platform</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-cyan-500/30">
          Home
        </Link>
        <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-cyan-500/30">
          About
        </a>
        <a href="#portfolio" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 border border-transparent hover:border-cyan-500/30">
          Portfolio
        </a>
      </div>

      {/* CTA Button + Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        <button className="hidden sm:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
          <span>Get Started</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation - Hidden by default, shown when menu is active */}
    <div className="hidden md:hidden mt-4 pt-4 border-t border-cyan-500/10 space-y-2">
      <Link href="/" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200">
        Home
      </Link>
      <a href="#about" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200">
        About
      </a>
      <a href="#portfolio" className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200">
        Portfolio
      </a>
      <button className="w-full mt-4 px-5 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
        Get Started
      </button>
    </div>
  </div>

  {/* Subtle animated gradient line */}
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
</nav>
  );
}