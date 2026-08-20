import { useState } from "react";
import { Link } from "react-router-dom";
import { BRAND_NAME } from "../../config/brand";
import { Icon } from "../Icon";

const navigationItems = [
  { label: "Our story", href: "#story" },
  { label: "Collection", href: "#collection" },
  { label: "Our values", href: "#values" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b border-[#E7E5E2]/50 bg-[#FAF9F6]/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-12" aria-label="Main navigation">
        <Link className="text-[1.15rem] font-medium uppercase tracking-[-0.07em] text-stone-800" to="/" aria-label={`${BRAND_NAME} home`}>
          {BRAND_NAME}
        </Link>

        <div className="hidden items-center gap-9 text-xs font-normal text-stone-600 md:flex">
          {navigationItems.map((item) => <a className="nav-link" href={item.href} key={item.href}>{item.label}</a>)}
        </div>

        <div className="flex items-center gap-3">
          <a className="hidden min-h-10 items-center gap-2 rounded-full border border-stone-300 px-5 text-[0.7rem] font-medium uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-0.5 hover:border-stone-900 sm:inline-flex" href="#contact">
            Get in touch <Icon name="arrow-right" className="size-3.5" />
          </a>
          <button
            className="grid size-11 place-items-center rounded-full border border-stone-300 bg-[#FAF9F6] md:hidden"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>
        </div>

        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          {navigationItems.map((item) => (
            <a href={item.href} onClick={() => setMenuOpen(false)} key={item.href}>{item.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Get in touch</a>
        </div>
      </nav>
    </header>
  );
}
