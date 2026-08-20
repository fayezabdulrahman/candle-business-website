import { products } from "../../data/siteContent";
import { Icon } from "../Icon";

export function CollectionSection() {
  return (
    <section id="collection" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow">Curated scents</p><h2 className="section-title max-w-2xl">Made for the mood you want to keep.</h2></div>
          <p className="max-w-sm text-sm font-light leading-6 text-stone-600">Three grounded compositions, each blended to settle gently into the background of daily life.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product, index) => (
            <article className="reveal product-card group" style={{ transitionDelay: `${index * 90}ms` }} key={product.name}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100">
                <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={product.image} alt={product.alt} width="800" height="1000" loading="lazy" decoding="async" />
                <div className="product-overlay absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full border border-white/70 bg-white/75 px-5 py-3.5 text-xs font-medium shadow-lg backdrop-blur-md">
                  <span>Discover this scent</span><span className="grid size-8 place-items-center rounded-full bg-stone-900 text-white"><Icon name="plus" className="size-4" /></span>
                </div>
                <a className="absolute inset-0" href="#contact" aria-label={`Enquire about ${product.name}`} />
              </div>
              <div className="flex items-start justify-between gap-4 px-1 pt-5">
                <div><p className="mb-1 text-[0.65rem] uppercase tracking-[0.14em] text-stone-500">{product.mood}</p><h3 className="font-serif text-2xl font-medium">{product.name}</h3><p className="mt-1 text-xs font-light text-stone-500">{product.notes}</p></div>
                <span className="pt-6 text-sm font-normal">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
