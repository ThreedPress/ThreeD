import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header.tsx tests", () => {
  const headers = ["feed", "profile", "create"];

  it.each(headers)("renders the $title element", (title: string) => {
    render(<Header />);
    const element = screen.getByText(title);
    expect(element).toBeInTheDocument();
  });
});
