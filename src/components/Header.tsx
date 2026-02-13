'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#f4efe8]">
      <nav className="max-w-7xl mx-auto px-4 md:px-10 py-3 md:py-2.5 flex justify-between items-center relative">
        
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl lg:text-[26px] font-serif text-[#350905] hover:text-[#8a6a3d] transition whitespace-nowrap">
          Dr. Maya Reynolds, PsyD
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-xs lg:text-sm font-serif text-[#350905]">
          <Link href="/blog" className="hover:opacity-70 transition py-1 px-2">Blog</Link>
          <Link href="/contact" className="hover:opacity-70 transition py-1 px-2">Contact</Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className="md:hidden text-[#350905] p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#f4efe8] shadow-lg border-t border-[#d8d2c7] py-4 z-50">
            <div className="flex flex-col gap-3 text-base font-serif text-[#350905] px-6">
              <Link href="/blog" className="hover:opacity-70 transition py-2 px-4 rounded-lg hover:bg-white/50" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link href="/contact" className="hover:opacity-70 transition py-2 px-4 rounded-lg hover:bg-white/50" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
