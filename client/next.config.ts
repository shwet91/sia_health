import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost" , 'i.pinimg.com' , 'plus.unsplash.com', 'images.unsplash.com' , 'media.istockphoto.com'],
  },

  async redirects() {
    return [
      {
        source: "/partnership",
        destination: "/about-us",
        permanent: true,
      },
       {
        source: "/solutions",
        destination: "/services",
        permanent: true,
      },
       {
        source: "/hormonal-balance-quiz",
        destination: "/",
        permanent: true,
      },
       {
        source: "/pcos",
        destination: "/Blogs/3",
        permanent: true,
      },
       {
        source: "/stress-and-pcos-how-cortisol-worsens-hormonal-imbalance",
        destination: "/Blogs/2",
        permanent: true,
      },
       {
        source: "/how-fad-diets-mess-up-your-hormones",
        destination: "/Blogs/1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
