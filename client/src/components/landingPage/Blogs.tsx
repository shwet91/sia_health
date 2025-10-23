"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import "../../styles/landingPage.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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


export default function Blogs() {
  const router = useRouter();
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api) return;

    setCurrentSlide(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const handleCardClick = (link: string) => {
    router.push(link);
  };

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <article
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(198,61,0,0.5)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full"
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
        <div className="text-sm text-[#FF4B00] mb-3">{post.readTime}</div>
        <h3 className="text-xl font-bold mb-3 text-[#2D1810]">{post.title}</h3>
        <p className="text-[#663014] text-sm leading-relaxed mb-4">
          {post.description}
        </p>
        <div className="flex items-center text-[#FF4B00] font-medium group-hover:gap-2 transition-all">
          Read More
          <ArrowRight className="ml-2 w-4 h-4" />
        </div>
      </div>
    </article>
  );

  return (
    <section className="w-full bg-white py-16 md:py-20 Helvetica">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile Carousel */}
        <div className="md:hidden max-w-6xl mx-auto relative">
          <Carousel
            setApi={setApi}
            plugins={[autoplayPlugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            onMouseEnter={() => autoplayPlugin.current.stop()}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <CarouselContent>
              {blogPosts.map((post) => (
                <CarouselItem key={post.id}>
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden left-2 h-10 w-10 border-none bg-gray-300 text-white rounded-md shadow-lg transition-all duration-300" />
            <CarouselNext className="hidden right-2 h-10 w-10 border-none bg-gray-300 text-white shadow-lg rounded-md transition-all duration-300" />
          </Carousel>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {blogPosts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 bg-[#FF4B00]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid - show all 3 blogs */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
