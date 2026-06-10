"use client";

import { useMemo, useState } from "react";

const initialState = { name: "", phone: "", email: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const canSubmit = useMemo(
    () => form.name && form.phone && form.email && form.message,
    [form]
  );

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setSent(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!form.email.trim()) nextErrors.email = "Please enter your email address.";
    if (!form.message.trim()) nextErrors.message = "Please add a brief message.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    setSent(true);
    setForm(initialState);
    setErrors({});
  };

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-forest-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input value={form.name} onChange={update("name")} className={inputClass} />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input value={form.phone} onChange={update("phone")} className={inputClass} />
        </Field>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Email" error={errors.email}>
          <input type="email" value={form.email} onChange={update("email")} className={inputClass} />
        </Field>
        <Field label="Subject">
          <input value={form.subject} onChange={update("subject")} className={inputClass} />
        </Field>
      </div>
      <Field label="Message" error={errors.message}>
        <textarea value={form.message} onChange={update("message")} rows={6} className={`${inputClass} resize-none`} />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-forest-600">
          This frontend form is validated in-browser and can be wired to Formspree or EmailJS later.
        </p>
        <button
          type="submit"
          disabled={!canSubmit}
          className="rounded-full bg-forest-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Send message
        </button>
      </div>
      {sent ? (
        <p className="rounded-2xl border border-forest-100 bg-forest-50 px-4 py-3 text-sm text-forest-800">
          Thank you. Your message is ready for the next step of integration.
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-forest-800">{label}</span>
      {children}
      {error ? <span className="text-xs text-rose-700">{error}</span> : null}
    </label>
  );
}

const inputClass =
  "w-full rounded-2xl border border-forest-100 bg-sand-50/60 px-4 py-3 text-sm text-forest-900 outline-none transition placeholder:text-forest-400 focus:border-forest-300 focus:bg-white focus:ring-4 focus:ring-forest-100";
