import React from 'react';
import { Terminal, ShoppingCart, TrendingUp, Clapperboard } from 'lucide-react';

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const capabilities: Capability[] = [
  {
    icon: <Terminal className="w-7 h-7" strokeWidth={2.5} />,
    title: 'Custom Web Dev',
    description:
      'High-performance, scalable web architectures built from the ground up. No templates, just raw code tailored to your exact operational requirements.',
    tags: ['React', 'Next.js', 'Node'],
  },
  {
    icon: <ShoppingCart className="w-7 h-7" strokeWidth={2.5} />,
    title: 'E-Commerce Strategy',
    description:
      'Conversion-obsessed storefronts. We engineer checkout flows and catalog architectures that drive revenue and reduce friction.',
    tags: ['Shopify Plus', 'Headless'],
  },
  {
    icon: <TrendingUp className="w-7 h-7" strokeWidth={2.5} />,
    title: 'Digital Marketing',
    description:
      'Data-driven acquisition engines. We deploy aggressive, targeted campaigns that dominate search results and social feeds.',
    tags: ['SEO', 'PPC', 'Analytics'],
  },
  {
    icon: <Clapperboard className="w-7 h-7" strokeWidth={2.5} />,
    title: 'Content Creation',
    description:
      'Striking visual assets and copy that cuts through the noise. We produce high-impact content that commands attention and defines your brand.',
    tags: ['Video', 'Copywriting'],
  },
];

function CapabilityCard({ icon, title, description, tags }: Capability) {
  return (
    <div className="relative bg-white border-2 border-black rounded-2xl p-8 overflow-hidden shadow-[6px_6px_0_0_rgba(0,0,0,1)]">
      {/* Corner blob decoration */}
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-rose-100/70 pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-6 text-black">{icon}</div>

        <h3 className="text-2xl font-extrabold uppercase tracking-tight text-black mb-4">
          {title}
        </h3>

        <p className="text-neutral-700 leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-black text-white text-xs font-mono font-semibold tracking-wide uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CapabilitiesSection() {
  return (
    <section className="w-full bg-neutral-100 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold uppercase tracking-tight text-black mb-10">
          Our Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <CapabilityCard key={cap.title} {...cap} />
          ))}
        </div>
      </div>
    </section>
  );
}