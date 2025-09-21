import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, children, hoverable = false }) => {
  return (
    <div
      className={`
        border rounded-lg shadow-md p-4 bg-white transition
        ${hoverable ? "hover:shadow-lg hover:scale-[1.02]" : ""}
      `}
    >
      {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
      <div className="mb-2">{children}</div>
    </div>
  );
};

export default Card;
