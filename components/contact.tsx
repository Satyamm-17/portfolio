"use client";

import type React from "react";

import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            link: "https://github.com/Satyamm-17",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/satyam-kumar-23b311370/",
        },
        { icon: Mail, label: "Email", link: "mailto:satyammkr17@gmail.com" },
    ];

    return (
        <section id="contact" className="w-full py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-2">
                        <span className="text-foreground">Get in</span>
                        <span className="text-primary ml-3">Touch</span>
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary glow-border-blue transition-all"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary glow-border-blue transition-all"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary glow-border-blue transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 glow-blue hover:shadow-[0_0_30px_rgba(102,170,255,0.7)] transition-all"
                            >
                                {submitted ? "Message Sent! ✓" : "Send Message"}
                                <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Social Links & Info */}
                    <div className="flex flex-col justify-center">
                        <div className="glow-border-blue rounded-lg p-8 bg-background/50 mb-8">
                            <h3 className="text-xl font-bold text-primary mb-6">
                                Let's Connect
                            </h3>
                            <div className="space-y-4">
                                {socialLinks.map((social, idx) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={idx}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                                        >
                                            <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                                                <Icon size={20} />
                                            </div>
                                            <span>{social.label}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="text-foreground/60 text-sm leading-relaxed">
                            <p>
                                I'm always interested in discussing new
                                projects, exciting ideas, and opportunities to
                                be part of innovative ventures.
                            </p>
                            <p className="mt-4">
                                Feel free to reach out through any of the
                                channels above!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
