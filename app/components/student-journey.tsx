import { Reveal } from "./reveal";

const stages = [
  "Registration",
  "Medical",
  "Learner Permit",
  "Practical Lessons",
  "Trial",
  "License",
];

const activeStage = "Practical Lessons";

export function StudentJourney() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-black"
      style={{
        backgroundImage:
          "radial-gradient(50% 60% at 15% 0%, rgba(253,216,53,0.16), transparent), radial-gradient(45% 55% at 100% 100%, rgba(253,216,53,0.12), transparent)",
      }}
    >
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              From registration to driving license.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Keep the entire student journey connected and know what comes
              next.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative mt-16">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-4.5 hidden h-px bg-white/15 sm:block"
            />
            <ol className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              {stages.map((stage, i) => {
                const isActive = stage === activeStage;
                return (
                  <li
                    key={stage}
                    className="flex items-center gap-3 sm:flex-1 sm:flex-col sm:items-center sm:gap-3"
                  >
                    <span
                      className={`z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-mono text-xs ${
                        isActive
                          ? "bg-yellow text-black"
                          : "border border-white/25 bg-black text-white/60"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`text-sm font-medium sm:text-center ${
                        isActive ? "text-yellow" : "text-white/60"
                      }`}
                    >
                      {stage}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
