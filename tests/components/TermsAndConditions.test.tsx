import { render, screen } from "@testing-library/react";

import TermsAndConditions from "../../src/components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  it("should enable button state when checkbox is checked", async () => {
    render(<TermsAndConditions />);

    screen.debug();

    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();

    await userEvent.click(checkbox);

    expect(button).toBeEnabled();
  });
});
