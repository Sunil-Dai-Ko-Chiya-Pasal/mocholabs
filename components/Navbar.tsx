import Logo from "./Logo";
import Button from "./Button";
import Link from "next/link";

type NavLink = { label: string; href: string };

const defaultLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

export default function Navbar({
  links = defaultLinks,
  ctaLabel = "Get Started",
}: {
  links?: NavLink[];
  ctaLabel?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink-600 bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-ink-500 transition-colors hover:text-primary-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Link href='/contact'>
          <Button size="sm">{ctaLabel}</Button>
        </Link>
      </nav>
    </header>
  );
}
