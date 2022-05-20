
import React from 'react'
import {Navbar, Container, Button} from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import "./NavBar.css"

const NavBar = ({
  Input, 
  handleInput, 
  Rating, 
  handleRating, 
  handleMovie}) => {
    return (
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container fluid="md">
          <Navbar.Brand href="/" className="Logo" style={{fontSize:25, fontWeight:"bolder"}}>GETLIFY</Navbar.Brand>
          <Navbar.Brand href="/" className="LogoHidden" style={{fontSize:25, fontWeight:"bolder"}}></Navbar.Brand>
          <Navbar.Brand href="/" className="LogoHidden" style={{fontSize:25, fontWeight:"bolder"}}></Navbar.Brand>
          <Navbar.Brand href="/" className="LogoHidden" style={{fontSize:25, fontWeight:"bolder"}}></Navbar.Brand>
          <Navbar.Brand href="/" className="LogoHidden" style={{fontSize:25, fontWeight:"bolder"}}></Navbar.Brand>
          <input placeholder='Search' value={Input} onChange={handleInput}/>
          <ReactStars count={5}
            size={24} isHalf={false}
            activeColor="#ffd700" edit={true}
            value={Rating} onChange={handleRating}
          />
          <Button onClick={handleMovie} variant="primary">Add +</Button>
        </Container>
      </Navbar>
    );
};

export default NavBar;