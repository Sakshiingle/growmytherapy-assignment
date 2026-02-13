"use client";
import { useState } from "react";
import Image from 'next/image';
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
      {/* Contact Hero Section */}
      <section style={{ backgroundColor: "#f4efe8", padding: "50px 50px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0px 70px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
            alignItems: "start",
          }}
        >
          {/* LEFT: Text + CTA */}
          <div>
            <h1
              style={{
                fontSize: "48px", // text-5xl
                fontWeight: "bold", // font-heading
                color: "#350905",
                lineHeight: 1, // leading-tight
                marginBottom: "24px", // mb-6
                fontFamily: "serif",
              }}
            >
              Feeling Overwhelmed? Let's Start Healing
            </h1>

            <p
              style={{
                fontSize: "18px", // text-lg
                color: "#060606",
                maxWidth: "28rem", // max-w-md
                marginBottom: "32px", // mb-8
                lineHeight: "1.5",
              }}
            >
              Struggling with anxiety, relationships, or life changes? I'm here
              with compassionate therapy. Book a free 15-minute consult to see
              if we're a good fit—no commitment needed.
            </p>

            {/* CTA Button */}
            <a
              href="https://formdr.com/your-secure-form" // Update to your HIPAA form
              style={{
                display: "inline-block",
                border: "2px solid #350905", // border-2 border-[#350905]
                padding: "12px 32px", // py-3 px-8
                fontSize: "18px",
                fontWeight: "600",
                transition: "all 0.3s ease", // transition
                color: "#350905",
                textDecoration: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onMouseOver={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = "#803E39";
                e.currentTarget.style.borderColor = "#803E39";
                e.currentTarget.style.color = "white";
              }}
              onMouseOut={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "#350905";
                e.currentTarget.style.color = "#350905";
              }}
              
            >
              Book Free Consult Now
            </a>
          </div>

          {/* RIGHT: Arch Image AS IS */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              justifySelf: "end", // Align right
            }}
          >
            {/* Big arch (Lilac flowers) - UNCHANGED */}
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "320px",
                height: "400px",
                borderRadius: "160px 160px 0 0",
                overflow: "hidden",
                backgroundColor: "#ccc",
                border: "3px solid #350905db",
              }}
            >
              <Image
                height="400"                width="400"
                src="/ContactHero2.jpg"
                alt="Lilac flowers"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Circle (White flowers) - Kept for balance, move if unwanted */}
            <div
              style={{
                position: "absolute",
                right: "0",
                bottom: "0px",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                overflow: "hidden",
                backgroundColor: "#e5ddd2",
                border: "5px solid #e5ddd2",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Image
                height="400"                width="400"
                src="/ContactHero.jpg"
                alt="White flowers"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* BOX BELOW - Centered */}
        <div
          style={{
            backgroundColor: "#803E39",
            color: "white",
            padding: "35px 40px",
            borderRadius: "12px",
            marginTop: "50px",
            textAlign: "center",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 8px 30px rgba(53,9,5,0.3)",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                marginBottom: "15px",
              }}
            >
              <strong>Privacy First:</strong> Secure, HIPAA-compliant
              connections only.Use the button above or email
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
                src="/Insta1.jpg"
                alt="Instagram post 1"
                className="social-image"
              />
            </a>

            {/* Image 2 */}
            <a href="https://instagram.com" target="_blank">
              <Image
                  height="400"                width="400"
                src="/Insta2.jpg"
                alt="Instagram post 2"
                className="social-image"
              />
            </a>

            {/* Image 3 */}
            <a href="https://instagram.com" target="_blank">
              <Image
                  height="400"                width="400"
                src="/Insta3.jpg"
                alt="Instagram post 3"
                className="social-image"
              />
            </a>

            {/* Image 4 */}
            <a href="https://instagram.com" target="_blank">
              <Image
                  height="400"                width="400"
                src="/Insta.jpg"
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
