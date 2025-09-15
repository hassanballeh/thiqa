// components/CustomButton.tsx

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

interface CustomButtonProps {
  href?: string;
  label: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBg?: string;
  hoverTextColor?: string;
  bold?: boolean;
  onClick?: (e?: React.FormEvent) => void;
  type?: "button" | "submit";
  disabled? : boolean;
}

const CustomButton = ({
  href,
  label,
  bgColor = 'bg-transparent',
  textColor = 'text-black',
  borderColor = '',
  hoverBg = '',
  hoverTextColor = '',
  bold,
  onClick,
  type,
  disabled
}: CustomButtonProps) => {
  const baseClasses = clsx(
    'rounded-3xl px-6 py-1.5 transition-all duration-300',
    bgColor,
    textColor,
    borderColor ? `border ${borderColor}` : '',
    bold ? 'font-semibold' : 'font-medium',
    hoverBg && `hover:${hoverBg}`,
    hoverTextColor && `hover:${hoverTextColor}`
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span>{label}</span>
      </Link>
    );
  }

return (
  <button
    type={type || "button"} // ✅ افتراضي button عشان ما يعمل refresh
    className={baseClasses}
    onClick={onClick}
    disabled = {disabled}
  >
    {label}
  </button>
);

};

export default CustomButton;
