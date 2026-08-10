import { SelectHTMLAttributes } from "react";

type FormSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: string[];
};

export default function FormSelect({
  label,
  options,
  id,
  ...rest
}: FormSelectProps) {
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={fieldId}
        className="font-mono text-xs font-bold uppercase tracking-wide text-ink-600"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={fieldId}
          className="w-full appearance-none rounded-md border-2 border-ink-600 bg-white px-4 py-3 pr-10 font-body text-sm text-ink-600 outline-none transition-shadow focus:shadow-hard-sm"
          {...rest}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-ink-600"
        >
          ▾
        </span>
      </div>
    </div>
  );
}
