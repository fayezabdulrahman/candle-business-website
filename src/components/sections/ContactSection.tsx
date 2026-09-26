import { BRAND_EMAIL, BRAND_NAME } from "../../config/brand";
import { Icon } from "../Icon";

export function ContactSection() {
  const enquiryHref = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(`${BRAND_NAME} scent enquiry`)}`;

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 md:py-32 lg:px-12">
      <div className="reveal mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-stone-200/70 px-6 py-14 text-center md:px-12 md:py-20">
        <span className="mx-auto mb-6 grid size-12 place-items-center rounded-full bg-white/80 text-amber-700"><Icon name="mail" /></span>
        <h2 className="font-serif text-[clamp(2.8rem,5vw,4.8rem)] font-medium leading-none tracking-[-0.035em]">Interested in one of our scents?</h2>
        <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-6 text-stone-600">Enquire about a fragrance, thoughtful gifting or an upcoming collection. We would love to help you find the right candle.</p>
        <a className="button-primary mt-8" href={enquiryHref}>Enquire by email <Icon name="arrow-right" className="size-4" /></a>
      </div>
    </section>
  );
}
