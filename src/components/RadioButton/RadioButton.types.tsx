// src/components/RadioButton/RadioButton.types.tsx
export interface RadioButtonProps {
  id: string;
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}
