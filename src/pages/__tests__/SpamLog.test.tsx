import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SpamLog from "@/pages/SpamLog";

const mockNavigate = vi.fn();
const mockToastError = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("sonner", () => ({
  toast: { error: mockToastError },
}));

const mockSelect = vi.fn();
const mockEq = vi.fn();
const mockOrder = vi.fn();
const mockLimit = vi.fn();
const mockFrom = vi.fn(() => ({ select: mockSelect }));

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      signOut: vi.fn(),
    },
    from: mockFrom,
  },
}));

describe("SpamLog error handling", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSelect.mockReturnValue({
      order: mockOrder.mockReturnValue({
        limit: mockLimit.mockResolvedValue({ data: [], error: null }),
      }),
    });
  });

  it("shows a toast and a retry button when the blocked submissions query fails", async () => {
    const { supabase } = await import("@/integrations/supabase/client");
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: { user: { id: "admin-user" } } },
    });

    mockSelect.mockReturnValue({
      order: mockOrder.mockReturnValue({
        limit: mockLimit.mockRejectedValueOnce(new Error("network error")),
      }),
    });

    // Rejected promise isn't the normal return shape, so simulate the actual error object
    mockSelect.mockReturnValue({
      order: mockOrder.mockReturnValue({
        limit: mockLimit.mockResolvedValueOnce({
          data: null,
          error: { message: "permission denied for function has_role" },
        }),
      }),
    });

    render(<SpamLog />);

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith(
        "Failed to load blocked submissions",
        expect.objectContaining({
          description: "permission denied for function has_role",
        })
      );
    });

    expect(screen.getByText(/could not load data/i)).toBeInTheDocument();
    const retry = screen.getByRole("button", { name: /retry/i });
    expect(retry).toBeInTheDocument();

    // Clicking retry should call load again
    await userEvent.click(retry);
    await waitFor(() => {
      expect(mockLimit).toHaveBeenCalledTimes(2);
    });
  });

  it("shows a toast when admin role verification fails", async () => {
    const { supabase } = await import("@/integrations/supabase/client");
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: { user: { id: "admin-user" } } },
    });

    mockFrom.mockImplementation((table: string) => {
      if (table === "user_roles") {
        return {
          select: vi.fn().mockReturnValue({
            eq: vi.fn().mockResolvedValue({
              data: null,
              error: { message: "permission denied for table user_roles" },
            }),
          }),
        };
      }
      return { select: mockSelect };
    });

    render(<SpamLog />);

    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith(
        "Failed to verify admin access",
        expect.objectContaining({
          description: "permission denied for table user_roles",
        })
      );
    });
  });
});
