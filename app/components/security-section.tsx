import { Reveal } from "./reveal";

const items = [
  "Role-based access",
  "Secure authentication",
  "Audit history",
  "Payment records",
  "Automated backups",
  "Structured student records",
];

export function SecuritySection() {
  return (
    <section className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="max-w-xs text-xl font-semibold leading-snug tracking-tight text-black">
              Your school&apos;s operations, kept organized.
            </h2>
            <ul className="grid flex-1 grid-cols-2 gap-x-6 gap-y-3 sm:max-w-lg">
              {items.map((item) => (
                <li key={item} className="text-sm text-[#666666]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
