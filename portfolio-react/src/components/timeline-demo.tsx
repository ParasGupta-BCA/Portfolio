import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
    const data = [
        {
            title: "Friten (2021-2026)",
            content: (
                <div>
                    <p className="mb-4 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
                        A comprehensive social media and IT ecosystem.
                    </p>
                    <div className="mb-8 font-normal text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2021:</span> Inception & Planning - Conceptualized the IT ecosystem and architecture.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2022:</span> MVP Development - Built essential connectivity tools and social features.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2023:</span> Launch & Feedback - Version 1.0 launch and user feedback loop.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2024:</span> Ecosystem Integration - Integrated interconnected IT services.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2025:</span> Scalability Focus - Advanced social features and global scalability.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2026:</span> Future Vision - Seamless interoperability and market maturity.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Indica Chat (2022-2026)",
            content: (
                <div>
                    <p className="mb-4 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
                        AI-powered chat platform for productivity.
                    </p>
                    <div className="mb-8 font-normal text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2022:</span> AI Research - Explored LLMs for intuitive chat.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2023:</span> Prototyping - Initial conversational UI with basic capabilities.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2024:</span> Multi-Model Integration - Switching engines for specialized tasks.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2025:</span> Agents & Workflows - Autonomous agents and automation.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2026:</span> Productivity Hub - Central hub for enterprise automation.
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Deork (2024-2026)",
            content: (
                <div>
                    <p className="mb-4 text-base font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
                        E-commerce fashion & clothing brand.
                    </p>
                    <div className="mb-8 font-normal text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2024:</span> Brand Launch - Established identity and initial collection.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2025:</span> UX Optimization - Refining user journeys and checkouts.
                        </div>
                        <div className="flex gap-2 mb-2 items-start">
                            <span className="font-bold min-w-[50px]">2026:</span> Market Expansion - New product lines and scaling operations.
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Placeholder images - using colored divs if real images not available yet or unsplash placeholders */}
                        <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 object-cover shadow-sm md:h-44 lg:h-60 flex items-center justify-center text-xs text-gray-400">Storefront</div>
                        <div className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 object-cover shadow-sm md:h-44 lg:h-60 flex items-center justify-center text-xs text-gray-400">Collection</div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
