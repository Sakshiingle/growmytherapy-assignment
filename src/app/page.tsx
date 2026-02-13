"use client";
// Needed because this page runs in the browser
import Image from "next/image";
// Next.js optimized image component
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const testimonials = [
    {
      quote:
        "Working with Dr. Maya helped me understand my anxiety in a way I never had before. I feel more grounded and less reactive in my daily life.",
      author: "Client, Santa Monica",
    },
    {
      quote:
        "I came in feeling burned out and constantly overwhelmed. Therapy became the one place where I could slow down and reconnect with myself.",
      author: "Professional Client",
    },
    {
      quote:
        "The combination of practical tools and deeper work made a real difference. I finally feel like I’m responding to life instead of bracing for it.",
      author: "Telehealth Client, CA",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
     {/* HERO - Desktop exact + mobile fixed */}
{/* HERO - Mobile image top + desktop left */}
<section className="bg-[#f4efe8] py-8 md:py-6.25 px-4 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
    
    {/* IMAGE - Mobile top, desktop right */}
    <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-self-end">
      <div className="rounded-t-full border-3 border-[#350905] shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
        <Image
          src="/hero2.jpg"
          alt="Therapy session in Santa Monica"
          width={300}
          height={500}
          className="w-full h-70 md:h-100 lg:h-125 object-cover"
          priority
        />
      </div>
    </div>

    {/* CONTENT - Mobile below image, desktop left */}
    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left px-2 lg:px-0">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[#350905] leading-tight mb-4 md:mb-6">
        Therapy for Anxiety, Trauma & Burnout in Santa Monica
      </h1>

      <p className="text-base md:text-lg text-[#3e4a2b] max-w-md mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed">
        Evidence-based, depth-oriented therapy for high-achieving adults
        who feel overwhelmed, stuck, or emotionally exhausted.
      </p>

      <Link
        href="/contact#appointment"
        className="
          inline-block
          border-2 border-[#350905]
          px-6 py-3 md:px-8 md:py-3.75
          font-medium text-[#350905]
          hover:bg-[#803E39] hover:border-[#803E39] hover:text-white
          active:bg-[#6b3d32]
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-4 focus:ring-[#350905]/20
          rounded-lg shadow-md hover:shadow-lg
          whitespace-nowrap
        "
      >
        Schedule a Consultation →
      </Link>
    </div>
  </div>
</section>

      {/* About SECTION - Desktop exact + mobile */}
<section className="bg-[#f4f1e3] py-12 md:py-20 px-4 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
    
    {/* LEFT SIDE: Text content */}
    <div className="order-2 lg:order-1 text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-serif font-semibold text-[#350905] mb-4 md:mb-6 leading-tight">
        About Dr. Maya Reynolds
      </h2>

      <p className="text-base md:text-lg text-[#2f3b1f] mb-3 md:mb-4 leading-relaxed">
        I'm a licensed clinical psychologist based in Santa Monica,
        California, offering therapy for adults navigating anxiety,
        trauma, burnout, and high internal pressure.
      </p>

      <p className="text-base md:text-lg text-[#2f3b1f] mb-6 md:mb-8 leading-relaxed">
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
          inline-block border-2 border-[#350905]
          px-6 py-3 md:px-8 md:py-3.75
          font-medium text-[#350905]
          hover:bg-[#803E39] hover:border-[#803E39] hover:text-white
          transition-all duration-300 ease-in-out shadow-md hover:shadow-lg
          rounded-lg whitespace-nowrap
        "
      >
        Get In Touch →
      </Link>
    </div>

    {/* RIGHT SIDE: Image */}
    <div className="order-1 lg:order-2 w-full h-75 md:h-100 lg:h-125 relative rounded-lg overflow-hidden mx-auto lg:mx-0 shadow-xl">
      <Image
        src="about.jpg"
        alt="Dr. Maya Reynolds"
        fill
        className="object-cover hover:scale-105 transition-all duration-500"
        priority
      />
    </div>
  </div>
</section>


 {/* Specialties - 3 cols tablet/iPad + mobile 1 col */}
<section className="bg-[#f4efe8] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-serif font-semibold text-[#350905] text-center mb-8 md:mb-12 lg:mb-14 leading-tight">
      Our Specialties
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
      
      {/* Anxiety */}
      <div className="p-6 md:p-8 lg:p-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-[#e8dcc8] rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl md:text-3xl lg:text-[32px]">
          🧠
        </div>
        <h3 className="text-xl md:text-2xl lg:text-[28px] font-serif text-[#2f3b1f] mb-3 md:mb-4 leading-tight">
          Anxiety & Panic
        </h3>
        <p className="text-sm md:text-base lg:text-[18px] text-[#5a6a4a] leading-relaxed">
          CBT and mindfulness for constant worry, tension, overthinking,
          and panic attacks.
        </p>
      </div>

      {/* Trauma */}
      <div className="p-6 md:p-8 lg:p-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-[#e8dcc8] rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl md:text-3xl lg:text-[32px]">
          💔
        </div>
        <h3 className="text-xl md:text-2xl lg:text-[28px] font-serif text-[#2f3b1f] mb-3 md:mb-4 leading-tight">
          Trauma Therapy
        </h3>
        <p className="text-sm md:text-base lg:text-[18px] text-[#5a6a4a] leading-relaxed">
          EMDR for single-incident trauma and complex patterns from
          childhood or relationships.
        </p>
      </div>

      {/* Burnout */}
      <div className="p-6 md:p-8 lg:p-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-[#e8dcc8] rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl md:text-3xl lg:text-[32px]">
          🔥
        </div>
        <h3 className="text-xl md:text-2xl lg:text-[28px] font-serif text-[#2f3b1f] mb-3 md:mb-4 leading-tight">
          Burnout Recovery
        </h3>
        <p className="text-sm md:text-base lg:text-[18px] text-[#5a6a4a] leading-relaxed">
          Support for high-achievers, entrepreneurs, and professionals
          feeling exhausted.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Service section: How I Can Support You - 4 Services*/}
      <section className="bg-[#f5f1ea] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
  <div className="max-w-6xl mx-auto">

          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-7xl md:text-5xl font-serif font-semibold text-[#350905] mb-6">
              How I Can Support You
            </h2>
            <p className="text-lg text-[#350905] max-w-2xl mx-auto leading-relaxed">
              Support that is practical, grounded, and tailored to your unique
              experience.
            </p>
          </div>

          {/* SERVICE 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <img
              src="/therapy1.jpg"
              alt="Anxiety Therapy Session"
              className="rounded-xl shadow-md w-full h-96 md:h-100 object-cover"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2f3b1f] mb-4 tracking-tight">
                Anxiety & Emotional Regulation
              </h3>
              <p className="text-[#1f1f1f] mb-6 leading-relaxed">
                For professionals who feel constantly on edge, overthink
                everything, or struggle to slow their mind. Together, we reduce
                panic, physical tension, and chronic worry while building
                practical tools for emotional balance.
              </p>
              <a
                href="/blog"
                className="text-[#6b4c3b] hover:underline font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* SERVICE 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2f3b1f] mb-4 tracking-tight">
                Trauma & Somatic Healing
              </h3>
              <p className="text-[#1f1f1f] mb-6 leading-relaxed">
                For adults carrying the impact of past experiences that still
                affect relationships, confidence, or sense of safety. We
                integrate EMDR and body-based approaches to gently process
                trauma while strengthening nervous system regulation.
              </p>
              <a
                href="/blog"
                className="text-[#6b4c3b] hover:underline font-medium"
              >
                Learn More →
              </a>
            </div>
            <img
              src="/therapy2.jpg"
              alt="Trauma Therapy Illustration"
              className="rounded-xl shadow-md w-full h-96 md:h-100 object-cover order-1 md:order-2"
            />
          </div>

          {/* SERVICE 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <img
              src="/therapy4.jpg"
              alt="Burnout Therapy Session"
              className="rounded-xl shadow-md w-full h-96 md:h-100 object-cover"
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2f3b1f] mb-4 tracking-tight">
                Burnout & High-Performance Stress
              </h3>
              <p className="text-[#1f1f1f] mb-6 leading-relaxed">
                For high-achieving professionals and creatives who feel
                exhausted despite outward success. We address perfectionism,
                internal pressure, and work-life imbalance to create sustainable
                ways of living and working.
              </p>
              <a
                href="/blog"
                className="text-[#6b4c3b] hover:underline font-medium"
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* SERVICE 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#2f3b1f] mb-4 tracking-tight">
                Relationship & Attachment Patterns
              </h3>
              <p className="text-[#1f1f1f] mb-6 leading-relaxed">
                For individuals navigating dating struggles, emotional distance,
                or repeated conflict. Therapy becomes a space to understand
                patterns, build healthier connection skills, and feel more
                secure in relationships.
              </p>
              <a
                href="/blog"
                className="text-[#6b4c3b] hover:underline font-medium"
              >
                Learn More →
              </a>
            </div>
            <img
              src="/therapy3.jpg"
              alt="Calm Therapy Room"
              className="rounded-xl shadow-md w-full h-96 md:h-100 object-cover order-1 md:order-2"
            />
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-[#f4f1e3] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-7xl md:text-5xl font-serif font-semibold text-[#803E39] mb-6">
            Kind Words From Clients
          </h2>

          {/* Card */}
          <div className="relative bg-white rounded-2xl shadow-md px-10 py-10 transition-all duration-500">
            <p className="text-lg md:text-xl text-[#350905] leading-relaxed mb-8">
              “{testimonials[current].quote}”
            </p>

            <p className="text-sm text-[#350905] font-medium">
              — {testimonials[current].author}
            </p>

            {/* Navigation - Works EVERY device */}
<div className="flex justify-center gap-8 mt-10">
  <button
    onClick={prevSlide}
    className="
      text-[#803E39] border-2 border-[#803E39]
      px-5 py-2.5 md:px-6 md:py-3
      rounded-full font-medium
      hover:bg-[#803E39] hover:text-white
      active:bg-[#6b332e] active:scale-95 active:text-white
      focus:outline-none focus:ring-4 focus:ring-[#803E39]/30
      transition-all duration-300 ease-in-out
      shadow-md hover:shadow-lg
    "
  >
    ←
  </button>

  <button
    onClick={nextSlide}
    className="
      text-[#803E39] border-2 border-[#803E39]
      px-5 py-2.5 md:px-6 md:py-3
      rounded-full font-medium
      hover:bg-[#803E39] hover:text-white
      active:bg-[#6b332e] active:scale-95 active:text-white
      focus:outline-none focus:ring-4 focus:ring-[#803E39]/30
      transition-all duration-300 ease-in-out
      shadow-md hover:shadow-lg
    "
  >
    →
  </button>
            </div>
          </div>
        </div>
      </section>

      {/* My Office SECTION */}
<section className="bg-linear-to-br from-[#fbf7f1] to-[#f8f4f0] py-12 md:py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-28">
            <h2 className="text-7xl md:text-5xl font-serif font-semibold text-[#350905] mb-6">
              A Calm Space for Healing
            </h2>
            <p className="text-lg text-[#350905] max-w-2xl mx-auto leading-relaxed">
              My Santa Monica office is designed to feel instantly grounding—a
              quiet, private space with natural light and comfortable,
              uncluttered surroundings.
            </p>
            {/* Updated Address Box  + clickable link to Contact #my-office */}
            <div className="mt-8">
              <Link
                href="/contact#my-office"
                className="group inline-flex items-center gap-3 text-lg font-medium text-[#2f3b1f] hover:text-[#6b4c3b] transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-white border border-[#fbf7f1]/50 hover:border-[#6b4c3b]/30"
               >
                <svg
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="underline decoration-2 underline-offset-4 group-hover:decoration-[#6b4c3b] transition-all">
                  123th Street 45 W, Santa Monica, CA 90401
                </span>
                <svg
                  className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Office Images Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-16 max-w-4xl mx-auto">
            {/* Office 1 - Square */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 aspect-square border-4 border-[#803E39]">
              <Image
                src="/Office1.jpeg"
                alt="Dr. Maya Reynolds Santa Monica therapy office - natural light therapy room"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#6b4c3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Office 2 - Square */}
            <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 aspect-square border-4 border-[#803E39]">
              <Image
                src="/Office2.jpeg"
                alt="Comfortable therapy seating area Dr. Maya Reynolds office Santa Monica"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#6b4c3b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          {/* Closing CTA */}
          <div className="text-center mt-12">
            <p className="text-xl md:text-2xl text-[#2f3b1f] max-w-[80%] mx-auto leading-relaxed mb-10">
              Offering in-person therapy in a calm, private Santa Monica office
              and secure telehealth sessions throughout California. Ready to
              take the first step?
            </p>
            <a
              href="/contact#appointment"
              className="inline-block bg-[#803E39] hover:bg-[#6f332f] text-white px-12 py-4 rounded-full font-medium text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 font-sans active:scale-[0.98] mx-auto"
            >
              Book Your Session
            </a>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#f7f3ec] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="rounded-t-full overflow-hidden shadow-md">
            <img
              src="/whytherapy.jpg"
              alt="Calm therapy office plant"
              className="w-full h-96 md:h-125 object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#803E39] mb-10">
              Frequently Asked Questions
            </h2>

            <AccordionItem
              title="Do you offer in-person or virtual sessions?"
              content="I offer both in-person sessions in my Santa Monica office and secure telehealth sessions for clients located anywhere in California. We can decide together which format feels most supportive for you."
            />

            <AccordionItem
              title="What types of concerns do you typically work with?"
              content="I primarily work with adults experiencing anxiety, trauma, burnout, perfectionism, and relationship challenges. Many of my clients are high-achieving professionals who feel outwardly successful but internally overwhelmed."
            />

            <AccordionItem
              title="How long does therapy usually take?"
              content="Therapy is not one-size-fits-all. Some clients come for short-term support around a specific issue, while others choose longer-term work for deeper trauma processing and personal growth. We regularly check in about progress and goals."
            />

            <AccordionItem
              title="Do you accept insurance?"
              content="I am an out-of-network provider. I can provide a superbill that you may submit to your insurance company for potential reimbursement, depending on your plan."
            />

            <AccordionItem
              title="What happens in the first session?"
              content="The first session is a collaborative conversation. We explore what brings you in, your history, and what you hope to change. You are never pressured to share more than feels comfortable."
            />

            <AccordionItem
              title="How do I know if we’re a good fit?"
              content="Therapy works best when you feel safe and understood. If after a few sessions it doesn’t feel aligned, we can openly discuss it and explore other options. Your comfort and progress matter."
            />
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BACKGROUND SECTION */}
      <section className="bg-[#f4f1e3] py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-semibold text-center mb-12">
            My Professional Background
          </h2>

          {/* Accordion Item: Education */}
          <AccordionItem
            title="Education"
            content={[
              "• PsyD, Clinical Psychology",
              "• MA, Counseling Psychology",
            ].join("\n")}
          />

          {/* Accordion Item: Licensure */}
          <AccordionItem
            title="Licensure"
            content={[
              "• Licensed Clinical Psychologist, California",
              "• EMDR Certified Therapist",
              "• CBT for Anxiety Specialist",
              "• Trauma-Focused Therapy Training",
            ].join("\n")}
          />

          {/* Accordion Item: Certifications */}
          <AccordionItem
            title="Certifications"
            content={[
              "• California Psychological Association",
              "• EMDR International Association",
            ].join("\n")}
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
