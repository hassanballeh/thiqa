"use client";

import React from "react";
import Select, {
  StylesConfig,
  GroupBase,
  SingleValue,
  MultiValue,
  ActionMeta,
} from "react-select";

export interface Option {
  value: string;
  label: string;
}

interface SelectFieldProps {
  label: string;
  icon?: React.ReactNode;
  name: string;
  placeholder?: string;
  options: Option[];
  isMulti?: boolean;
  value?: SingleValue<Option> | MultiValue<Option>;
  onChange?: (
    value: SingleValue<Option> | MultiValue<Option>,
    actionMeta: ActionMeta<Option>
  ) => void;
  bg_white?: boolean;
  required?: boolean; // ✅ جديد
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  icon,
  name,
  placeholder,
  options,
  isMulti = false,
  value,
  onChange,
  bg_white,
  required = false,
}) => {
  const customStyles: StylesConfig<Option, boolean, GroupBase<Option>> = {
    control: (provided) => ({
      ...provided,
      padding: "0.3rem 0.5rem",
      borderRadius: "12px",
      backgroundColor: bg_white ? "white" : "#f0f4f8",
      borderColor: "#f0f4f8",
      boxShadow: "none",
      "&:hover": { borderColor: "#f0f4f8" },
    }),
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
    option: (provided) => ({ ...provided, cursor: "pointer" }),
  };

  // 🟢 نحضر قيمة النصوص لنجعلها تمرر للـ hidden input
  const hiddenValue = Array.isArray(value)
    ? value.map((v) => v.value).join(",")
    : (value as SingleValue<Option>)?.value || "";

  return (
    <div className="flex flex-col gap-2 w-full text-[14px]">
      <label className="flex items-center gap-2 text-sm font-medium text-gray1">
        {icon && <span className="text-primary">{icon}</span>}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <Select<Option, boolean, GroupBase<Option>>
        name={name}
        placeholder={placeholder}
        options={options}
        isMulti={isMulti}
        value={value}
        onChange={onChange}
        styles={customStyles}
      />

      {/* ✅ input مخفي علشان required يشتغل */}
      {required && (
        <input
          tabIndex={-1}
          autoComplete="off"
          style={{ opacity: 0, height: 0, position: "absolute" }}
          value={hiddenValue}
          onChange={() => {}}
          required
        />
      )}
    </div>
  );
};

export default SelectField;
