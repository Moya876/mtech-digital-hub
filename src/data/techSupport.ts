import { Currency, USD_TO_JMD } from "@/lib/pricing";

export const techSupportServices = [
  { id: "ram", category: "hardware", name: "RAM Upgrade", jmd: 4000, description: "Improve multitasking and everyday responsiveness." },
  { id: "ssd", category: "hardware", name: "SSD Installation", jmd: 5500, description: "Speed up startup times and application loading." },
  { id: "battery", category: "hardware", name: "Battery Replacement", jmd: 4500, description: "Restore your laptop’s portability and battery health." },
  { id: "printer", category: "basic", name: "Printer Setup", jmd: 3500, description: "Connect and configure your wireless, network, or USB printer." },
  { id: "email", category: "basic", name: "Email Setup", jmd: 3500, description: "Configure your email account and sync it across your devices." },
  { id: "software", category: "basic", name: "Software Install", jmd: 3000, startingAt: true, description: "Install and configure your essential applications and utilities." },
] as const;

export function formatSupportPrice(jmd: number, currency: Currency) {
  const amount = currency === "JMD" ? jmd : jmd / USD_TO_JMD;
  return `${currency} $${amount.toLocaleString("en-US", { minimumFractionDigits: currency === "USD" ? 2 : 0, maximumFractionDigits: currency === "USD" ? 2 : 0 })}`;
}

export const supportBookingUrl = (service?: string) =>
  `https://wa.me/18768331524?text=${encodeURIComponent(`Hi MTech Corp, I need tech support with${service ? ` ${service}` : " my device"}. My device is: `)}`;