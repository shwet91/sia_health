"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const articles = [
  {
    id: 1,
    img: "/blogs/b1.avif",
    tags: ["INSULIN SENSITIVITY", "PCOS", "INSULIN RESISTANCE", "STRESS"],
    title: "How Fad Diets Mess up Your Hormones?",
    excerpt:
      "There are so many diets which keep on popping our feed in this Social Media World like Keto, One meal a day etc. Let's decode them today",
    meta: "8/14/2025 · 2 min read",
    link: "/Blogs/1",
  },
  {
    id: 2,
    img: "/blogs/b2.avif",
    tags: ["PCOS", "STRESS"],
    title: "Stress and PCOS: How Cortisol Worsens Hormonal Imbalance",
    excerpt:
      "Learn how chronic stress affects PCOS symptoms like weight gain, acne, and irregular periods and discover 6 natural ways to reduce stress and restore balance.",
    meta: "7/1/2025 · 2 min read",
    link: "/Blogs/2",
  },
  {
    id: 3,
    img: "/blogs/b3.avif",
    tags: ["PCOS", "INSULIN RESISTANCE", "STRENGTH TRAINING"],
    title:
      "Strength Training for PCOS: The Ultimate Workout for Hormonal Balance & Weight Loss",
    excerpt:
      "Discover why strength training is the best PCOS workout for hormonal balance, insulin resistance & sustainable weight loss. Your gym guide starts here.",
    meta: "6/22/2025 · 4 min read",
    link: "/Blogs/3",
  },

  {
    id: 4,
    img: "/blogs/b4.avif",
    tags: ["PCOS", "FITNESS", "INSULIN SENSITIVITY", "HORMONAL BALANCE"],
    title:
      "How Fitness Can Transform PCOS: A Complete Guide to Movement & Hormonal Balance",
    excerpt:
      "Learn how fitness improves insulin sensitivity, regulates cycles, and supports hormonal balance in PCOS. Discover the best exercises and tips to start your journey.",
    meta: "6/11/2025 · 3 min read",
    link: "/Blogs/4",
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
  const router = useRouter();

  const handleClick = () => {
    router.push(article.link);
  };

  return (
    <article
      className="w-full md:w-1/2 px-6 mb-12 cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
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
      <div className="flex flex-wrap -mx-6">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}
