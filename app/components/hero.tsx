import { Button } from "./button";
import { AppMockup } from "./app-mockup";

export function Hero() {
  return (
    <section className="bg-yellow">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-black/70">
            Driving School Management
          </span>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-black sm:text-5xl lg:text-6xl">
            Run your driving school, effortlessly.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-black/80">
            Manage students, lessons, instructors, vehicles, payments and
            everyday operations from one simple platform.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="#book-demo" variant="primary">
              Book a Demo
            </Button>
            <Button href="#how-it-works" variant="secondary">
              See How It Works
            </Button>
          </div>
        </div>
        <AppMockup
          variant="today"
          className="shadow-[0_20px_40px_rgba(17,17,17,0.08)]"
        />
      </div>
    </section>
  );
}
