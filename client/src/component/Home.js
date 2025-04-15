import React, { useEffect, useState } from "react";  
import axios from "axios";  

export default function TodoList() {  
    const [title, setTitle] = useState('');  
    const [desc, setDescription] = useState('');  
    const [todos, setTodos] = useState([]);  
    
  
    function handleSubmit() {  
        const newTodo = { title,desc };  
        axios.post("http://localhost:8000/todos",newTodo)  
            .then((res)=>{  
                console.log(res);  
                setTodos([...todos, newTodo]);  
                setTitle(''); 
                setDescription(''); 
            })  
            .catch(error =>{  
                console.error("There was an error posting the todo!", error);  
            });  
    }  

    useEffect(() =>{  
        const fetchTodos = async() => {  
            try {  
                const response=await axios.get("http://localhost:8000/gettodos");  
                setTodos(response.data); 
            } catch (e){  
                console.error("There was an error fetching the todos", e);  
            }  };  
        fetchTodos();  
    },[]);  

    return (  
        <>  
            <h1>Todo List</h1>  
            <input  
                placeholder="Enter title"  type="text"  
                value={title}  
                onChange={(e) =>setTitle(e.target.value)}  
            />  
            <input  
                placeholder="Enter Description"  type="text"  
                value={desc}  
                onChange={(e)=>setDescription(e.target.value)}  
            />  
            <input type="submit" onClick={handleSubmit} value="Add Todo" />  
            <ul>  
                {todos.map((item, index) => (  
                    <li key={index}>{item.title}, {item.desc}</li>  
                ))}  
            </ul>  
        </>  
    );  
}  