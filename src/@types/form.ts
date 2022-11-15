/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
export interface IconProps {
  name: string;
}

export interface ButtonProps {
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
}

export interface InputProps {
  classname?: string;
  name: string;
  type: "text" | "password" | "email" | "number" | "date";
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  register?: any;
  required?: boolean;
  errors?: any;
  autoFocus?: boolean;
  autoComplete?: string;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  id?: string;
}
