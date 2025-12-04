"use client";
import { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Compare } from "@/components/ui/compare";
import { motion, useScroll, useTransform } from "motion/react";

export function ConservationTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const auroraOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.5, 1]);
  const data = [
    {
      title: "The Problem",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Stoats: New Zealand's Silent Predator
          </h3>
          <p className="mb-6 text-sm font-normal text-neutral-300 md:text-base">
            Introduced to New Zealand in the 1880s to control rabbit populations, stoats have become
            one of the most devastating predators of native wildlife. These small but fierce hunters
            are responsible for killing an estimated <span className="text-red-400 font-semibold">25 million native birds every year</span>.
          </p>
          <p className="mb-6 text-sm font-normal text-neutral-300 md:text-base">
            Iconic species like the kiwi, kākāpō, and whio (blue duck) face extinction without
            intervention. Traditional monitoring methods are slow and labor-intensive, making it
            nearly impossible to track predator populations effectively across New Zealand's
            vast wilderness.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1578950435899-d1c1bf932ab2?q=80&w=500&auto=format&fit=crop"
              alt="Stoat in New Zealand"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=500&auto=format&fit=crop"
              alt="Kiwi bird"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            MARS Lab: Animal Re-Identification Model
          </h3>
          <p className="mb-6 text-sm font-normal text-neutral-300 md:text-base">
            Our research team at the University of Auckland's MARS Lab developed the first
            AI-powered animal re-identification system specifically designed for New Zealand's
            conservation needs. This breakthrough allowed researchers to identify individual
            animals across multiple camera trap sightings.
          </p>
          <div className="mb-6 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
            <p className="text-sm text-neutral-400 mb-2">Research Publication</p>
            <a 
              href="https://ml4sg.auckland.ac.nz/animal-re-identification-model/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline text-sm md:text-base"
            >
              ml4sg.auckland.ac.nz/animal-re-identification-model
            </a>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              ✅ Individual stoat identification from camera traps
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              ✅ Deep learning-based feature extraction
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              ✅ Cross-camera matching capabilities
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              ✅ Collaboration with DOC (Department of Conservation)
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
              alt="AI Research"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500&auto=format&fit=crop"
              alt="Machine Learning"
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            RewildID Pro: The Next Generation
          </h3>
          <p className="mb-6 text-sm font-normal text-neutral-300 md:text-base">
            Building on our 2024 research, <span className="text-emerald-400 font-semibold">RewildID Pro</span> represents 
            a complete evolution of our animal re-identification technology. We've expanded beyond stoats to support 
            multiple species, dramatically improved accuracy, and created a user-friendly platform accessible to 
            conservation teams worldwide.
          </p>
          
          {/* Compare component */}
          <div className="mb-6 p-4 border rounded-3xl bg-neutral-900 border-neutral-800">
            <Compare
              firstImage="/images/app4.png"
              secondImage="/images/app2.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-full md:h-[400px]"
              slideMode="hover"
            />
          </div>
          
          <div className="mb-6 grid grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 text-center">
              <p className="text-3xl font-bold text-emerald-400">99%</p>
              <p className="text-xs text-neutral-400">Accuracy</p>
            </div>
            <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 text-center">
              <p className="text-3xl font-bold text-blue-400">1M+</p>
              <p className="text-xs text-neutral-400">Images/Day</p>
            </div>
            <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 text-center">
              <p className="text-3xl font-bold text-purple-400">50+</p>
              <p className="text-xs text-neutral-400">Species</p>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              🚀 Real-time detection and classification
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              🚀 Multi-species re-identification
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              🚀 Cloud-based processing pipeline
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              🚀 Conservation team dashboard
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-300 mb-2">
              🚀 Population analytics & insights
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "The Future",
      content: (
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Predator Free 2050
          </h3>
          <p className="mb-6 text-sm font-normal text-neutral-300 md:text-base">
            New Zealand has set an ambitious goal: become the first country to eliminate invasive 
            predators by 2050. RewildID Pro is designed to be a critical tool in achieving this vision,
            providing the monitoring capabilities needed to track and manage predator populations
            at a national scale.
          </p>
          <p className="mb-6 text-sm font-normal text-neutral-300 md:text-base">
            By combining AI-powered identification with community-driven conservation efforts,
            we're working towards a future where native species can thrive without the constant
            threat of introduced predators.
          </p>
          <div className="p-6 bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-lg border border-emerald-700/50">
            <p className="text-lg font-semibold text-white mb-2">Join the Mission</p>
            <p className="text-sm text-neutral-300">
              Whether you're a researcher, conservation group, or wildlife enthusiast, 
              RewildID Pro can help you make a difference.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div ref={containerRef} className="w-full relative">
      {/* Aurora background that fades in as you scroll */}
      <motion.div
        style={{ opacity: auroraOpacity }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        <AuroraBackground className="h-full w-full" showRadialGradient={true}>
          <div />
        </AuroraBackground>
      </motion.div>
      
      {/* Timeline content */}
      <div className="relative z-10">
        <Timeline data={data} />
      </div>
    </div>
  );
}

export default ConservationTimeline;
