import React from "react"
// prop types
import PropTypes from 'prop-types'
/* css */
import styles from './table.module.css'


/**
  * @function TableData
  * @export
  * @description  component : header 
  * @param {array} columns - columns for table
  * @param {object} data - data for table
  * @return {HTMLElement} table component generated HTML
*/
export default function TableData({ columns, data }) {  

 
  return (
   <div>

     <p>TEST TABLEAU SANS LIBRAIRIE</p>
     {console.log(columns, data)  }


   </div>
  )
}
TableData.prototype = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
}


