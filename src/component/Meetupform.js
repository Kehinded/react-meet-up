
import {useRef} from 'react'
import classes from './Addmeet.module.css'


const Meetupform = ({userInfo}) => {
    const firstnameInputRef = useRef()
    const lastnameInputRef = useRef()
    const emailInputRef = useRef()
    const textareaInputRef = useRef()

    const getFormData = (e)=> {
        e.preventDefault()
        const firstNameInput = firstnameInputRef.current.value
        const lastNameInput = lastnameInputRef.current.value
        const emailInput = emailInputRef.current.value
        const textareaInput = textareaInputRef.current.value

        const details = {
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            comment: textareaInput
        }

        userInfo(details)
        firstnameInputRef.current.value = ''
        lastnameInputRef.current.value = ''
        emailInputRef.current.value  = ''
        textareaInputRef.current.value = ''
    }
    return (
        <form className={classes.form} onSubmit={getFormData}>
            
            <div className={classes.form_group}>
                <label className={classes.form_label} htmlFor="firstName">first name</label>
                <input type="text" ref = {firstnameInputRef} id= 'firstName' placeholder= 'first name' className={classes.form_input} />
            </div>
            <div className={classes.form_group}>
                <label className={classes.form_label} htmlFor="lastName">last name</label>
                <input type="text"  ref = {lastnameInputRef} id= 'lastName' placeholder= 'last name' className={classes.form_input} />
            </div>
            <div className={classes.form_group}>
                <label className={classes.form_label} htmlFor="email">email</label>
                <input type="text"  ref = {emailInputRef} id= 'email' placeholder= 'email' className={classes.form_input} />
            </div>
            <div className={classes.form_group}>
                <textarea  ref = {textareaInputRef} className={classes.form_input} placeholder= 'Feedback' name="" id="" cols="30" rows="5"></textarea>
            </div>
            <input type="submit" value= 'submit'  />
        </form>
    )
}

export default Meetupform
