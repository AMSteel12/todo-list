import React from 'react'

export default function Logout({username}) {
    
    return (

	    <form onSubmit={evt => evt.preventDefault()}>
  	        Currently logged in as: <b>{username}</b>
                <input type="submit" value="Logout" />
	    </form>
    )
}
