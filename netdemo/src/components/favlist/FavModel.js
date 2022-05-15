import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import { useRef } from 'react';
import Swal from 'sweetalert2';


export default function FavModel(props){
    const commmentRefUp = useRef({});
    console.log(commmentRefUp);


    async function handleUpdateComment(e,movie){
        e.preventDefault();
        let serverURL="https://movie-prep-js.herokuapp.com";
        let updatedComment=commmentRefUp.current.value;
        console.log("UP"+updatedComment);
        console.log (props.chosenMovie);

        const dataToBeSent = {
            title: props.chosenMovie.title,
            release_date: props.chosenMovie.release_date,
            poster_path: props.chosenMovie.poster_path,
            overview: props.chosenMovie.overview,
            comment: updatedComment
        }
        const response=await fetch(`${serverURL}/UPDATE/${props.chosenMovie.id}`,{method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToBeSent)
    })
    console.log (props.chosenMovie);
    const data = await response.json();
    console.log(data);

        if(response.status===200){
            props.getFav();
            Swal.fire(
                'It is done!',
                'Movie Comment Updated Successfully',
                'success'
            )
        }

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
              <Form.Control ref={commmentRefUp} type="text" placeholder="Enter your comment" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleUpdateComment}>Submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          
        </Modal.Footer>
      </Modal></>
    )

}