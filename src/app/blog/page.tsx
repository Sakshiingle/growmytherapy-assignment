"use client";

import Image from "next/image";

export default function BlogPage() {
  return (
    <section className="bg-[#fbf7f1]">
      <div
        className="
          max-w-7xl mx-auto px-10 py-15
          flex flex-col md:flex-row
          items-center gap-18        "
      >
        {/* LEFT — Arch Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <Image
            src="/blog1.jpg"
            alt="Blog hero"
            width={350}
            height={700}
            className="rounded-t-full object-cover"
            priority
          />
        </div>

        {/* RIGHT — Text */}
        <div className="md:w-1/2 w-full text-left">
          <h1 className="text-5xl font-serif text-[#2f3b1f] mb-8">
            The Lilac Blog
          </h1>

          <div className="max-w-md space-y-5 text-[#3f4a2c] leading-relaxed">
            <p>
              My tiny corner of the internet where I talk about all things
              healing, heart, and wholeness.
            </p>

            <p>Glad you’re here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
