// Approximate exchange rate used for display only.
export const USD_TO_JMD = 157;

export type Currency = "USD" | "JMD";

export const formatPrice = (usd: number, currency: Currency) => {
  const amount = currency === "JMD" ? Math.round((usd * USD_TO_JMD) / 100) * 100 : usd;
  return `${currency} $${amount.toLocaleString("en-US")}`;
};

export const STARTER_SITE_USD = 300; // includes up to 4 pages
export const INCLUDED_PAGES = 4;
export const EXTRA_PAGE_USD = 40;
export const HOSTING_MONTHLY_USD = 6;

export const ESTIMATOR_ADDONS = [
  { id: "blog", label: "Blog or content manager", usd: 150 },
  { id: "booking", label: "Online booking or appointments", usd: 150 },
  { id: "store", label: "Online store", usd: 400 },
  { id: "seo", label: "Advanced SEO setup", usd: 100 },
] as const;

export type AddonId = (typeof ESTIMATOR_ADDONS)[number]["id"];

export const estimateWebsiteUSD = (pages: number, addons: AddonId[]) => {
  const extraPages = Math.max(0, pages - INCLUDED_PAGES) * EXTRA_PAGE_USD;
  const addonTotal = ESTIMATOR_ADDONS.filter((a) => addons.includes(a.id)).reduce(
    (sum, a) => sum + a.usd,
    0,
  );
  return STARTER_SITE_USD + extraPages + addonTotal;
};

/** Maps a USD estimate to the quote form's JMD budget range value. */
export const budgetRangeFor = (usd: number) => {
  const jmd = usd * USD_TO_JMD;
  if (jmd < 50000) return "under-50k";
  if (jmd < 150000) return "50k-150k";
  if (jmd <= 500000) return "150k-500k";
  return "over-500k";
};
