import React, { useState } from "react";

function PeopleCard(props){
    const { randomPerson } = props
    const [ clicked, setClicked ] = useState(true)
    
    function changeClick(){
        setClicked(!clicked)
    }
    return(
        <div className="personCard">
            {clicked 
            ?
            <div onClick={changeClick} className= "personCard">
            <img src={randomPerson.img} alt="profile pic"
            // height="440px"
            width="300px"/>
        </div>
            :
        <div onClick={changeClick} className="personBack">
            <h2>{randomPerson.name}</h2>
            <h3>Height: {randomPerson.height}</h3>
            <h3>Hair Color: {randomPerson.hairColor}</h3>
            <h3>Skin Color: {randomPerson.skinColor}</h3>
            <h3>Eye Color: {randomPerson.eyeColor}</h3>
            <h3>Birth Year: {randomPerson.birthYear}</h3>
            <h3>Gender: {randomPerson.gender}</h3>
            <h3>Home World: {randomPerson.homeWorld}</h3>
        </div>
}
        <button>like</button>
        <button>dislike</button>
        </div>
    )
}

export default PeopleCard;

// const person2 = {
//     id: 2,
//     name: "C-3PO",
//     img:"",
//     height: 167,
//     hairColor: "n/a",
//     skinColor: "gold",
//     eyeColor: "yellow",
//     birthYear:"112BBY" ,
//     gender: "male",
//     homeworld: "Earth"
// }