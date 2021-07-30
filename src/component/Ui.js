import classes from './Ui.module.css'

const Ui = (props) => {
    return (
        <div className= {classes.styler}>
           {props.children}
        </div>
    )
}

export default Ui
