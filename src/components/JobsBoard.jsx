import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// --- Helper utils ---
const TECHS = [
  "html","css","react","vue","angular","node","python","typescript","nextjs","javascript","java",
  "csharp","php","go","rust","swift","kotlin","sql","mongodb","postgres","mysql","docker","kubernetes",
  "aws","reactnative","flutter","django","spring","laravel","web3","cplusplus","graphql","solidity"
];
const JOB_TYPES = ["full_time","part_time","freelance","internship","co_founder"];
const SKILL_LEVELS = ["junior","mid","senior"];
const PAYMENT_TYPES = ["hourly","salary","fixed_price"];

function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : initial; } catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }, [key, value]);
  return [value, setValue];
}

function Badge({ children }) {
  return <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs bg-white/60">{children}</span>;
}

function ToggleChip({ label, value, set, onChange }) {
  const active = set.has(value);
  return (
    <button
      onClick={() => onChange(value)}
      className={`rounded-full px-2.5 py-1 text-xs border ${active ? "bg-black text-white" : "bg-white hover:bg-gray-100"}`}
    >{label}</button>
  );
}

function PillCheckboxGroup({ options, selected, onToggle, label }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{label}</span>
        <button className="text-xs underline" onClick={() => setOpen(!open)}>{open ? "Hide" : "Show"}</button>
      </div>
      {open && (
        <div className="mt-2 flex flex-wrap gap-2 max-h-44 overflow-auto p-2 rounded-xl border bg-white">
          {options.map((opt) => (
            <ToggleChip key={opt} label={opt} value={opt} set={selected} onChange={onToggle} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CrackedDevsJobsBoard() {
  // ... code omitted for brevity, same as canvas version ...
}
