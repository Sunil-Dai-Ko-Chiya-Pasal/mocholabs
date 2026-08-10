import Navbar from "@/components/Navbar";
import ContactIntro from "@/components/ContactIntro";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Insights", href: "#insights" },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar links={navLinks} ctaLabel="Hire Us" />

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-20 lg:grid-cols-2 lg:items-start">
        <ContactIntro />
        <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
