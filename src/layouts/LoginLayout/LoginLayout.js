import React from 'react'
import { useHistory } from 'react-router-dom'

export default function LoginLayout(props) {

    useHistory().push('/home')

    return (
        <div>
            <h1>Login Module</h1>
        </div>
    )
}
