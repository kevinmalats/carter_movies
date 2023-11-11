import { useState, useEffect } from "react"
import {getImage} from "../services/fact";
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const useCatImage = ({fact}) => {
    const [image, setImage] = useState();

    const getImageUrl = async () =>{
        const firstWord = fact.split(" ").slice(0,3).join("")
        const newImage = await getImage(firstWord);
        setImage(newImage)
    }
    useEffect( ()=>{
        if(!fact) return
        getImageUrl();
    },[fact])

    return {image: `${CAT_PREFIX_IMAGE_URL}${image}`}
}