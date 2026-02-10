'use client';
// Tells Next.js this component runs in the browser

export default function Home() {
  return (
    // HEADER / NAVBAR
    <nav
      className="
        max-w-7xl        /* limit width like the template */
        mx-auto          /* center horizontally */
        px-10            /* side padding */
        py-6             /* top & bottom spacing */
        flex             /* horizontal layout */
        justify-between  /* space between left & right */
        items-center     /* vertical alignment */
      "
    >
      {/* Left side: Site name */}
      <h1 className="text-2xl font-serif">
        Lilac Template
      </h1>

      {/* Right side: ONLY Blog and Contact (as per template) */}
      <div className="flex gap-8 text-sm">
        <span>Blog</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}
