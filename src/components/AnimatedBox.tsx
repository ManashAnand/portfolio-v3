// components/AnimatedBox.tsx
"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function AnimatedBox() {

    const slashRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();
    useEffect(() => {
        const slash = slashRef.current;
        if (!slash) return;

        const screenW = window.innerWidth;
        const screenH = window.innerHeight;

        // Animate movement + height scaling
        const animation = slash.animate(
            [
                {
                    transform: `translate(0px, 0px) rotate(45deg) scaleY(1)`,
                    opacity: 0.2
                },
                {
                    transform: `translate(${screenW / 2}px, ${screenH / 2}px) rotate(45deg) scaleY(10.5)`,
                    opacity: 1
                },
                {
                    transform: `translate(${screenW}px, ${screenH}px) rotate(45deg) scaleY(2)`,
                    opacity: 0
                }
            ],
            {
                duration: 5000,
                easing: 'ease-in-out',
                fill: 'forwards'
            }
        );

        return () => animation.cancel();
    }, [theme]);


    return (
        <div
            ref={slashRef}
            className="absolute top-0 left-0 w-[20px] h-[100px] bg-blue-500  origin-top-left"
        />
    );
}
