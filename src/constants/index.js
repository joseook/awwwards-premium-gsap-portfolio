// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "I develop modern and scalable web applications with clean architecture, optimized databases and perfect integrations—ensuring reliability across all layers.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Next.js, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "E-commerce & Mobile",
    description:
      "I create complete e-commerce platforms and mobile applications that connect businesses to their customers efficiently and intuitively.",
    items: [
      {
        title: "E-commerce Platforms",
        description: "(Next.js, Stripe, Sanity CMS, MongoDB)",
      },
      {
        title: "Mobile Apps",
        description: "(React Native, Expo, Geolocalização)",
      },
      {
        title: "Payment Integration",
        description: "(Stripe, PayPal, Checkout Seguro)",
      },
    ],
  },
  {
    title: "3D & Interactive Web",
    description:
      "I specialize in immersive web experiences with Three.js, GSAP animations and interactive 3D elements that impress and engage users.",
    items: [
      {
        title: "3D Web Experiences",
        description: "(Three.js, React Three Fiber, 3D Models)",
      },
      {
        title: "Advanced Animations",
        description: "(GSAP, Framer Motion, Scroll Animations)",
      },
      {
        title: "Interactive UI",
        description: "(Spline, AR/VR, WebGL)",
      },
    ],
  },
  {
    title: "Modern Web Technologies",
    description:
      "I use the latest web technologies to create performant, accessible and SEO-optimized applications.",
    items: [
      {
        title: "Modern Frameworks",
        description: "(Next.js, Angular, Astro, Vite)",
      },
      {
        title: "Performance Optimization",
        description: "(Lighthouse 100+, Core Web Vitals)",
      },
      {
        title: "SEO & Accessibility",
        description: "(SSR, Metadata, A11y, PWA)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Academia Futuro Brilhante",
    description:
      "Um site moderno e responsivo para uma instituição educacional, construído com Angular 19, com suporte a temas, animações e arquitetura baseada em componentes.",
    href: "https://academia-angular.netlify.app/",
    image: "/images/projects/academia-futuro-brilhante/01.jpg",
    images: [
      "/images/projects/academia-futuro-brilhante/01.jpg",
      "/images/projects/academia-futuro-brilhante/02.jpg",
      "/images/projects/academia-futuro-brilhante/03.jpg"
    ],
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "RxJS" },
      { id: 5, name: "Angular Animations" },
    ],
  },
  {
    id: 2,
    name: "LeetCode Ghost Window",
    description:
      "Application designed to help solve LeetCode problems through a hidden window for screen recording software.",
    href: "https://github.com/joseook/leetcode-ghost-window",
    image: "/images/projects/leetcode-ghost-window/01.jpeg",
    images: [
      "/images/projects/leetcode-ghost-window/01.jpeg",
      "/images/projects/leetcode-ghost-window/02.jpeg",
      "/images/projects/leetcode-ghost-window/03.jpeg"
    ],
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Electron" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "OpenAI API" },
      { id: 5, name: "React" },
    ],
  },
  {
    id: 3,
    name: "Apple Website Clone",
    description:
      "Interactive Apple website clone featuring iPhones and MacBooks with 3D models, color customization and AR experience.",
    href: "https://iphone-template-project.vercel.app/",
    image: "/images/projects/apple-website-clone/01.jpeg",
    images: [
      "/images/projects/apple-website-clone/01.jpeg",
      "/images/projects/apple-website-clone/02.jpeg",
      "/images/projects/apple-website-clone/03.jpeg",
      "/images/projects/apple-website-clone/04.jpeg",
      "/images/projects/apple-website-clone/05.jpeg"
    ],
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Three.js" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Framer Motion" },
      { id: 5, name: "TailwindCSS" },
    ],
  },
  {
    id: 4,
    name: "SoftwareScan",
    description:
      "Plataforma móvel avançada que permite aos usuários registrar interações georreferenciadas, visualizar postagens com informações detalhadas e interagir com outros participantes.",
    href: "#",
    image: "/images/projects/softwarescan/01.jpg",
    images: [
      "/images/projects/softwarescan/01.jpg",
      "/images/projects/softwarescan/02.jpg",
      "/images/projects/softwarescan/03.jpg",
      "/images/projects/softwarescan/04.jpg",
      "/images/projects/softwarescan/05.jpg"
    ],
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React Native" },
      { id: 2, name: "MongoDB" },
      { id: 3, name: "Google Maps" },
      { id: 4, name: "Expo" },
    ],
  },
  {
    id: 5,
    name: "Nextech",
    description:
      "Modern Web Experience Platform - A cutting-edge web application featuring fictional tech products with an immersive user experience.",
    href: "https://nextech-wine.vercel.app/",
    image: "/images/projects/nextech/01.jpeg",
    images: [
      "/images/projects/nextech/01.jpeg",
      "/images/projects/nextech/02.jpeg",
      "/images/projects/nextech/03.jpeg",
      "/images/projects/nextech/04.jpeg",
      "/images/projects/nextech/05.jpeg"
    ],
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Tailwind CSS" },
      { id: 4, name: "Framer Motion" },
      { id: 5, name: "Three.js" },
    ],
  },
  {
    id: 6,
    name: "Velvet E-commerce",
    description:
      "Plataforma completa de e-commerce para moda com recursos avançados de carrinho, pagamento e administração de produtos.",
    href: "https://velvet-ecommerce-three.vercel.app/",
    image: "/images/projects/velvet-ecommerce/01.jpg",
    images: [
      "/images/projects/velvet-ecommerce/01.jpg",
      "/images/projects/velvet-ecommerce/02.jpg",
      "/images/projects/velvet-ecommerce/03.jpg",
      "/images/projects/velvet-ecommerce/04.jpg",
      "/images/projects/velvet-ecommerce/05.jpg"
    ],
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Stripe" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
];
export const socials = [
  { name: "Twitter", href: "https://twitter.com/joseokjs" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/jose-40baa9305/" },
  { name: "GitHub", href: "https://github.com/joseook" },
];

export const contactInfo = {
  email: "joseok.business@gmail.com",
  emailAlt: "info.joseok@xyz",
  phone: "+55 (11) 99999-9999",
  location: "São Paulo, Brasil",
  hours: "Segunda - Sexta, 9:00 - 18:00 (GMT-3)",
  description: "Available for remote projects"
};
