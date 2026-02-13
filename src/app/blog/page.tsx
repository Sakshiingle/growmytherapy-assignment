'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BlogPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      {/* HERO - Your EXACT desktop + mobile responsive */}
<section className="bg-[#f4efe8] py-12 md:py-0 px-4 sm:px-8 md:px-20">
  <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    <div className="w-full lg:w-1/2 ">
      <Image
        height="400"
        width="400"
        src="/bloghero.jpg"
        alt="Dr. Maya Reynolds Blog"
        className="w-full max-w-90 border-3 border-[#350905] lg:max-w-90 rounded-t-full mx-auto lg:mx-0"
      />
    </div>
    <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
      <h1 className="text-5xl font-heading text-center text-[#350905] leading-tight mb-6">
              Healing Notes with Dr. Maya
            </h1>
      <p className="text-lg text-[#3e4a2b] text-center max-w-md mb-8 mx-auto">
        A quiet space for reflections on anxiety, trauma healing, and the small shifts that help us feel whole again.
        Supporting overwhelmed adults in Santa Monica with reflections on anxiety, trauma recovery, and emotional balance.
      </p>
    </div>
  </div>
</section>


      {/* GRID */}
      <section className="bg-[#e7e2da] py-12 md:py-24 px-1 md:px-10">
        <div className="max-w-7xl mx-auto px-6  grid md:grid-cols-2 gap-20">
          <div>
            <Image
             height="400"
             width="400"
              src="/blog_post1.jpg"
              alt="Post 1"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="text-sm text-gray-600 mt-6 mb-2">3/10/25</p>
            <h3 className="text-3xl md:text-3xl font-heading text-[#350905] leading-tight mb-6">
              Small Shifts, Big Relief
            </h3>
            <a href="#" className="underline">
              Read More
            </a>
          </div>

          <div>
            <Image
              width={"400"}
              height={"400"}
              src="/blog_post2.jpg"
              alt="Post 2"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="text-sm text-gray-600 mt-6 mb-2">2/11/25</p>
            <h3 className="text-3xl md:text-3xl font-heading text-[#350905] leading-tight mb-6">
              When the Past Feels Present
            </h3>
            <a href="#" className="underline">
              Read More
            </a>
          </div>

          <div>
            <Image
              width={"400"}
              height={"400"}
              src="/blog_post3.jpg"
              alt="Post 3"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="text-sm text-gray-600 mt-6 mb-2">9/12/25</p>
            <h3 className="text-3xl md:text-3xl font-heading text-[#350905] leading-tight mb-6">
             The Courage to Feel
            </h3>
            <a href="#" className="underline">
              Read More
            </a>
          </div>

          <div>
            <Image
              width={"400"}
              height={"400"}
              src="/blog_post4.jpg"
              alt="Post 4"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="text-sm text-gray-600 mt-6 mb-2">10/1/26</p>
            <h3 className="text-3xl md:text-3xl font-heading text-[#350905] leading-tight mb-6">
              On Slowing Down
            </h3>
            <a href="#" className="underline">
              Read More
            </a>
          </div>
        </div>
      </section>

{/* SUBSCRIBE WITH THANK YOU - PERFECT */}
<section style={{backgroundColor: '#8a9365', padding: '60px 15px', paddingBottom: '40px'}}>
  <div style={{
    maxWidth: '1000px', 
    margin: '0 auto', 
    border: '4px solid white', 
    padding: '60px 30px', 
    textAlign: 'center',
    borderRadius: '12px'
  }}>
    
    {!submitted ? (
      <>
        <h2 style={{
          fontSize: 'clamp(32px, 8vw, 48px)', 
          color: 'white', 
          marginBottom: '20px', 
          fontFamily: 'serif',
          lineHeight: 1.2
        }}>
          Subscribe
        </h2>
        
        <p style={{
          fontSize: 'clamp(16px, 4vw, 18px)', 
          color: 'white', 
          marginBottom: '30px',
          lineHeight: 1.6
        }}>
          Sign up with your email address to receive news and updates.
        </p>
        
        <form onSubmit={handleSubmit} style={{
          display: 'flex', 
          gap: '12px', 
          justifyContent: 'center', 
          marginBottom: '20px', 
          flexWrap: 'wrap',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <input 
            type="email" 
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '320px',
              padding: '15px 20px', 
              fontSize: 'clamp(14px, 4vw, 16px)',
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '2px solid white',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
          <button type="submit" style={{
            padding: '15px 40px', 
            backgroundColor: 'transparent', 
            border: '2px solid white', 
            color: 'white', 
            fontSize: 'clamp(14px, 3vw, 16px)', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            borderRadius: '8px'
          }}>
            SIGN UP
          </button>
        </form>
        
        <p style={{
          fontSize: 'clamp(12px, 3vw, 14px)', 
          color: 'white',
          opacity: 0.9
        }}>
          We respect your privacy.
        </p>
      </>
    ) : (
      <h2 style={{
        fontSize: 'clamp(32px, 8vw, 48px)', 
        color: 'white', 
        fontFamily: 'serif',
        lineHeight: 1.2
      }}>
        Thank you!
      </h2>
    )}
  </div>
</section>

    </>
  );
}
