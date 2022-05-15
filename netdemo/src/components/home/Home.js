import { useEffect,useState } from 'react';
import MovieList from "../movielist/MovieList";
import './Home.css'
export default function Home(props){
    const [movies,setMovies]=useState([]);
    async function getTrending(){
       // let serverURL=process.env.REACT_KEY_SERVER;
       let serverURL="https://movie-prep-js.herokuapp.com";
        console.log("Server is"+serverURL);
        let response=await fetch(`${serverURL}/trending`);
        console.log("Response:"+response);
        let moviesData=await response.json();
        console.log("MoviesData"+moviesData);
        setMovies(moviesData);
    }

    function updateMovies(newmovie, id) {
        let updateMovie = movies.map(movie => {
            if (movie.id === id) {
                movie.comment = newmovie.comment;
                return movie;
            } else {
                return movie;
            }
        })
        console.log("Update Movie:");
        console.log(updateMovie);
        setMovies(updateMovie);
    }

    useEffect(()=>{
        getTrending();
    },[])
    
    return(
        <>
        <h1 id='header'>Home Page</h1>
        <br></br>
        <section>
        {
            (movies.length>0 )&& <MovieList movies={movies} updateMovies={updateMovies} />    
        }
        </section>
        

        </>
    )
}