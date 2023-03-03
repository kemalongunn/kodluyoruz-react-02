import React, { useState } from 'react';
import TodoMain from './todo-main';
import TodoHeader from './todo-header';
import TodoFooter from './todo-footer';

function TodoContacts() {
const [contacts,setContacts] = useState([]);
const [status,setStatus] = useState("All");

  return (
    <div>
      <TodoHeader contacts = {contacts} setContacts = {setContacts} />
      <TodoMain contacts = {contacts} setContacts= {setContacts} status = {status} />
      <TodoFooter contacts = {contacts} setContacts = {setContacts} status = {status} setStatus = {setStatus} />
    </div>
  )
}

export default TodoContacts