import React, { useState, useEffect}  from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import Friend from './Friend.js'
import './Friends.css'

const Friends = () => {
    const [myFriends, setMyFriends] = useState([])
    useEffect(() => {
        axiosWithAuth()
            .get(`/api/friends`)
            .then(res => {
                // console.log(res.data)
                setMyFriends(res.data)
            })
            .catch( err => console.error('ERROR IN FRIEND GET', err) )

    }, [])
    return(
        <>
            <h1>My Friends: </h1>
            {myFriends.map(friend => (
                <Friend friend={friend} key={friend.id}/>
            )
            )}
        </>
    )
}

export default Friends