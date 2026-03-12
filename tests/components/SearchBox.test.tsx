import { render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("SearchBox", () => {
  const renderSearchBox = () => {
    const onChangeMock = vi.fn();

    render(<SearchBox onChange={onChangeMock} />);

    return {
      inputEl: screen.getByPlaceholderText(/search/i),
      onChangeMock,
      user: userEvent.setup(),
    };
  };

  it("should call onChange when enter is pressed with valid input", async () => {
    const { inputEl, onChangeMock, user } = renderSearchBox();

    await user.type(inputEl, "Hello{enter}");
    expect(onChangeMock).toHaveBeenCalledWith("Hello");
  });

  it("should not call onChange when enter is pressed with no input", async () => {
    const { inputEl, onChangeMock, user } = renderSearchBox();

    await user.type(inputEl, "{enter}");
    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
