import React from 'react'

export default function CreateTodoItem ({user}) {
    return (
	    <form onSubmit={evt => evt.preventDefault()}>

	      <div>Todo item created by: <b>{user}</b></div>

	      <div>
	        <label htmlFor="create-todo-title">Title:</label>
	        <input type="text" name="create-todo-title" id="create-todo-title" />
	      </div>

	      <textarea />
	      <input type="submit" value="Create Todo" />
	    </form>
            )
}
