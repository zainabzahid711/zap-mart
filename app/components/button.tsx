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
  transparent?: boolean;
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
  transparent,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        style={{
          borderBottom: `2px solid ${"#CCA471"}`,
          transition: "transform 0.1s ease",
        }}
        className={` mt-7 disabled:opacity-70 disabled:cursor-not-allowed 
            rounded-md hover:bg-borderColor 
             w-full border-none 
            flex items-center justify-center gap-2 
            ${transparent ? "bg-black " : ""} ${transparent ? "text-gray-300 bg-black border-4 border-borderColor" : "text-black"} 
            ${outline ? "bg-brownColor " : ""} ${outline ? "text-gray-300" : "text-black"} 
            ${small ? "text-sm font-light" : "text-md font-semibold"} ${small ? "py-1 px-2 border-[1px]" : "py-3 px-4 border-2"} 
            ${custom ? custom : ""} `}
        onClick={onClick}
      >
        {Icon && <Icon size={24} />}
        {label}
      </button>
    </>
  );
};

export default Button;
