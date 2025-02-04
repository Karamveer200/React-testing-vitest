import { render, screen } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import UserAccount from "../../src/components/UserAccount";

describe("UserAccount", () => {
  it("should show edit button to admin", () => {
    const adminUser = {
      id: 1,
      name: "Karam",
      isAdmin: true,
    };

    render(<UserAccount user={adminUser} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Edit/i);
  });

  it("should not show admin button", () => {
    const nonAdminUser = {
      id: 1,
      name: "Karam",
    };

    render(<UserAccount user={nonAdminUser} />);
    screen.debug();

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
