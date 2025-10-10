import React from "react";
import Image from "next/image";

const articles = [
  {
    id: 1,
    img: "/blogs/5.jpg",
    tags: ["INSULIN SENSITIVITY", "PCOS", "INSULIN RESISTANCE", "STRESS"],
    title: "How Fad Diets Mess up Your Hormones?",
    excerpt:
      "There are so many diets which keep on popping our feed in this Social Media World like Keto, One meal a day etc. Let's decode them today",
    meta: "8/14/2025 · 2 min read",
  },
  {
    id: 2,
    img: "/blogs/6.jpg",
    tags: ["PCOS", "STRESS"],
    title: "Stress and PCOS: How Cortisol Worsens Hormonal Imbalance",
    excerpt:
      "Learn how chronic stress affects PCOS symptoms like weight gain, acne, and irregular periods and discover 6 natural ways to reduce stress and restore balance.",
    meta: "7/1/2025 · 2 min read",
  },
  {
    id: 3,
    img: "/blogs/4.jpg",
    tags: ["INSULIN SENSITIVITY", "PCOS", "INSULIN RESISTANCE", "STRESS"],
    title: "How Fad Diets Mess up Your Hormones?",
    excerpt:
      "There are so many diets which keep on popping our feed in this Social Media World like Keto, One meal a day etc. Let's decode them today",
    meta: "8/14/2025 · 2 min read",
  },
  {
    id: 4,
    img: "/blogs/3.jpg",
    tags: ["PCOS", "STRESS"],
    title: "Stress and PCOS: How Cortisol Worsens Hormonal Imbalance",
    excerpt:
      "Learn how chronic stress affects PCOS symptoms like weight gain, acne, and irregular periods and discover 6 natural ways to reduce stress and restore balance.",
    meta: "7/1/2025 · 2 min read",
  },
];

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap text-xs tracking-wider text-gray-500 mb-3">
      {tags.map((t, i) => (
        <span key={i} className="mr-3 last:mr-0">
          {t}
          {i < tags.length - 1 && <span className="mx-3">·</span>}
        </span>
      ))}
    </div>
  );
}

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="w-full md:w-1/2 px-6 mb-12">
      <div className="overflow-hidden">
        <Image
          src={article.img}
          alt={article.title}
          width={1200}
          height={600}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="mt-6">
        <TagList tags={article.tags} />
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <div className="text-sm text-gray-500">{article.meta}</div>
      </div>
    </article>
  );
}

export default function LearningArticles() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 mt-10">
      <div className="flex justify-end mb-8">
        <nav className="space-x-6 text-gray-700">
          <a className="">Home</a>
          <a className="">Solutions</a>
          <a className="">About Us</a>
          <a className="">Contact</a>
          <a className="underline font-medium">Learn</a>
        </nav>
      </div>

      <div className="flex flex-wrap -mx-6">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}
