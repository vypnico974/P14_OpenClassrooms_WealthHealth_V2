/* react */
import { useState, useEffect } from "react"
/* prop types */
import PropTypes from 'prop-types'


/**
 * @function calculateRange
 * @description calculate range for table 
 * @param {Object} data - table data
 * @param {Number} rowsPerPage - rows per page
 */
const calculateRange = (data, rowsPerPage) => {
  const range = []
  const num = Math.ceil(data.length / rowsPerPage)
  let i = 1
  for (let i = 1; i <= num; i++) {
    range.push(i)
  }
  return range
}
calculateRange.prototype = {
  data: PropTypes.object.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}


/**
 * @function sliceData
 * @description calculate range for table 
 * @param {Object} data - table data
 * @param {Number} page - page of table
 * @param {Number} rowsPerPage - rows per page
 */
const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
}
sliceData.prototype = {
  data: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}


/**
 * @function useTable
 * @export
 * @description use table
 * @param {Object} data - table data
 * @param {Number} page - table page
 * @param {Number} rowsPerPage - rows per page
 */
const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([])
  const [slice, setSlice] = useState([])

  useEffect(() => {
    const range = calculateRange(data, rowsPerPage)
    setTableRange([...range])

    const slice = sliceData(data, page, rowsPerPage)
    setSlice([...slice])
  }, [data, setTableRange, page, setSlice,rowsPerPage])

  return { slice, range: tableRange }
}
export default useTable
useTable.prototype = {
  data: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}
