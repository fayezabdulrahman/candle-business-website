"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";

const products = [
  {
    name: "Lavender Dusk",
    profile: "Calming & Floral",
    price: "$28.00",
    image: "/images/lavender-dusk.webp",
    alt: "LumaGlow Lavender Dusk candle beside dried lavender",
  },
  {
    name: "Morning Citrus",
    profile: "Bright & Energising",
    price: "$28.00",
    image: "/images/morning-citrus.jpg",
    alt: "LumaGlow Morning Citrus candle with fresh citrus",
  },
  {
    name: "Oak & Amber",
    profile: "Warm & Grounding",
    price: "$32.00",
    image: "/images/oak-amber.jpg",
    alt: "LumaGlow Oak and Amber candle in a warm interior",
  },
];

const testimonials = [
  {
    quote:
      "The Lavender Dusk candle transformed my evening routine. The scent is subtle but present, never overpowering.",
    initials: "ER",
    name: "Emily R.",
  },
  {
    quote:
      "Beautiful packaging and an even better burn. I bought three as gifts and ended up keeping one for myself.",
    initials: "JM",
    name: "Jordan M.",
  },
  {
    quote:
      "Finally, a candle that doesn’t give me a headache. The wood wick crackle makes the whole room feel calmer.",
    initials: "SK",
    name: "Sarah K.",
  },
];

