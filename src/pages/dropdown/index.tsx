import React from 'react';

interface DropdownComponentProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  options: string[];
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  label,
  value,
  onChange,
  name,
  options,
}) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 text-gray-700">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded px-2 py-1"
      >
        <option value="" disabled>Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownComponent;
