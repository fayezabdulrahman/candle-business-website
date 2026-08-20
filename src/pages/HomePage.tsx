import { CollectionSection } from "../components/sections/CollectionSection";
import { ContactSection } from "../components/sections/ContactSection";
import { FaqSection } from "../components/sections/FaqSection";
import { Footer } from "../components/sections/Footer";
import { Header } from "../components/sections/Header";
import { HeroSection } from "../components/sections/HeroSection";
import { StorySection } from "../components/sections/StorySection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { ValuesSection } from "../components/sections/ValuesSection";
import { useReveal } from "../hooks/useReveal";

export function HomePage() {
  useReveal();

  return (
    <main className="w-full max-w-full overflow-x-hidden bg-[#FAF9F6] text-[#292524]">
      <Header />
      <HeroSection />
      <StorySection />
      <CollectionSection />
      <ValuesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
