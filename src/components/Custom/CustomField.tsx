import React from "react";

interface CustomFieldProps {
  label: string;
  icon?: React.ReactNode;
  name: string;
  type?: "text" | "email" | "time" | "textarea" | "number" | "file" | "date"; // ✅ أضفنا date
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  // options?: { value: string; label: string }[];
  bg_white?: boolean;
  // isMulti?: boolean;
  required?: boolean;
  [x: string]: unknown;
}

const CustomField: React.FC<CustomFieldProps> = ({
  label,
  icon,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  // options = [],
  bg_white,
  // isMulti,
  required = false,
  ...rest
}) => {
  const baseClasses = `
    w-full px-4 py-3 md:py-[13.3px]
    ${bg_white ? "bg-white" : "bg-blue_gray"}
    focus:outline-none focus:ring-2 focus:ring-primary
    transition text-[14px]
  `;
  {
    /* text-sm py-3 */
  }
  const roundedClass = type === "textarea" ? "rounded-xl" : "rounded-2xl";

  return (
    <div
      className={`flex flex-col gap-2 w-full ${
        type === "textarea" && "h-full"
      }`}
    >
      {/* Label */}
      <label className="flex items-center gap-2 text-sm font-medium text-gray1">
        {icon && <span className="text-primary">{icon}</span>}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      {/* Field Type Rendering */}
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={5}
          required={required}
          className={`${baseClasses} ${roundedClass} resize-none md:flex-1`}
          {...rest}
        />
      ) : type === "file" ? (
        <input
          type="file"
          name={name}
          onChange={onChange}
          required={required}
          className={`${baseClasses} ${roundedClass}`}
          {...rest}
        />
      ) : (
        <input
          type={type} // ✅ هذا ممكن يكون text, email, date
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseClasses} ${roundedClass}`}
          {...rest}
        />
      )}
    </div>
  );
};

export default CustomField;
