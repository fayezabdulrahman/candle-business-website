import type { IconName } from "../components/Icon";

export const products = [
  {
    name: "Lavender Dusk",
    mood: "For slow evenings",
    notes: "Lavender · Iris · Pale cedar",
    price: "€28",
    image: "/images/lavender-dusk.webp",
    alt: "Lavender Dusk botanical candle in a clear glass vessel",
  },
  {
    name: "Morning Citrus",
    mood: "For brighter beginnings",
    notes: "Bergamot · Neroli · Green leaf",
    price: "€28",
    image: "/images/morning-citrus.jpg",
    alt: "Morning Citrus candle glowing in warm light",
  },
  {
    name: "Oak & Amber",
    mood: "For intimate gatherings",
    notes: "Amber · Oakmoss · Smoked vanilla",
    price: "€32",
    image: "/images/oak-amber.jpg",
    alt: "Oak and Amber candle arranged with natural materials",
  },
];

export const values: Array<{ icon: IconName; title: string; copy: string }> = [
  { icon: "leaf", title: "Botanical wax", copy: "A renewable soy and coconut blend for a cleaner, slower burn." },
  { icon: "recycle", title: "Reusable vessels", copy: "Thoughtfully shaped glass designed for a life beyond the candle." },
  { icon: "check", title: "Considered fragrance", copy: "Phthalate-free compositions blended with depth and restraint." },
];

export const reviews = [
  {
    quote: "Lavender Dusk has changed the rhythm of my evenings. It fills the room without ever taking it over.",
    name: "Emily R.",
    location: "Dublin",
  },
  {
    quote: "The scent feels layered and considered, and the vessel is beautiful enough to keep on display.",
    name: "Jordan M.",
    location: "London",
  },
  {
    quote: "Oak & Amber is warm without being heavy. It has quietly become part of our evening ritual.",
    name: "Sarah K.",
    location: "Galway",
  },
];

export const faqs = [
  {
    question: "What makes Melting Wicks candles different?",
    answer: "Every candle is poured in small batches using a renewable soy and coconut wax blend, fine fragrance oils and lead-free cotton wicks. The result is a clean, even burn with scent that settles gently into a room.",
  },
  {
    question: "How long will my candle burn?",
    answer: "Our 220g candles burn for approximately 45–50 hours when the wick is trimmed to 5mm before each use and the first burn is allowed to reach the edge of the vessel.",
  },
  {
    question: "Can I reuse the glass vessel?",
    answer: "Yes. Once the candle is finished, wash the vessel with warm soapy water and reuse it as a small vase, desk tidy or keepsake jar.",
  },
  {
    question: "Do you create candles for events or gifting?",
    answer: "We welcome enquiries for thoughtful gifts, intimate events and small hospitality projects. Email us with the quantity, date and atmosphere you have in mind.",
  },
];
