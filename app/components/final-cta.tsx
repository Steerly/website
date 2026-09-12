import { Button } from "./button";
import { Reveal } from "./reveal";

export function FinalCta() {
  return (
    <section id="book-demo" className="bg-yellow">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-5xl">
            Ready to run your school differently?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-black/80">
            See how Steerly can simplify your driving school&apos;s daily
            operations.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#book-demo" variant="primary">
              Book a Demo
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-black/60">
            Built for modern driving schools.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
