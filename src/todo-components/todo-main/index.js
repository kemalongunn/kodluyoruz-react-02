import React from 'react'

function TodoMain({contacts, setContacts, status}) {
  return (
    <div className='main'>

      <ul className='todo-list'>

        {
          contacts.map((listItem,i) => {

            if(status === "All") {
              return(
                  <li className = {listItem.isActive ? `` : `completed`} key={i}>
                      <div className='view'>
                        <input className = 'toggle' type = 'checkbox' onChange={() => {
                          let newTodo = [...contacts];
                          newTodo[i].isActive = !newTodo[i].isActive;
                          setContacts(newTodo);
                        }}/>
                        <label> {listItem.listTodo} </label>
                        <button className='destroy' onClick={() => {
                          let deleteTodo = [...contacts];
                          deleteTodo = deleteTodo.filter(function(value) {
                            return value !== deleteTodo[i];
                          });
                          setContacts(deleteTodo);
                        }}></button>
                      </div>
                  </li>
              )
            }

            else if(status === "Active"){
              if(listItem.isActive) {
                  return(
                    <li key={i}>
                        <div className='view'>
                            <input className='toggle' type='checkbox' onChange={() => {
                              let newTodo = [...contacts];
                              newTodo[i].isActive = !newTodo[i].isActive;
                              setContacts(newTodo);
                            }}/>
                            <label> {listItem.listTodo} </label>
                            <button className='destroy' onClick={() =>{
                              let deleteTodo = [...contacts];
                              deleteTodo[i].isActive = !deleteTodo[i].isActive;
                              setContacts(deleteTodo);
                            }}></button>
                        </div>
                    </li>
                )
                }
            }

            else if(status === "Completed"){
              if(!listItem.isActive){
                  return(
                    <li key={i}>
                        <div className='view'>
                            <input className='toggle' type='checkbox' onChange={() => {
                              let newTodo = [...contacts];
                              newTodo[i].isActive = !newTodo[i].isActive;
                              setContacts(newTodo);
                            }}/>
                            <label> {listItem.listTodo} </label>
                            <button className='destroy' onClick={() => {
                              let deleteTodo = [...contacts];
                              deleteTodo[i].isActive = !deleteTodo[i].isActive;
                              setContacts(deleteTodo);
                            }}></button>
                        </div>
                    </li>
                )
              }
            }

          })
        }
      </ul>
    </div>
  )
}

export default TodoMain