import App from "../App"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { render, screen } from '@testing-library/react'
import { MemoryRouter} from "react-router-dom"


describe("When the URI is \"/\"", () => {
  test("Display create  employee page)", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <App />
        </Provider>
        </MemoryRouter>
    )
    const save = screen.getByText("Save")
    expect(save).toBeInTheDocument()
  })
})

describe("When the URI is not route \"/testttttt\"", () => {
  test("Display error page)", () => {
    render(
      <MemoryRouter initialEntries={["/testttttt"]}>
        <Provider store={store}>
          <App />
        </Provider>
        </MemoryRouter>
    )
    const noMach = screen.getByText("404")
    expect(noMach).toBeInTheDocument()
  })
})

describe("When the URI  is \"/list\"", () => {
  test("Display list of employees (Current Employees )", () => {
    render(
      <MemoryRouter initialEntries={["/list"]}>
        <Provider store={store}>
          <App />
        </Provider>
        </MemoryRouter>
    )
    const home = screen.getByText("Home")
    expect(home).toBeInTheDocument()
  })
})




