type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

export function InputField({ label, name, type = "text", placeholder, required }: InputFieldProps) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-charcoal">
      {label}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="focus-ring min-h-12 rounded border border-charcoal/15 bg-white px-4 text-base font-normal text-charcoal outline-none transition placeholder:text-charcoal/36 hover:border-gold"
      />
    </label>
  );
}
