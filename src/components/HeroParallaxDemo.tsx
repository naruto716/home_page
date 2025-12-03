"use client";
import { HeroParallax } from "./ui/hero-parallax";

const products = [
  { title: "Detection Dashboard", link: "#", thumbnail: "/images/app1.png" },
  { title: "Species Analysis", link: "#", thumbnail: "/images/app2.png" },
  { title: "Re-ID Results", link: "#", thumbnail: "/images/app3.png" },
  { title: "Library View", link: "#", thumbnail: "/images/app4.png" },
  { title: "Population Tracking", link: "#", thumbnail: "/images/app5.png" },
  { title: "Library View", link: "#", thumbnail: "/images/app4.png" },
  { title: "Population Tracking", link: "#", thumbnail: "/images/app5.png" },
  { title: "Detection Dashboard", link: "#", thumbnail: "/images/app1.png" },
  { title: "Species Analysis", link: "#", thumbnail: "/images/app2.png" },
  { title: "Re-ID Results", link: "#", thumbnail: "/images/app3.png" },
  { title: "Library View", link: "#", thumbnail: "/images/app4.png" },
  { title: "Population Tracking", link: "#", thumbnail: "/images/app5.png" },
  { title: "Detection Dashboard", link: "#", thumbnail: "/images/app1.png" },
  { title: "Species Analysis", link: "#", thumbnail: "/images/app2.png" },
  { title: "Re-ID Results", link: "#", thumbnail: "/images/app3.png" },
];

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
