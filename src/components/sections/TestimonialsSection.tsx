import { reviews } from "../../data/siteContent";

export function TestimonialsSection() {
  return (
    <section className="pt-24 md:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="reveal text-center"><p className="eyebrow">Kind words, warmly shared</p><h2 className="section-title mx-auto max-w-2xl">Loved in homes near and far.</h2></div>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((review, index) => (
            <figure className="reveal rounded-2xl border border-stone-200 bg-white/60 p-7 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition duration-300 hover:-translate-y-1" style={{ transitionDelay: `${index * 90}ms` }} key={review.name}>
              <div className="mb-6 flex gap-1 text-amber-600" aria-label="Five out of five stars">{Array.from({ length: 5 }, (_, star) => <span className="text-sm" aria-hidden="true" key={star}>★</span>)}</div>
              <blockquote className="font-serif text-[1.65rem] font-normal leading-[1.15] text-stone-800">“{review.quote}”</blockquote>
              <figcaption className="mt-8 border-t border-stone-200 pt-5 text-xs"><strong className="font-medium">{review.name}</strong><span className="ml-2 font-light text-stone-500">Verified customer · {review.location}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
