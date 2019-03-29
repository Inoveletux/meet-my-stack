import React from "react";
import styled from "styled-components";

/*const Pellet = styled.div`
  display: inline-block;
  text-align: center;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${props => props.colorBg};
  &:hover {
    background-color: blue;
  }
`;*/
const ListeStyle = styled.ul`
  text-align: none;
`;
const Square = styled.div`
  display: inline-block;
  height: 15px;
  width: 15px;
  margin: 5px;
  border: 2px;
  border-style: solid;
  border-color: black;
  background-color: ${props => (props.fill ? "black" : "white")};
`;

const Liste = styled.li`
  list-style-type: none;
`;

/*function ColorSkill(level) {
  let color = "brown";
  switch (level) {
    case "1":
      color = "red";
      break;

    case "2":
      color = "orange";
      break;

    case "3":
      color = "yellow";
      break;

    case "4":
      color = "green";
      break;

    case "5":

    default:
      color = "black";
  }
  return color;
}*/

function Show(props) {
  return (
    <div>
      <h1>Liste des technologies utilisés</h1>
      <ListeStyle>
        {props.skills.map((skill, index) => {
          return (
            <Liste key={index}>
              {skill.techno}
              {[0, 1, 2, 3, 4].map(element => {
                return <Square fill={skill.level > element} />;
              })}

              <button onClick={() => props.handleSuppr(skill.id)}>Suppr</button>
            </Liste>
          );
        })}
      </ListeStyle>
    </div>
  );
}
//pour la couleur des pellet
//colorBg={ColorSkill(skill.level)}
export default Show;
