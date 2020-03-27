import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth.js'

const Login = () => {
    const history = useHistory();
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        const { name, value } = e.target

        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const handleLogin = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/login', credentials)
            .then(res => {
                console.log('LOGIN RES: ', res)
                window.localStorage.setItem('token', res.data.payload)
                history.push('/friends')
            })
            .catch(err => console.error('ERROR IN LOGIN', err))
        setCredentials({
            username: '',
            password: ''
        })
    }

    return(
        <div>
            <h1>Please Login!</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor='username'>Username</label>
                <input
                    id='username' 
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />

                <label htmlFor='password'>Password</label>
                <input 
                    id='password'
                    name='password'
                    type='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login