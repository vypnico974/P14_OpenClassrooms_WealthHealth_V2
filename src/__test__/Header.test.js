import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { BrowserRouter } from "react-router-dom"

const arrayNav = [{ linkNav: "/", titleNav: "Create Employee" }]

describe("Testing Header component", () => {
	test("Should render Header component", () => {
        render(
            <BrowserRouter>
                <Header arrayNav={arrayNav} formatting="header" />
            </BrowserRouter>
          )
          const link = screen.getAllByText("Create Employee")
          expect(link).toBeTruthy()
	});


});