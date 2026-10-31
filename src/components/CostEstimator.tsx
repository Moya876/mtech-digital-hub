import { useState } from "react";
import { Calculator } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import CurrencyToggle from "@/components/CurrencyToggle";
import {
  AddonId,
  Currency,
  ESTIMATOR_ADDONS,
  HOSTING_MONTHLY_USD,
  estimateWebsiteUSD,
  formatPrice,
} from "@/lib/pricing";

interface Props {
  onUseEstimate: (summary: { usd: number; text: string }) => void;
}

const CostEstimator = ({ onUseEstimate }: Props) => {
  const [pages, setPages] = useState(4);
  const [addons, setAddons] = useState<AddonId[]>([]);
  const [hosting, setHosting] = useState(true);
  const [currency, setCurrency] = useState<Currency>("USD");

  const total = estimateWebsiteUSD(pages, addons);
  const toggle = (id: AddonId) =>
    setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));

  const useEstimate = () => {
    const chosen = ESTIMATOR_ADDONS.filter((a) => addons.includes(a.id)).map((a) => a.label);
    const text = [
      `Estimator: ${pages}-page website`,
      chosen.length ? `Extras: ${chosen.join(", ")}` : null,
      hosting ? `Hosting: ${formatPrice(HOSTING_MONTHLY_USD, currency)}/month` : null,
      `Estimated total: about ${formatPrice(total, currency)}`,
    ]
      .filter(Boolean)
      .join("\n");
    onUseEstimate({ usd: total, text });
  };

  return (
    <div className="rounded-xl border border-mtechGray-100 bg-white p-5 sm:p-6 shadow-sm mb-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <Calculator className="h-5 w-5 text-mtechOrange" />
          <h3 className="text-lg font-semibold text-mtechGray-900">Website cost estimator</h3>
        </div>
        <CurrencyToggle value={currency} onChange={setCurrency} />
      </div>

      <label className="block text-sm font-medium text-mtechGray-700 mb-3">
        Number of pages: <span className="font-bold text-mtechNavy">{pages}</span>
      </label>
      <Slider min={1} max={20} step={1} value={[pages]} onValueChange={(v) => setPages(v[0])} aria-label="Number of pages" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {ESTIMATOR_ADDONS.map((a) => (
          <label key={a.id} className="flex items-center gap-2 text-sm text-mtechGray-700 cursor-pointer">
            <Checkbox checked={addons.includes(a.id)} onCheckedChange={() => toggle(a.id)} />
            {a.label}
          </label>
        ))}
        <label className="flex items-center gap-2 text-sm text-mtechGray-700 cursor-pointer">
          <Checkbox checked={hosting} onCheckedChange={(c) => setHosting(!!c)} />
          Hosting ({formatPrice(HOSTING_MONTHLY_USD, currency)}/month)
        </label>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-lg bg-mtechGray-50 p-4">
        <div>
          <p className="text-sm text-mtechGray-600">Estimated starting price</p>
          <p className="text-2xl font-bold text-mtechNavy">{formatPrice(total, currency)}</p>
          {hosting && (
            <p className="text-xs text-mtechGray-500">+ {formatPrice(HOSTING_MONTHLY_USD, currency)}/month hosting</p>
          )}
        </div>
        <Button type="button" onClick={useEstimate} className="bg-mtechOrange hover:bg-mtechOrange-dark w-full sm:w-auto">
          Use this estimate
        </Button>
      </div>
      <p className="text-xs text-mtechGray-500 mt-3">
        A rough guide only, your final quote depends on your exact needs.
      </p>
    </div>
  );
};

export default CostEstimator;
