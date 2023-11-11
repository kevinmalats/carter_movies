import { useState, useRef, useEffect} from "react"

export function useForm(){
    const [search, setSearch] = useState("")
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")
    const firsRenderApplication = useRef(true)
    const regexCaracteresEspeciales = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/;
    const updateSearch = (value) =>{
        if(value.match(regexCaracteresEspeciales)){
            setError(true)
            setMessage("No se permiten caracteres especiales")
            return
        }
        setSearch(value)
    }
    useEffect(()=>{
        if(firsRenderApplication.current){
            firsRenderApplication.current = search !== ""
            return;
        }
        if(search == ""){
            setError(true)
            setMessage("No puede estar vacio")
            return;
        }
        if(search.length < 3){
            setError(true)
            setMessage("Al menos debes escribir 3 letras")
            return
        }
        setError(false)
        setMessage("")

    },[search])
    return{
        updateSearch,
        error,
        message,
        search
    }
}