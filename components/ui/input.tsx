import React, { FC, ChangeEvent } from "react";

interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  type: string;
  icon?: React.ReactElement;
  onChange: (value: string) => void;
}

const Input: FC<InputProps> = ({
  name,
  type,
  placeholder,
  required,
  className,
  icon,
  onChange,
}) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value);
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-xl text-gray-300">
        {icon}
      </div>
      <input
        type={type}
        name={name}
        className={`block w-full md:min-w-[300px] lg:min-w-[300px] rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-gray-500 focus:text-gray-900 focus:outline-none focus:ring-0 sm:text-sm sm:leading-6 ${className}`}
        placeholder={placeholder}
        required={required === undefined ? false : required}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Input;
