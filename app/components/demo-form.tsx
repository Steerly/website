"use client";

import { useState, type FormEvent } from "react";
import { buttonClassName } from "./button";

type Status = "idle" | "submitting" | "success" | "error";

export function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    data.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""
    );
    data.append("subject", "New demo request from the Steerly website");
    data.append("from_name", "Steerly website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-black/15 bg-white/60 px-6 py-8 text-center">
        <p className="text-base font-medium text-black">
          Thanks — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-3 text-left"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className="rounded-lg border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-[#999999] focus-visible:border-black"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Work email"
        className="rounded-lg border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-[#999999] focus-visible:border-black"
      />
      <input
        type="text"
        name="school"
        placeholder="Driving school name"
        className="rounded-lg border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-[#999999] focus-visible:border-black"
      />
      <textarea
        name="message"
        rows={3}
        placeholder="Anything you'd like us to know? (optional)"
        className="resize-none rounded-lg border border-black/20 bg-white px-4 py-3 text-sm text-black placeholder:text-[#999999] focus-visible:border-black"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className={buttonClassName("primary", "mt-1 w-full")}
      >
        {status === "submitting" ? "Sending…" : "Book a Demo"}
      </button>
      {status === "error" && (
        <p className="text-sm text-black/70">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
