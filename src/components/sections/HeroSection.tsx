import { BRAND_NAME } from "../../config/brand";
import { Icon } from "../Icon";

export function HeroSection() {
  return (
    <section className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:pb-24 lg:pt-36">
      <div className="reveal max-w-2xl">
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-stone-200 bg-white/70 px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-stone-600">
          <span className="size-1.5 rounded-full bg-amber-600" aria-hidden="true" />
          Small-batch candles · Ireland
        </div>
        <h1 className="mb-7 font-sans text-[clamp(4rem,7.2vw,7.4rem)] font-light leading-[0.84] tracking-[-0.055em] text-stone-800">
          Light Up Your <span className="font-serif font-normal italic tracking-[-0.045em]">Sanctuary.</span>
        </h1>
        <p className="mb-9 max-w-lg text-base font-light leading-7 text-stone-600 md:text-lg">
          Hand-poured botanical candles designed to soften the room, slow the pace and turn everyday moments into rituals.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="button-primary" href="#collection">Explore the collection <Icon name="arrow-right" className="size-4" /></a>
          <a className="button-secondary" href="#story">Our approach</a>
        </div>
      </div>

      <div className="reveal relative lg:pl-5">
        <div className="hero-image relative h-[500px] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(28,25,23,0.1)] sm:h-[600px]">
          <img className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105" src="/images/melting-wicks-candle.webp" alt={`${BRAND_NAME} candle with a branded label surrounded by botanicals`} width="1361" height="2949" decoding="async" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/18 via-transparent to-white/5" aria-hidden="true" />
        </div>
        <div className="float-card absolute -bottom-5 left-2 z-10 flex w-[220px] items-center gap-4 rounded-2xl border border-white/70 bg-white/70 p-4 shadow-[0_15px_40px_rgba(28,25,23,0.12)] backdrop-blur-md lg:bottom-8 lg:-left-3">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-amber-50 text-amber-700"><Icon name="flame" /></span>
          <span><strong className="block font-serif text-lg font-medium">Clean burn</strong><small className="font-light text-stone-600">Plant wax · Cotton wick</small></span>
        </div>
      </div>
    </section>
  );
}
