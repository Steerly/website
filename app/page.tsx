import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { ProductStrip } from "./components/product-strip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductStrip />
      </main>
    </>
  );
}
