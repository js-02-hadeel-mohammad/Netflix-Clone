import { useEffect,useState } from 'react';
export default function Home(props){
    const [movies,setMovies]=useState([]);
    async function getTrending(){
        let serverURL=process.env.REACT_KEY_SERVER;
        let response=await fetch(`${serverURL}/trending`);
        let moviesData=response.json();
        setMovies(moviesData);
    }

    useEffect(()=>{
        getTrending();
    },[])
    
    return(
        <>
        <h1>Home Page</h1>

        </>
    )
}