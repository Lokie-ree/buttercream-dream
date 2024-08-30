import FeaturedCakesCarousel from "./components/FeaturedCakesCarousel";
import Hero from "./components/ui/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center overflow-x-clip">
      <Hero />
      <FeaturedCakesCarousel />
    </main>
  );
}
