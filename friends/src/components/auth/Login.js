import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    return(
        <div>
            <h1>Please Login!</h1>
            <form>
                <label htmlFor='username'>Username</label>
                <input
                    id='username' 
                    type='text'
                    name='username'
                />

                <label htmlFor='password'>Password</label>
                <input 
                    id='password'
                    name='password'
                    type='password'
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login