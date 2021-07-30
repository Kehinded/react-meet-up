
import {useContext} from 'react'
import classes from './Detail.module.css'
import FavouriteContext from '../store/favourites-context'
import { useLocation } from 'react-router-dom'

const Detail = ({detail, deleteItem}) => {
    const location = useLocation()
    const FavouriteCtx = useContext(FavouriteContext)
    const itemIsFavourite = FavouriteCtx.itemFavourite(detail.id)
  const toggleAddFavouriteHandler = () => {
   if(itemIsFavourite){
       FavouriteCtx.removeFavourite(detail.id)
   }
   else{
      // console.log(detail);
       FavouriteCtx.addFavourite({
           id: detail.id,
           firstName: detail.firstName,
           lastName: detail.lastName,
           email: detail.email,
           comment: detail.comment
       })
   }
  }

    return (
        <div className={classes.detail} >
            {location.pathname === '/' && <span className={classes.cancel} onClick={() => deleteItem(detail.id, detail.firstName)}>&times;</span>}
            <h2>Firstname: {detail.firstName}</h2>
            <h3>Lastname: {detail.lastName} </h3>
            <h4>Email: {detail.email}</h4>
            <h5>Comment: {detail.comment}</h5>
            {itemIsFavourite ? <button className={classes.btn} onClick={toggleAddFavouriteHandler}>unlike detail</button> : <button className={classes.btn} onClick={toggleAddFavouriteHandler}>like detail</button>}
        </div>
    )
}

export default Detail
