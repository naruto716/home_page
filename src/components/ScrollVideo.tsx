"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Sparkles, Target, Users, BarChart3, Shield } from "lucide-react";

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

// Card content components for each feature
const DetectionContent = () => (
  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">Smart Detection</h3>
    </div>
    <p className="text-neutral-300 text-lg leading-relaxed mb-6">
      Our AI automatically detects and locates animals in camera trap images with 
      <span className="text-emerald-400 font-semibold"> 98.5% accuracy</span>. 
      Process thousands of images in minutes, not hours.
    </p>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-neutral-800/50 rounded-xl p-4">
        <p className="text-3xl font-bold text-white">50K+</p>
        <p className="text-neutral-400 text-sm">Images processed daily</p>
      </div>
      <div className="bg-neutral-800/50 rounded-xl p-4">
        <p className="text-3xl font-bold text-white">&lt;2s</p>
        <p className="text-neutral-400 text-sm">Per image analysis</p>
      </div>
    </div>
  </div>
);

const ClassificationContent = () => (
  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">Species Classification</h3>
    </div>
    <p className="text-neutral-300 text-lg leading-relaxed mb-6">
      Identify over <span className="text-blue-400 font-semibold">500+ species</span> with 
      state-of-the-art deep learning models trained on millions of wildlife images.
    </p>
    <div className="flex flex-wrap gap-2">
      {["Mammals", "Birds", "Reptiles", "Amphibians"].map((tag) => (
        <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ReIDContent = () => (
  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">Individual Recognition</h3>
    </div>
    <p className="text-neutral-300 text-lg leading-relaxed mb-6">
      Track <span className="text-purple-400 font-semibold">individual animals</span> across 
      multiple sightings using unique patterns, markings, and AI-powered feature matching.
    </p>
    <div className="bg-neutral-800/50 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-neutral-400">Match Confidence</span>
        <span className="text-purple-400 font-semibold">94.2%</span>
      </div>
      <div className="w-full bg-neutral-700 rounded-full h-2">
        <div className="bg-purple-500 h-2 rounded-full" style={{ width: "94.2%" }}></div>
      </div>
    </div>
  </div>
);

const AnalyticsContent = () => (
  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">Population Analytics</h3>
    </div>
    <p className="text-neutral-300 text-lg leading-relaxed mb-6">
      Generate comprehensive <span className="text-amber-400 font-semibold">population reports</span> with 
      trends, distribution maps, and behavioral insights.
    </p>
    <div className="grid grid-cols-3 gap-3 text-center">
      <div className="bg-neutral-800/50 rounded-xl p-3">
        <p className="text-2xl font-bold text-white">↑12%</p>
        <p className="text-neutral-400 text-xs">Population Growth</p>
      </div>
      <div className="bg-neutral-800/50 rounded-xl p-3">
        <p className="text-2xl font-bold text-white">847</p>
        <p className="text-neutral-400 text-xs">Individuals Tracked</p>
      </div>
      <div className="bg-neutral-800/50 rounded-xl p-3">
        <p className="text-2xl font-bold text-white">23</p>
        <p className="text-neutral-400 text-xs">Active Sites</p>
      </div>
    </div>
  </div>
);

const ConservationContent = () => (
  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
        <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white">Habitat Protection</h3>
    </div>
    <p className="text-neutral-300 text-lg leading-relaxed mb-6">
      Identify critical habitats and corridors to inform 
      <span className="text-green-400 font-semibold"> conservation strategies</span> and 
      protect biodiversity hotspots.
    </p>
    <div className="flex items-center gap-4 bg-neutral-800/50 rounded-xl p-4">
      <div className="w-16 h-16 rounded-full bg-green-500/30 flex items-center justify-center">
        <span className="text-2xl">🌿</span>
      </div>
      <div>
        <p className="text-white font-semibold">15 Protected Areas</p>
        <p className="text-neutral-400 text-sm">Using MARS for monitoring</p>
      </div>
    </div>
  </div>
);

const cardsData = [
  {
    category: "Detection",
    title: "Automated Animal Detection",
    src: "https://faunalytics.org/wp-content/uploads/2025/03/sheep-with-green-ear-tag-looking-at-camera.jpg",
    content: <DetectionContent />,
  },
  {
    category: "Classification",
    title: "Species Identification",
    src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop",
    content: <ClassificationContent />,
  },
  {
    category: "Re-ID",
    title: "Individual Recognition",
    src: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?q=80&w=2072&auto=format&fit=crop",
    content: <ReIDContent />,
  },
  {
    category: "Analytics",
    title: "Population Insights",
    src: "https://images.unsplash.com/photo-1504173010664-32509aeebb62?q=80&w=2071&auto=format&fit=crop",
    content: <AnalyticsContent />,
  },
  {
    category: "Conservation",
    title: "Habitat Protection",
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2084&auto=format&fit=crop",
    content: <ConservationContent />,
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
            Explore RewildID Pro Features
          </h2>
          <Carousel items={cards} />
          
          {/* Glowing Grid Section with Spotlight */}
          <div className="mt-20 relative overflow-hidden rounded-3xl">
            <Spotlight />
            <div className="relative z-10 p-8 md:p-12">
              <h3 className="text-2xl lg:text-4xl font-semibold text-white mb-10 text-center">
                AI-Powered Conservation
              </h3>
              <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
              {/* Main description card */}
              <li className="min-h-[14rem] list-none md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]">
                <div className="relative h-full rounded-2xl border border-neutral-700 p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-neutral-900 p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border border-neutral-600 p-2">
                        <Sparkles className="h-4 w-4 text-neutral-400" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-sans text-xl font-semibold text-white md:text-2xl">
                          Next-Gen Wildlife Monitoring
                        </h4>
                        <p className="font-sans text-sm text-neutral-400 md:text-base">
                          Introducing <strong className="text-white">RewildID Pro</strong>, the next generation of wildlife monitoring. Our platform powers conservation efforts worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Species Detection */}
              <li className="min-h-[14rem] list-none md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]">
                <div className="relative h-full rounded-2xl border border-neutral-700 p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-neutral-900 p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border border-neutral-600 p-2">
                        <Target className="h-4 w-4 text-neutral-400" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-sans text-xl font-semibold text-white md:text-2xl">
                          Intelligent Species Detection
                        </h4>
                        <p className="font-sans text-sm text-neutral-400 md:text-base">
                          Researchers can identify, track, and protect endangered wildlife with unprecedented accuracy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* Re-identification - Large card */}
              <li className="min-h-[14rem] list-none md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]">
                <div className="relative h-full rounded-2xl border border-neutral-700 p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-neutral-900 p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border border-neutral-600 p-2">
                        <Users className="h-4 w-4 text-neutral-400" />
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-sans text-xl font-semibold text-white md:text-2xl">
                          Individual Re-Identification
                        </h4>
                        <p className="font-sans text-sm text-neutral-400 md:text-base">
                          Advanced re-identification algorithms enable individual animal tracking across multiple camera trap sightings over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 99% Accuracy */}
              <li className="min-h-[14rem] list-none md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]">
                <div className="relative h-full rounded-2xl border border-neutral-700 p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect spread={60} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-neutral-900 p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border border-neutral-600 p-2">
                        <BarChart3 className="h-4 w-4 text-neutral-400" />
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-400">Up to</p>
                        <h4 className="font-sans text-4xl lg:text-5xl font-bold text-white">
                          99%
                        </h4>
                        <p className="font-sans text-sm text-neutral-400 md:text-base">
                          species classification accuracy
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              {/* 1M+ Images */}
              <li className="min-h-[14rem] list-none md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]">
                <div className="relative h-full rounded-2xl border border-neutral-700 p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                  <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-neutral-900 p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border border-neutral-600 p-2">
                        <Shield className="h-4 w-4 text-neutral-400" />
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm text-neutral-400">Processing</p>
                        <h4 className="font-sans text-4xl lg:text-5xl font-bold text-white">
                          1M+
                        </h4>
                        <p className="font-sans text-sm text-neutral-400 md:text-base">
                          images analyzed daily
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollVideo;