export function LumaGlowHome() {
  const [cartCount, setCartCount] = useState(0);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.dataset.visible = "true");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <main>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="wordmark" href="#top" aria-label="LumaGlow home">
            LumaGlow
          </a>

          <div className="desktop-nav">
            <a href="#shop">Shop</a>
            <a href="#story">Our story</a>
            <a href="#sustainability">Sustainability</a>
          </div>

          <div className="nav-actions">
            <a className="cart-link" href="#shop" aria-label={`Cart with ${cartCount} items`}>
              Cart <span aria-hidden="true">({cartCount})</span>
            </a>
            <details className="mobile-menu">
              <summary aria-label="Open navigation menu">
                <span />
                <span />
              </summary>
              <div className="mobile-menu-panel">
                <a href="#shop">Shop</a>
                <a href="#story">Our story</a>
                <a href="#sustainability">Sustainability</a>
              </div>
            </details>
          </div>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow">
            <span /> New collection
          </div>
          <h1>
            Light up your <em>sanctuary.</em>
          </h1>
          <p className="hero-intro">
            Hand-poured soy candles made to bring warmth, calm, and a little
            ritual to your everyday spaces.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#shop">
              Shop collection <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#story">
              Discover our process <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Product highlights">
            <div>
              <strong>50+ hrs</strong>
              <span>Slow, clean burn</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Natural soy wax</span>
            </div>
          </div>
        </div>

        <div className="hero-media" data-reveal>
          <Image
            src="/images/hero-candle.webp"
            alt="Hand-poured LumaGlow candle on a stone table"
            width={1600}
            height={1600}
            priority
          />
          <div className="floating-note">
            <span className="flame" aria-hidden="true" />
            <div>
              <strong>Clean burn</strong>
              <span>50+ hours, toxin-free</span>
            </div>
          </div>
          <span className="image-index" aria-hidden="true">01</span>
        </div>
      </section>

      <section className="story section-shell" id="story">
        <div className="section-label">The LumaGlow ritual</div>
        <div className="story-grid">
          <div className="story-heading" data-reveal>
            <h2>The art of <em>slow living.</em></h2>
            <p>
              More than wax and wick, a candle is a quiet invitation to pause.
              Every LumaGlow scent is blended and poured by hand in small batches.
            </p>
            <a className="text-link" href="#sustainability">
              How we make our candles <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="story-collage" data-reveal>
            <Image
              className="story-image story-image-tall"
              src="/images/pouring-wax.jpg"
              alt="Candle maker hand pouring natural wax"
              width={1200}
              height={1800}
              loading="lazy"
            />
            <Image
              className="story-image story-image-square"
              src="/images/candle-detail.webp"
              alt="Close-up of a finished candle and its natural materials"
              width={800}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
        <div className="story-stats" data-reveal>
          <div><strong>100%</strong><span>Natural soy</span></div>
          <div><strong>0%</strong><span>Paraffin or toxins</span></div>
          <div><strong>Small</strong><span>Batch poured</span></div>
        </div>
      </section>

      <section className="products section-shell" id="shop">
        <div className="section-heading-row" data-reveal>
          <div>
            <div className="section-label">Signature collection</div>
            <h2>Curated scents for <em>every mood.</em></h2>
          </div>
          <a className="text-link desktop-only" href="#shop">
            View all candles <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article className="product-card" key={product.name} data-reveal>
              <div className="product-image-wrap">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={800}
                  height={index === 2 ? 1200 : 800}
                  loading="lazy"
                />
                {index === 0 && <span className="product-badge">Bestseller</span>}
                <button
                  className="quick-add"
                  type="button"
                  onClick={() => setCartCount((count) => count + 1)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  <span>Add to cart</span>
                  <strong aria-hidden="true">+</strong>
                </button>
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.profile}</p>
                </div>
                <span>{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="commitment" id="sustainability">
        <div className="commitment-inner section-shell">
          <div className="commitment-copy" data-reveal>
            <div className="section-label section-label-light">Our commitment</div>
            <h2>Mindfully made for a <em>better planet.</em></h2>
            <p>
              From locally sourced soy wax to recyclable glass vessels, every
              choice is made to leave a lighter footprint without compromising
              on scent or atmosphere.
            </p>
            <ul>
              <li><span aria-hidden="true">✓</span> Clean-burning, non-toxic ingredients</li>
              <li><span aria-hidden="true">✓</span> Plastic-free shipping materials</li>
              <li><span aria-hidden="true">✓</span> Small-batch production to reduce waste</li>
            </ul>
          </div>

          <div className="commitment-features" data-reveal>
            <article>
              <span className="feature-number">01</span>
              <h3>100% soy wax</h3>
              <p>Plant-based wax for a slower, cleaner burn and a beautifully even scent throw.</p>
            </article>
            <article>
              <span className="feature-number">02</span>
              <h3>Reusable vessels</h3>
              <p>Minimal glassware designed to live on as a tumbler, planter, or keepsake.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="testimonials section-shell">
        <div className="section-label centered">Community notes</div>
        <h2 data-reveal>Already part of their <em>daily ritual.</em></h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} data-reveal>
              <div className="stars" aria-label="Five out of five stars">★★★★★</div>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <span className="avatar" aria-hidden="true">{testimonial.initials}</span>
                <span><strong>{testimonial.name}</strong><small>Verified buyer</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="newsletter section-shell" data-reveal>
        <div>
          <div className="section-label">Stay in the glow</div>
          <h2>Join the <em>inner circle.</em></h2>
        </div>
        <div className="newsletter-copy">
          <p>Early access to seasonal drops, studio notes, and quiet little offers—sent sparingly.</p>
          {subscribed ? (
            <p className="success-message" role="status">You’re on the list. Welcome to the inner circle.</p>
          ) : (
            <form onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="Your email address" autoComplete="email" required />
              <button type="submit">Subscribe <span aria-hidden="true">→</span></button>
            </form>
          )}
          <small>By subscribing, you agree to receive LumaGlow updates.</small>
        </div>
      </section>

      <footer>
        <div className="footer-main section-shell">
          <div>
            <a className="wordmark wordmark-light" href="#top">LumaGlow</a>
            <p>Small-batch candles for slower, warmer living.</p>
          </div>
          <div className="footer-links">
            <div><strong>Explore</strong><a href="#shop">Shop</a><a href="#story">Our story</a><a href="#sustainability">Sustainability</a></div>
            <div><strong>Help</strong><a href="#top">Delivery & returns</a><a href="#top">Candle care</a><a href="mailto:hello@lumaglow.example">Contact</a></div>
            <div><strong>Follow</strong><a href="#top">Instagram</a><a href="#top">Pinterest</a><a href="#top">TikTok</a></div>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span>© {new Date().getFullYear()} LumaGlow Candles</span>
          <span>Made slowly. Burned beautifully.</span>
        </div>
      </footer>
    </main>
  );
}
