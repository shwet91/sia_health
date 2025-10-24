import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sia Health — Women's Hormonal Health & Wellness Platform",
    short_name: "Sia Health",
    description:
      "Expert-led personalized care for women's hormonal health. PCOS/PCOD treatment, thyroid care, fertility support, menopause management. Holistic approach combining nutrition, lifestyle & medical guidance.",
    start_url: "/",
    display: "standalone",
    background_color: "#fef7e5",
    theme_color: "#EB5200",
    categories: ["health", "lifestyle", "medical", "wellness"],
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-US",
    dir: "ltr",
    icons: [
      {
        src: "/fav_icon.png",
        sizes: "533x533",
        type: "image/png",
        purpose: "any",
      },
    ],
    shortcuts: [
      {
        name: "Book Consultation",
        short_name: "Book",
        description: "Book a free expert consultation",
        url: "/contact",
        icons: [{ src: "/fav_icon.png", sizes: "533x533" }],
      },
      {
        name: "Hormone Test",
        short_name: "Test",
        description: "Take the hormone health assessment",
        url: "/quiz",
        icons: [{ src: "/fav_icon.png", sizes: "533x533" }],
      },
      {
        name: "Health Blogs",
        short_name: "Blogs",
        description: "Read expert articles on hormonal health",
        url: "/Blogs/1",
        icons: [{ src: "/fav_icon.png", sizes: "533x533" }],
      },
    ],
    screenshots: [
      {
        src: "/Hero2.jpeg",
        sizes: "1280x720",
        type: "image/jpeg",
        form_factor: "wide",
        label: "Sia Health - Women's Hormonal Health Platform",
      },
    ],
  };
}
