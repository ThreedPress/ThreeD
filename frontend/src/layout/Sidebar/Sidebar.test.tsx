import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar.tsx tests", () => {
  const headers = ["feed", "categories", "trending", "create", "account"];

  it.each(headers)("renders the $title element", (title: string) => {
    render(<Sidebar />);
    const element = screen.getByText(title);
    expect(element).toBeInTheDocument();
  });
});
