import ContactInfoCard from "./ContactInfoCard";
import { MailIcon, PinIcon } from "./Icons";

export default function ContactIntro() {
  return (
    <div>
      <h1 className="border-l-4 border-primary-500 pl-6 text-4xl font-bold uppercase leading-tight tracking-tight text-ink-600 sm:text-5xl">
        Ready to scale?
        <br />
        Let&rsquo;s talk.
      </h1>

      <p className="mt-6 max-w-md text-base text-ink-400">
        Drop the boilerplate. We build high-performance e-commerce
        experiences that dominate. Tell us what you need to crush your
        targets this quarter.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <ContactInfoCard icon={<MailIcon />} label="hello@mocholabs.com" />
        <ContactInfoCard icon={<PinIcon />} label="Terminal 4, Tech District" />
      </div>
    </div>
  );
}
