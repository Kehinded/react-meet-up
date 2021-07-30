import {Link} from 'react-router-dom'
import classes from  './Navigations.module.css'
import {useContext} from 'react'
import FavouriteContext from '../store/favourites-context'

const Navigations = () => {
    const favoriteCtx = useContext(FavouriteContext)
    return (
        <div className={classes.header}>
            <div className={classes.no_wrap}>
               No of likes: <div className={classes.like_no}>{favoriteCtx.totalFavourites}</div>
            </div>
            <ul className={classes.list}>
                <li className={classes.item}>
                    <Link  className={classes.link} to='/'>main page</Link>
                </li>
                <li className={classes.item}>
                    <Link className={classes.link} to='/form-page'>form page</Link>
                </li>
                <li className={classes.item}>
                    <Link className={classes.link} to='/favourite-page'>favorite</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigations
