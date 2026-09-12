import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ProductStrip } from "./components/product-strip";
import { ProblemSection } from "./components/problem-section";
import { CapabilitiesSection } from "./components/capabilities-section";
import { ShowcaseSection } from "./components/showcase-section";
import { StudentJourney } from "./components/student-journey";
import { AutomationSection } from "./components/automation-section";
import { OperationsSection } from "./components/operations-section";
import { SecuritySection } from "./components/security-section";
import { FinalCta } from "./components/final-cta";
import { Footer } from "./components/footer";

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
        <AutomationSection />
        <OperationsSection />
        <SecuritySection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
