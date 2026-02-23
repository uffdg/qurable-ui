import { Search, X } from "lucide-react";
import { useState } from "react";

interface DSSearchInputProps {
  placeholder?: string;
}

export function DSSearchInput({ placeholder = "Search by name..." }: DSSearchInputProps) {
  const [value, setValue] = useState("");
  return (
    <div className="relative w-full">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A9A8B2] pointer-events-none"
      />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-9 py-2.5 rounded-full border border-[#D7D6DB] bg-white text-sm text-[#3A3941] placeholder:text-[#A9A8B2] outline-none focus:border-[#9875FA] focus:ring-2 focus:ring-[#EBE4FF] transition-all"
      />
      {value && (
        <button
          onClick={() => setValue("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A9A8B2] hover:text-[#63626F]"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}

interface DSTextInputProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  disabled?: boolean;
}

export function DSTextInput({
  label,
  placeholder = "Enter value...",
  helperText,
  error,
  disabled,
}: DSTextInputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-semibold text-[#3A3941]">{label}</label>}
      <div
        className={`flex items-center rounded-full border px-4 py-2.5 bg-white gap-2 transition-all
          ${error ? "border-[#F43F5E]" : "border-[#D7D6DB] focus-within:border-[#9875FA] focus-within:ring-2 focus-within:ring-[#EBE4FF]"}
          ${disabled ? "bg-[#F5F5F7] opacity-60 cursor-not-allowed" : ""}`}
      >
        <input
          disabled={disabled}
          placeholder={placeholder}
          className="flex-1 bg-transparent text-sm text-[#3A3941] placeholder:text-[#A9A8B2] outline-none"
        />
      </div>
      {helperText && (
        <p className={`text-xs ${error ? "text-[#F43F5E]" : "text-[#91909D]"}`}>{helperText}</p>
      )}
    </div>
  );
}