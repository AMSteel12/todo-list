import React from 'react'

export default function Login() {
    return (
	    <form onSubmit={evt => evt.preventDefault()}>
	        <label htmlFor="login-userid">User ID:</label>
	        <input type="text" name="login-userid" id="login-userid" />
	        <label htmlFor="login-password">Password:</label>
	        <input type="password" name="login-userid" id="login-password" />
                <input type="submit" value="Login" />
	    </form>
    )
}
