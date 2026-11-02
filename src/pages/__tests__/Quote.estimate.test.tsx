import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import Quote from "@/pages/Quote";

const { mockSend, mockNavigate } = vi.hoisted(() => ({
  mockSend: vi.fn(),
  mockNavigate: vi.fn(),
}));

vi.mock("emailjs-com", () => ({
  default: { send: mockSend },
}));

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

const fillRequiredFields = (name: string) => {
  fireEvent.change(screen.getByLabelText(/full name/i), {
    target: { value: name },
  });
  fireEvent.change(screen.getByLabelText(/email address/i), {
    target: { value: `${name.toLowerCase().replace(/\s+/g, ".")}@example.com` },
  });
  fireEvent.change(screen.getByLabelText(/phone number/i), {
    target: { value: "8765550199" },
  });
  fireEvent.change(screen.getByLabelText(/project type/i), {
    target: { value: "web-development" },
  });
  fireEvent.change(screen.getByLabelText(/project details/i), {
    target: { value: "I need a professional website for my business." },
  });
};

const renderQuote = () => render(<HelmetProvider><Quote /></HelmetProvider>);

describe("quote estimate is not reused across submissions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSend.mockResolvedValue({ status: 200 });
    window.scrollTo = vi.fn() as unknown as typeof window.scrollTo;
  });

  it("sends 'Estimator not used' on a second request that never touches the estimator", async () => {
    renderQuote();

    fillRequiredFields("Richel L");
    fireEvent.click(screen.getByRole("button", { name: /use this estimate/i }));
    fireEvent.click(screen.getByRole("button", { name: /submit quote request/i }));

    await screen.findByText(/thank you/i);
    expect(mockSend).toHaveBeenCalledTimes(1);
    const first = mockSend.mock.calls[0][2] as Record<string, string>;
    expect(first.quote_estimate).toContain("Estimator:");

    fireEvent.click(screen.getByRole("button", { name: /send another request/i }));

    fillRequiredFields("Vanessa R");
    fireEvent.click(screen.getByRole("button", { name: /submit quote request/i }));

    await screen.findByText(/thank you/i);
    expect(mockSend).toHaveBeenCalledTimes(2);
    const second = mockSend.mock.calls[1][2] as Record<string, string>;
    expect(second.quote_estimate).toBe("Estimator not used");
    expect(second.name).toBe("Vanessa R");
  });

  it("keeps the on-screen estimate when a send fails so the visitor can retry", async () => {
    mockSend.mockRejectedValueOnce(new Error("network down"));

    renderQuote();

    fillRequiredFields("Richel L");
    fireEvent.click(screen.getByRole("button", { name: /use this estimate/i }));
    fireEvent.click(screen.getByRole("button", { name: /submit quote request/i }));

    await waitFor(() => expect(mockSend).toHaveBeenCalledTimes(1));
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /submit quote request/i }));

    await waitFor(() => expect(mockSend).toHaveBeenCalledTimes(2));
    const retried = mockSend.mock.calls[1][2] as Record<string, string>;
    expect(retried.quote_estimate).toContain("Estimator:");
  });
});
