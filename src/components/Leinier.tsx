import {useCatImage} from "../hooks/useCatImage";

export function Leinier({fact}){
    const {image} = useCatImage({fact})
    return (
        <>
            <h1>Hola Papá</h1>
            {image &&
              <img src={image}/>
            }
        </>
    )
 }