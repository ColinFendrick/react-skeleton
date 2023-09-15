import { screen, fireEvent } from "@testing-library/react";

import { renderWith, setup } from "../../setupTests";

import Home from "./Home";

describe("Testing <Home />", () => {
  setup(beforeEach)(() => renderWith()(<Home />));

  test("Renders", () => {
    expect(screen.getByText("First Name")).toBeInTheDocument();
  });

  test("open modal", async () => {
	fireEvent.click(screen.getByText("Open Modal"));
		expect(screen.getByText("Submit")).toBeInTheDocument();
		expect(screen.getByTestId("form-modal")).toBeInTheDocument();
  });
});
