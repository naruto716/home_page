import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

    return (
        <section id="hero" className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
            <div>
                <p className="text-3xl text-white font-semibold">RewildID Pro</p>
                <h1 className="text-5xl md:text-6xl font-bold mt-4 rainbow-text">
                    Deep Learning Based<br />Animal Re-Identification
                </h1>
            </div>

            <video
                ref={videoRef}
                src="/videos/hero.mp4"
                autoPlay
                muted
                playsInline
                className="max-w-4xl w-full rounded-xl"
            />

        </section>
    );
};

export default Hero;
