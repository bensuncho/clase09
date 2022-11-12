import { useState, useEffect } from "react";
const FetchApi= ()=>{
    const [name,setName] = useState(null);
    useEffect( ()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then( res => res.json())
        .then( res=> setName(res.name));},[]
);
return <h1>{name}</h1>

}
export default FetchApi;