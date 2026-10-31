import { Currency } from "@/lib/pricing";
import { cn } from "@/lib/utils";

const CurrencyToggle = ({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) => (
  <div role="group" aria-label="Currency" className="inline-flex rounded-full border border-mtechGray-200 p-1 bg-white">
    {(["USD", "JMD"] as Currency[]).map((c) => (
      <button
        key={c}
        type="button"
        aria-pressed={value === c}
        onClick={() => onChange(c)}
        className={cn(
          "px-4 py-1 text-sm font-semibold rounded-full transition-colors",
          value === c ? "bg-mtechNavy text-primary-foreground" : "text-mtechGray-600 hover:text-mtechOrange",
        )}
      >
        {c}
      </button>
    ))}
  </div>
);

export default CurrencyToggle;
