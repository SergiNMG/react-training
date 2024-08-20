import { render, screen } from "@testing-library/react";
import { GifCard } from "../../src/components/GifCard/GifCard.jsx";

describe("Test in GifCard.jsx", () => {

  const title = "goku";
  const image = "https://dragonball.com/goku.jpg";

  test("should match snapshot", () => {

    const { container } = render(<GifCard title={title} image={image} />);
    expect( container ).toMatchSnapshot();

  });

  test('should show the image with URL and ALT', () => { 

    render(<GifCard title={title} image={image} />);
    expect(screen.getByRole('img').src).toEqual(image);
  })

  test('should show the title in the component', () => {

    render(<GifCard title={title} image={image}/>);
    expect(screen.getByText( title )).toBeTruthy();

  })
});
