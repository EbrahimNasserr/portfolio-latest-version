"use client";

import React from "react";
import { STATS } from "./data";

// ============================================================================
// PROOF SECTION COMPONENT
// ============================================================================

export const ProofSection: React.FC = () => {
    return (
        <section id="proof" className="w-full py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Proven Track Record
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Trusted by clients worldwide to deliver exceptional results
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
                    {STATS.map((stat, index) => (
                        <React.Fragment key={stat.label}>
                            <div>
                                <div className="text-3xl md:text-4xl font-light text-foreground mb-1 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground text-sm font-normal">
                                    {stat.label}
                                </div>
                            </div>
                            {index < STATS.length - 1 && (
                                <div className="hidden sm:block w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};
