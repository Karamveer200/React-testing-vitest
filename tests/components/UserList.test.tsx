import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";
import { User } from "../../src/entities";

describe("UserList", () => {
  it("should render empty list", () => {
    render(<UserList users={[]} />);
    screen.debug();
    expect(screen.getByText(/no users/i)).toBeInTheDocument();
  });

  it("should render list of users", () => {
    const users: User[] = [
      { id: 1, name: "Karam" },
      { id: 2, name: "Avi" },
    ];

    render(<UserList users={users} />);
    screen.debug();

    users.forEach((user) => {
      const link = screen.queryByRole("link", { name: user.name });

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
