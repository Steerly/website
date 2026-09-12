import { Reveal } from "./reveal";

const categories = [
  {
    name: "Students",
    items: [
      "Student management",
      "Student progress",
      "Documents",
      "Packages",
      "Student accounts",
    ],
  },
  {
    name: "Scheduling",
    items: [
      "Lesson booking",
      "Calendar",
      "Rescheduling",
      "Instructor availability",
      "Waitlist",
      "Trial scheduling",
    ],
  },
  {
    name: "Operations",
    items: [
      "Instructor management",
      "Leave management",
      "Vehicle fleet",
      "Vehicle issues",
      "Maintenance tracking",
    ],
  },
  {
    name: "Financials",
    items: [
      "Payment plans",
      "Installments",
      "Transactions",
      "Receipts",
      "Payroll",
      "Financial tracking",
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section id="product" className="bg-yellow/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl">
              One platform for your entire driving school.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#666666]">
              Steerly connects the people, schedules, payments and operations
              behind your driving school.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Reveal key={category.name}>
              <div className="border-t border-black/15 pt-5">
                <h3 className="font-mono text-xs font-medium uppercase tracking-wide text-black">
                  {category.name}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-black/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
