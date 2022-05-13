import Movie from '../movie/Movie'
import './MovieList.css'
export default function MovieList(props){
    return(
        <>
            {
                props.movies.map((element) => {
                    return (
                        <>
                        <section>
                           <div className='movieCard'>
                             <Movie movie={element} updateMovies={props.updateMovies} />
                             <br></br>
                           </div>
                        </section>
                       
                        </>
                    )
                }

                )
            }
        </>
    )
}