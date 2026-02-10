"use client";
// Needed because this page runs in the browser

import Image from "next/image";
// Next.js optimized image component
import { useState } from "react";


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

      {/* SECTION: My Specialties */}
      <section
        // Same light background used in the template
        className="bg-[#f6f1eb] py-24"
      >
        {/* Main container to center content */}
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <h2
            // Large serif heading centered
            className="text-4xl md:text-5xl font-serif text-center text-[#2f3e2f] mb-16"
          >
            My Specialties
          </h2>

          {/* 3-column layout for cards */}
          <div className="grid md:grid-cols-3 gap-10">
            {/* CARD 1 */}
            <div className="border border-[#2f3e2f] p-8 flex flex-col">
              {/* Card title */}
              <h3 className="text-xl font-semibold text-[#2f3e2f] mb-4">
                Self-Esteem
              </h3>

              {/* Card description */}
              <p className="text-gray-700 mb-10">
                Building a strong sense of self-worth is key to living a
                fulfilled life. Let's work together to bolster your self-esteem.
              </p>

              {/* Circular image */}
              <div className="mt-auto flex justify-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70"
                    alt="Self-esteem support"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="border border-[#2f3e2f] p-8 flex flex-col">
              <h3 className="text-xl font-semibold text-[#2f3e2f] mb-4">
                Relationships
              </h3>

              <p className="text-gray-700 mb-10">
                Navigating relationships can be complex. I'm here to guide you
                through these complexities to help you form healthier
                connections.
              </p>

              <div className="mt-auto flex justify-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                    alt="Relationships therapy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="border border-[#2f3e2f] p-8 flex flex-col">
              <h3 className="text-xl font-semibold text-[#2f3e2f] mb-4">
                Burnout
              </h3>

              <p className="text-gray-700 mb-10">
                Feeling overwhelmed by your career is more common than you
                think. Together, we'll identify strategies to manage and prevent
                burnout.
              </p>

              <div className="mt-auto flex justify-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                    alt="Burnout recovery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION — You don’t have to do this alone */}
      <section className="bg-[#d6d3db] py-24">
        {/* Wrapper to keep content centered */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          {/* LEFT: Image */}
          <div className="md:w-1/2 w-full">
            <Image
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
              alt="Person finding calm"
              width={600}
              height={700}
              className="rounded-lg object-cover"
            />
          </div>

          {/* RIGHT: Text Content */}
          <div className="md:w-1/2 w-full text-gray-800">
            {/* Section heading */}
            <h2 className="text-4xl font-serif font-bold mb-6">
              You don’t have to do this all alone.
            </h2>

            {/* Intro line */}
            <p className="mb-6">
              If you are facing any of these, there’s hope:
            </p>

            {/* Bullet list */}
            <ul className="space-y-3 mb-8 list-disc list-inside">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>

            {/* Supporting text */}
            <p className="mb-8">
              With empathy and guidance, we’ll work together to navigate the
              challenges life throws your way.
            </p>

            {/* CTA button */}
            <button className="border border-gray-800 px-8 py-3 uppercase text-sm tracking-wide hover:bg-gray-800 hover:text-white transition">
              Work with me →
            </button>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION — Hi, I’m Lilac */}
      <section className="bg-[#f6f1ea] py-24">
        {/* Centered container */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
          {/* LEFT SIDE — Text */}
          <div className="md:w-1/2 w-full text-gray-800">
            {/* Section heading */}
            <h2 className="text-4xl font-serif font-bold mb-6">
              Hi, I’m Lilac.
            </h2>

            {/* Paragraph text */}
            <p className="mb-8 leading-relaxed max-w-lg">
              I'm committed to providing a safe and supportive environment where
              we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            {/* CTA button */}
            <button className="border border-gray-800 px-8 py-3 uppercase text-sm tracking-wide hover:bg-gray-800 hover:text-white transition">
              Let’s chat →
            </button>
          </div>

          {/* RIGHT SIDE — Images */}
          <div className="md:w-1/2 w-full relative flex justify-center">
            {/* Main tall image */}
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Therapist portrait"
              width={420}
              height={600}
              className="rounded-t-full object-cover"
            />

            {/* Small circular overlay image */}
            <Image
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Flowers detail"
              width={220}
              height={220}
              className="rounded-full absolute bottom-0 -right-6 border-8 border-[#f6f1ea]"
            />
          </div>
        </div>
      </section>
    {/* ================= FAQ SECTION ================= */}
<section className="bg-[#faf7f2] py-24">
  <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE IMAGE */}
    <div className="flex justify-center">
      {/* Image container with rounded top like template */}
      <div className="w-[320px] h-[420px] rounded-t-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
          alt="Calm flowers"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT SIDE FAQ CONTENT */}
    <div>
      {/* FAQ Heading */}
      <h2 className="font-serif text-4xl text-[#2f3a1f] mb-10">
        FAQs
      </h2>

      {/* FAQ ITEM */}
      <div className="border-t border-[#2f3a1f] py-6 flex justify-between items-center">
        <p className="text-lg font-medium">Do you take insurance?</p>
        <span className="text-2xl">+</span>
      </div>

      {/* FAQ ITEM */}
      <div className="border-t border-[#2f3a1f] py-6 flex justify-between items-center">
        <p className="text-lg font-medium">What are your rates?</p>
        <span className="text-2xl">+</span>
      </div>

      {/* FAQ ITEM */}
      <div className="border-t border-b border-[#2f3a1f] py-6 flex justify-between items-center">
        <p className="text-lg font-medium">Do you have any openings?</p>
        <span className="text-2xl">+</span>
      </div>
    </div>

  </div>
</section>
{/* ================= END FAQ SECTION ================= */}


{/* PROFESSIONAL BACKGROUND SECTION */}
<section className="bg-[#e9e4dc] py-20">
  <div className="max-w-4xl mx-auto px-6">

    {/* Section Title */}
    <h2 className="text-4xl font-semibold text-center mb-12">
      My Professional Background
    </h2>

    {/* Accordion Item: Education */}
    <AccordionItem
      title="Education"
      content="Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea."
    />

    {/* Accordion Item: Licensure */}
    <AccordionItem
      title="Licensure"
      content="Licensed Clinical Psychologist (PsyD). State licensure details and regulatory compliance information."
    />

    {/* Accordion Item: Certifications */}
    <AccordionItem
      title="Certifications"
      content="CBT, EMDR, Mindfulness-based therapy certifications."
    />

  </div>
</section>



    </>
  );
}


// Reusable Accordion Item Component
function AccordionItem({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  // Tracks whether section is open or closed
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-gray-400">
      {/* Clickable header */}
      <button
        onClick={() => setOpen(!open)} // toggle open/close
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-xl">{title}</span>
        <span className="text-2xl">{open ? "−" : "+"}</span>
      </button>

      {/* Content shown only when open */}
      {open && (
        <p className="text-sm leading-relaxed pb-4 max-w-xl">
          {content}
        </p>
      )}
    </div>
  );
}
