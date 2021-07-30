// import {createContext, useState} from 'react'




// const FavouriteContext = createContext({
//     favourites: [],
//     totalFavourites: 0,
//     addFavourite: (favouriteDetail) => {},
//     removeFavourite: (detailId) => {},
//     itemFavourite: (detailId) => {}
// })


// export function FavouriteContextProvider (props) {
//     const [userFavourite, setUserFavourite] = useState([])

//     function addFavouriteHandler (favouriteDetail) {
//         // setUserFavourite((prevUserFavourite) => {
//         //     return prevUserFavourite.concat(favouriteDetail)
//         // })
//         setUserFavourite([...userFavourite, favouriteDetail])
//     }

//     function removeFavouriteHandler (detailId) {
//         // setUserFavourite((prevUserFavourite) =>{
//         //     return prevUserFavourite.filter(favourites => favourites.id !== detailId)
//         // })
//         setUserFavourite(userFavourite.filter((favourites) => { return favourites.id !==detailId}))
//     }

//     function itemIsFavoriteHandler (detailId) {
//         return userFavourite.some(favourites => favourites.id === detailId)
//     }

//     const context = {
//         favourites: userFavourite,
//         totalFavourites: userFavourite.length,
//         addFavourite: addFavouriteHandler,
//         removeFavourite: removeFavouriteHandler,
//         itemFavourite: itemIsFavoriteHandler
//     }

//     return <FavouriteContext.Provider value={context}>
//      {props.children}
//     </FavouriteContext.Provider>
// }

// export default FavouriteContext;

import { createContext, useState } from 'react'

const FavouriteContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteDetail) => {},
    removeFavourite: (detailId) => {},
    itemFavourite: (detailId) => {}
})

export function FavouriteContextProvider (props) {
    const [userFavourite, setUserFavourite] = useState([])

    function addFavouriteHandler (newDetail) {
        setUserFavourite([...userFavourite, newDetail])
    }

    function removeFavouriteHandler (detailId) {
        setUserFavourite(userFavourite.filter((fav) => fav.id !== detailId))
    }

    function itemIsFavoriteHandler (detailId) {
      return  userFavourite.some( fav => fav.id === detailId)
    }

    const context = {
    favourites: userFavourite,
    totalFavourites: userFavourite.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemFavourite: itemIsFavoriteHandler
    }

    return <FavouriteContext.Provider value={context}>
        {props.children}
    </FavouriteContext.Provider>
}

export default FavouriteContext;