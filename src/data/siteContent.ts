import type { IconName } from "../components/Icon";

export type Product = {
  id: string;
  name: string;
  mood: string;
  notes: string;
  description: string;
  waxType: string;
  weight: string;
  burnTime: string;
  careAndSafety: string[];
  price: string;
  image: string;
  alt: string;
};

const standardCandleCare = [
  "Trim the wick to 5mm before each burn.",
  "Burn to the edges on the first light to prevent tunneling.",
  "Max 4 hours per burn.",
  "Never leave a burning candle unattended.",
  "Keep away from drafts, children, pets, and flammable items.",
  "Stop use when 10mm of wax remains.",
];

export const products: Product[] = [
  {
    id: "winter-nights",
    name: "Winter Nights",
    mood: "For rainy nights",
    notes: "Pine, Tar & Cedarwood",
    description: "Inspired by a quiet room anchored by a well-worn leather couch—one that holds a lifetime of untold history. This fragrance seamlessly marries the rich, nostalgic scent of vintage leather with the crisp, smoky essence of wild pine drifting in from the woods. It is a deeply grounding blend that brings the raw, untamed beauty of nature indoors, wrapping your space in warmth and quiet stories.",
    waxType: "100% C-3 Soy Wax",
    weight: "180g",
    burnTime: "35–40 hours",
    careAndSafety: standardCandleCare,
    price: "€18",
    image: "/images/winter-nights.jpg",
    alt: "Winter Nights candle glowing beside pine branches and vintage books",
  },
  {
    id: "japanese-honeysuckle",
    name: "Japanese Honeysuckle",
    mood: "For lovers of sweet scents",
    notes: "Mandarin, Honeysuckle & Tuberose",
    description: "First light at a garden gate, serving pure indulgence. Bright mandarin and crisp pine lift the air like a fresh breeze, quickly melting into a honeyed, mouth-watering chorus of honeysuckle, jasmine, tuberose, and rose. It smells so decadent you can almost taste it, settling into a rich, creamy base of cedarwood, earthy patchouli, and sweet vanilla. It is a warm, addictive blend that leaves you craving just one more moment—and completely unable to stop thinking about it until you light it again.",
    waxType: "100% C-3 Soy Wax",
    weight: "180g",
    burnTime: "35–40 hours",
    careAndSafety: standardCandleCare,
    price: "€18",
    image: "/images/japanese-honeysuckle.jpg",
    alt: "Japanese Honeysuckle candle surrounded by white blossoms in a sunlit kitchen",
  },
  {
    id: "jasmine-crown",
    name: "Jasmine Crown",
    mood: "For cherished memories",
    notes: "Jasmine, Magnolia & Musk",
    description: "A secluded walled garden at dawn, alive with childhood magic. Magnolia, cyclamen, cool cucumber, and melon capture the crisp morning air. The heart explodes into a nostalgic memory of weaving handmade jasmine crowns, unfurling rich tuberose, gardenia, and a soft whisper of peach. Settling onto a warm bed of creamy sandalwood and musk, this luxurious floral fills the room with innocent joy and a lingering, gentle encore.",
    waxType: "100% C-3 Soy Wax",
    weight: "180g",
    burnTime: "35–40 hours",
    careAndSafety: standardCandleCare,
    price: "€18",
    image: "/images/jasmine-crown.jpg",
    alt: "Jasmine Crown candle beside jasmine flowers at a bright window",
  },
  {
    id: "amber-confection",
    name: "Amber Confection",
    mood: "For cosy indulgences",
    notes: "Mandarin, Muguet & Vanilla",
    description: "A late-afternoon glow slips through a cracked window, wrapping you in sweet comfort. Zesty mandarin and soft, fruity facets open the scene like a fresh breeze, before a delicate heart of muguet and jasmine unfolds. It quickly transforms into a mouth-watering memory—reminiscent of fluffy, sticky cotton candy that melts instantly, leaving you craving more until the whole stick is gone. The blend rounds out on a cosy, elegant drift of vanilla, tonka, and sandalwood for a comforting evening of subtle, sweet intrigue.",
    waxType: "100% C-3 Soy Wax",
    weight: "180g",
    burnTime: "35–40 hours",
    careAndSafety: standardCandleCare,
    price: "€18",
    image: "/images/amber-confection.jpg",
    alt: "Amber Confection candle in a warm interior with lantern light and amber resin",
  },
  {
    id: "under-the-stars",
    name: "Under The Stars",
    mood: "For grounded moments",
    notes: "Jasmine, Magnolia & Musk",
    description: "A late-afternoon sun breaks through the woodland canopy, taking you back to nights under the stars. Grapefruit and pepper spark the air with a sharp, crisp energy—reminiscent of childhood camping trips in the deep forest. As night settles in, the grounding scent of the earth rises beneath your feet, unfurling deep patchouli, rich vetiver, cedarwood, and musk. It is a beautiful memory captured in glass, connecting you to the soothing stillness of nature.",
    waxType: "100% C-3 Soy Wax",
    weight: "180g",
    burnTime: "35–40 hours",
    careAndSafety: standardCandleCare,
    price: "€18",
    image: "/images/under-the-stars.jpg",
    alt: "Under The Stars candle glowing in a twilight garden beneath a starry sky",
  },
];

export const values: Array<{ icon: IconName; title: string; copy: string }> = [
  { icon: "leaf", title: "Botanical wax", copy: "A renewable soy bean plant wax for clean slow burn." },
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
    answer: "Every candle is poured in small batches using a renewable Soy Wax blend, fine fragrance oils and lead-free cotton wicks. The result is a clean, even burn with scent that settles gently into a room.",
  },
  {
    question: "How long will my candle burn?",
    answer: "Our 180g candles burn for approximately 35-40 hours when the wick is trimmed to 5mm before each use and the first burn is allowed to reach the edge of the vessel.",
  },
  {
    question: "Can I reuse the glass vessel?",
    answer: "Yes. Once the candle is finished, wash the vessel with warm soapy water and reuse it as a small vase, desk tidy or keepsake jar.",
  },
  {
    question: "Do you create candles for events or gifting?",
    answer: "We welcome enquiries for thoughtful gifts, intimate events and small projects. Email us your enquiry and we would be more than happy to work with you to bring your idea to life.",
  },
];
