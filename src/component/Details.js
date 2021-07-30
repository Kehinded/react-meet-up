import React from 'react'
import Detail from './Detail'
import classes from './Details.module.css'

const Details = ({details, deleteItem}) => {
    return (
        <div className={classes.wrapper}>
           {
               details.map((detail) => <Detail key={detail.id} deleteItem={deleteItem} detail ={detail}/>)
           }
        </div>
    )
}

export default Details
