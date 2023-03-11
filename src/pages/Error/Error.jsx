/* css  */
import styles from './error.module.css'
//react
import { Link } from "react-router-dom"


/**
 * @function Error
 * @export
 * @description Error page 
 * @return {HTMLElement} component generated HTML
 */
export default function Error() {
  return (
    <main className={styles.error}>
        <h1 className={styles.error__title}>404</h1>      
        <p className={styles.error__text}>Whoops! This page doesn't exist.</p>
        <Link to="/" className={styles.error__link}>Return to the home page.</Link>
    </main>
  )
}
