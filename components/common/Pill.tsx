import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 text-sm font-medium"
    >
      {label}
    </button>
  );
};

export default Pill;
