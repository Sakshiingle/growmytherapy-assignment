'use client';

export default function Home() {
  return (
    <nav className="max-w-7xl mx-auto px-10 py-6 flex justify-between items-center">
      <h1 className="text-2xl font-serif">Lilac Template</h1>

      <div className="flex gap-8 text-sm">
        <span>Hours</span>
        <span>Find</span>
        <span>Blog</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}
