import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type BaseProps = {
  label: string;
};

type FieldInputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

type FieldTextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

type FormFieldProps = FieldInputProps | FieldTextareaProps;

const fieldClasses =
  "w-full rounded-md border-2 border-ink-600 bg-white px-4 py-3 font-mono text-sm text-ink-600 placeholder:text-ink-400/60 outline-none transition-shadow focus:shadow-hard-sm";

export default function FormField(props: FormFieldProps) {
  const { label, id, as = "input", ...rest } = props;
  const fieldId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={fieldId}
        className="font-mono text-xs font-bold uppercase tracking-wide text-ink-600"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={fieldId}
          className={`${fieldClasses} min-h-[140px] resize-none`}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          className={fieldClasses}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
}
