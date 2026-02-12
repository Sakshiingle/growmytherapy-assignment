'use client';
import { useState } from 'react';

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
      {/* HERO */}
      <section className="bg-[#f4efe8]">
        <div className="max-w-1000 mx-auto px-30  flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="/bloghero.jpg"
              alt="Blog hero"
              className="w-full max-w-[360px] rounded-t-full"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-serif text-[#2f3b1f] mb-8">
              The Lilac Blog
            </h1>
            <p className="text-[#3f4a2c]">
              My tiny corner of the internet where I talk about healing, heart,
              and wholeness.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-[#e7e2da] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <img
              src="/blog_post1.jpg"
              alt="Post 1"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="text-sm text-gray-600 mt-6 mb-2">3/11/19</p>
            <h2 className="text-3xl font-serif text-[#2f3b1f] mb-4">
              Blog Post One
            </h2>
            <a href="#" className="underline">
              Read More
            </a>
          </div>

          <div>
            <img
              src="/blog_post2.jpg"
              alt="Post 2"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="text-sm text-gray-600 mt-6 mb-2">3/11/19</p>
            <h2 className="text-3xl font-serif text-[#2f3b1f] mb-4">
              Blog Post Two
            </h2>
            <a href="#" className="underline">
              Read More
            </a>
          </div>

          <div>
            <img
              src="/blog_post3.jpg"
              alt="Post 3"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="text-sm text-gray-600 mt-6 mb-2">3/11/19</p>
            <h2 className="text-3xl font-serif text-[#2f3b1f] mb-4">
              Blog Post Three
            </h2>
            <a href="#" className="underline">
              Read More
            </a>
          </div>

          <div>
            <img
              src="/blog_post4.jpg"
              alt="Post 4"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <p className="text-sm text-gray-600 mt-6 mb-2">3/11/19</p>
            <h2 className="text-3xl font-serif text-[#2f3b1f] mb-4">
              Blog Post Four
            </h2>
            <a href="#" className="underline">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* SUBSCRIBE WITH THANK YOU */}
      <section style={{backgroundColor: '#8a9365', padding: '100px 20px'}}>
        <div style={{maxWidth: '900px', margin: '0 auto', border: '4px solid white', padding: '80px 40px', textAlign: 'center'}}>
          
          {!submitted ? (
            <>
              <h2 style={{fontSize: '48px', color: 'white', marginBottom: '20px', fontFamily: 'serif'}}>
                Subscribe
              </h2>
              
              <p style={{fontSize: '18px', color: 'white', marginBottom: '40px'}}>
                Sign up with your email address to receive news and updates.
              </p>
              
              <form onSubmit={handleSubmit} style={{display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap'}}>
                <input 
                  type="email" 
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{width: '320px', padding: '15px 20px', fontSize: '16px'}}
                />
                <button type="submit" style={{padding: '15px 40px', backgroundColor: 'transparent', border: '2px solid white', color: 'white', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'}}>
                  SIGN UP
                </button>
              </form>
              
              <p style={{fontSize: '14px', color: 'white'}}>
                We respect your privacy.
              </p>
            </>
          ) : (
            <h2 style={{fontSize: '48px', color: 'white', fontFamily: 'serif'}}>
              Thank you!
            </h2>
          )}
          
        </div>
      </section>
    </>
  );
}
