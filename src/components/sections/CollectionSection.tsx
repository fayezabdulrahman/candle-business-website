import { useEffect, useRef, useState } from "react";
import { BRAND_EMAIL, BRAND_NAME } from "../../config/brand";
import { products, type Product } from "../../data/siteContent";
import { Icon } from "../Icon";

export function CollectionSection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return;
    const activeDialog = dialog;

    function handleBackdropClick(event: MouseEvent) {
      if (event.target === activeDialog) {
        activeDialog.close();
      }
    }

    activeDialog.addEventListener("click", handleBackdropClick);

    if (selectedProduct && !activeDialog.open) {
      activeDialog.showModal();
    }

    return () => activeDialog.removeEventListener("click", handleBackdropClick);
  }, [selectedProduct]);

  function closeDialog() {
    dialogRef.current?.close();
  }

  const enquiryHref = selectedProduct
    ? `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(`${selectedProduct.name} enquiry`)}&body=${encodeURIComponent(`Hello ${BRAND_NAME},\n\nI would like to enquire about ${selectedProduct.name}.`)}`
    : `mailto:${BRAND_EMAIL}`;

  return (
    <section id="collection" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div><p className="eyebrow">Curated scents</p><h2 className="section-title max-w-2xl">Made for the mood you want to keep.</h2></div>
          <p className="max-w-sm text-sm font-light leading-6 text-stone-600">Five grounded compositions, each blended to settle gently into the background of daily life.</p>
        </div>

        <div className="grid grid-flow-dense grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-6">
          {products.map((product, index) => (
            <article
              className={`reveal product-card group ${index >= products.length - 2 ? "lg:col-span-3" : "lg:col-span-2"} ${index === products.length - 1 ? "md:col-span-2 md:w-[calc(50%-0.75rem)] md:justify-self-center lg:w-auto lg:justify-self-stretch" : ""}`}
              style={{ transitionDelay: `${index * 90}ms` }}
              key={product.id}
            >
              <button
                className={`relative block aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl bg-stone-100 text-left ${index >= products.length - 2 ? "lg:aspect-[4/3]" : ""}`}
                type="button"
                aria-haspopup="dialog"
                aria-label={`Discover ${product.name}`}
                onClick={() => setSelectedProduct(product)}
              >
                <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={product.image} alt={product.alt} width="800" height="1000" loading="lazy" decoding="async" />
                <span className="product-overlay absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-5 py-3.5 text-xs font-medium text-stone-900 shadow-lg backdrop-blur-md">
                  <span>Discover this scent</span><span className="grid size-8 place-items-center rounded-full bg-stone-900 text-white"><Icon name="plus" className="size-4" /></span>
                </span>
              </button>
              <div className="flex items-start justify-between gap-4 px-1 pt-5">
                <div><p className="mb-1 text-[0.65rem] uppercase tracking-[0.14em] text-stone-500">{product.mood}</p><h3 className="font-serif text-2xl font-medium">{product.name}</h3><p className="mt-1 text-xs font-light text-stone-500">{product.notes}</p></div>
                <span className="pt-6 text-sm font-normal">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <dialog
        className="scent-dialog"
        ref={dialogRef}
        aria-labelledby="scent-dialog-title"
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <div className="scent-dialog-panel">
            <button className="scent-dialog-close" type="button" onClick={closeDialog} aria-label="Close scent details">
              <Icon name="x" className="size-4" />
            </button>
            <div className="scent-dialog-media">
              <img src={selectedProduct.image} alt="" width="1122" height="1402" />
            </div>
            <div className="scent-dialog-content">
              <p className="eyebrow">{selectedProduct.mood}</p>
              <h3 className="font-serif text-[clamp(2.6rem,5vw,4.2rem)] font-medium leading-[0.9] tracking-[-0.04em]" id="scent-dialog-title">{selectedProduct.name}</h3>
              <p className="mt-5 text-sm font-light leading-7 text-stone-600">{selectedProduct.description}</p>
              <div className="mt-7 border-y border-stone-200 py-5">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.16em] text-stone-500">Fragrance notes</p>
                <p className="mt-1.5 font-serif text-xl text-stone-800">{selectedProduct.notes}</p>
                <dl className="mt-5 grid grid-cols-3 gap-4 border-t border-stone-200 pt-5">
                  <div>
                    <dt className="text-[0.58rem] font-medium uppercase tracking-[0.14em] text-stone-500">Wax type</dt>
                    <dd className="mt-1 font-serif text-lg text-stone-800">{selectedProduct.waxType}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.58rem] font-medium uppercase tracking-[0.14em] text-stone-500">Weight</dt>
                    <dd className="mt-1 font-serif text-lg text-stone-800">{selectedProduct.weight}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.58rem] font-medium uppercase tracking-[0.14em] text-stone-500">Burn time</dt>
                    <dd className="mt-1 font-serif text-lg text-stone-800">{selectedProduct.burnTime}</dd>
                  </div>
                </dl>
              </div>
              <details className="scent-care border-b border-stone-200">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.12em] text-stone-700">
                  Candle care &amp; safety
                  <span className="scent-care-plus grid size-7 shrink-0 place-items-center rounded-full border border-stone-300"><Icon name="plus" className="size-3.5" /></span>
                </summary>
                <ul className="mb-5 ml-4 list-disc space-y-2 pr-4 text-xs font-light leading-5 text-stone-600 marker:text-amber-700">
                  {selectedProduct.careAndSafety.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </details>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                <span className="font-serif text-2xl font-medium">{selectedProduct.price}</span>
                <a className="button-primary" href={enquiryHref}>Enquire <Icon name="arrow-right" className="size-4" /></a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
