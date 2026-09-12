import { Reveal } from "./reveal";

const highlights = [
  "Lesson reminders",
  "Payment reminders",
  "Overdue payment notifications",
  "Vehicle maintenance reminders",
  "Email notifications",
  "Receipts",
];

const flow = [
  "Lesson booked",
  "Student notified",
  "Lesson reminder",
  "Lesson completed",
  "Progress updated",
];

export function AutomationSection() {
  return (
    <section className="bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-md">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
                Let Steerly handle the follow-up.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#666666]">
                Reduce repetitive administrative work with automated
                reminders and notifications.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 content-start">
              {highlights.map((item) => (
                <li key={item} className="text-sm text-black/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-16 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-2">
            {flow.map((step, i) => (
              <div key={step} className="flex flex-1 items-center gap-2">
                <div className="flex-1 rounded-lg border border-[#E0E0E0] bg-white px-4 py-3 text-center text-sm font-medium text-black">
                  {step}
                </div>
                {i < flow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden text-[#999999] sm:block"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
