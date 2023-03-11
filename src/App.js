/* react */
import {React} from "react"
import { Routes, Route } from "react-router-dom"
/* composant  */
import Header from './components/Header/Header'
/*  pages */
import ListEmployeePage from "./pages/ListEmployeePage/ListEmployeePage"
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmployeePage"
import Error from "./pages/Error/Error"
/* css  */
import './styles/normalize.css'
import './styles/global.css'
/* logo */
import logoHeader from "./assets/Wealth_Health_logo.webp"


const arrayNav = [{ linkNav: "/", titleNav: "Create Employee" },
                  { linkNav: "/list", titleNav: "View Current Employees" }]


/**
 * @function App
 * @export
 * @description component that block structure and declaration of the differents
 *  routes for this website
 * @return {HTMLElement} component generated HTML
 */
export default function App() {
  return (
    <>  
      {/* header  example formatting = "smallHeader"*/}   
      <Header picture={logoHeader} linkPicture="/" arrayNav={arrayNav} 
       formatting="header" /> 
        <Routes> 
          <Route exact path="/" element={<CreateEmployeePage />}/>
            <Route exact path="/list" element={<ListEmployeePage />}/>
            {/* Error Route */}
          <Route path="*" element={<Error />}/>
        </Routes>
    </>
  )
}

