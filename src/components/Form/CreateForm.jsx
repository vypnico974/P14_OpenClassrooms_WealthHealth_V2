/* react */
import * as React from "react"
import { useState } from "react"
// /* react select  */
// import Select from 'react-select'
/* modal  */
import { Modal } from 'react-modal-by-vyplasiln'
// import 'react-modal-by-vyplasiln/dist/index.css'
/* data  */
import { statesArray } from "../../data/states"
import {departmentArray} from "../../data/department"
/* redux  */
import { useDispatch } from 'react-redux'
import { addEmployee } from "../../redux/employee"

import Select from "../Select/Select"
/* prop types */
import PropTypes from 'prop-types'
/* css  */
import styles from './createForm.module.css'

import InputCalendar from "../InputCalendar/InputCalendar"


/**
 * @function CreateForm
 * @export
 * @description Create employee page 
 * @return {HTMLElement} component generated HTML
 */
export default function CreateForm() {

    const dispatch = useDispatch()

    /* informations - use state */
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState()
    const [startDate, setStartDate] = useState("")
    /* address - use state */
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [selectedState, setSelectedState] = useState(statesArray[0].abbreviation)
     const [zipCode, setZipCode] = useState()
    /* department - use state */
    const [selectedDepartment, setSelectedDepartment] = useState(departmentArray[0].label)
   
    const [resetBirth, setResetBirth] = useState(Math.random());
    const [resetStart, setResetstart] = useState(Math.random());

    /* modal -use state   */
    const [showModal, setShowModal] = useState(false)

    // console.log("departement:", selectedDepartment)

    // const Toggle = () => setShowModal(!showModal)

    // your modal style 
    const modal_styles = {
      "backgroundColor": "rgb(187 245 193)",   
      "borderRadius": 10,
      "boxShadow": "rgb(5 60 9) 0px 0px 0px 2px",
      "color": "rgb(5 72 4)",
      "fontSize": 18,
      "height": "fit-content",
      "padding": "20px 50px",
      "width": "fit-content"
    }


     /**
     * @function selectDateBirthHandler
     * @description  select Date birth handler
     * @param {object} event - date birth
    */
    const selectDateBirthHandler = (event) => {
        setDateOfBirth(event)            
    }
    selectDateBirthHandler.prototype = {
        event: PropTypes.object.isRequired,
    }


    /**
     * @function selectDateStartHandler
     * @description  select start date handler
     * @param {object} event - start date 
    */
    const selectDateStartHandler = (event) => {
        setStartDate(event)
    }
    selectDateStartHandler.prototype = {
        event: PropTypes.object.isRequired,
    }

    

   
  
    /**
     * @function reset
     * @description  formulaire rest
     * 
    */
    const reset = () => {
        document.getElementById("createForm").reset()
        setDateOfBirth("")
        setStartDate("")
    }

     /**
     * @function handleSubmit
     * @description  handle submit 
     * @param {object} event - form event
    */
    const handleSubmit = (event) => {
        event.preventDefault() // prevent default of formulaire        

        let currentDateOfBirth = ""
        let currentStartDate = ""

        /*  date format   */
        let options = {year: 'numeric', month: '2-digit', day: '2-digit'  }

        if (dateOfBirth) {
            currentDateOfBirth = dateOfBirth.toLocaleDateString("en-US", options)        
        }

        if (startDate) {
            currentStartDate = startDate.toLocaleDateString("en-US", options)        
        }
       
        let currentEmployee = {
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: currentDateOfBirth,
            startDate: currentStartDate,
            street: street,
            city: city,
            state: "",
            stateAbbrev: selectedState,
            zipcode: zipCode,
            department: selectedDepartment
        }

        /* add employee store(redux) and local storage(json)   */
        dispatch(addEmployee(currentEmployee))

        console.log("employé :",currentEmployee)

        /* currentEmployee reset   */
        currentEmployee = {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            startDate: "",
            street: "",
            city: "",
            state: "",
            stateAbbrev: "",
            zipcode: "",
            department: ""
        }

       // console.log("reset currentEmployee :",currentEmployee)

        setShowModal(true)
        reset()
    }
    handleSubmit.prototype = {
        event: PropTypes.object.isRequired,
    }


  return (
    <div>
        <form onSubmit={handleSubmit} id="createForm" >

           <div className={styles.createForm}>

                <div className={styles.informationsContainer}>
                    <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="firstName">First name</label>
                        <p>
                            <input className={styles.input} autoComplete="off"
                                id="firstName"
                                name="First-name"
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="first name" 
                                type="text" 
                                required={true}
                                // pattern="[A-zÀ-ú-']{2,}"
                                // title="At least 2 alphabetic characters"
                            />
                        </p>                    
                    </div>
                    <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="lastName">Last name</label>
                        <p>
                            <input autoComplete="off"
                                id="lastName"
                                name="Last-name"
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="last name" 
                                type="text" 
                                required={true}
                                // pattern="[A-zÀ-ú-']{2,}"
                                // title="At least 2 alphabetic characters"
                            />
                        </p>                    
                    </div>
                    <div className={styles.informationsContainer__date}>
                        <label htmlFor="dateBirth">Date of Birth</label>                
                        <InputCalendar 
                         handleResponse={selectDateBirthHandler}
                         key={resetBirth}
                         name="dateBirth"/>                
                    </div>
                    <div className={styles.informationsContainer__date}>
                        <label htmlFor="startDate">Start Date</label>
                        <InputCalendar
                         handleResponse={selectDateStartHandler}
                         key={resetStart}
                         name="startDate"/>
                   </div>
                </div>

                <fieldset className={styles.adressContainer}>
                    <legend>Address</legend>
                    <div className={styles.informationsContainer__firstName}>
                        <label htmlFor="street">Street</label>
                            <p>
                                <input autoComplete="off"
                                    id="street"
                                    name="street"
                                    onChange={(e) => setStreet(e.target.value)}
                                    placeholder="street" 
                                    type="text" 
                                />
                            </p>                    
                        </div>
                        <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="city">City</label>
                            <p>
                                <input autoComplete="off"
                                    id="city"
                                    name="city"
                                    onChange={(e) => setCity(e.target.value)}
                                    placeholder="city" 
                                    type="text" 
                                />
                            </p>                    
                        </div>
                        <div className={styles.informationsContainer__select}>
                            <Select data={statesArray}
                                id="states"
                                label="States"
                                setter={setSelectedState}                         
                                aria-label="states"
                            />
                       
            
                        </div>
                        <div className={styles.informationsContainer__lastName}>
                        <label htmlFor="zipCode">Zip Code</label>
                        <p>
                            <input autoComplete="off"
                            type="number"
                            id="zipCode"
                            name="Zip code"
                            onChange={(e) => setZipCode(e.target.value)}
                            />
                        </p>                    
                    </div>
                </fieldset>

                <div className={styles.departmentContainer}>
                    <div className={styles.informationsContainer__select}>
                        <Select data={departmentArray}
                         id="statessss"
                         label="department"
                         setter={setSelectedDepartment}                         
                         aria-label="department"
                        />               
                    </div>                    
                </div>               
            </div> 


            <div className={styles.btnContainer}>
                <button id="submit"  type="submit">Save</button>
            </div>      

            <div className={styles.ModalContainer}>
                {/* <button onClick={() => Toggle()}>
                Clic to open Modal
                </button> */}

                <Modal 
                id="modalEmployeeCreated"
                showModal={showModal}
                closeModal={() => setShowModal(false)}
                modal_styles={modal_styles}
                message="Employee Created !"
                />
            </div>
        </form>
    </div>
   )
}
