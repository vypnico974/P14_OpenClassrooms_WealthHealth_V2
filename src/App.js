/* react */
import React, { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
/*  pages */
import ListEmployeePage from "./pages/ListEmployeePage/ListEmployeePage"
import CreateEmployeePage from "./pages/CreateEmployeePage/CreateEmployeePage"
import Error from "./pages/Error/Error"
/* css  */
import './styles/normalize.css'
import './styles/global.css'
/* logo */
import logoHeader from "./assets/Wealth_Health_logo.webp"

/**
 * Const Header import the Header  component  with lazy for optimize perf.
 *  Lazy call the component when is necessary
 */
const Header = lazy(() => import("./components/Header/Header"))


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
      <Suspense fallback={<p>Loading...</p>}>
        {/* header  example formatting = "smallHeader"*/}   
        <Header picture={logoHeader} linkPicture="/" arrayNav={arrayNav} 
        formatting="header" /> 
       </Suspense>
        <Routes> 
          <Route exact path="/" element={<CreateEmployeePage />}/>
          <Route exact path="/P14_OpenClassrooms_WealthHealth_V2/" element={<CreateEmployeePage />}/>
          <Route exact path="/list" element={<ListEmployeePage />}/>
            {/* Error Route */}
          <Route path="*" element={<Error />}/>
        </Routes>
    </>
  )
}

