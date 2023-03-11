/* react */
import * as React from "react"
/* form */
import CreateForm from "../../components/Form/CreateForm"
// /* css  */
// import styles from './createEmployeePage.module.css'
// /* icon */
// import userIcon from '../../assets/user_add.svg'


/**CreateEmployeePage
 * @function CreateEmployeePage
 * @export
 * @description Create employee page 
 * @return {HTMLElement} component generated HTML
 */
export default function CreateEmployeePage() { 

  return (
    <main>
        {/* <div className={styles.userIconContainer}>
            <img className={styles.userIcon} src={userIcon} alt="user add" />
        </div> */}
        <CreateForm />       
    </main>
  )
}
