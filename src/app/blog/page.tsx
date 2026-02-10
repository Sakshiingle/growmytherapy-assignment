// Blog page component
export default function BlogPage() {
  return (
    // Main wrapper for the blog hero section
    <main className="bg-[#fbf7f2]">

      {/* BLOG HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE: Image */}
          <div className="flex justify-center">
            <div className="w-[320px] h-[420px] overflow-hidden rounded-t-full">
              {/* Normal img tag is OK here (no optimization needed yet) */}
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
                alt="Blog reading"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text */}
          <div>
            {/* Blog title */}
            <h1 className="text-5xl font-semibold text-[#2f3e1f] mb-6">
              The Lilac Blog
            </h1>

            {/* Blog description */}
            <p className="text-lg text-[#2f3e1f] leading-relaxed mb-4">
              My tiny corner of the internet where I talk about all things
              healing, heart, and wholeness.
            </p>

            {/* Small friendly line */}
            <p className="text-base text-[#2f3e1f]">
              Glad you’re here.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
