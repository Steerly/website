import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ProductStrip } from "./components/product-strip";
import { ProblemSection } from "./components/problem-section";
import { CapabilitiesSection } from "./components/capabilities-section";
import { ShowcaseSection } from "./components/showcase-section";
import { StudentJourney } from "./components/student-journey";

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
        <StudentJourney />
      </main>
    </>
  );
}
