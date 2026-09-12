import { Logo } from "./logo";

const links = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Contact", href: "#book-demo" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-[#666666]">
              Driving school management, simplified.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-black/70 transition-colors hover:text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10 text-xs text-[#999999]">
          © 2026 Steerly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
