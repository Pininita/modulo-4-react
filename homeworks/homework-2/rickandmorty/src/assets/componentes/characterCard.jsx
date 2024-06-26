import React from "react";
import Title from "./titulo";
import Image from "./imagen";
import Details from "./descripcion";

function CharacterCard(props) {
  return (
    <div>  
      <Title name={props.name}/>
      <Image url={props.image} />
      <Details 
        genre={props.genre} 
        status={props.status} 
      />
    </div>
  );
}
  
  export default CharacterCard;