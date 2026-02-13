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

      {/* MY OFFICE SECTION */}
      <section
        id="my-office"
        style={{ backgroundColor: "#8a9365", padding: "25px" }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            minHeight: "500px",
          }}
        >
          {/* LEFT COLUMN - Office Info */}
          <div
            style={{
              padding: "80px 60px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
            }}
          >
            <h2 className="text-7xl md:text-5xl font-serif font-semibold text-white mb-6">
              My Office
            </h2>

            <div
              style={{
                fontSize: "20px",
                lineHeight: "1.8",
                marginBottom: "40px",
              }}
            >
              <p style={{ marginBottom: "10px" }}>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>

            <h3
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "20px",
                fontFamily: "serif",
              }}
            >
              Hours
            </h3>

            <div style={{ fontSize: "20px", lineHeight: "1.8" }}>
              <p style={{ marginBottom: "10px" }}>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* RIGHT COLUMN - Google Map - Key-Free Santa Monica */}
          <div style={{ position: "relative", minHeight: "500px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.835248140013!2d-118.492758684629!3d34.021768480465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bcbb5d0b3f2b%3A0x123th+Street+45+W%2C+Santa+Monica%2C+CA+90401!2s123th%20Street%2045%20W%2C%20Santa%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sin!4v1739340000000!5m2!1sen!2sin"
              style={{
                position: "absolute",
                top: "50px",
                left: "0",
                width: "90%",
                height: "80%",
                border: "none",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FIND ME ON SOCIAL SECTION */}
      <section style={{ backgroundColor: "#fbf7f1", padding: "40px 25px" }}>
        <div style={{ maxWidth: "1400px", margin: "auto" }}>
          <h2 className="text-7xl md:text-5xl text-center font-serif font-semibold text-[#350905] mb-6">
            Find me on social
          </h2>

          {/* Add CSS for hover effect */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
      .social-image {
        width: 100%;
        height: 320px;
        object-fit: cover;
        border-radius: 8px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .social-image:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(0,0,0,0.15);
      }
    `,
            }}
          />

          {/* 4-Column Gallery Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {/* Image 1 */}
            <a href="https://instagram.com" target="_blank">
              <Image
                  height="400"                width="400"
                src="/insta1.jpg"
                alt="Instagram post 1"
                className="social-image"
              />
            </a>

            {/* Image 2 */}
            <a href="https://instagram.com" target="_blank">
              <Image
                  height="400"                width="400"
                src="/insta2.jpg"
                alt="Instagram post 2"
                className="social-image"
              />
            </a>

            {/* Image 3 */}
            <a href="https://instagram.com" target="_blank">
              <Image
                  height="400"                width="400"
                src="/insta3.jpg"
                alt="Instagram post 3"
                className="social-image"
              />
            </a>

            {/* Image 4 */}
            <a href="https://instagram.com" target="_blank">
              <Image
                  height="400"                width="400"
                src="/insta.jpg"
                alt="Instagram post 4"
                className="social-image"
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
