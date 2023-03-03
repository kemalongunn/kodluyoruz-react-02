import React, { useEffect, useState } from 'react'

function TodoFooter({contacts, setContacts, status, setStatus}) {
  
  const [todoActiveLength,setTodoActiveLength] = useState(0);

  useEffect(() => {
    setTodoActiveLength(0);
    contacts.map((item) =>{
      if(item.isActive){
        setTodoActiveLength((count => count + 1));
      }
    })
  },[contacts]);

  const clearActiveButton = () => {
    const allDelete = contacts.filter(item => item.isActive);
    setContacts(allDelete);
  }

  const todoStatus = (e) => {
    setStatus(e.target.name);
  }

  return (
    <footer className='footer'>
      
      <span className='todo-count'>
        <strong> {todoActiveLength} </strong> &nbsp;items left
      </span>

      <ul className='filters'>
          <li>
               <a href='#/' name = 'All' className = {status === 'All' ? 'Selected' : ""} onClick = {todoStatus} >All</a>
          </li>
                
          <li>
               <a href='#/' name = 'Active' className = {status === 'Active' ? 'Selected' : ""} onClick = {todoStatus} >Active</a>
          </li>
          
          <li>
                <a href='#/' name = 'Completed' className = {status === 'Completed' ? 'Selected': ""} onClick = {todoStatus} >Completed</a>
          </li>
      </ul>

      <button className='clear-completed' onClick={clearActiveButton}> 
        Clear Completed
      </button>

      <footer className="info">
            <p>Click to edit a todo</p>
            <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>

    </footer> 
  )
}

export default TodoFooter