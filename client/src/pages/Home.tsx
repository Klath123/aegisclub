import { useState, useEffect } from "react";
import LetterGlitch from "../components/LetterGlitch";
import DecryptedText from "../components/DecryptedText";
// import { Terminal, TypingAnimation, AnimatedSpan } from "../components/terminal";
// import { BorderBeam } from "../components/BorderBeam";
//import { InfiniteMovingImages } from "../components/InfiniteMovingImages";

const Home = () => {
    const [animationPhase, setAnimationPhase] = useState<'welcome' | 'navbar' | 'aegis' | 'complete'>('welcome');
    const [showNeonGlow, setShowNeonGlow] = useState(false);
    // const [showNavbarElements, setShowNavbarElements] = useState(false);
    const [showTagline, setShowTagline] = useState(false);

    useEffect(() => {
        // Phase 1: Welcome to appears, breathes, and fades (2 seconds total)
        const welcomeTimer = setTimeout(() => {
            setAnimationPhase('aegis');
            // setShowNavbarElements(true);
        }, 2000);

        return () => clearTimeout(welcomeTimer);
    }, []);

    useEffect(() => {
        // Phase 2: After AEGIS appears with blur, activate neon glow and tagline
        if (animationPhase === 'aegis') {
            const neonTimer = setTimeout(() => {
                setShowNeonGlow(true);
                setShowTagline(true);
                setAnimationPhase('complete');
            }, 1000);

            return () => clearTimeout(neonTimer);
        }
    }, [animationPhase]);

    return (
        <>
            <div className="relative">
                {/* Hero Section with LetterGlitch Background - Full viewport height minus navbar */}
                <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 md:pt-24 overflow-hidden">
                    {/* LetterGlitch Background - Only for Hero Section */}
                    <div className="absolute inset-0 z-0">
                        <LetterGlitch
                            glitchColors={["#5110b2", "#e2e1e5", "#09196d"]}
                            glitchSpeed={30}
                            centerVignette
                            outerVignette
                            smooth
                        />
                        {/* Gradient overlay that fades to dark at the bottom */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09196d]/40 to-[#0a0a0f]" />
                    </div>

                    {/* Eyebrow Line - Absolute position in hero section - Appears after welcome with blur */}
                    {/* {showNavbarElements && (
                        <div
                            className="absolute top-24 left-1/2 -translate-x-1/2 z-20 inline-block px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-xl border fade-in-blur"
                            style={{
                                background: 'rgba(9, 9, 11, 0.75)',
                                backdropFilter: 'blur(20px) saturate(180%)',
                                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                                borderColor: 'rgba(255, 255, 255, 0.35)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)'
                            }}
                        >
                            <p className="text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-400 text-center" style={{ fontFamily: '"Proza Libre6", sans-serif' }}>
                                »Official Cybersecurity Club«
                            </p>
                        </div>
                    )} */}

                    <div className="z-10 flex flex-col items-center justify-center max-w-6xl mx-auto relative w-full">

                        {/* Overlapping Animated Headings - Fixed height container to prevent shifting */}
                        <div className="relative flex items-center justify-center w-full" style={{ height: '200px' }}>
                            {/* Phase 1: "Welcome to" with breathe animation */}
                            {animationPhase === 'welcome' && (
                                <h1
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide text-gray-300 text-center breathe-animation whitespace-nowrap"
                                    style={{ fontFamily: '"Ailerons", sans-serif', fontWeight: 100 }}
                                >
                                    Welcome to
                                </h1>
                            )}

                            {/* Phase 2: "AEGIS" appears with fade-in-blur effect and optional neon glow */}
                            {(animationPhase === 'aegis' || animationPhase === 'complete') && (
                                <h1
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] 2xl:text-[18rem] font-black tracking-tighter text-white text-center leading-none transition-all duration-1000 drop-shadow-[0_0_0px_rgba(255,255,255,0)] fade-in-blur ${showNeonGlow ? 'neon-glow-active' : ''
                                        }`}
                                    style={{ fontFamily: '"ikaros2", sans-serif', fontWeight: 300, WebkitTextStroke: '2px #000000' }}
                                >
                                    AEGIS
                                </h1>
                            )}
                        </div>


                        {/* Tagline at the bottom - Appears after AEGIS settles in */}
                        <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-white text-center mt-6 sm:mt-8 md:mt-10 min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem] transition-opacity duration-700 ${showTagline ? 'opacity-100' : 'opacity-0'}`} style={{ fontFamily: '"Proza Libre9", sans-serif' }}>
                            {showTagline && (
                                <DecryptedText
                                    key="tagline-decrypt"
                                    text="Decrypt . Decode . Decipher"
                                    animateOn="view"
                                    revealDirection="center"
                                    speed={75}
                                    scrambleSpeed={35}
                                    className="drop-shadow-[0_0_18px_rgba(255,255,255,0.65)]"
                                />
                            )}
                        </div>
                    </div>

                </div>

                {/* Rest of the page with matching dark background */}
                {/* <div className="bg-[#0a0a0f] relative">
                    {/* About Us Section with BorderBeam */}
                {/* <section className="min-h-screen py-20 px-4 sm:px-6 md:px-8 z-10">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative w-full p-8 sm:p-12 md:p-16 bg-black/40 backdrop-blur-md rounded-3xl border border-purple-500/30 overflow-hidden">
                                {/* Main Heading with Decrypt Animation */}
                {/* <div className="text-center mb-16">
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
                                </div> */}

                {/* Terminal Content Sections */}
                {/* <div className="space-y-16">
                                    {/* // WHO WE ARE Terminal */}
                {/* <div className="flex flex-col items-center">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Proza Libre1", sans-serif' }}>
                                            <DecryptedText
                                                text="// WHO WE ARE"
                                                animateOn="view"
                                                revealDirection="start"
                                                speed={60}
                                                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                                encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                            />
                                        </h3>
                                        <div className="relative w-full overflow-hidden rounded-xl">
                                            <Terminal className="w-full border border-purple-500/20">
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
                                                duration={18}
                                                size={170}
                                                borderWidth={2}
                                                colorFrom="#8200dfff"
                                                colorTo="#c1c0c3ff"
                                            />
                                        </div>
                                    </div> */}

                {/* // OUR MISSION Terminal */}
                {/* <div className="flex flex-col items-center">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Proza Libre1", sans-serif' }}>
                                            <DecryptedText
                                                text="// OUR MISSION"
                                                animateOn="view"
                                                revealDirection="start"
                                                speed={60}
                                                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                                encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                            />
                                        </h3>
                                        <div className="relative w-full overflow-hidden rounded-xl">
                                            <Terminal className="w-full border border-purple-500/20">
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
                                                duration={18}
                                                size={200}
                                                borderWidth={2}
                                                colorFrom="#8200dfff"
                                                colorTo="#c1c0c3ff"
                                            />
                                        </div>
                                    </div> */}

                {/* Initiatives & Events Terminal */}
                {/* <div className="flex flex-col items-center">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Proza Libre1", sans-serif' }}>
                                            <DecryptedText
                                                text="// INITIATIVES & FLAGSHIP EVENTS"
                                                animateOn="view"
                                                revealDirection="start"
                                                speed={60}
                                                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                                encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                            />
                                        </h3>
                                        <div className="relative w-full overflow-hidden rounded-xl">
                                            <Terminal className="w-full border border-purple-500/20">
                                                <TypingAnimation duration={30} className="text-purple-400">
                                                    $ ls -la events/
                                                </TypingAnimation>
                                                <AnimatedSpan className="text-gray-100 leading-relaxed">
                                                    Aegis actively organizes cybersecurity-focused events that bring together students and enthusiasts to learn, compete, and innovate.
                                                </AnimatedSpan>
                                                <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                    Our flagship events, Sandbox and Decipher, are designed to challenge participants through real-world security scenarios, fostering analytical thinking and hands-on problem-solving skills.
                                                </AnimatedSpan>
                                                <AnimatedSpan className="text-gray-100 leading-relaxed mt-3">
                                                    Through these initiatives, we aim to build a vibrant cybersecurity community that encourages curiosity, technical growth, and innovation.
                                                </AnimatedSpan>
                                                <AnimatedSpan className="text-green-400 mt-4">
                                                    ✓ Event catalog synchronized
                                                </AnimatedSpan>
                                            </Terminal>
                                            <BorderBeam
                                                duration={18}
                                                size={225}
                                                borderWidth={1}
                                                colorFrom="#8200dfff"
                                                colorTo="#c1c0c3ff"
                                            />
                                        </div>
                                    </div> */}

                {/* What We Do Terminal */}
                {/* <div className="flex flex-col items-center">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: '"Proza Libre1", sans-serif' }}>
                                            <DecryptedText
                                                text="// WHAT WE DO"
                                                animateOn="view"
                                                revealDirection="start"
                                                speed={60}
                                                className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                                encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                            />
                                        </h3>
                                        <div className="relative w-full overflow-hidden rounded-xl">
                                            <Terminal className="w-full border border-purple-500/20">
                                                <TypingAnimation duration={30} className="text-purple-400">
                                                    $ cat activities.log
                                                </TypingAnimation>
                                                <AnimatedSpan className="text-gray-100 leading-relaxed">
                                                    What defines Aegis is execution. We show up, we compete, and we deliver.
                                                </AnimatedSpan>
                                                <AnimatedSpan className="text-green-400 mt-4">
                                                    ✓ Activity log complete
                                                </AnimatedSpan>
                                            </Terminal>
                                            <BorderBeam
                                                duration={18}
                                                size={225}
                                                borderWidth={1}
                                                colorFrom="#8200dfff"
                                                colorTo="#c1c0c3ff"
                                            />
                                        </div>
                                    </div> */}
                {/* </div> */}

                {/* Border Beams for main container */}
                {/* <BorderBeam
                                    duration={18}
                                    size={325}
                                    borderWidth={3}
                                    colorFrom="#8200dfff"
                                    colorTo="#c1c0c3ff"
                                />
                            </div>
                        </div>
                    </section> */}

                {/* Event Highlights Gallery */}
                {/* <section className="py-20 px-4 sm:px-6 md:px-8 z-10">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono tracking-tighter text-white mb-4">
                                    <DecryptedText
                                        text="EVENT HIGHLIGHTS"
                                        animateOn="view"
                                        revealDirection="center"
                                        speed={70}
                                        characters="@#$%&*01234567"
                                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                        encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    />
                                </h2>
                                <p className="text-gray-200 font-mono text-sm md:text-base bg-black/30 px-4 py-2 rounded-lg inline-block">
                                    // Capturing moments from our cybersecurity journey
                                </p>
                            </div>
                            <InfiniteMovingCards
                                items={[
                                    {
                                        quote: "An intense 48-hour cybersecurity competition featuring penetration testing, cryptography challenges, and real-world attack scenarios. Teams competed to identify and exploit vulnerabilities in a simulated enterprise environment.",
                                        name: "Sandbox CTF 2024",
                                        title: "Annual Capture The Flag Competition"
                                    },
                                    {
                                        quote: "A comprehensive workshop series covering ethical hacking fundamentals, from reconnaissance and scanning to exploitation and post-exploitation techniques. Participants gained hands-on experience with industry-standard penetration testing tools.",
                                        name: "Ethical Hacking Workshop",
                                        title: "Penetration Testing Bootcamp"
                                    },
                                    {
                                        quote: "Our flagship cryptography challenge event where participants decode encrypted messages, break classical and modern ciphers, and solve cryptographic puzzles. This year featured advanced challenges in RSA, AES, and blockchain security.",
                                        name: "Decipher 2024",
                                        title: "Cryptography Challenge Event"
                                    },
                                    {
                                        quote: "Interactive sessions on network security fundamentals, covering packet analysis, intrusion detection systems, and secure network architecture. Students analyzed real network traffic and identified security threats using Wireshark and Snort.",
                                        name: "Network Security Series",
                                        title: "Advanced Network Defense Training"
                                    },
                                    {
                                        quote: "Team Aegis competed in national-level cybersecurity competitions, placing in the top 10 among 100+ teams. Our members demonstrated exceptional skills in web exploitation, reverse engineering, and forensics challenges.",
                                        name: "National CTF Championship",
                                        title: "Competitive Achievement 2024"
                                    }
                                ]}
                                direction="left"
                                speed="slow"
                            />
                        </div>
                    </section> */}

                {/* Event Photos Gallery */}
                {/* <section className="py-20 px-4 sm:px-6 md:px-8 z-10">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4" style={{ fontFamily: '"Ikaros1", sans-serif' }}>
                                    <DecryptedText
                                        text="EVENT GALLERY"
                                        animateOn="view"
                                        revealDirection="center"
                                        speed={70}
                                        characters="@#$%&*01234567"
                                        className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                        encryptedClassName="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    />
                                </h2>
                                <p className="text-gray-200 text-sm md:text-base bg-black/30 px-4 py-2 rounded-lg inline-block" style={{ fontFamily: '"Proza Libre2", sans-serif' }}>
                                    // Moments captured from our cybersecurity events
                                </p>
                            </div>

                            {/* First Row - Moving Right */}
                {/* <div className="mb-[0px]">
                                <InfiniteMovingImages
                                    images={[
                                        {
                                            src: "/event-1.png",
                                            alt: "CTF Competition Hall",
                                            caption: "Intense 48-hour CTF Competition"
                                        },
                                        {
                                            src: "/event-2.png",
                                            alt: "Cybersecurity Stage Setup",
                                            caption: "Futuristic Event Stage"
                                        },
                                        {
                                            src: "/event-3.jpg",
                                            alt: "Aegis CTF Venue",
                                            caption: "National Level CTF Championship"
                                        }
                                    ]}
                                    direction="right"
                                    speed="normal"
                                />
                            </div> */}

                {/* Second Row - Moving Left */}
                {/* <InfiniteMovingImages
                                images={[
                                    {
                                        src: "/event-4.jpg",
                                        alt: "Hackers at Work",
                                        caption: "Participants Solving Challenges"
                                    },
                                    {
                                        src: "/event-5.jpg",
                                        alt: "Team Aegis at CTF",
                                        caption: "Capture The Flag - Team Achievement"
                                    },
                                    {
                                        src: "/event-1.png",
                                        alt: "CTF Competition Hall",
                                        caption: "Intense 48-hour CTF Competition"
                                    }
                                ]}
                                direction="left"
                                speed="normal"
                            />
                        </div>
                    </section> */}
            </div >

        </>
    );
};

export default Home;