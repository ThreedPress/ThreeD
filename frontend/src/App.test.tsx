import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App.tsx Tests", () => {
  test("Renders", () => {
    render(<App />);
    const mainElement = screen.getByTestId(/app-root/i);
    expect(mainElement).toBeInTheDocument();
  });
});
