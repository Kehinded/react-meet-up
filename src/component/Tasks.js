import {useContext} from 'react'
import FavouriteContext from '../store/favourites-context'
import Details from './Details'
const Tasks = () => {
    const FavouriteCtx = useContext(FavouriteContext)
    return (
        <div>
            <h2>i am favourite and wadup!</h2>
            <Details details={FavouriteCtx.favourites} />
        </div>
    )
}

export default Tasks
