import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
// import { employeeReducer } from '../redux/employee'

const employeeList = [{
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

localStorage.setItem("employee-hrnet", JSON.stringify(employeeList))


export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { user: {employeeList : employeeList} }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}