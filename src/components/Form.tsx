import React from "react"
import {useForm} from "../hooks/useForm";
export  function Form(){
    const {error,updateSearch,message,search} = useForm()
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(new window.FormData(event.target))
        const {search} = Object.fromEntries(new window.FormData(event.target));
        console.log(search)
    }
    const handleChange=(event)=>{
        updateSearch(event.target.value)
    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={search} placeholder={"avenger, house of terror"}/>
            <button type="submit">Buscar</button>
            {error &&
              <p style={{color:"red"}}>{message}</p>
            }
        </form>
)

}