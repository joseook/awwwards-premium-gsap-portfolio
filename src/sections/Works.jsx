import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const previewRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  const mouse = useRef({ x: 0, y: 0 });
  const moveX = useRef(null);
  const moveY = useRef(null);
  const imageIntervalRef = useRef(null);

  useGSAP(() => {
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 2,
      ease: "power3.out",
    });

    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);
    setCurrentImageIndex(0);

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    // Start image rotation if project has multiple images
    const project = projects[index];
    if (project.images && project.images.length > 1) {
      imageIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % project.images.length
        );
      }, 2000); // Change image every 2 seconds
    }
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);
    setCurrentImageIndex(0);

    // Clear image rotation interval
    if (imageIntervalRef.current) {
      clearInterval(imageIntervalRef.current);
      imageIntervalRef.current = null;
    }

    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY + 24;
    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  const handleProjectClick = (project) => {
    if (project.href && project.href !== "#") {
      window.open(project.href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleProjectClick(project)}
          >
            {/* overlay */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

            {/* title */}
            <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
              <h2 className="lg:text-[32px] text-[26px] leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-6 size-5" />
            </div>
            {/* divider */}
            <div className="w-full h-0.5 bg-black/80" />
            {/* framework */}
            <div className="flex px-10 text-xs leading-loose uppercase transtion-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>
            {/* mobile preview image */}
            <div className="relative flex items-center justify-center px-10 md:hidden h-[400px]">
              <img
                src={project.bgImage}
                alt={`${project.name}-bg-image`}
                className="object-cover w-full h-full rounded-md brightness-50"
              />
              <img
                src={project.image}
                alt={`${project.name}-image`}
                className="absolute bg-center px-14 rounded-xl"
              />
            </div>
          </div>
        ))}
        {/* desktop Flaoting preview image */}
        <div
          ref={previewRef}
          className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
        >
          {currentIndex !== null && (
            <img
              src={
                projects[currentIndex].images && projects[currentIndex].images.length > 0
                  ? projects[currentIndex].images[currentImageIndex]
                  : projects[currentIndex].image
              }
              alt="preview"
              className="object-cover w-full h-full transition-opacity duration-500"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
