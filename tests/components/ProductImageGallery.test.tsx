import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("UserList", () => {
  it("should render null", () => {
    const renderedScreen = render(<ProductImageGallery imageUrls={[]} />);
    screen.debug();

    expect(renderedScreen.container).toBeEmptyDOMElement();
  });

  it("should render list of images", () => {
    const imageUrls = ["http://Karam.png", "http://Avi/png"];

    render(<ProductImageGallery imageUrls={imageUrls} />);
    screen.debug();

    const images = screen.queryAllByRole("img");
    expect(images).toHaveLength(2);

    imageUrls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
  });
});
