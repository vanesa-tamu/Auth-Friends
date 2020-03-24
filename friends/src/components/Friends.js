import React from 'react';
import { Route, Link, Switch, Redirect  } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth.js'
import FriendsForm from './FriendsForm.js'
import { PrivateRoute } from './auth/PrivateRoute.js'
import './Friends.css'

const Friends = () => {
    return(
        <>
            <h1>My Friends: </h1>
        </>
    )
}

export default Friends