import AppUserBar from './UserInfo/AppUserBar'
import CreateTodoItem from './CreateTodoItem'
import TodoList from './TodoList'

function App(){

    const todos = [
	{
	    title:"Todo item #1", 
            description:"Description:  Some new todo description",
            dateCreated: "{dateCreated}",
            complete:"Completed todo item",
            dateCompleted:"{dateCompleted}"
	},

	{
	    title:"Todo item #2", 
            description:"Description:  Another new todo description",
            dateCreated: "{dateCreated}",
            complete:"Completed todo item",
            dateCompleted:"{dateCompleted}"
	},

	{
	    title:"Todo item #3", 
            description:"Description:  Still another new todo description",
            dateCreated: "{dateCreated}",
            complete:"Completed todo item",
            dateCompleted:"{dateCompleted}"
	}
    ]
   
    return (
       <div>
         <AppUserBar />
           <br/><br/><hr/><br/><br/>
	 <CreateTodoItem user="Aaron Min" />
	 <TodoList todos={todos} />  
       </div>
    )	    	
}

 
export default App;
