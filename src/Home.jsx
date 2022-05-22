import React from "react";
import NavBar from "./Comps/NavBar";
import "./Home.css";
import home from "./Posters/Home.png";

function Home(){

    return (
        <>
            <NavBar/>
            <div className="Home">
                <h1>Getlify Free Movies</h1>
                <img src={home} className=".png-home" alt="Home" />
            </div>
        </>
        )
}

export default Home;