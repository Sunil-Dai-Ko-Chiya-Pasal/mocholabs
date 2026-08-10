"use client";

import { FormEvent, useState } from "react";
import FormField from "./FormField";
import FormSelect from "./FormSelect";
import Button from "./Button";
import { ArrowRightIcon } from "./Icons";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  goal: string;
  details: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  goal: "Web",
  details: "",
};

const goalOptions = ["Web", "Mobile App", "Full Platform", "Not Sure Yet"];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">(
    "idle"
  );

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    // Wire this up to your endpoint / email provider of choice.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("sent");
    setForm(initialState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="sticker-border space-y-6 bg-white p-8"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          label="First Name"
          name="firstName"
          placeholder="Jane"
          value={form.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
          required
        />
        <FormField
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          value={form.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
          required
        />
      </div>

      <FormField
        label="Email Address"
        name="email"
        type="email"
        placeholder="you@company.com"
        value={form.email}
        onChange={(e) => updateField("email", e.target.value)}
        required
      />

      <FormSelect
        label="Select Your Goal"
        name="goal"
        options={goalOptions}
        value={form.goal}
        onChange={(e) => updateField("goal", e.target.value)}
      />

      <FormField
        as="textarea"
        label="Project Details"
        name="details"
        placeholder="Describe your vision..."
        value={form.details}
        onChange={(e) => updateField("details", e.target.value)}
        required
      />

      <Button
        type="submit"
        shape="rect"
        fullWidth
        size="lg"
        disabled={status === "submitting"}
        icon={<ArrowRightIcon />}
        className="disabled:opacity-70"
      >
        {status === "submitting"
          ? "Sending..."
          : status === "sent"
          ? "Request Sent"
          : "Submit Request"}
      </Button>

      {status === "sent" && (
        <p
          role="status"
          className="text-center font-mono text-xs text-ink-500"
        >
          Thanks — we&rsquo;ll be in touch within one business day.
        </p>
      )}
    </form>
  );
}
