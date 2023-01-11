export interface StyledFieldInputProps {
  width?: string;
}

export interface FieldInputProps extends StyledFieldInputProps {
  value?: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  injectableClass?: string;
  disabled?: boolean;
  maxLength?: number;
  onSearch?: (inputValue: string) => void;
  info?: string;
}

