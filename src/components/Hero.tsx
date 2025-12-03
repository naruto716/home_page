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
                <img src="/title.png" alt="Deep Learning Based Animal Re-Identification" className="mt-4 max-w-3xl w-full" />
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
