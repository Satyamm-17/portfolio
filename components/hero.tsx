"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const particles: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            life: number;
        }> = [];

        const createParticle = (x: number, y: number) => {
            particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1,
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "rgba(113, 90, 90, 0.1)";

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.01;

                if (p.life <= 0) {
                    particles.splice(i, 1);
                    continue;
                }

                ctx.globalAlpha = p.life * 0.5;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.globalAlpha = 1;

            if (Math.random() < 0.3) {
                createParticle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height
                );
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-6 inline-block hover-scale">
                    <div className="glow-border-primary px-4 py-2 rounded-full border border-primary">
                        <span className="text-sm text-primary font-mono">
                            Welcome to my portfolio
                        </span>
                    </div>
                </div>

                <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-balance">
                    <span className="text-foreground">Satyam</span>
                    <span className="text-primary ml-3">Kumar</span>
                </h1>

                <p className="text-xl sm:text-2xl text-foreground/80 mb-4 font-light">
                    Turning ideas into elegant code
                </p>

                <p className="text-foreground/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                    I'm a developer skilled in Python, JavaScript,
                    and backend systems. I specialize in building scalable,
                    efficient solutions that bridge the gap between innovative
                    ideas and production-ready code.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                    <a
                        href="/satyam-resume.pdf"
                        download
                        className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium glow-primary hover-scale hover:glow-primary transition-all duration-300"
                    >
                        View Resume
                    </a>
                    <button
                        onClick={() => scrollTo("contact")}
                        className="px-8 py-3 border border-primary/50 text-primary rounded-lg font-medium hover-scale hover:bg-primary/10 hover:border-primary transition-all duration-300"
                    >
                        Contact Me
                    </button>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={() => scrollTo("about")}
                        className="animate-bounce text-primary hover-scale"
                    >
                        <ChevronDown size={32} />
                    </button>
                </div>
            </div>
        </section>
    );
}
