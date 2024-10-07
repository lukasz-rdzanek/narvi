import { render, screen, within } from "@testing-library/react";

import { Tile } from "./Tile";

describe("Tile Component", () => {
  const mockProps = {
    avatar_url: "https://example.com/avatar.jpg",
    id: 1,
    login: "testuser",
  };

  test("renders the Tile component", () => {
    render(<Tile {...mockProps} />);
    const tileElement = screen.getByTestId("tile");

    expect(tileElement).toBeInTheDocument();
  });

  test("displays the avatar image", () => {
    render(<Tile {...mockProps} />);
    const avatarElement = screen.getByAltText(mockProps.login);

    expect(avatarElement).toBeInTheDocument();
    expect(avatarElement).toHaveAttribute("src", mockProps.avatar_url);
  });

  test("displays the user login text", () => {
    render(<Tile {...mockProps} />);
    const loginText = screen.getByText(mockProps.login);

    expect(loginText).toBeInTheDocument();
  });

  test("applies the correct class to the Card component", () => {
    render(<Tile {...mockProps} />);
    const tileElement = screen.getByTestId("tile");

    expect(tileElement).toHaveClass("tile");
  });

  test("renders the CardContent component", () => {
    render(<Tile {...mockProps} />);
    const cardContentElement = screen.getByTestId("tile");
    const cardContent = within(cardContentElement).getByText(mockProps.login);

    expect(cardContent).toBeInTheDocument();
  });

  test("renders the Avatar component with correct size", () => {
    render(<Tile {...mockProps} />);
    const tileElement = screen.getByTestId("tile");
    const avatarParentElement = within(tileElement).getByAltText(
      mockProps.login
    ).parentElement;

    expect(avatarParentElement).toHaveStyle({ width: "56px", height: "56px" });
  });
});
