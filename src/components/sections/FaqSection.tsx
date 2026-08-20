import { BRAND_EMAIL, BRAND_NAME } from "../../config/brand";
import { faqs } from "../../data/siteContent";
import { Icon } from "../Icon";

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="reveal lg:col-span-5"><p className="eyebrow">A little more clarity</p><h2 className="section-title max-w-md">Questions, answered simply.</h2><p className="mt-6 max-w-sm text-sm font-light leading-6 text-stone-600">Still curious? We are always happy to help you choose a scent or care for your candle.</p><a className="mt-8 inline-flex items-center gap-2 border-b border-stone-400 pb-1 text-xs font-medium uppercase tracking-[0.12em]" href={`mailto:${BRAND_EMAIL}`}>Email {BRAND_NAME} <Icon name="arrow-right" className="size-3.5" /></a></div>
          <div className="reveal divide-y divide-stone-200 border-y border-stone-200 lg:col-span-7">
            {faqs.map((faq, index) => (
              <details className="faq-item group" key={faq.question} open={index === 0}>
                <summary><span>{faq.question}</span><span className="faq-plus"><Icon name="plus" className="size-4" /></span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
