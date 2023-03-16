import {  render,screen, waitFor} from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import ListEmployeePage from "../pages/ListEmployeePage/ListEmployeePage"


describe("Given the user is the employee list page",() => {	
  test("should display the table",async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ListEmployeePage />
          </BrowserRouter>
        </Provider>	
      )
    })  
    await waitFor(() => expect(screen.getAllByText('Amanda')))
  })
})

