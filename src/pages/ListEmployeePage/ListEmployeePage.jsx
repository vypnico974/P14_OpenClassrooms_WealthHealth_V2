/* react */
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import { selectEmployees } from "../../redux/selector"
/* employee table   */
// import Table from "../../components/Table/Table"
/* employee columns     */
import { employeeColumns } from '../../components/Table/employeeColumns'
/* css  */
import styles from './listEmployeePage.module.css'
import DataTable from "../../components/Table/DataTable"

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
    
  const columns = React.useMemo(
    () => employeeColumns,
  )

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
    console.log("data to display:", dataFilter)
    setDataToDisplay(dataFilter)
  }


  const handleShow = (event) => {
    setItemsShow(event)
  }

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


        {/* <Table columns={columns} data={data} /> */}
     
        <DataTable products={dataToDisplay} rowsPerPage={itemsShow} />
      </div>

      <div className={styles.btnContainer}>
        <Link to="/"><button>Home</button></Link>
      </div> 
      
    </main>
  )
}
