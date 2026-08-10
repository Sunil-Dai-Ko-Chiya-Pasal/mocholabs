// components/TopAppSection.tsx
import Pill from "./Pill";
import Button from "./Button";
import Link from "next/link";
import MochoAppPreview from "./FluxAppPreview";

export default function FlagShipAppSection() {
    return (
        <section id="flux" className="mx-auto max-w-7xl px-6 py-20">
            <div className="sticker-border overflow-hidden bg-white">
                <div className="grid grid-cols-2 justify-center items-center gap-6 p-8 text-left sm:p-12">
                    <div className="space-y-4">
                        <Pill>Our Flagship App</Pill>

                        <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-ink-600 sm:text-4xl">
                            Meet{" "}
                            <span className="inline-block -rotate-1 rounded-lg border-2 border-ink-600 bg-primary-500 px-3 text-cream shadow-hard-sm">
                                Mocho
                            </span>
                        </h2>
                        <p className="max-w-md text-sm text-ink-400 sm:text-base">
                            The ultimate AI-powered dining assistant for users and a growth-engine for restaurants.
                            We've built the perfect tool to help you find what you're craving and help restaurants serve it up seamlessly.
                        </p>
                        <Link href='withmocho.com' >
                            <Button shape="rect" icon="→" className="mt-4" >
                                Get Early Access
                            </Button>
                        </Link>
                    </div>
                    <div className="w-full flex justify-center">
                        <MochoAppPreview />
                    </div>
                </div>

            </div>
        </section>
    );
}