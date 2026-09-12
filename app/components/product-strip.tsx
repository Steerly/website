const items = [
  "Students",
  "Lessons",
  "Instructors",
  "Vehicles",
  "Payments",
  "Trials",
  "Analytics",
];

export function ProductStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-[#666666]">
          Everything your driving school needs.
        </p>
        <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="font-mono text-xs uppercase tracking-wide text-black/60"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
