const API_CAT = "https://catfact.ninja/fact"
const API_IMAGES = "https://cataas.com/cat/says"
export const getRandomFact = async() =>{
    const res= await fetch(API_CAT);
    const data = await res.json();
    const { fact } =  data;
    return fact;
}

export const getImage = async (firstWord) => {
      const res = await fetch(`${API_IMAGES}/${firstWord}?size=50&color=red&json=true`)
      const data = await res.json()
      console.log(data)
      return data.url

}