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
              For as long as I can remember, I have loved candles. The true inspiration for Melting Wicks came to life while roaming the Galway Market, where I discovered a beautifully crafted candle poured into an old-fashioned teacup that smelled utterly fantastic. That sensory memory shaped our founding belief: fragrance should softly invite an atmosphere, never overwhelm it. We blend our botanical notes with careful restraint, mindfully hand-pouring every vessel in small, considered batches.
            </p>
          </div>

          <div className="grid grid-cols-12 items-end gap-4 lg:col-span-6">
            <div className="group col-span-7 h-[440px] overflow-hidden rounded-[2rem] sm:h-[540px]">
              <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="/images/client-candle-collection.jpg" alt={`A collection of hand-poured ${BRAND_NAME} candles`} width="1350" height="1800" loading="lazy" decoding="async" />
            </div>
            <div className="group col-span-5 mb-10 h-[285px] overflow-hidden rounded-2xl sm:h-[350px]">
              <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="/images/client-candle-detail.jpg" alt={`Lit ${BRAND_NAME} candle styled with leaves and dried botanicals`} width="1800" height="1800" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
