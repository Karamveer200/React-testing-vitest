import { render, screen } from "@testing-library/react";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

const largeText =
  "Lorem ipsum dolor sit ame ajhjkhaush t consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";

describe("ExpandableText", () => {
  it("should render the component", () => {
    render(<ExpandableText text="Hello, world!" />);

    screen.debug();

    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
  });

  it("should render full text when button is clicked", async () => {
    render(<ExpandableText text={largeText} />);

    screen.debug();

    const button = screen.getByRole("button", { name: /More/ });
    const article = screen.getByRole("article");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/More/);
    expect(article).toHaveTextContent(largeText.substring(0, 255) + "...");

    await userEvent.click(button);

    expect(button).toHaveTextContent(/Less/);
    expect(article).toHaveTextContent(largeText);
  });
});
