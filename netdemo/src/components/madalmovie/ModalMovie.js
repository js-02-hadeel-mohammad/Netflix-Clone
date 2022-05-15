import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useRef } from 'react';


export default function ModalMovie(props){
    const commmentRef = useRef({});
    console.log(commmentRef);

    function handleComment(e) {
        e.preventDefault();
        const comment = commmentRef.current.value;
        console.log(comment);
        const newmovie = { ...props.chosenMovie, comment };
        console.log(newmovie);
        props.updateMovies(newmovie,props.chosenMovie.id);
    }

    async function handleAddFav(e, movie) {
        e.preventDefault();
        const dataToBeSent = {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            overview: movie.overview,
            comment: movie.comment
        }

        let serverURL="https://movie-prep-js.herokuapp.com";
        const response = await fetch(`${serverURL}/addMovie`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToBeSent)
        })
        const data = await response.json();
        console.log(data);
        props.handleClose();

    }

    return(
        <>
         <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.chosenMovie.poster_path}`} />
        <Modal.Body>
          {props.chosenMovie.overview}
          <br></br>
          {props.chosenMovie.comment? props.chosenMovie.comment:"No comment is added"}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Comments</Form.Label>
              <Form.Control ref={commmentRef} type="text" placeholder="Enter your comment" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleComment}>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant="primary" onClick={(e)=>{handleAddFav(e,props.chosenMovie);
         props.handleClose()}}>Add to Favorites</Button>
        </Modal.Footer>
      </Modal></>
    )
}