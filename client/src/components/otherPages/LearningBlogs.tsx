import React from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    img: "/blogs/1.jpg",
    tags: ["INSULIN SENSITIVITY", "PCOS", "INSULIN RESISTANCE", "STRESS"],
    title: "How Fad Diets Mess up Your Hormones?",
    excerpt:
      "There are so many diets which keep on popping our feed in this Social Media World like Keto, One meal a day etc. Let's decode them today",
    by: null,
    date: "8/14/2025",
    readTime: "2 min read",
  },
  {
    id: 2,
    img: "/blogs/2.jpg",
    tags: ["PCOS", "STRESS"],
    title: "Stress and PCOS: How Cortisol Worsens Hormonal Imbalance",
    excerpt:
      "Learn how chronic stress affects PCOS symptoms like weight gain, acne, and irregular periods and discover 6 natural ways to reduce stress and restore balance.",
    by: "Dt. Sikita",
    date: "7/1/2025",
    readTime: "2 min read",
  },
];

function LearningBlogs() {
  return (
    <section className="max-w-[1150px] mx-auto px-5 py-10">
      <div className="grid grid-cols-2 gap-10 items-start md:grid-cols-1">
        {posts.map((p) => (
          <article className="flex flex-col" key={p.id}>
            <div className="w-full h-[320px] relative rounded-sm overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="flex flex-wrap gap-3 text-[12px] text-[#8a8a8a] mt-4 tracking-wide">
              {p.tags.map((t, i) => (
                <span key={i}>
                  {t}
                  {i < p.tags.length - 1 ? " ·" : ""}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#111] mt-3">{p.title}</h3>

            <p className="text-[#666] leading-6 mt-3">{p.excerpt}</p>

            <div className="text-[#666] text-sm mt-3">
              {p.by ? `${p.by} · ` : ""}
              {p.date} · {p.readTime}
            </div>
          </article>
        ))}
      </div>

      <a
        className="fixed right-5 bottom-5 w-14 h-14 rounded-full bg-gradient-to-b from-[#00a884] to-[#008f6a] flex items-center justify-center shadow-lg z-50"
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src="/testimonials/whatsapp-icon.png"
          alt="wa"
          width={28}
          height={28}
        />
      </a>
    </section>
  );
}

export default LearningBlogs;
