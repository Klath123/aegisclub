import { useState, useEffect } from "react";
import DecryptedText from "../components/DecryptedText";
import { Terminal, TypingAnimation, AnimatedSpan } from "../components/terminal";
import { BorderBeam } from "../components/BorderBeam";


const About = () => {
    const [borderBeamSize, setBorderBeamSize] = useState(700);

    useEffect(() => {
        const updateSize = () => {
            setBorderBeamSize(window.innerWidth < 768 ? 275 : 700);
        };

        // Set initial size
        updateSize();

        // Add resize listener
        window.addEventListener('resize', updateSize);

        // Cleanup
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <>
            {/* Page with dark background */}
            <div className="bg-[#0a0a0f] relative min-h-screen">
                {/* About Us Section with BorderBeam */}
                <section className="min-h-screen pb-20 px-4 sm:px-6 md:px-8 pt-28 md:pt-32 z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="relative w-full p-8 sm:p-12 md:p-16 bg-black/40 backdrop-blur-md rounded-3xl border border-purple-500/30 overflow-hidden">
                            {/* Main Heading with Decrypt Animation */}
                            <div className="text-center mb-16">
                                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8" style={{ fontFamily: '"Ikaros1", sans-serif' }}>
                                    <DecryptedText
                                        text="ABOUT US"
                                        animateOn="view"
                                        revealDirection="center"
                                        speed={80}
                                        characters="@#$%&*01234567"
                                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                        encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    />
                                </h2>
                            </div>

                            {/* Terminal Content Sections */}
                            <div className="space-y-16">
                                {/* // WHO WE ARE Terminal */}
                                <div className="flex flex-col items-center">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Proza Libre1", sans-serif' }}>
                                        <DecryptedText
                                            text="// WHO WE ARE"
                                            animateOn="view"
                                            revealDirection="start"
                                            speed={100}
                                            className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                            encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        />
                                    </h3>
                                    <div className="relative w-full overflow-hidden rounded-xl">
                                        <Terminal className="w-full bg-black border border-zinc-800">
                                            <TypingAnimation duration={30} className="text-purple-400">
                                                $ cat about-aegis.txt
                                            </TypingAnimation>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed">
                                                Aegis is where curiosity meets action.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                Aegis is the official cybersecurity club of the Department of Cyber Security.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-green-400 mt-4">
                                                ✓ Mission briefing complete
                                            </AnimatedSpan>
                                        </Terminal>
                                        <BorderBeam
                                            duration={14}
                                            size={170}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                    </div>
                                </div>

                                {/* // OUR MISSION Terminal */}
                                <div className="flex flex-col items-center">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Proza Libre1", sans-serif' }}>
                                        <DecryptedText
                                            text="// OUR MISSION"
                                            animateOn="view"
                                            revealDirection="start"
                                            speed={100}
                                            className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                            encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        />
                                    </h3>
                                    <div className="relative w-full overflow-hidden rounded-xl">
                                        <Terminal className="w-full bg-black border border-zinc-800">
                                            <TypingAnimation duration={30} className="text-purple-400">
                                                $ read mission.md
                                            </TypingAnimation>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed">
                                                What defines Aegis is execution. We show up, we compete, and we deliver.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                We believe real learning doesn't happen in isolation or through theory alone. Instead, it happens by building, breaking, and competing. Through hackathons, CTFs, and hands-on challenges, we push ourselves to think deeper, move faster, and perform under pressure.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                At Aegis, problems are meant to be solved, not observed. We collaborate, experiment, fail, iterate, and return stronger, turning curiosity into capability and capability into results.
                                            </AnimatedSpan>
                                            <AnimatedSpan className="text-green-400 mt-4">
                                                ✓ Mission statement loaded
                                            </AnimatedSpan>
                                        </Terminal>
                                        <BorderBeam
                                            duration={14}
                                            size={225}
                                            borderWidth={2}
                                            colorFrom="#8200dfff"
                                            colorTo="#c1c0c3ff"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Border Beams for main container */}
                            <BorderBeam
                                duration={10}
                                size={borderBeamSize}
                                borderWidth={3}
                                colorFrom="#8200dfff"
                                colorTo="#c1c0c3ff"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
