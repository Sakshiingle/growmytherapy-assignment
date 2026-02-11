import { notFound } from "next/navigation";

const blogs = {
  "blog-post-one": {
    title: "Blog Post One",
    date: "3/11/19",
    content: `
This is the full content of Blog Post One.

Write long-form reflections here.
This page represents a single article.
`,
  },
  "blog-post-two": {
    title: "Blog Post Two",
    date: "3/11/19",
    content: `
This is the full content of Blog Post Two.

Each blog has its own route.
`,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogs[params.slug as keyof typeof blogs];

  if (!blog) return notFound();

  return (
    <section className="bg-[#fbf7f1] py-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-sm text-gray-600 mb-4">
          {blog.date}
        </p>

        <h1 className="text-4xl font-serif mb-10">
          {blog.title}
        </h1>

        <div className="prose prose-neutral max-w-none">
          {blog.content}
        </div>
      </div>
    </section>
  );
}
