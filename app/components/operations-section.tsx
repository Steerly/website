import { Reveal } from "./reveal";

const words = ["Students", "Lessons", "Instructors", "Vehicles", "Payments"];

export function OperationsSection() {
  return (
    <section className="bg-yellow">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
              Built around the way driving schools actually work.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-black/80">
              Instructors, vehicles, lessons, student packages, trials,
              payments, leave and waitlists — Steerly keeps every part of
              daily operations connected.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ul className="mt-14 border-t border-black/15">
            {words.map((word, i) => (
              <li
                key={word}
                className={`border-b border-black/15 py-4 text-4xl font-semibold leading-none tracking-tight text-black sm:text-6xl ${
                  i % 2 === 1 ? "text-right" : "text-left"
                }`}
              >
                {word}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
