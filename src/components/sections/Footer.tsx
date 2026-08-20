import { Link } from "react-router-dom";
import { BRAND_EMAIL, BRAND_NAME } from "../../config/brand";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#FAF9F6]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-12">
        <div><Link className="text-2xl font-medium uppercase tracking-[-0.07em]" to="/">{BRAND_NAME}</Link><p className="mt-3 text-xs font-light text-stone-500">Light, held with intention.</p></div>
        <div className="flex gap-6 text-xs text-stone-600 md:justify-center"><a href="#story">Our story</a><a href="#collection">Collection</a><a href="#faq">FAQ</a></div>
        <div className="text-xs text-stone-500 md:text-right"><a href={`mailto:${BRAND_EMAIL}`}>{BRAND_EMAIL}</a><p className="mt-3">© {new Date().getFullYear()} {BRAND_NAME}</p></div>
      </div>
    </footer>
  );
}
