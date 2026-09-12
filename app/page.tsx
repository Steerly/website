import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ProductStrip } from "./components/product-strip";
import { ProblemSection } from "./components/problem-section";
import { CapabilitiesSection } from "./components/capabilities-section";
import { ShowcaseSection } from "./components/showcase-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductStrip />
        <ProblemSection />
        <CapabilitiesSection />
        <ShowcaseSection />
      </main>
    </>
  );
}
