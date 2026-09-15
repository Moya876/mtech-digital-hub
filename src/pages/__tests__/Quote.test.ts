import { describe, expect, it, vi } from "vitest";
import { buildQuoteEmailParams } from "@/pages/Quote";

describe("quote email formatting", () => {
  it("maps every quote field to the names used by the email template", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-09-15T00:12:00Z"));

    const params = buildQuoteEmailParams({
      name: "Richel L",
      email: "richel@example.com",
      phone: "876-555-0199",
      company: "Richel Legal",
      projectType: "web-development",
      message: "I need a professional website for a law firm.",
    });

    expect(params).toMatchObject({
      name: "Richel L",
      from_name: "Richel L",
      email: "richel@example.com",
      reply_to: "richel@example.com",
      phone: "876-555-0199",
      phone_number: "876-555-0199",
      company: "Richel Legal",
      company_name: "Richel Legal",
      project_type: "Web Development",
      message: "I need a professional website for a law firm.",
    });
    expect(params.time).toBeTruthy();

    vi.useRealTimers();
  });

  it("uses a clear fallback when no company is supplied", () => {
    const params = buildQuoteEmailParams({
      name: "Richel L",
      email: "richel@example.com",
      phone: "876-555-0199",
      company: "   ",
      projectType: "other",
      message: "I need help planning another type of project.",
    });

    expect(params.company).toBe("Not provided");
    expect(params.company_name).toBe("Not provided");
    expect(params.project_type).toBe("Other");
  });
});