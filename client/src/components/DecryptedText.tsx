import { motion, useInView } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface DecryptedTextProps extends HTMLMotionProps<"span"> {
    text: string;
    speed?: number;              // reveal speed
    scrambleSpeed?: number;      // flicker speed
    characters?: string;
    revealDirection?: "start" | "end" | "center";
    animateOn?: "view" | "hover";
    encryptedClassName?: string;
}

const DEFAULT_CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

export default function DecryptedText({
    text,
    speed = 70,
    scrambleSpeed = 30,
    characters = DEFAULT_CHARS,
    revealDirection = "start",
    animateOn = "view",
    className = "",
    encryptedClassName = "",
    ...props
}: DecryptedTextProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [hovered, setHovered] = useState(false);

    const shouldAnimate = animateOn === "hover" ? hovered : isInView;

    const [output, setOutput] = useState<string[]>(() =>
        Array.from(text).map(
            () => characters[Math.floor(Math.random() * characters.length)]
        )
    );

    useEffect(() => {
        if (!shouldAnimate) return;

        const order: number[] = (() => {
            if (revealDirection === "center") {
                const mid = Math.floor(text.length / 2);
                return [...Array(text.length).keys()].sort(
                    (a, b) => Math.abs(a - mid) - Math.abs(b - mid)
                );
            }
            if (revealDirection === "end") {
                return [...Array(text.length).keys()].reverse();
            }
            return [...Array(text.length).keys()];
        })();

        const revealed = new Set<number>();
        let revealIndex = 0;

        const scrambleInterval = setInterval(() => {
            setOutput(prev =>
                prev.map((_, i) =>
                    revealed.has(i)
                        ? text[i]
                        : characters[Math.floor(Math.random() * characters.length)]
                )
            );
        }, scrambleSpeed);

        const revealInterval = setInterval(() => {
            const i = order[revealIndex];
            if (i !== undefined) {
                revealed.add(i);
                revealIndex++;
            } else {
                clearInterval(revealInterval);
                clearInterval(scrambleInterval);
                setOutput(text.split(""));
            }
        }, speed);

        return () => {
            clearInterval(revealInterval);
            clearInterval(scrambleInterval);
        };
    }, [shouldAnimate, text, speed, scrambleSpeed, characters, revealDirection]);

    return (
        <motion.span
            ref={ref}
            className={`inline-block ${className}`}
            onMouseEnter={
                animateOn === "hover" ? () => setHovered(true) : undefined
            }
            onMouseLeave={
                animateOn === "hover" ? () => setHovered(false) : undefined
            }
            {...props}
        >
            {output.map((char, i) => (
                <span
                    key={i}
                    className={
                        char === text[i]
                            ? "text-white transition-colors duration-300"
                            : encryptedClassName
                    }
                >
                    {char}
                </span>
            ))}
        </motion.span>
    );
}
