import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollVideo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [40, 0]);

  return (
    <div ref={containerRef} className="h-[150vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="w-full h-full overflow-hidden"
        >
          <video
            src="/videos/care-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollVideo;
