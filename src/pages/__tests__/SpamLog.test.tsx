import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import SpamLog from "@/pages/SpamLog";

const {
  mockNavigate,
  mockLimit,
  mockOrder,
  mockSelect,
  mockEq,
  mockRoleSelect,
  mockFrom,
  mockGetSession,
  mockSignOut,
} = vi.hoisted(() => {
  const limit = vi.fn();
  const order = vi.fn(() => ({ limit }));
  const select = vi.fn(() => ({ order }));
  const eq = vi.fn();
  const roleSelect = vi.fn(() => ({ eq }));
  const from = vi.fn((table: string) => {
    if (table === "user_roles") return { select: roleSelect };
    return { select };
  });
  return {
    mockNavigate: vi.fn(),
    mockLimit: limit,
    mockOrder: order,
    mockSelect: select,
    mockEq: eq,
    mockRoleSelect: roleSelect,
    mockFrom: from,
    mockGetSession: vi.fn(),
    mockSignOut: vi.fn(),
  };
});

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

vi.mock("sonner", () => ({
  toast: { error: vi.fn() },
}));

vi.mock("@/integrations/supabase/client", () => ({
  supabase: {
    auth: {
      getSession: mockGetSession,
      signOut: mockSignOut,
    },
    from: mockFrom,
  },
}));

describe("SpamLog error handling", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockLimit.mockResolvedValue({ data: [], error: null });
    mockEq.mockResolvedValue({ data: [{ role: "admin" }], error: null });
  });

  it("shows a toast and a retry button when the blocked submissions query fails", async () => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { toast } = await import("sonner");
    mockGetSession.mockResolvedValue({
      data: { session: { user: { id: "admin-user" } } },
    });
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: { user: { id: "admin-user" } } },
    });

    mockLimit.mockResolvedValueOnce({
      data: null,
      error: { message: "permission denied for function has_role" },
    });

    render(<SpamLog />);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
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
    fireEvent.click(retry);
    await waitFor(() => {
      expect(mockLimit).toHaveBeenCalledTimes(2);
    });
  });

  it("shows a toast when admin role verification fails", async () => {
    const { supabase } = await import("@/integrations/supabase/client");
    const { toast } = await import("sonner");
    mockGetSession.mockResolvedValue({
      data: { session: { user: { id: "admin-user" } } },
    });
    (supabase.auth.getSession as any).mockResolvedValue({
      data: { session: { user: { id: "admin-user" } } },
    });

    mockEq.mockResolvedValue({
      data: null,
      error: { message: "permission denied for table user_roles" },
    });

    render(<SpamLog />);

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        "Failed to verify admin access",
        expect.objectContaining({
          description: "permission denied for table user_roles",
        })
      );
    });
  });
});
