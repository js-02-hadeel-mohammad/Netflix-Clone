import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ModalMovie from '../madalmovie/ModalMovie'
import { useState } from 'react';
import './Movie.css';

export default function Movie(props){
  const [show, setShow] = useState(false);
  const [chosenMovie, setchosenMovie] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setchosenMovie(movie);
    setShow(true);
}
    
    return(       
     <>
     <div className='movieCard'>
     <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
        <Card.Body>
          <Card.Title>{props.movie.title}</Card.Title>
          <Card.Text>
            {props.movie.release_date}
          </Card.Text>
          <Card.Text>
            {props.movie.overview}
          </Card.Text>
          <Card.Text>
          {props.movie.comment}
          </Card.Text>
        <Button variant="primary" onClick={()=>{handleShow(props.movie) }}>Add to Favorites</Button>
       </Card.Body>
      </Card>
     </div>
     

      {
        chosenMovie &&  <ModalMovie show={show} handleClose={handleClose} chosenMovie={chosenMovie} updateMovies={props.updateMovies}/>
      }
        
     </>
    )
}
