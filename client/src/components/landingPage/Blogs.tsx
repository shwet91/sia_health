import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  image: string;
  readTime: string;
  title: string;
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/blogs/1.jpg",
    readTime: "5 min read",
    title: "Understanding PCOS: Beyond the Diagnosis",
    description:
      "Dive deep into the root causes of PCOS and discover natural approaches to managing symptoms.",
  },
  {
    id: 2,
    image: "/blogs/2.jpg",
    readTime: "5 min read",
    title: "Thyroid Health: The Master Metabolic Regulator",
    description:
      "Learn how thyroid dysfunction affects every aspect of your health and how to optimize function naturally.",
  },
  {
    id: 3,
    image: "/blogs/3.jpg",
    readTime: "10 min read",
    title: "The Hormone-Weight Connection",
    description:
      "Discover why traditional dieting fails and how hormonal balance is the key to sustainable weight management.",
  },
  {
    id: 4,
    image: "/blogs/4.jpg",
    readTime: "10 min read",
    title: "The Hormone-Weight Connection",
    description:
      "Discover why traditional dieting fails and how hormonal balance is the key to sustainable weight management.",
  },
  {
    id: 5,
    image: "/blogs/5.jpg",
    readTime: "10 min read",
    title: "The Hormone-Weight Connection",
    description:
      "Discover why traditional dieting fails and how hormonal balance is the key to sustainable weight management.",
  },
  {
    id: 6,
    image: "/blogs/6.jpg",
    readTime: "10 min read",
    title: "The Hormone-Weight Connection",
    description:
      "Discover why traditional dieting fails and how hormonal balance is the key to sustainable weight management.",
  },
];

export default function Blogs() {
  return (
    <section className="w-full bg-gradient-to-br from-[#FFF4EB] to-[#FFE4D3] py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(198,61,0,0.5)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
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
