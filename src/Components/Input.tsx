import React from "react";

interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = "text",
  name,
}) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        className={`
          peer
          w-full
          border-b-2
          border-gray-300
          focus:border-blue-500
          focus:outline-none
          bg-transparent
          text-gray-900
          !pt-8
          !px-1
        `}
      />
      <label
        className={`
          absolute
          !left-0
          top-2
          text-gray-500
          text-sm
          transition-all
          peer-placeholder-shown:top-5
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-focus:top-2
          peer-focus:text-sm
          peer-focus:text-blue-500
          cursor-text
          !pointer-events-none
        `}
      >
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
