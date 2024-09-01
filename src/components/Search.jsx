import { useEffect, useState } from "react"

const URL ="https://api.spoonacular.com/recipes/complexSearch";

const API_KEY ="2c4561da9e594416bc40339c91bd54b8"



function Search() {
    const [query,setQuery] =useState("pasta");

    useEffect(()=>{ 
    async function fetchFood(){
         const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
         const data = await res.json();
         console.log(data.results)
        }
        fetchFood();
    },[query])

  return (
    <div>
        <input value={query} type="text" onChange={(e) =>setQuery(e.target.value)}/>
    </div>
  )
}

export default Search