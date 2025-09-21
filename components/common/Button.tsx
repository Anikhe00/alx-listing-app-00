import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-md font-medium transition
        ${
          variant === "primary"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-black"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-80"}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
