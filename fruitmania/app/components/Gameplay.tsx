"use client";
import {useRef, useEffect } from "react";

export default function GameplayScreen() {
    const throwerRef = useRef<HTMLDivElement>(null);
    const fruits = useRef<{x: number; y: number; vx: number; vy:number}[]>([]);
    const playerRef = useRef<HTMLDivElement>(null);
    const position = useRef(0);
    const speed = 4;
    const keys = useRef({left: false, right:false});

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" || e.key === "a") keys.current.left = true;
            if (e.key === "ArrowRight" || e.key === "d") keys.current.right = true;
        };

        const up = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" || e.key === "a") keys.current.left = false;
            if (e.key === "ArrowRight" || e.key === "d") keys.current.right = false;
        };

        window.addEventListener("keydown", down);
        window.addEventListener("keyup", up);

        return () => {
            window.addEventListener("keydown", down);
            window.addEventListener("keyup", up);
        };
    }, []);

    // Gameplay loop
    useEffect(() => {
        let animationFrame: number;
        
        const loop = () => {

            const fruitsContainer = document.getElementById("gamebg");
            const containerWidth = window.innerWidth;
            const playerWidth = 50;

            // Player movements
            if (keys.current.left) position.current -= speed;
            if (keys.current.right) position.current += speed;

            if (position.current < 0) position.current = 0;
            if (position.current > containerWidth - playerWidth)
                position.current = containerWidth - playerWidth;

            if (position.current > 525) position.current = 525;

            if (playerRef.current) {
                playerRef.current.style.left = `${position.current}px`;
            }

            // Throwing items
            // random chance
            if (Math.random() < 0.03) {
                const startX = 672;
                const startY = 464;
                const vx = (Math.random() - 0.5) * 8;
                const vy = Math.random() * 4 + 4;
                fruits.current.push({ x:startX, y:startY, vx, vy});
            }
            // moving fruits
            fruits.current = fruits.current
            .map((f) => ({
                ...f,
                x: f.x + f.vx,
                y: f.y + f.vy,
            }))

            .filter((f) => f.y < 600);

            // rendering things
            if (fruitsContainer) {
                fruitsContainer.innerHTML = "";
                fruits.current.forEach((f) => {
                    const el = document.createElement("div");
                    el.className = "fruits";
                    el.style.left = `${f.x}px`;
                    el.style.top = `${f.y}px`;
                    fruitsContainer.appendChild(el);
                });
            }

            animationFrame = requestAnimationFrame(loop);
        };

            animationFrame = requestAnimationFrame(loop);

            return () => cancelAnimationFrame(animationFrame);
        
    }, []);

    return (
        <div className="gameplayscreen">
            <div className="gamebg">
                <img src="/assets/FruitmaniaBG.png" className="gamebgdisplay" alt="yoany character"/>
                <div className="thrower" ref={throwerRef}>
                    <img src="/assets/LittleVyleyHoldingPeaches.gif" className="throwerdisplay" alt="vyley character"/>
                </div>
                <div className="fruitstothrow">
                    <img src="/assets/Peach.png" className="thrownitemsdisplay" alt="Fruit to rain down"/>
                </div>
                <div className="boostertothrow">
                    <img src="/assets/Adderall.png" className="thrownitemsdisplay" alt="Fruit to rain down"/>
                </div>
                <div className="player" ref={playerRef}>
                    <img src="/assets/LittleOniHoldingBasketFloating.gif" className="playerdisplay" alt="yoany character"/>
                </div>
                
            </div>
        </div>
        )
}