"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
{/* Contact Hero - Images locked ALL devices */}
<section className="bg-[#f4efe8] py-12 md:py-16 lg:py-20 px-4 md:px-12 lg:px-20 xl:px-[calc(50px+70px/2)]">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
    
    {/* Text + CTA */}
    <div className="order-1 lg:order-1 text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-serif font-bold text-[#350905] mb-4 md:mb-6 leading-tight">
        Feeling Overwhelmed? Let's Start Healing
      </h1>
      
      <p className="text-base md:text-lg text-[#060606] max-w-md mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed">
        Struggling with anxiety, relationships, or life changes? I'm here
        with compassionate therapy. Book a free 15-minute consult to see
        if we're a good fit—no commitment needed.
      </p>

      <Link
        href="https://formdr.com/your-secure-form"
        className="
          inline-block border-2 border-[#350905]
          px-6 py-3 md:px-8 md:py-4
          font-semibold text-[#350905] text-lg
          hover:bg-[#803E39] hover:border-[#803E39] hover:text-white
          active:bg-[#6b332e] active:scale-95
          transition-all duration-300 ease-in-out
          shadow-md hover:shadow-xl hover:-translate-y-1
          rounded-lg whitespace-nowrap
          focus:outline-none focus:ring-4 focus:ring-[#350905]/30
        "
      >
        Book Free Consult Now
      </Link>
    </div>

    {/* Images - LOCKED together ALL devices */}
    <div className="order-2 lg:order-2 relative w-[320px] sm:w-90 md:w-100 lg:w-full h-100 md:h-112.5 lg:h-125 mx-auto lg:mx-0">
      {/* Big arch */}
      <div className="absolute inset-0 w-[320px] sm:w-90 md:w-95 lg:w-100 h-full rounded-t-[180px] overflow-hidden bg-[#ccc] border-4 border-[#350905]/95 -left-2 sm:-left-4 lg:left-0">
        <Image
          src="/contacthero2.jpg"
          alt="Lilac flowers"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Circle - Fixed position + near original size */}
      <div className="absolute right-2 sm:right-4 md:right-6 lg:right-0 bottom-2 sm:bottom-4 md:bottom-6 lg:bottom-0 w-65 sm:w-67.5 md:w-68.75 lg:w-70 h-65 sm:h-67.5 md:h-68.75 lg:h-70 rounded-full overflow-hidden bg-[#e5ddd2] border-[3px] md:border-4 border-[#e5ddd2] shadow-xl z-10 -mr-2 sm:-mr-3 md:-mr-4 lg:-mr-1">
        <Image
          src="/contacthero.jpg"
          alt="White flowers"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>

  {/* Brown Box */}
  <div className="mt-12 md:mt-16 lg:mt-20 max-w-2xl mx-auto">
    <div className="bg-[#803E39] text-white p-8 md:p-10 lg:p-12 rounded-2xl text-center shadow-2xl shadow-[#350905]/30">
      <p className="text-base md:text-lg leading-relaxed">
        <strong>Privacy First:</strong> Secure, HIPAA-compliant
        connections only. Use the button above or email
        [your-email@domain.com]. No health details until official intake.
      </p>
    </div>
  </div>
</section>


      {/* BOOK APPOINTMENT SECTION */}
      <section style={{ backgroundColor: "#e5ddd2", padding: "50px 20px" }}>
        <div
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 className="text-7xl md:text-5xl font-serif font-semibold text-[#350905] mb-6">
            Book an appointment.
          </h2>
          {/* First paragraph */}
          <p className="text-lg text-black-700 mb-4">
            In-person sessions in Santa Monica and secure telehealth throughout
            California. Book a free consultation below.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  marginBottom: "20px",
                  fontSize: "16px",
                  border: "2px solid #2f3b1f",
                  borderRadius: "4px",
                }}
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  marginBottom: "20px",
                  fontSize: "16px",
                  border: "2px solid #2f3b1f",
                  borderRadius: "4px",
                }}
              />

              <textarea
                placeholder="Your Message (optional)"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                style={{
                  width: "100%",
                  padding: "15px 20px",
                  marginBottom: "30px",
                  fontSize: "16px",
                  border: "2px solid #2f3b1f",
                  borderRadius: "4px",
                  fontFamily: "inherit",
                }}
              />

              <button
                type="submit"
                style={{
                  padding: "15px 50px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "white",
                  backgroundColor: "#803E39",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                SUBMIT
              </button>
            </form>
          ) : (
            <div
              style={{
                padding: "40px",
                backgroundColor: "#803E39",
                color: "white",
                borderRadius: "8px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <h3 style={{ fontSize: "32px", marginBottom: "10px" }}>
                Thank you!
              </h3>
              <p>We'll get back to you soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* My Office - Mobile responsive */}
<section id="my-office" className="bg-[#8a9365] py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-6.25">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-112.5 md:min-h-125">
    {/* LEFT: Office Info - Mobile top */}
    {/* Office Info - Center mobile/iPad */}
<div className="lg:col-span-1 order-1 lg:order-1 p-6 md:p-12 lg:p-20 flex flex-col justify-center text-white text-center lg:text-left">
  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[7xl] font-serif font-semibold text-white mb-4 md:mb-6 leading-tight">
    My Office
  </h2>

  <div className="text-lg md:text-xl lg:text-[20px] leading-[1.8] mb-6 md:mb-10 mx-auto lg:mx-0 max-w-md lg:max-w-none">
    <p className="mb-2 md:mb-2.5">123th Street 45 W</p>
    <p>Santa Monica, CA 90401</p>
  </div>

  <h3 className="text-2xl md:text-3xl lg:text-[32px] font-bold font-serif mb-3 md:mb-5">
    Hours
  </h3>

  <div className="text-lg md:text-xl lg:text-[20px] leading-[1.8] mx-auto lg:mx-0 max-w-md lg:max-w-none">
    <p className="mb-2 md:mb-2.5">Monday – Friday</p>
    <p>10am – 6pm</p>
  </div>
</div>


    {/* RIGHT: Map - Mobile bottom */}
    <div className="lg:col-span-1 order-2 lg:order-2 relative min-h-87.5 md:min-h-112.5 lg:min-h-125">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.835248140013!2d-118.492758684629!3d34.021768480465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bcbb5d0b3f2b%3A0x123th+Street+45+W%2C+Santa+Monica%2C+CA+90401!2s123th%20Street%2045%20W%2C%20Santa%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sin!4v1739340000000!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full rounded-xl shadow-2xl"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  </div>
</section>

      

      {/* FIND ME ON SOCIAL SECTION */}
      {/* Social - 2x2 mobile/iPad + 4-col desktop */}
<section className="bg-[#fbf7f1] py-10 md:py-12 lg:py-16 px-4 md:px-8 lg:px-6.25">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[7xl] font-serif font-semibold text-[#350905] text-center mb-6 md:mb-8 leading-tight">
      Find me on social
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
      {/* Image 1 */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block group">
        <Image
          src="/insta1.jpg"
          alt="Instagram post 1"
          width={400}
          height={320}
          className="w-full h-50 md:h-60 lg:h-80 object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-2xl"
        />
      </a>

      {/* Image 2 */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block group">
        <Image
          src="/insta2.jpg"
          alt="Instagram post 2"
          width={400}
          height={320}
          className="w-full h-50 md:h-60 lg:h-80 object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-2xl"
        />
      </a>

      {/* Image 3 */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block group">
        <Image
          src="/insta3.jpg"
          alt="Instagram post 3"
          width={400}
          height={320}
          className="w-full h-50 md:h-60 lg:h-80 object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-2xl"
        />
      </a>

      {/* Image 4 */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block group">
        <Image
          src="/insta4.jpg"
          alt="Instagram post 4"
          width={400}
          height={320}
          className="w-full h-50 md:h-60 lg:h-80 object-cover rounded-lg transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-2xl"
        />
      </a>
    </div>
  </div>
</section>


      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#000000",
          margin: "0",
        }}
      />
    </>
  );
}
