import { describe, expect, it } from "vitest";
import { formatSupportPrice, techSupportServices } from "./techSupport";

describe("approved flyer rates", () => {
  it.each([["ram", 4000], ["ssd", 5500], ["battery", 4500], ["printer", 3500], ["email", 3500], ["software", 3000]])("keeps %s at JMD %i", (id, price) => {
    expect(techSupportServices.find(service => service.id === id)?.jmd).toBe(price);
  });
  it("offers only the approved hardware and basic setup services", () => {
    expect(techSupportServices.map(service => service.id)).toEqual(["ram", "ssd", "battery", "printer", "email", "software"]);
  });
  it("treats software pricing as starting at JMD 3000", () => {
    expect(techSupportServices.find(service => service.id === "software")).toMatchObject({ jmd: 3000, startingAt: true });
  });
  it("preserves exact JMD prices when converting currencies", () => {
    expect(formatSupportPrice(5500, "JMD")).toBe("JMD $5,500");
    expect(formatSupportPrice(5500, "USD")).toBe("USD $35.03");
  });
});