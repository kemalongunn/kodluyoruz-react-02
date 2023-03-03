import React, { useEffect, useState } from 'react'

const initialValues = {listTodo:"", isActive:true};

function TodoHeader({contacts,setContacts}) {
  
  const [form,setForm] = useState(initialValues);

  useEffect(() => {
    setForm(initialValues);
  },[]);

  useEffect(() => {
    setForm(initialValues);
  },[contacts]);

  const onChangeInput = (e) => {
    setForm({listTodo: e.target.value, isActive:true});
  }

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(form.listTodo === "" ){
      return TodoHeader;
    }
    setContacts([...contacts, form]);
  }

  return (
    <div>
      <header className='header'>
        <h1>Todos</h1>
        <form onSubmit={onSubmitForm}>
          <input className = 'new-todo' placeholder = 'what needs to be done' value = {form.listTodo} onChange = {onChangeInput} ></input>
        </form>
        <div className="main">
          <input className="toggle-all" type="checkbox" onChange={onChangeInput}/>
		      <label htmlFor="toggle-all" onClick={() =>{
            const newArray = [...contacts]
            newArray.map((item) => {
               item.isActive = !item.isActive
            })
            setContacts([...newArray])
       
        }
        
    } >
			Mark all as complete
		</label>
        </div>
      </header>
    </div>
  )
}

export default TodoHeader