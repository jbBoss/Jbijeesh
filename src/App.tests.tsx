import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio page", () => {
  render(<App />);

  // Check for the main heading
  const headingElement = screen.getByText(
    /Alex Johnson - Senior Frontend Developer/i,
  );
  expect(headingElement).toBeInTheDocument();

  // Check for a featured project heading
  const projectSectionTitle = screen.getByText(/Featured Projects/i);
  expect(projectSectionTitle).toBeInTheDocument();
});
