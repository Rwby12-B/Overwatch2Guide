"use client";

import { Search, X } from "lucide-react";

export function SearchBar({
  value,
  onChange,
  placeholder = "Баатар хайх...",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="relative w-full">
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fog"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Баатар хайх"
        className="focus-ring w-full rounded-lg border border-line bg-panel py-2.5 pl-9 pr-9 font-body text-sm text-paper placeholder:text-fog"
      />
      {value && (
        <button
          aria-label="Хайлтыг цэвэрлэх"
          onClick={() => onChange("")}
          className="focus-ring absolute right-2.5 top-1/2 -translate-y-1/2 text-fog hover:text-paper"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
