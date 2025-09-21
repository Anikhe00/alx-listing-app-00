// Shared TypeScript interfaces for UI components

// Button props placeholder
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

// Card props placeholder
export interface CardProps {
  title?: string;
  description?: string;
  children: React.ReactNode; // main content inside the card
  hoverable?: boolean; // whether the card should react to hover
}

// Interface Property Data
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount?: string;
}
