/* react  */
import React, {useState, useEffect} from 'react'
/* table  */
import { employeeColumns } from './employeeColumns'
import useTable from './useTable'
import TablePagination from './TablePagination'
/* prop types */
import PropTypes from 'prop-types'
/* css   */ 
import styles from './dataTable.module.css'


/**
 * @function useSortableData
 * @export
 * @description sort table data 
 * @param {object} items - itemps of table
 * @param {string} config - config for table
 * @return {HTMLElement} component generated HTML
 */
const useSortableData = (items, config = null) => {
  
  const [sortConfig, setSortConfig] = React.useState(config)
  /*  useMemo hook that lets you cache the result of a calculation
   between re-renders  */
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items]
   
    if (sortConfig !== null) {
     // console.log(sortConfig)
      sortableItems.sort((a, b) => {
        if ((sortConfig.key == 'dateOfBirth') || (sortConfig.key == 'startDate')) {
          const yearA = a[sortConfig.key].toLowerCase().split('/')[2]
          const yearB = b[sortConfig.key].toLowerCase().split('/')[2]
          const monthA = a[sortConfig.key].toLowerCase().split('/')[1]
          const monthB = b[sortConfig.key].toLowerCase().split('/')[1]
          const dayA = a[sortConfig.key].toLowerCase().split('/')[0]
          const dayB = b[sortConfig.key].toLowerCase().split('/')[0]
        //   console.log(dayA, dayB)
          if (yearA > yearB) 
            return sortConfig.direction === 'ascending' ? 1 : -1
          else if (yearA < yearB)
            return sortConfig.direction === 'ascending' ? -1 : 1
          else {
            if (monthA > monthB)
              return sortConfig.direction === 'ascending' ? 1 : -1
            else if (monthA < monthB)
              return sortConfig.direction === 'ascending' ? -1 : 1
            else {
              if (dayA > dayB)
                return sortConfig.direction === 'ascending' ? 1 : -1
              else if (dayA < dayB)
                return sortConfig.direction === 'ascending' ? -1 : 1
              else return 0
            }
          }
        }
        else 
        {
         if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
          }
        return 0;
        }
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  };

  return { items: sortedItems, requestSort, sortConfig }
}
useSortableData.prototype = {
  items: PropTypes.object.isRequired,
  config: PropTypes.string,
}


/**
 * @function DataTable
 * @export
 * @description data table 
 * @param {object} products - data of table
 * @param {Number} rowsPerPage - rows per page
 * @return {HTMLElement} component generated HTML
 */
export default function DataTable({products,rowsPerPage}) {
  const { items, requestSort, sortConfig } = useSortableData(products)

  const [page, setPage] = useState(1);
  let { slice, range } = useTable(items, page, rowsPerPage)
  const [minEntries, setMinEntries] = useState(0);
  const [maxEntries, setMaxEntries] = useState(0);

//   console.log("number page:",props.rowsPerPage)
//   console.log("page:",page)

  useEffect(() => {
        if (items) {
            if ((products).length < range.length ) {
                setMinEntries(1) 
            }
            else {
                setMinEntries((page - 1) * parseInt(rowsPerPage) + 1 )
            } 
            if ((products).length < (rowsPerPage).length) {
                setMaxEntries((products).length)
            }
            else {
                if (((page - 1) * parseInt(rowsPerPage) + parseInt(rowsPerPage)) < (products).length) {
                    setMaxEntries((page - 1) * parseInt(rowsPerPage) + parseInt(rowsPerPage))
                }
                else {
                    setMaxEntries((products).length)
                }
                
            }
            
        }
  },[items,page,rowsPerPage])

   //   console.log("range:", range)
   //   console.log(minEntries, maxEntries )


  /**
 * @function getClassNamesFor
 * @export
 * @description column name for sort
 * @param {string} products - column name
 */
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return
    }
    return sortConfig.key === name ? sortConfig.direction : undefined
  }
  getClassNamesFor.prototype = {
    name: PropTypes.string.isRequired,
  }

  return (
    <>
    <table>
        <thead>
        <tr>
        {employeeColumns.map((item,index) => (
          <th key={item.accessor+'-'+index}>
                <button
                type="button"
                onClick={() => requestSort(item.accessor)}
                className={`${styles[getClassNamesFor(item.accessor)]}`}
                >
                {item.Header}
                </button>
          </th>
        ))}  
        </tr>
      </thead>    
      <tbody>
            {slice.map((item,index) => (
          <tr key={item.id+'-'+index}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.startDate}</td>
            <td>{item.street}</td>
            <td>{item.city}</td>
            <td>{item.stateAbbrev}</td>
            <td>{item.zipCode}</td>
            <td>{item.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
    { (slice.length === 0) &&
           (<p>No data available in table</p>)

        }
        <div>
            <p>Showing {minEntries} to {maxEntries} of {(products).length} entries</p>
        </div>

     <TablePagination range={range} slice={slice} setPage={setPage} page={page} />    
    
    </>    
  )
}
DataTable.prototype = {
  products: PropTypes.object.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}