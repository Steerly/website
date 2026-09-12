import { AppMockup } from "./app-mockup";
import { Reveal } from "./reveal";

const stories = [
  {
    label: "Daily Operations",
    title: "Know what's happening today.",
    body: "See lessons, students, instructors and important activity from one place.",
    variant: "today" as const,
  },
  {
    label: "Student Management",
    title: "Keep every student moving forward.",
    body: "Manage the student journey from registration and practical lessons to trials and licensing.",
    variant: "students" as const,
  },
  {
    label: "Scheduling",
    title: "Make scheduling simple.",
    body: "Coordinate students, instructors, vehicles and lessons without the usual back-and-forth.",
    variant: "scheduling" as const,
  },
  {
    label: "Financials",
    title: "Know where your money stands.",
    body: "Track payment plans, installments, transactions, receipts and instructor payroll in one place.",
    variant: "financials" as const,
  },
];

export function ShowcaseSection() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20 sm:py-28">
        {stories.map((story, i) => (
          <Reveal key={story.label}>
            <article
              className={`flex flex-col gap-10 lg:items-center lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="lg:w-1/2">
                <AppMockup variant={story.variant} />
              </div>
              <div className="lg:w-1/2">
                <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-[#999999]">
                  {story.label}
                </span>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-black sm:text-3xl">
                  {story.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-[#666666]">
                  {story.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
