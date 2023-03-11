import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
         <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
 
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()