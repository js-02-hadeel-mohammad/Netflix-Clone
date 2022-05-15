import Movie from '../movie/Movie'
import './MovieList.css'
import { Container } from 'react-bootstrap'
export default function MovieList(props){
    return(
        <>
        <Container fluid className='container'>
            <div className='d-flex flex-wrap 
            justify-content-between w-75 ms-auto me-auto'>
                 {
                props.movies.map((element) => {
                    return (
                        <>
                           <Movie key={element.id} movie={element} updateMovies={props.updateMovies} />

                       
                        </>
                    )
                }

                )
            }
            </div>
        </Container>
           
        </>
    )
}

