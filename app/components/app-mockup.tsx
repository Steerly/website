type Variant = "today" | "students" | "scheduling" | "financials";

const sidebarItems = [
  "Today",
  "Students",
  "Lessons",
  "Scheduling",
  "Instructors",
  "Vehicles",
  "Payments",
];

const activeBySidebar: Record<Variant, string> = {
  today: "Today",
  students: "Students",
  scheduling: "Scheduling",
  financials: "Payments",
};

function Pill({ tone, children }: { tone: "yellow" | "gray" | "black"; children: string }) {
  const tones = {
    yellow: "bg-yellow text-black",
    gray: "bg-[#F0F0F0] text-[#666666]",
    black: "bg-black text-white",
  } as const;
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

function TodayContent() {
  const stats = [
    { label: "Lessons today", value: "8" },
    { label: "Trials booked", value: "2" },
    { label: "Overdue payments", value: "1" },
  ];
  const lessons = [
    { time: "9:00", student: "A. Bennett", instructor: "R. Cole", status: "Confirmed" as const },
    { time: "10:30", student: "J. Okafor", instructor: "M. Silva", status: "Confirmed" as const },
    { time: "13:00", student: "L. Nguyen", instructor: "R. Cole", status: "Pending" as const },
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-[#E5E5E5] p-3">
            <p className="font-mono text-[10px] uppercase tracking-wide text-[#999999]">
              {s.label}
            </p>
            <p className="mt-1 text-xl font-semibold text-black">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg border border-[#E5E5E5]">
        {lessons.map((l, i) => (
          <div
            key={l.time}
            className={`flex items-center justify-between px-3 py-2.5 text-sm ${
              i !== lessons.length - 1 ? "border-b border-[#E5E5E5]" : ""
            }`}
          >
            <span className="w-12 font-mono text-xs text-[#999999]">{l.time}</span>
            <span className="flex-1 text-black">{l.student}</span>
            <span className="hidden flex-1 text-[#666666] sm:block">{l.instructor}</span>
            <Pill tone={l.status === "Confirmed" ? "yellow" : "gray"}>{l.status}</Pill>
          </div>
        ))}
      </div>
    </div>
  );
}

function StudentsContent() {
  const students = [
    { name: "A. Bennett", stage: "Practical Lessons", progress: 70 },
    { name: "J. Okafor", stage: "Trial", progress: 40 },
    { name: "L. Nguyen", stage: "Learner Permit", progress: 20 },
    { name: "S. Patel", stage: "License", progress: 100 },
  ];
  return (
    <div className="rounded-lg border border-[#E5E5E5]">
      {students.map((s, i) => (
        <div
          key={s.name}
          className={`flex items-center gap-3 px-3 py-2.5 text-sm ${
            i !== students.length - 1 ? "border-b border-[#E5E5E5]" : ""
          }`}
        >
          <span className="w-24 shrink-0 text-black">{s.name}</span>
          <span className="hidden w-36 shrink-0 text-[#666666] sm:block">{s.stage}</span>
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#F0F0F0]">
            <span
              className="block h-full rounded-full bg-yellow"
              style={{ width: `${s.progress}%` }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

function SchedulingContent() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const blocks: Record<string, number[]> = {
    Mon: [1, 3],
    Tue: [2],
    Wed: [0, 2, 4],
    Thu: [1],
    Fri: [0, 3],
  };
  return (
    <div className="grid grid-cols-5 gap-2">
      {days.map((day) => (
        <div key={day} className="rounded-lg border border-[#E5E5E5] p-2">
          <p className="font-mono text-[10px] uppercase tracking-wide text-[#999999]">
            {day}
          </p>
          <div className="mt-2 flex flex-col gap-1.5">
            {Array.from({ length: 5 }).map((_, i) =>
              blocks[day]?.includes(i) ? (
                <span key={i} className="block h-4 rounded bg-yellow" />
              ) : (
                <span key={i} className="block h-4 rounded bg-[#F5F5F5]" />
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function FinancialsContent() {
  const rows = [
    { label: "Payment plan — A. Bennett", amount: "$1,200", status: "Paid" as const },
    { label: "Installment 3/6 — J. Okafor", amount: "$180", status: "Paid" as const },
    { label: "Installment 1/4 — L. Nguyen", amount: "$220", status: "Pending" as const },
    { label: "Instructor payroll — R. Cole", amount: "$2,400", status: "Paid" as const },
  ];
  return (
    <div className="rounded-lg border border-[#E5E5E5]">
      {rows.map((r, i) => (
        <div
          key={r.label}
          className={`flex items-center justify-between px-3 py-2.5 text-sm ${
            i !== rows.length - 1 ? "border-b border-[#E5E5E5]" : ""
          }`}
        >
          <span className="text-black">{r.label}</span>
          <span className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#666666]">{r.amount}</span>
            <Pill tone={r.status === "Paid" ? "yellow" : "gray"}>{r.status}</Pill>
          </span>
        </div>
      ))}
    </div>
  );
}

export function AppMockup({
  variant = "today",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const active = activeBySidebar[variant];

  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#E0E0E0] bg-white ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5 border-b border-[#E5E5E5] bg-[#FAFAFA] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#DDDDDD]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#DDDDDD]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#DDDDDD]" />
      </div>
      <div className="flex">
        <aside className="hidden w-36 shrink-0 border-r border-[#E5E5E5] bg-[#FAFAFA] p-3 sm:block">
          <ul className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <li key={item}>
                <span
                  className={`block rounded-md px-2.5 py-1.5 text-xs font-medium ${
                    item === active
                      ? "bg-black text-yellow"
                      : "text-[#666666]"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </aside>
        <div className="flex-1 p-4">
          {variant === "today" && <TodayContent />}
          {variant === "students" && <StudentsContent />}
          {variant === "scheduling" && <SchedulingContent />}
          {variant === "financials" && <FinancialsContent />}
        </div>
      </div>
    </div>
  );
}
