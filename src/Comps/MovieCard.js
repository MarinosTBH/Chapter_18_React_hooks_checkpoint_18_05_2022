import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Card} from "react-bootstrap";

const Movies = ({Films}) => {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-around', flexWrap:'wrap', width:'70%', margin:'50px auto'}}>

      {Films.map (film =>  {
        return (
          <Card style={{ width: '18rem', margin:10, padding:10 }} bg="light" key={film.id}>
          <Card.Img variant="top" src={film.poster } alt={film.name} height={200} width={200}/>
          <Card.Body>
          <Card.Title>{film.name}</Card.Title>
          <Card.Text>
          Lorem ipsum ...
          </Card.Text>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            edit={false}
            value={film.rating}
          />,
          </Card.Body>
      </Card>
        )         
      }
      )
      } 
    </div>
  )
}
export default Movies;