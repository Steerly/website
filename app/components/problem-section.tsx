import { Reveal } from "./reveal";

const problems = [
  {
    index: "01",
    title: "Scattered information",
    body: "Student, lesson and payment information is difficult to keep organized across different systems.",
  },
  {
    index: "02",
    title: "Manual coordination",
    body: "Scheduling lessons, instructors and vehicles takes unnecessary time.",
  },
  {
    index: "03",
    title: "Limited visibility",
    body: "It can be difficult to see what's happening across the school at a glance.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
              Your driving school shouldn&apos;t run on spreadsheets.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#666666]">
              Managing students, lessons, instructors, vehicles and payments
              across different tools creates unnecessary work. Steerly brings
              your operations together in one place.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-3">
          {problems.map((problem) => (
            <Reveal key={problem.index}>
              <div className="border-t border-[#E0E0E0] pt-5">
                <span className="font-mono text-xs text-[#999999]">
                  {problem.index}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-black">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                  {problem.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
