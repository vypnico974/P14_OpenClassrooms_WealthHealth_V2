/* react */
import React from "react"
import {  NavLink } from "react-router-dom"
/* prop types */
import PropTypes from 'prop-types'
/* css */
import styles from './header.module.css'


/**
  * @function Header
  * @export
  * @description  component : header 
  * @param {string} picture - picture
  * @param {string} arrayNav - array link (nav)
  * @param {string} formatting - formatting
  * @return {HTMLElement} component generated HTML
*/
export default function Header({picture,arrayNav,formatting}) {
 
  return (
    <header className={`${styles.container__header} ${styles[formatting]}`}>
      { picture &&
       <img className={`${styles.header__logo} ${styles[formatting]}`} src={picture} alt="Logo" />
       }
      <p className={styles.title_logo}>WEALT HEALTH</p>
      <p className={styles.title}>HRnet   </p>
      <nav>   
        <ul className={styles.header__nav__ul}>
        {arrayNav.map((nav, index) => (
          <li className={`${styles["header__nav__ul--li"]} ${styles[formatting]}`} key={`${index}-${nav.linkNav}`}>
            <NavLink className={({ isActive }) => {
            return isActive ? styles.navLink_active : styles.link
          }} to={nav.linkNav}
            >{nav.titleNav}</NavLink></li> 
        ))}
        </ul>
      </nav>   
    </header>
  )
}
Header.prototype = {
  picture: PropTypes.string,
  arrayNav: PropTypes.array,
  formatting: PropTypes.string,
}