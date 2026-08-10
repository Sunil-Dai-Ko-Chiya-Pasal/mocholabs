import Logo from "./Logo";

const links = ["Terms", "Privacy", "Careers", "Contact"];
const social = ["Facebook", "Tiktok", "LinkedIn", "Instagram"];

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink-600 bg-black px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row">
        <div className="space-y-2">
          <Logo textClassName="text-primary-500 font-black text-5xl" />
          <p className="mt-1 font-mono text-[11px] text-ink-400">
            Building the unignorable infrastructure for ambitious e-commerce brands.
          </p>
          <p className="mt-1 font-mono text-[11px] text-ink-400">
            © 2024 Mocho Labs. All rights reserved.
          </p>
        </div>
        <div className="flex gap-20">
          <div>
            <div className="text-primary-500 text-sm border-b pb-2 mb-2">Navigate</div>
            <ul className="flex flex-col items-left justify-center gap-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-mono text-[11px] font-medium uppercase tracking-wide text-white hover:text-primary-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-primary-500 text-sm border-b pb-2 mb-2">Connect</div>
            <ul className="flex flex-col items-right justify-center gap-2">
              {social.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-mono text-[11px] font-medium uppercase tracking-wide text-white hover:text-primary-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
}
