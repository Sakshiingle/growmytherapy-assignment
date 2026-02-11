'use client';
import { useState } from 'react';
export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* LET'S CONNECT Section */}
      <section style={{ backgroundColor: "#fbf7f1", padding: "50px 50px" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0px 70px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
            alignItems: "center", // ← ADDED: Vertically centers both columns
          }}
        >
          {/* LEFT COLUMN */}
          <div>
            <h1
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                color: "#2f3b1f",
                marginBottom: "20px",
                lineHeight: "1.1",
                fontFamily: "serif",
              }}
            >
              Let's Connect
            </h1>

            <p
              style={{
                fontSize: "18px",
                color: "#2f3b1f",
                marginBottom: "20px",
              }}
            >
              Starting therapy is courageous.
            </p>

            <p
              style={{
                fontSize: "18px",
                color: "#2f3b1f",
                marginBottom: "20px",
              }}
            >
              Get in touch for questions, or to book a free 15-minute
              consultation.
            </p>

            {/* FLOWER IMAGES - TEMPLATE LAYOUT */}
            <div
              style={{ position: "relative", width: "500px", height: "400px" }}
            >
              {/* Big arch (Left side - Lilac flowers) */}
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
                }}
              >
                <img
                  src="/contact1.jpg"
                  alt="Lilac flowers"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Circle overlapping (Right bottom - White flowers) */}
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  bottom: "50px",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  border: "10px solid #e5ddd2",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src="/contact2.jpg"
                  alt="White flowers"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - HIPAA BOX (TIGHT PADDING) */}
          <div
            style={{
              backgroundColor: "#2f3b1f",
              color: "white",
              padding: "35px 40px", // ← Changed: 35px top/bottom (was 10px)
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              height: "fit-content", // ← Added: Box shrinks to text size
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  marginBottom: "15px",
                }}
              >
                <strong>PLEASE NOTE:</strong> If you opt to use a "Form Block"
                on your contact page this is not HIPAA-compliant.
              </p>
              <p style={{ fontSize: "15px", lineHeight: "1.6" }}>
                Squarespace stores data that is input into forms in the
                Marketing tab under Profiles. Instead, you can embed a
                HIPAA-compliant form, a link to your client portal, or simply
                put your email address.
              </p>
            </div>
          </div>
        </div>
      </section>
      
          {/* BOOK APPOINTMENT SECTION */}
      <section style={{ backgroundColor: '#e5ddd2', padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          
          <h2 style={{ fontSize: '60px', fontWeight: 'bold', color: '#2f3b1f', marginBottom: '30px', fontFamily: 'serif' }}>
            Book an appointment.
          </h2>
          
          <p style={{ fontSize: '18px', color: '#2f3b1f', lineHeight: '1.8', marginBottom: '50px' }}>
            Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
              
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  marginBottom: '20px',
                  fontSize: '16px',
                  border: '2px solid #2f3b1f',
                  borderRadius: '4px'
                }}
              />

              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  marginBottom: '20px',
                  fontSize: '16px',
                  border: '2px solid #2f3b1f',
                  borderRadius: '4px'
                }}
              />

              <textarea
                placeholder="Your Message (optional)"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                style={{
                  width: '100%',
                  padding: '15px 20px',
                  marginBottom: '30px',
                  fontSize: '16px',
                  border: '2px solid #2f3b1f',
                  borderRadius: '4px',
                  fontFamily: 'inherit'
                }}
              />

              <button
                type="submit"
                style={{
                  padding: '15px 50px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: '#2f3b1f',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                SUBMIT
              </button>

            </form>
          ) : (
            <div style={{ padding: '40px', backgroundColor: '#2f3b1f', color: 'white', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
              <h3 style={{ fontSize: '32px', marginBottom: '10px' }}>Thank you!</h3>
              <p>We'll get back to you soon.</p>
            </div>
          )}

        </div>
      </section>
          {/* MY OFFICE SECTION */}
      <section style={{ backgroundColor: '#8a9365', padding: '0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '500px' }}>
          
          {/* LEFT COLUMN - Office Info */}
          <div style={{ 
            padding: '80px 60px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            color: 'white'
          }}>
            
            <h2 style={{ 
              fontSize: '56px', 
              fontWeight: 'bold', 
              marginBottom: '40px', 
              fontFamily: 'serif',
              lineHeight: '1.2'
            }}>
              My Office
            </h2>
            
            <div style={{ fontSize: '20px', lineHeight: '1.8', marginBottom: '40px' }}>
              <p style={{ marginBottom: '10px' }}>123 Example Street</p>
              <p>Minneapolis, MN</p>
            </div>
            
            <h3 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              marginBottom: '20px',
              fontFamily: 'serif'
            }}>
              Hours
            </h3>
            
            <div style={{ fontSize: '20px', lineHeight: '1.8' }}>
              <p style={{ marginBottom: '10px' }}>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
            
          </div>
          
          {/* RIGHT COLUMN - Google Map */}
          <div style={{ position: 'relative', minHeight: '500px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22594.44779969243!2d-93.26509!3d44.97775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b3329a8e0cd0a7%3A0x5df0cfcd3ecca0ab!2sMinneapolis%2C%20MN%2C%20USA!5e0!3m2!1sen!2sin!4v1644567890123!5m2!1sen!2sin"
              style={{
                position: 'absolute',
                top: '40px',
                left: '0',
                width: '90%',
                height: '80%',
                border: 'none'
              }}
              loading="lazy"
            />
          </div>
          
        </div>
      </section>


{/* FIND ME ON SOCIAL SECTION */}
<section style={{ backgroundColor: '#fbf7f1', padding: '80px 20px' }}>
  <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
    
    <h2 style={{ 
      fontSize: '56px', 
      fontWeight: 'bold', 
      color: '#2f3b1f', 
      marginBottom: '50px',
      fontFamily: 'serif'
    }}>
      Find me on social.
    </h2>
    
    {/* Add CSS for hover effect */}
    <style dangerouslySetInnerHTML={{__html: `
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
    `}} />
    
    {/* 4-Column Gallery Grid */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(4, 1fr)', 
      gap: '20px' 
    }}>
      
      {/* Image 1 */}
      <a href="https://instagram.com" target="_blank">
        <img 
          src="/contact1.jpg" 
          alt="Instagram post 1"
          className="social-image"
        />
      </a>
      
      {/* Image 2 */}
      <a href="https://instagram.com" target="_blank">
        <img 
          src="/contact2.jpg" 
          alt="Instagram post 2"
          className="social-image"
        />
      </a>
      
      {/* Image 3 */}
      <a href="https://instagram.com" target="_blank">
        <img 
          src="/blog_post3.jpg" 
          alt="Instagram post 3"
          className="social-image"
        />
      </a>
      
      {/* Image 4 */}
      <a href="https://instagram.com" target="_blank">
        <img 
          src="/blog_post4.jpg" 
          alt="Instagram post 4"
          className="social-image"
        />
      </a>
      
    </div>
    
  </div>
</section>


  {/* Divider */}
            <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: '#000000',
        margin: '0'
      }} />

    </>
  );
}
