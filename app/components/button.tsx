"use client";

import React from "react";
import { IconType } from "react-icons";

interface BtnProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<BtnProps> = ({
  label,
  disabled,
  outline,
  custom,
  icon: Icon,
  onClick,
  small,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        className={`disabled:opacity-70 disabled:cursor-not-allowed 
            rounded-md hover:opacity-80 
            transition w-full border-slate-700 
            flex items-center justify-center gap-2 
            ${outline ? "bg-black " : "bg-slate-200"} ${outline ? "text-slate-700" : "text-white"} 
            ${small ? "text-sm font-light" : "text-md font-semibold"} ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"} 
            ${custom ? custom : ""} `}
      >
        {Icon && <Icon size={24} />}
        {label}
      </button>
    </>
  );
};

export default Button;
