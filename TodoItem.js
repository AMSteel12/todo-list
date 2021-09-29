import React from 'react'

export default function TodoItem({title, description, complete}) {

    const dateCreated = new Date().toDateString();
    const dateCompleted = new Date().toDateString();

    return (
	    <div>
	        <h3>{title}</h3>
	        <div>{description}</div>
	          <br />
	        <i>Date created: </i>
	        <div>{dateCreated}</div>
	          <br />
                <div>{complete}</div>
	          <br />
	        <i>Date completed: </i>
	        <div>{dateCompleted}</div>
	          <br />
	          <br />   
	    </div>   )
}
