import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input Component", () => {
  const mock_register = jest.fn();
  const label = "Test Label";

  test("renders the Input component with the correct label", () => {
    const label = "Test Label";

    render(<Input label={label} register={mock_register} />);

    const inputElement = screen.getByTestId("input");

    expect(inputElement).toBeInTheDocument();
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  test("renders with margin normal prop", () => {
    const label = "Test Label";

    render(<Input label={label} register={mock_register} />);

    const inputElement = screen.getByTestId("input");

    expect(inputElement).toHaveClass("MuiTextField-root");
    expect(inputElement).toHaveClass("MuiFormControl-marginNormal");
  });

  test("does not autocomplete", () => {
    render(<Input label={label} register={mock_register} />);

    const inputElement = screen.getByLabelText(label);

    expect(inputElement).toHaveAttribute("autocomplete", "off");
  });
});
