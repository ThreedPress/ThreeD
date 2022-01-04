import { render, screen } from "@testing-library/react";
import { MdGridView } from "react-icons/md";
import { SidebarItem } from "./SidebarItem";

describe("SidebarItem tests", () => {
  it("should render a given title and icon", () => {
    const title = "testTitlePleaseIgnore";
    render(<SidebarItem title={title} Icon={MdGridView} />);

    const titleElement = screen.getByText(title);
    const iconElement = screen.getByTestId("header-item-icon");

    expect(titleElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });
});
