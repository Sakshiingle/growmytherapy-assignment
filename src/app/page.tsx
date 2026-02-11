"use client";
// Needed because this page runs in the browser
import Image from "next/image";
// Next.js optimized image component
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#f4efe8]">
        <div className="max-w-7xl mx-auto px-20 py-[25px_0px] flex flex-col md:flex-row items-center gap-0">
          {/* LEFT — Image */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-self-end">
            <div className="rounded-t-full border-3 border-[#350905] shadow-md overflow-hidden transition hover:shadow-xl">
              <Image
                src="/Hero2.jpg"
                alt="Therapy session in Santa Monica"
                width={300}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="md:w-1/2 w-full text-left">
            <h1 className="text-5xl font-heading text-[#350905] leading-tight mb-6">
              Therapy for Anxiety, Trauma & Burnout in Santa Monica
            </h1>

            <p className="text-lg text-[#3e4a2b] max-w-md mb-8">
              Evidence-based, depth-oriented therapy for high-achieving adults
              who feel overwhelmed, stuck, or emotionally exhausted.
            </p>

            <Link
              href="/contact#appointment"
              className="
    inline-block
    border-2 border-[#350905]
    px-8 py-3
    transition
    hover:bg-[#803E39]
    hover:border-[#803E39]
    hover:text-white
  "
            >
              Schedule a Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* About SECTION*/}
      <section
        // Light beige background like the template
        className="bg-[#e8dcc8] py-10"
      >
        {/* Centered container with max width */}
        <div className="max-w-7xl mx-auto px-20 py-0 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Text content */}
          <div>
            {/* Section heading */}
            <h2 className="text-4xl md:text-5xl font-serif text-[#350905] mb-6">
              About Dr.Maya Reynolds
            </h2>

            {/* First paragraph */}
            <p className="text-lg text-black-700 mb-4">
              I’m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults navigating anxiety,
              trauma, burnout, and high internal pressure.
            </p>

            {/* Second paragraph */}
            <p className="text-lg text-black-700 mb-8">
              Many of the people I work with are high-achieving and
              self-aware—but internally feel exhausted, stuck in overthinking,
              or emotionally on edge. My approach is warm, collaborative, and
              grounded. I integrate evidence-based methods including CBT, EMDR,
              mindfulness practices, and body-oriented techniques to address
              both emotional and physiological stress responses. I offer
              in-person therapy from my Santa Monica office and secure
              telehealth sessions throughout California.
            </p>

            <Link
              href="/contact#appointment"
              className="
    inline-block
    border-2 border-[#350905]
    px-4 py-2
    transition
    hover:bg-[#803E39]
    hover:border-[#803E39]
    hover:text-white
  "
            >
              Get In Touch →
            </Link>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              // Unsplash image URL
              src="/About.jpg"
              alt="Calm lifestyle"
              fill
              // Makes image cover container like template
              className="object-cover"
            />
          </div>
        </div>
      </section>

{/* ================= Our SPECIALTIES - DR. MAYA ================= */}
<section
  style={{
    padding: "100px 20px",
    backgroundColor: "#f4efe8",
    textAlign: "center",
  }}
>
  <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
    <h2
      style={{
        fontSize: "clamp(36px, 6vw, 52px)",
        fontWeight: 600,
        color: "#2f3b1f",
        marginBottom: "64px",
        fontFamily: "Lora, serif",
      }}
    >
      Our Specialties
    </h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
        gap: "40px",
      }}
    >
      {/* Specialty 1: Anxiety */}
      <div
        style={{
          padding: "48px 32px",
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#e8dcc8",
            borderRadius: "20px",
            margin: "0 auto 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          🧠
        </div>

        <h3
          style={{
            fontSize: "28px",
            color: "#2f3b1f",
            marginBottom: "16px",
            fontFamily: "Lora, serif",
          }}
        >
          Anxiety & Panic
        </h3>
        <p
          style={{
            fontSize: "18px",
            color: "#5a6a4a",
            lineHeight: 1.6,
            fontFamily: "Inter, sans-serif",
          }}
        >
          CBT and mindfulness for constant worry, tension, overthinking,
          and panic attacks.
        </p>
      </div>

      {/* Specialty 2: Trauma */}
      <div
        style={{
          padding: "48px 32px",
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#e8dcc8",
            borderRadius: "20px",
            margin: "0 auto 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          💔
        </div>

        <h3
          style={{
            fontSize: "28px",
            color: "#2f3b1f",
            marginBottom: "16px",
            fontFamily: "Lora, serif",
          }}
        >
          Trauma Therapy
        </h3>
        <p
          style={{
            fontSize: "18px",
            color: "#5a6a4a",
            lineHeight: 1.6,
            fontFamily: "Inter, sans-serif",
          }}
        >
          EMDR for single-incident trauma and complex patterns from
          childhood or relationships.
        </p>
      </div>

      {/* Specialty 3: Burnout */}
      <div
        style={{
          padding: "48px 32px",
          backgroundColor: "white",
          borderRadius: "24px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundColor: "#e8dcc8",
            borderRadius: "20px",
            margin: "0 auto 8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          🔥
        </div>

        <h3
          style={{
            fontSize: "28px",
            color: "#2f3b1f",
            marginBottom: "16px",
            fontFamily: "Lora, serif",
          }}
        >
          Burnout Recovery
        </h3>
        <p
          style={{
            fontSize: "18px",
            color: "#5a6a4a",
            lineHeight: 1.6,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Support for high-achievers, entrepreneurs, and professionals
          feeling exhausted.
        </p>
      </div>
    </div>
  </div>
</section>

 {/* Service section */}


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

      {/* FAQ SECTION */}
      <section className="bg-[#f7f3ec] py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="rounded-t-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              alt="Decorative flowers"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold mb-8">FAQs</h2>

            <AccordionItem
              title="Do you take insurance?"
              content="I am an out-of-network provider. I’m happy to provide documentation for reimbursement if your plan allows."
            />

            <AccordionItem
              title="What are your rates?"
              content="Sessions are 50 minutes. Please contact me for current rates and availability."
            />

            <AccordionItem
              title="Do you have any openings?"
              content="Availability changes regularly. Please reach out to check current openings."
            />
          </div>
        </div>
      </section>

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

      {/* GET STARTED TODAY SECTION */}
      <section className="bg-[#7a7745] py-28 text-center">
        {/* 
    bg-[#7a7745]  → olive green background (same feel as template)
    py-28        → top & bottom padding (creates height like template)
    text-center  → center align all text
  */}

        <div className="max-w-3xl mx-auto px-6">
          {/* 
      max-w-3xl → keeps content narrow (not full screen wide)
      mx-auto   → centers the block horizontally
      px-6      → side padding for mobile safety
    */}

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            {/* 
        text-4xl / md:text-5xl → responsive heading size
        font-semibold         → strong but soft heading
        text-white            → white text on olive background
        mb-6                  → space below heading
      */}
            Get started today.
          </h2>

          <p className="text-white/90 text-lg leading-relaxed mb-10">
            {/* 
        text-white/90  → slightly softer white for readability
        text-lg        → readable paragraph size
        leading-relaxed→ comfortable line spacing
        mb-10          → space before button
      */}
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-white text-white px-8 py-4 uppercase text-sm tracking-wide hover:bg-white hover:text-[#7a7745] transition"
          >
            {/* 
        inline-flex        → button fits content
        items-center       → vertically center text + arrow
        gap-2              → space between text and arrow
        border border-white→ white outline button
        px-8 py-4          → button size
        uppercase          → matches template style
        tracking-wide      → spaced letters
        hover:bg-white     → hover fill
        hover:text[...]    → olive text on hover
        transition         → smooth hover animation
      */}
            Get in touch →
          </a>
        </div>
      </section>
    </>
  );
}

// Reusable Accordion Item Component
function AccordionItem({ title, content }: { title: string; content: string }) {
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
        <p className="text-sm leading-relaxed pb-4 max-w-xl">{content}</p>
      )}
    </div>
  );
}
