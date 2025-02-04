import Greet from "../../src/components/Greet";
import { render, screen } from "@testing-library/react";

describe("Greet", () => {
  it("should render hello when name is given", () => {
    render(<Greet name="Karam" />);

    screen.debug();

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Karam/i);
  });

  it("should render Login when name is not given", () => {
    render(<Greet />);

    screen.debug();

    const heading = screen.getByRole("button");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/login/i);
  });
});
