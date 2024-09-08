import React from 'react';

interface InputComponentProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type?: string; // Add type prop
}

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  value,
  onChange,
  name,
  type = 'text', // Default to text if no type is provided
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="border border-gray-300 rounded px-2 py-1 w-full"
    />
  );
};

export default InputComponent;
