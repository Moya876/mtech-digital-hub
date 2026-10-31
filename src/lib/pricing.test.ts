import { describe, it, expect } from "vitest";
import { estimateWebsiteUSD, formatPrice, budgetRangeFor } from "./pricing";

describe("pricing", () => {
  it("starter site with 4 pages is $300", () => {
    expect(estimateWebsiteUSD(4, [])).toBe(300);
  });
  it("adds $40 per page past 4 and add-on prices", () => {
    expect(estimateWebsiteUSD(6, ["store"])).toBe(300 + 80 + 400);
  });
  it("converts USD to JMD", () => {
    expect(formatPrice(300, "JMD")).toBe("JMD $47,100");
    expect(formatPrice(300, "USD")).toBe("USD $300");
  });
  it("maps estimate to budget range", () => {
    expect(budgetRangeFor(300)).toBe("50k-150k");
    expect(budgetRangeFor(3000)).toBe("150k-500k");
  });
});
