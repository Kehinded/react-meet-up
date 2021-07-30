import React from 'react'
import classes from './Task.module.css'
import {useState, useEffect} from 'react'
import Details from './Details'

const Task = () => {
    const [details, setDetails] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isDeleting, setIsDeleting] = useState(false)
    const [delName, setDelName] = useState('')

    useEffect( () => {
        const getDetails = async () => {
         const loaddetails = await fetchDetails()
         const ldetails = []
         for(const key in loaddetails){
             const detail = {
                id: key,
                ...loaddetails[key]
             }
            //console.log(detail);
             ldetails.push(detail)
         }
         setIsLoading(false)
         setDetails(ldetails)
        }
        getDetails()
    }, [])

    const fetchDetails = async () => {
     const res = await fetch('https://react-getting-started-70a69-default-rtdb.firebaseio.com/detail.json')
     const data = await res.json()
     return data
    }

    // const fetchDetail = async (id) => {
    //     const res = await fetch(`https://react-getting-started-70a69-default-rtdb.firebaseio.com/detail/${id}.json`)
    //     const data = await res.json()
    //     return data
    //    }

    const deleteItem = async (id, name) => {
        setDelName(name)
        setIsDeleting(true)
         setDetails(details.filter((detail) => detail.id !== id))
      await fetch(`https://react-getting-started-70a69-default-rtdb.firebaseio.com/detail/${id}.json`, {
            method: 'DELETE'
        })
      .then(()=>{
       setTimeout(() => {
        setIsDeleting(false)
        setDelName('')
       }, 2000);
      })
    }

    if(isLoading){
        return(
            <h1 className= {classes.header}>Loading...</h1> 
        )
    }
    else{
        if(isDeleting){
            return (
                <div className={classes.task}>
                    <h1 className= {classes.header}>deleted {delName} details</h1>
                    <Details details={details} deleteItem={deleteItem}/>            
                </div>
            )
        }
       else{
        return (
            <div className={classes.task}>
                {details.length > 0 ? <h1 className= {classes.header}>all detail(s) </h1> : <h1 className= {classes.header}>no details to show</h1>}
                <Details details={details} deleteItem={deleteItem}/>            
            </div>
        )
       }
    }

   
}

export default Task
