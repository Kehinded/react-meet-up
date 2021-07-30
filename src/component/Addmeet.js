import Meetupform from './Meetupform'
import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Addmeet = () => {
    
    const history = useHistory()
    const [isSending, setIsSending] = useState(false)
    useEffect(() => {
        setIsSending(false)
    }, [])

    const postInfo = async (details) =>{
        setIsSending(true)
        await fetch('https://react-getting-started-70a69-default-rtdb.firebaseio.com/detail.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        })
    
    history.replace('/')

    }
    if(isSending){
        return(
            <h1 style={{textAlign: 'center'}}>submitting your comment</h1>
        )
    }
    else{
        return (
            <>
            <h1 style={{textAlign: 'center'}}>submit your comment</h1>
            <Meetupform userInfo={postInfo} />
            </>
        )
    }
}

export default Addmeet


//https://react-getting-started-70a69-default-rtdb.firebaseio.com/