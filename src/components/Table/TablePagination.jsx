/* react  */
import React, { useEffect } from "react"
/* prop types */
import PropTypes from 'prop-types'
/*  css  */
import styles from "./tablePagination.module.css"


/**
 * @function TablePagination
 * @export
 * @description table pagination 
 * @param {Object} range - range of table
 * @param {Number} setPage - set page of table
 * @param {Number} page - page of table
 * @param {object} slice - data slice of table
 * @return {HTMLElement} component generated HTML
 */
export default function TablePagination ({ range, setPage, page, slice }) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);
  return (
    <div className={styles.tableFooter}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>

        ))}
    </div>
  )
}
TablePagination.prototype = {
  range: PropTypes.object.isRequired,
  setPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  slice: PropTypes.object.isRequired,
}

