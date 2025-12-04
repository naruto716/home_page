"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

gsap.registerPlugin(ScrollTrigger);

const textSections = [
  {
    title: "Detect",
    subtitle: "Automatically identify animals in camera trap footage",
  },
  {
    title: "Classify",
    subtitle: "AI-powered species classification with 99% accuracy",
  },
  {
    title: "Re-Identify",
    subtitle: "Track individual animals across multiple sightings",
  },
  {
    title: "Conserve",
    subtitle: "Generate insights to protect native wildlife",
  },
];

// Card content component
const DummyContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Advanced wildlife monitoring technology.
      </span>{" "}
      Our AI-powered platform helps researchers and conservationists track, identify, 
      and protect endangered species across the globe.
    </p>
  </div>
);

const cardsData = [
  {
    category: "Detection",
    title: "Automated Animal Detection",
    src: "https://faunalytics.org/wp-content/uploads/2025/03/sheep-with-green-ear-tag-looking-at-camera.jpg",
    content: <DummyContent />,
  },
  {
    category: "Classification",
    title: "Species Identification",
    src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Re-ID",
    title: "Individual Recognition",
    src: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=2072&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Analytics",
    title: "Population Insights",
    src: "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=2071&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Conservation",
    title: "Habitat Protection",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2084&auto=format&fit=crop",
    content: <DummyContent />,
  },
];

export const ScrollVideo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const cards = cardsData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    // Animate text sections - slide up from bottom, then slide out upward
    textSections.forEach((_, index) => {
      const selector = `.text-section-${index}`;
      timeline
        .to(selector, { opacity: 1, y: 0, duration: 0.5 })      // slide in from y:100 to y:0
        .to(selector, { opacity: 0, y: -100, duration: 0.5 }, "+=0.3"); // slide out to y:-100
    });

    // Then animate mask and content
    timeline
      .to(".mask-img", {
        transform: "scale(1)",
        duration: 1,
      })
      .to(".showcase-content", { opacity: 1, y: 0, duration: 0.5, ease: "power1.in" });
  }, []);

  return (
    <section id="showcase" ref={sectionRef} className="relative">
      {/* Media section with video and mask */}
      <div className="media relative overflow-hidden">
        <video
          src="/videos/care-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full object-cover object-center"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Text sections that fade in/out */}
        {textSections.map((section, index) => (
          <div
            key={section.title}
            className={`text-section-${index} absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0`}
            style={{ transform: "translateY(100px)" }}
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">
              {section.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
              {section.subtitle}
            </p>
          </div>
        ))}
        
        <div className="mask">
          <img
            src="/mask-logo.svg"
            alt=""
            className="mask-img"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="showcase-content">
        <div className="container mx-auto px-5 pb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 pt-20">
            Explore MARS Features
          </h2>
          <Carousel items={cards} />
          
          {/* Additional content */}
          <div className="flex flex-col lg:flex-row justify-center gap-20 mt-20">
            <div className="lg:max-w-md">
              <h3 className="text-2xl lg:text-4xl font-semibold text-white mb-6">
                AI-Powered Conservation
              </h3>
              <div className="space-y-5 text-lg text-gray-400">
                <p>
                  Introducing{" "}
                  <span className="text-white">
                    MARS, the next generation of wildlife monitoring
                  </span>
                  . Our platform powers conservation efforts worldwide.
                </p>
                <p>
                  It drives intelligent species detection, so researchers can identify, 
                  track, and protect endangered wildlife with unprecedented accuracy.
                </p>
                <p>
                  Advanced re-identification algorithms enable individual animal tracking 
                  across multiple camera trap sightings over time.
                </p>
              </div>
            </div>

            <div className="max-w-xs space-y-14">
              <div className="space-y-2">
                <p className="text-gray-400">Up to</p>
                <h4 className="text-4xl lg:text-5xl font-semibold text-white">99%</h4>
                <p className="text-gray-400">species classification accuracy</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-400">Processing</p>
                <h4 className="text-4xl lg:text-5xl font-semibold text-white">1M+</h4>
                <p className="text-gray-400">images analyzed daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideo;
