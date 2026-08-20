import type { FormEvent } from "react";
import { BRAND_EMAIL, BRAND_NAME } from "../../config/brand";
import { Icon } from "../Icon";

function handleEnquiry(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const email = String(data.get("email") ?? "");
  const subject = `${BRAND_NAME} enquiry`;
  const body = `Hello ${BRAND_NAME},\n\nI would like to hear more about your candles.\n\nMy email: ${email}`;

  window.location.href = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 md:py-32 lg:px-12">
      <div className="reveal mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-stone-200/70 px-6 py-14 text-center md:px-12 md:py-20">
        <span className="mx-auto mb-6 grid size-12 place-items-center rounded-full bg-white/80 text-amber-700"><Icon name="mail" /></span>
        <h2 className="font-serif text-[clamp(2.8rem,5vw,4.8rem)] font-medium leading-none tracking-[-0.035em]">Bring a little quiet home.</h2>
        <p className="mx-auto mt-5 max-w-lg text-sm font-light leading-6 text-stone-600">Share your email and we’ll open a personal enquiry so you can ask about scents, gifting or upcoming collections.</p>
        <form className="mx-auto mt-8 flex max-w-lg items-center rounded-full border border-stone-200 bg-white/80 p-1.5 shadow-sm backdrop-blur-sm focus-within:ring-2 focus-within:ring-stone-500 focus-within:ring-offset-2" onSubmit={handleEnquiry}>
          <label className="sr-only" htmlFor="email">Email address</label>
          <input className="min-w-0 flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-stone-400" id="email" name="email" type="email" autoComplete="email" placeholder="Your email address" required />
          <button className="grid size-11 shrink-0 place-items-center rounded-full bg-stone-900 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-amber-700" type="submit" aria-label="Start an email enquiry"><Icon name="arrow-right" className="size-4" /></button>
        </form>
      </div>
    </section>
  );
}
