/* react */
import React, { useState,lazy, Suspense } from "react"
import { Link } from "react-router-dom"
/* redux  */
import { useSelector } from 'react-redux'
import { selectEmployees } from "../../redux/selector"
/* css  */
import styles from './listEmployeePage.module.css'

/**
 * Const Table import the component table with lazy for optimize perf.
 *  Lazy call the component when is necessary
 */
const DataTable = lazy(() => import("../../components/Table/DataTable"))



/**
 * @function ListEmployeePage
 * @export
 * @description List employee page 
 * @return {HTMLElement} component generated HTML
 */
export default function ListEmployeePage() {

  //// Use Selector for extract: employee (state)
  const employeState = useSelector(selectEmployees)
  // console.log("state employee:",employeState)
    
  /* hook useMemo for optimize the react speed. useMemo store
    a value in the memory and not re-excute if the value not change */
  const data = 
    React.useMemo(() => employeState, [employeState])

    const [dataToDisplay, setDataToDisplay] = useState(data)
    const [itemsShow, setItemsShow] = useState(10)

  const handleSearch = (event) => {
    let dataFilter = []
    dataFilter =  data.filter((row) => {
      return Object.values(row).some((s) =>
        ("" + s).toLowerCase().trim().includes(event.toLowerCase().trim())
      )
    }) 
    //console.log("data to display:", dataFilter)
    setDataToDisplay(dataFilter)
  }


  const handleShow = (event) => {
    setItemsShow(event)
  }

  console.log(dataToDisplay)
  return (
    <main>
      <div className={styles.tableContainer}>

        <div className={styles.containerFilter}>
          <div className={styles.filter}>
            <label htmlFor="search">Search: </label>
            <input
              type="search"
              id="search"
              name="search"
              aria-label="search"
              placeholder="search..."
              onChange={(event) => handleSearch(event.target.value)}
            />
          </div>
          <div>
          <div className={styles.filter}>
            <label>Show</label>
            <select
            id="show"
            name="show"
            aria-label="show"
             defaultValue={10}
              onChange={(event) => handleShow(event.target.value)}>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
              </select>
              <span>entries</span>
            </div>
          </div>
         
        </div>

        <Suspense fallback={<p>Loading...</p>}>
          <DataTable products={dataToDisplay} rowsPerPage={itemsShow} />
        </Suspense>
      </div>

      <div className={styles.btnContainer}>
        <Link to="/"><button>Home</button></Link>
      </div> 
      
    </main>
  )
}
