import React from 'react'

export default function RegisterNewUser() {
    return (
	    <form onSubmit={evt => evt.preventDefault()}>
	        <label htmlFor="register-userid">User ID:</label>
	        <input type="text" name="register-userid" id="register-userid" />
	
	        <label htmlFor="register-password">Password:</label>
	        <input type="password" name="register-password" id="register-password" />

	        <label htmlFor="register-password-again">Enter password again:</label>
	        <input type="password" name="register-password-again" id="register-password-again" />
  
	        <input type="submit" value="Signup!" />
	    </form>
    )
}
