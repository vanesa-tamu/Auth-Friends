import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js'

const FriendsForm = () => {
    const [friend, setFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFriend({
            ...friend,
            [name]: value
        })
    }

    const handleFriendSubmit = (e) => {
        e.preventDefault()

        const addFriend = {
            name: friend.name,
            age: Number(friend.age),
            email: friend.email
        }

        axiosWithAuth()
            .post(`/api/friends`, addFriend)
            .then(res => {
                console.log('POST FRIEND: ',res)
            })
            .catch( err => console.error('ERROR IN FRIEND FORM', err) )
        setFriend({
            name: '',
            age: '',
            email: ''
        })
    }

    return(
        <>
            <form onSubmit={handleFriendSubmit}>
                <label htmlFor='name' />
                <input
                    id='name' 
                    placeholder='name'
                    type='text'
                    name='name'
                    value={friend.name}
                    onChange={handleChange}
                />

                <label htmlFor='age'/>
                <input 
                    id='age'
                    placeholder='age'
                    name='age'
                    type='age'
                    value={friend.age}
                    onChange={handleChange}
                />
                
                <label htmlFor='email'/>
                <input 
                    id='email'
                    placeholder='email'
                    name='email'
                    type='email'
                    value={friend.email}
                    onChange={handleChange}
                />
                <button type='submit'>Add Friend</button>
            </form>
        </>
    )
}

export default FriendsForm