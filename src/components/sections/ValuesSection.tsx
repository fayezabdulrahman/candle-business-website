import { values } from "../../data/siteContent";
import { Icon } from "../Icon";

export function ValuesSection() {
  return (
    <section id="values" className="relative scroll-mt-20 overflow-hidden bg-[#1C1917] py-24 text-stone-50 md:py-32">
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7"><p className="eyebrow !text-stone-400">Made with tomorrow in mind</p><h2 className="section-title max-w-3xl !text-stone-50">The glow feels better when nothing is wasted.</h2></div>
          <p className="max-w-md text-sm font-light leading-7 text-stone-400 lg:col-span-4 lg:col-start-9">From renewable wax to recyclable packaging, each choice is made to leave a lighter trace after the flame is gone.</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {values.map((value, index) => (
            <article className="reveal rounded-2xl border border-stone-700/50 bg-stone-800/30 p-8 backdrop-blur-md" style={{ transitionDelay: `${index * 90}ms` }} key={value.title}>
              <span className="mb-12 grid size-11 place-items-center rounded-full border border-stone-600 text-amber-500"><Icon name={value.icon} /></span>
              <h3 className="font-serif text-2xl font-medium">{value.title}</h3><p className="mt-3 text-sm font-light leading-6 text-stone-400">{value.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
