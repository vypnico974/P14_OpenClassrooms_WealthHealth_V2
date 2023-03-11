/* react */
import React from "react"
/* prop types */
import PropTypes from 'prop-types'
/* css  */
import styles from './select.module.css'


/**
 * @function Select
 * @export
 * @description Select component
 * @return {HTMLElement} component generated HTML
 */
export default function Select({id,label,setter,data,ariaLabel}) { 

  return (
    <div>
        <label className={styles.labelContainer} htmlFor={id}>{label}</label>
        <select className={styles.selectContainer}
            id={id} 
            aria-label={ariaLabel}
            onChange={(e) => setter(e.target.value)} >
                {data.map((item,index) => {
                    return (<option key={item+index}
                         value={item.abbreviation}>{item.label}</option>)
            })}
        </select>
    </div>
  )
}
Select.prototype = {
  id: PropTypes.string,
  label: PropTypes.array,
  setter: PropTypes.string,
  data: PropTypes.array,
  ariaLabel: PropTypes.string,
}
