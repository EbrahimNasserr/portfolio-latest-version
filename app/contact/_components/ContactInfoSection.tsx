"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { CopyButton } from "./CopyButton";
import { CONTACT_INFO, SOCIAL_LINKS } from "./data";

// ============================================================================
// CONTACT INFO SECTION COMPONENT
// ============================================================================

export const ContactInfoSection: React.FC = () => {
    return (
        <section id="contact" className="w-full py-16 px-4">
            <div className="mx-auto max-w-6xl border border-border rounded-lg bg-card/50 backdrop-blur-sm">
                <div className="flex flex-col justify-center px-4 md:px-6 pt-16 pb-8">
                    <h2 className="text-4xl font-bold md:text-5xl text-foreground">
                        Contact Me
                    </h2>
                    <p className="text-muted-foreground mb-5 text-base">
                        Let's discuss your next project or collaboration opportunity.
                    </p>
                </div>
                <div className="h-px w-full bg-border" />
                <div className="grid md:grid-cols-3">
                    {/* Email Section */}
                    <div className="flex flex-col justify-between border-b md:border-r md:border-b-0 border-border">
                        <div className="bg-muted/40 flex items-center gap-x-3 border-b border-border p-4">
                            <Mail className="text-muted-foreground size-5" strokeWidth={1} />
                            <h3 className="text-lg font-medium tracking-wider text-foreground">
                                Email
                            </h3>
                        </div>
                        <div className="flex items-center gap-x-2 p-4 py-12">
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="font-mono text-base font-medium tracking-wide hover:underline text-foreground"
                            >
                                {CONTACT_INFO.email}
                            </a>
                            <CopyButton text={CONTACT_INFO.email} className="size-6" />
                        </div>
                        <div className="border-t border-border p-4">
                            <p className="text-muted-foreground text-sm">
                                I respond to all emails within 24 hours.
                            </p>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="flex flex-col justify-between border-b md:border-r md:border-b-0 border-border">
                        <div className="bg-muted/40 flex items-center gap-x-3 border-b border-border p-4">
                            <MapPin className="text-muted-foreground size-5" strokeWidth={1} />
                            <h3 className="text-lg font-medium tracking-wider text-foreground">
                                Location
                            </h3>
                        </div>
                        <div className="flex items-center gap-x-2 p-4 py-12">
                            <span className="font-mono text-base font-medium tracking-wide text-foreground">
                                {CONTACT_INFO.location}
                            </span>
                        </div>
                        <div className="border-t border-border p-4">
                            <p className="text-muted-foreground text-sm">
                                Available for remote work worldwide.
                            </p>
                        </div>
                    </div>

                    {/* Phone Section */}
                    <div className="flex flex-col justify-between border-b-0 md:border-r-0 border-border">
                        <div className="bg-muted/40 flex items-center gap-x-3 border-b border-border p-4">
                            <Phone className="text-muted-foreground size-5" strokeWidth={1} />
                            <h3 className="text-lg font-medium tracking-wider text-foreground">
                                Phone
                            </h3>
                        </div>
                        <div className="flex items-center gap-x-2 p-4 py-12">
                            <div>
                                <div className="flex items-center gap-x-2">
                                    <a
                                        href={`tel:${CONTACT_INFO.phone}`}
                                        className="block font-mono text-base font-medium tracking-wide hover:underline text-foreground"
                                    >
                                        {CONTACT_INFO.phone}
                                    </a>
                                    <CopyButton text={CONTACT_INFO.phone} className="size-6" />
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-border p-4">
                            <p className="text-muted-foreground text-sm">
                                Available Sun-Thu, 9am-6pm EET.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-px w-full bg-border" />
                <div className="relative flex h-full min-h-[320px] items-center justify-center p-8">
                    <div className="relative z-1 space-y-6">
                        <h3 className="text-center text-3xl font-bold md:text-4xl text-foreground">
                            Find me online
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-muted/50 hover:bg-muted flex items-center gap-x-2 rounded-full border border-border px-4 py-2 transition-colors"
                                >
                                    <link.icon className="size-4 text-muted-foreground" />
                                    <span className="font-mono text-sm font-medium tracking-wide text-foreground">
                                        {link.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
