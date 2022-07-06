import React, { useState, useEffect, useRef } from "react";
import {v4 as uuidv4} from 'uuid';

export const TodoForm = (props) => {
   const [input, setInput] = useState(props.edit ? props.edit.value : "");
   
   const inputRef = useRef(null);
   
   useEffect(() => {
      inputRef.current.focus();
   })
   
   const handleChange = (e) => {
      setInput(e.target.value);
   };
   
   const handleSubmit = (e) => {
      e.preventDefault();
      props.onSubmit({
         id: uuidv4(),
         text: input,
      });
      setInput("");
   };
   
   return (
      <form className={"todo-form"} onSubmit={handleSubmit}>
         <input
            onChange={handleChange}
            ref={inputRef}
            type="text"
            placeholder={props.edit ? "Update this todo" : "Add a todo"}
            value={input}
            name={"text"}
            className={ props.edit ? "todo-input edit" : "todo-input"}
         />
         <button className={ props.edit ? "todo-button edit" : "todo-button"}>{props.edit ? "Update" : "Add todo"}</button>
      </form>
   );
};
