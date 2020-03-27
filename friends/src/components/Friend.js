import React from 'react'

const Friend = ({friend}) => {
    return(
        <>
            <h1>{friend.name}</h1>
            <h2>{friend.age}</h2>
            <h3>{friend.email}</h3>
        </>
    )
}

export default Friend