import { render, screen } from "@testing-library/react";
import Spotlight from ".";

// render + screen

test("Renders a Spotlight component", () => {
  render(<Movie name="Tatort Folge 18001" />);

  // const heading = screen.getByText("Tatort Folge 18002");
  const heading = screen.getByRole("heading", { name: "Tatort Folge 18001" });

  expect(heading).toBeInTheDocument();
});
