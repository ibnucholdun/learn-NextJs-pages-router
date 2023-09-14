import AboutPage from "@/pages/about";
import { render, screen } from "@testing-library/react";

describe("About Page", () => {
  it("render about page", () => {
    const page = render(<AboutPage />);
    expect(screen.getByTestId("title").textContent).toEqual("About Page");
    expect(page).toMatchSnapshot();
  });
}); //untuk melihat tesnya dalam bentuk visual menggunakan npm run test:cover dan untuk mengeceknya dapat dilihat pada folder coverage > icov-report> index.html
