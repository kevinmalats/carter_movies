import { useEffect, useState } from "react"
import {getRandomFact} from "../services/fact";

export const useFact = () => {
    const [fact, setFact] = useState();
    const refreshFact = async () => {
        const newFact = await  getRandomFact();
        setFact(newFact)
    }
    useEffect(()=>{
        refreshFact();
    },[])
    return { fact, refreshFact }
}