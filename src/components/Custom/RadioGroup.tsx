// RadioGroup.tsx
import React from "react";

interface Option {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: Option[];
  value?: string; // ✅ من Controller
  onChange?: (value: string) => void; // ✅ من Controller
  required?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-gray1 flex items-center gap-1">
        {label}
        {required && <span className="text-red-500 text-lg">*</span>}
      </label>
      <div className="flex items-center gap-4 flex-wrap">
        {options.map((option, i) => (
          <label
            key={i}
            className="flex items-center gap-1 text-sm cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value} // ✅ يحدد الخيار الصح
              onChange={() => onChange?.(option.value)} // ✅ يمرر القيمة
              required={required}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
