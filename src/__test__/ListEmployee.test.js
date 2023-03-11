import { render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import ListEmployeePage from "../pages/ListEmployeePage/ListEmployeePage"

const employee_mock = [{
    id: 1,
    firstName: "Amanda",
    lastName: "Linasta",
    dateOfBirth: "02/04/1980",
    street: "43 8th Adison",
    city: "Addison",
    state: "Alabama",
    stateAbbrev: "AL",
    zipCode: "35083",
    startDate: "02/05/2023",
    department: "Sales"
}]

localStorage.setItem("employees-hrnet", JSON.stringify(employee_mock))


describe("Given the user is the employee list page",() => {
    test("should display the table", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ListEmployeePage />
          </Provider>
        </BrowserRouter>
      )

    
      const firstName = screen.getAllByText("Amanda")
	  expect(firstName).toBeTruthy()

      const lastName = screen.getAllByText("Linasta")
	  expect(lastName).toBeTruthy()

      const dateOfBirth = screen.getAllByText("02/04/1980")
	  expect(dateOfBirth).toBeTruthy()

      const startDate = screen.getAllByText("02/05/2023")
	  expect(startDate).toBeTruthy()

      const street = screen.getAllByText("43 8th Adison")
	  expect(street).toBeTruthy()

    })
})