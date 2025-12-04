"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

const TextSection = ({
  title,
  subtitle,
  scrollYProgress,
  index,
  total,
}: {
  title: string;
  subtitle: string;
  scrollYProgress: any;
  index: number;
  total: number;
}) => {
  const sectionStart = (index * 0.8) / total + 0.15;
  const sectionEnd = ((index + 1) * 0.8) / total + 0.15;
  const mid = (sectionStart + sectionEnd) / 2;

  const opacity = useTransform(
    scrollYProgress,
    [sectionStart, mid - 0.02, mid + 0.02, sectionEnd],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [sectionStart, mid, sectionEnd],
    [100, 0, -100]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
    >
      <h2 className="text-6xl md:text-8xl font-bold text-white mb-4">{title}</h2>
      <p className="text-xl md:text-2xl text-white/80 max-w-2xl">{subtitle}</p>
    </motion.div>
  );
};

export const ScrollVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.15], [0.7, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.15], [40, 0]);
  
  // Mask section - appears after text, starts at 0.85
  const maskOpacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);
  const maskScale = useTransform(scrollYProgress, [0.85, 1], [80, 1]);

  return (
    <div ref={containerRef} className="h-[600vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="w-full h-full overflow-hidden relative"
        >
          <video
            src="/videos/care-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Text sections - scroll 0.15 to 0.80 */}
          {textSections.map((section, index) => (
            <TextSection
              key={section.title}
              title={section.title}
              subtitle={section.subtitle}
              scrollYProgress={scrollYProgress}
              index={index}
              total={textSections.length}
            />
          ))}
          
          {/* SVG Mask - appears AFTER text finishes (0.85+) */}
          <motion.div 
            style={{ opacity: maskOpacity }}
            className="absolute inset-0 overflow-hidden"
          >
            <motion.svg
              viewBox="0 0 1920 1080"
              style={{ scale: maskScale }}
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <defs>
                <mask id="textMask">
                  <rect width="1920" height="1080" fill="white"/>
                  <text 
                    x="1000" 
                    y="570" 
                    textAnchor="middle" 
                    dominantBaseline="middle"
                    fontSize="200"
                    fontWeight="800"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fill="black"
                  >
                    MARSLab
                  </text>
                </mask>
              </defs>
              <rect width="1920" height="1080" fill="black" mask="url(#textMask)"/>
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollVideo;
