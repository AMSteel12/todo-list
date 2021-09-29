import React from 'react'
import Logout from './Logout'
import Login from './Login'
import RegisterNewUser from './RegisterNewUser'

export default function AppUserBar() {

    const username = ''
    //const username ='Aaron Min'

    if (username) {
	return <Logout username={username} />
    }

    else {
	return (
	    <>
		<Login />
		<RegisterNewUser />
		</>
	)
    }
}
	
    
    
