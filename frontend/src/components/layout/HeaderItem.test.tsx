import { render, screen } from "@testing-library/react";
import { MdGridView } from "react-icons/md";
import { HeaderItem } from "./HeaderItem";

describe("HeaderItem tests", () => {
  it("should render a given title and icon", () => {
    const title = "testTitlePleaseIgnore";
    render(<HeaderItem title={title} Icon={MdGridView} />);

    const titleElement = screen.getByText(title);
    const iconElement = screen.getByTestId("header-item-icon")

    expect(titleElement).toBeInTheDocument()
    expect(iconElement).toBeInTheDocument()
  });
});
