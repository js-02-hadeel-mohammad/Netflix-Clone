import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import { useEffect,useState } from 'react';
import ModalMovie from '../madalmovie/ModalMovie';


import './FavList.css';
import FavModel from './FavModel';
export default function FavList (props){
    const [favMovies,setMovies]=useState([]);
    const [show, setShow] = useState(false);
    const [chosenMovie, setchosenMovie] = useState();
  
    const handleClose = () => setShow(false);
    const handleShow = (movie) => {
      setchosenMovie(movie);
      setShow(true);
  }

  function updateComments(newmovie, id) {
    let updateMovie = favMovies.map(movie => {
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
    

    async function getFav(){
       // let serverURL=process.env.REACT_KEY_SERVER;
       let serverURL="https://movie-prep-js.herokuapp.com";
        console.log("Server is"+serverURL);
        let response=await fetch(`${serverURL}/getMovies`);
        console.log("Response:"+response);
        let favMoviesData=await response.json();
        console.log(favMoviesData);
        setMovies(favMoviesData);
    }

    async function handleDelete(id){
        //e.preventDefault();
        let serverURL="https://movie-prep-js.herokuapp.com";
        const response=await fetch(`${serverURL}/DELETE/${id}`,{method: 'DELETE',});
        if(response.status!==404){
            getFav();
            Swal.fire(
                'It is done!',
                'Movie Deleted Successfully',
                'success'
            )
        }

    }



    useEffect(()=>{
        getFav();
    },[])

    return (
        <>
         <h1 id='header'>Favorite List Page</h1>
        <br></br>
        <section>
        {
            (favMovies.length>0 )&& favMovies.map(movie=>{
                return(
                    <>
                    <section>
                    <div className='movieCard'>
                    <Card style={{padding:"2rem", width: '18rem', textAlign:"center", marginTop: "3rem", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) " }}>
                       <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                       <Card.Body className='cardBody'>
                         <Card.Title>{movie.title}</Card.Title>
                         <Card.Text>
                           {movie.release_date}
                         </Card.Text>
                         <Card.Text className='overview'>
                           {movie.overview}
                         </Card.Text>
                         <Card.Text>
                         </Card.Text>
                         <br></br>
                      </Card.Body>
                      <Card.Footer>
                     <h6>Comments</h6>
                      <br></br>
                      {movie.comment? movie.comment:"No comment is added"}
                      <br></br>
                         
                         <Button id='updateBut' variant="primary" onClick={()=>{handleShow(movie)}}>Update</Button>
                         <Button id='deleteBut' variant="secondary" onClick={()=>handleDelete(movie.id)}>Delete</Button>
            
                      </Card.Footer>
                     </Card>
                    </div>   
                    </section> 
                    <br></br>

                    {
                       chosenMovie &&  <FavModel show={show} handleClose={handleClose} chosenMovie={chosenMovie} getFav={getFav} updateComments={updateComments}/>
                    }
                    </>
                )
            }) 
            
        }
        </section>
        </>
    )
} /*<Form>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Comments</Form.Label>
  <Form.Control ref={commmentRef} type="text" placeholder="Update your comment" />
  <Form.Text className="text-muted"></Form.Text>
 </Form.Group>
</Form>*/