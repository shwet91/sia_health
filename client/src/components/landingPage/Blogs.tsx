"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import "../../styles/landingPage.css";

interface BlogPost {
  id: number;
  image: string;
  readTime: string;
  title: string;
  description: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/blogs/b1.avif",
    readTime: "5 min read",
    title: "How Fad Diets Mess up Your Hormones?",
    description:
      "There are so many diets which keep on popping our feed in this Social Media World like Keto, One meal a day etc. Let's decode them today",
    link: "/Blogs/1",
  },
  {
    id: 2,
    image: "/blogs/b2.avif",
    readTime: "5 min read",
    title: "Stress and PCOS: How Cortisol Worsens Hormonal Imbalance",
    description:
      "Learn how chronic stress affects PCOS symptoms like weight gain, acne, and irregular periods and discover 6 natural ways to reduce stress and restore balance.",
    link: "/Blogs/2",
  },
  {
    id: 3,
    image: "/blogs/b3.avif",
    readTime: "10 min read",
    title: "Strength Training for PCOS: The Ultimate Workout",
    description:
      "Discover why strength training is the best PCOS workout for hormonal balance, insulin resistance & sustainable weight loss. Your gym guide starts here.",
    link: "/Blogs/3",
  },
];

const mobileBlogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/blogs/b1.avif",
    readTime: "5 min read",
    title: "How Fad Diets Mess up Your Hormones?",
    description:
      "There are so many diets which keep on popping our feed in this Social Media World like Keto, One meal a day etc. Let's decode them today",
    link: "/Blogs/1",
  },
  {
    id: 2,
    image: "/blogs/b2.avif",
    readTime: "5 min read",
    title: "Stress and PCOS: How Cortisol Worsens Hormonal Imbalance",
    description:
      "Learn how chronic stress affects PCOS symptoms like weight gain, acne, and irregular periods and discover 6 natural ways to reduce stress and restore balance.",
    link: "/Blogs/2",
  },
];

export default function Blogs() {
  const router = useRouter();

  const handleCardClick = (link: string) => {
    router.push(link);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20 Helvetica">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile view - show only 2 blogs */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {mobileBlogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(198,61,0,0.5)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              onClick={() => handleCardClick(post.link)}
            >
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#FF4B00] mb-3">
                  {post.readTime}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2D1810]">
                  {post.title}
                </h3>
                <p className="text-[#663014] text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center text-[#FF4B00] font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop view - show all 3 blogs */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(198,61,0,0.5)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
              onClick={() => handleCardClick(post.link)}
            >
              <div className="relative w-full h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#FF4B00] mb-3">
                  {post.readTime}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#2D1810]">
                  {post.title}
                </h3>
                <p className="text-[#663014] text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <div className="flex items-center text-[#FF4B00] font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
