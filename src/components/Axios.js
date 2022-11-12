import { useState, useEffect} from 'react';
import axios from 'axios';

const Axios=(_) =>{
    const [name,setName] = useState([]);
    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
        .then((res)=>{setName(res.data.name);
        })
    },[]
    );
    return <h1> {name} </h1>
}
export default Axios;
