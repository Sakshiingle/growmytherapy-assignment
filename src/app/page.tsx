"use client";
// Needed because this page runs in the browser

import Image from "next/image";
// Next.js optimized image component

export default function Home() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <nav
        className="
          max-w-7xl
          mx-auto
          px-10
          py-6
          flex
          justify-between
          items-center
        "
      >
        {/* Site name */}
        <h1 className="text-2xl font-serif">Lilac Template</h1>

        {/* Header links as per template */}
        <div className="flex gap-8 text-sm">
          <span>Blog</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section
        className="
          max-w-7xl
          mx-auto
          px-10
          py-20
          flex
          flex-col          /* mobile: stacked */
          md:flex-row       /* desktop: side by side */
          items-center
          gap-16
        "
      >
        {/* LEFT SIDE: Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/Hero.jpg"
            alt="Therapy flower"
            width={600}
            height={600}
            className=" rounded-[300px]    // big oval like template object-cover w-full h-auto"
          />
        </div>

        {/* RIGHT SIDE: Text content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          {/* Main heading */}
          <h2 className="text-5xl font-serif mb-6 leading-tight">
            Live your life
            <br />
            in full bloom
          </h2>

          {/* Subheading */}
          <p className="text-gray-700 mb-8">
            Therapy for Adults in Minneapolis, MN.
          </p>

          {/* Call to action button */}
          <button
            className="
              border
              border-gray-800
              px-8
              py-3
              text-sm
              hover:bg-gray-100
              transition
            "
          >
            CONNECT WITH ME →
          </button>
        </div>
      </section>

      {/* SECTION: Live a fulfilling life */}
      <section
        // Light beige background like the template
        className="bg-[#f4efe9] py-24"
      >
        {/* Centered container with max width */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Text content */}
          <div>
            {/* Section heading */}
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
              Live a fulfilling life.
            </h2>

            {/* First paragraph */}
            <p className="text-lg text-gray-700 mb-4">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            {/* Second paragraph */}
            <p className="text-lg text-gray-700 mb-10">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>

            {/* CTA BUTTON — this was missing before */}
            <button
              className="
          border border-gray-900
          px-8 py-3
          text-sm font-medium
          tracking-wide
          hover:bg-gray-900 hover:text-white
          transition
        "
            >
              GET IN TOUCH →
            </button>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative w-full h-[420px] rounded-lg overflow-hidden">
            <Image
              // Unsplash image URL
              src="https://images.unsplash.com/photo-1506784365847-bbad939e9335"
              alt="Calm lifestyle"
              fill
              // Makes image cover container like template
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
