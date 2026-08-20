import { BRAND_NAME } from "../../config/brand";

export function StorySection() {
  return (
    <section id="story" className="scroll-mt-20 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-6 lg:pr-12">
            <p className="eyebrow">The art of slow living</p>
            <h2 className="section-title">A quieter way to fill a room.</h2>
            <p className="mt-7 max-w-xl text-base font-light leading-7 text-stone-600">
              {BRAND_NAME} began with a simple belief: fragrance should create atmosphere without overwhelming it. We blend botanical notes with restraint, then pour every vessel by hand in considered small batches.
            </p>
            <div className="mt-10 h-px w-24 bg-stone-200" />
            <dl className="mt-8 grid grid-cols-3 gap-5">
              <div><dt className="font-serif text-3xl font-medium">100%</dt><dd className="mt-1 text-[0.65rem] uppercase tracking-[0.13em] text-stone-500">Plant wax</dd></div>
              <div><dt className="font-serif text-3xl font-medium">50h</dt><dd className="mt-1 text-[0.65rem] uppercase tracking-[0.13em] text-stone-500">Slow burn</dd></div>
              <div><dt className="font-serif text-3xl font-medium">01</dt><dd className="mt-1 text-[0.65rem] uppercase tracking-[0.13em] text-stone-500">Poured by hand</dd></div>
            </dl>
          </div>

          <div className="grid grid-cols-12 items-end gap-4 lg:col-span-6">
            <div className="group col-span-7 h-[440px] overflow-hidden rounded-[2rem] sm:h-[540px]">
              <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="/images/pouring-wax.jpg" alt="Artisan pouring candle wax by hand" width="1200" height="1800" loading="lazy" decoding="async" />
            </div>
            <div className="group col-span-5 mb-10 h-[285px] overflow-hidden rounded-2xl sm:h-[350px]">
              <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="/images/candle-detail.webp" alt={`Reusable ${BRAND_NAME} glass vessel with botanical details`} width="800" height="800" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
