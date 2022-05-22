import React from "react";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import NavBar from "./NavBar";
import {Carousel} from "react-bootstrap";
// import p1 from "../Posters/Assassin.jpg";
import "./MovieRoute.css"

export default function MovieRoute({Films}){

    const {id} = useParams()
    console.log(id) //useParams: to know id

    const [movieDesc, setmovieDesc]=useState({})

    useEffect(() =>
    {
        setmovieDesc(Films.find(f=> f.id === id))
    },[])

    return(
        <div>
            <NavBar></NavBar>
            <div className="Carousel-container">
                <Carousel>
                    <Carousel.Item>
                        <img 
                            style={{height:400}}
                            className="d-block w-100"
                            src={movieDesc.poster}
                            alt={movieDesc.id}
                        />

                        <Carousel.Caption>
                            <h3>{movieDesc.title}</h3>
                            <p>{movieDesc.description}</p>
                        </Carousel.Caption>

                        </Carousel.Item>
                </Carousel>
            </div>
            
        </div>
    )
}