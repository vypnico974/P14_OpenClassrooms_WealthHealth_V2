import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import CreateForm from "../components/Form/CreateForm"

describe("Given the user is the create employee page and tries to submit the form",
         () => {
    test("Then a modal is displayed", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateForm />
          </Provider>
        </BrowserRouter>
      )
      const buttonSave = screen.getByText("Save")
      
      fireEvent.click(buttonSave)

      const text = screen.getAllByText("Employee Created !")
	  expect(text).toBeTruthy()
    })
})