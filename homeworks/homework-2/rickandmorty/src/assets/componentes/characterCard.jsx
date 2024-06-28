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
        gender={props.gender} 
        status={props.status} 
      />
    </div>
  );
}
  
  export default CharacterCard;