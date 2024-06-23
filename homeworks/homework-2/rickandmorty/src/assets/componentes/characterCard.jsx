import React from "react";
import Title from "./titulo";
import Image from "./imagen";
import Details from "./descripcion";

function CharacterCard(props) {
    return (
      <div>
        <Title title={props.title} />
        <Image url={props.url} />
        <Details genre={props.genre} status={props.status} />
      </div>
    );
  }
  
  export default CharacterCard;