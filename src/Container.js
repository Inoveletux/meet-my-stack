import React from "react";
import Form from "./Form";
import Show from "./Show";

let idStart = 0;

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }
  /*
        handleChange=(event) => {
            this.setState({value:event.target.value});
        }
       
        
        handleLevel=(value)=> {
            this.setState(state => {
            return {...state, level:value}
                
            })
        }
        */

  saveData = (technovalue, levelvalue, idIncr) => {
    this.setState(prevState => {
      idIncr = ++idStart;
      let arr = {
        ...prevState,
        skills: [
          ...prevState.skills,
          { techno: technovalue, level: levelvalue, id: idIncr }
        ]
      };
      return arr;
    });
  };

  handleSuppr = id => {
    this.setState(prevState => {
      return {
        skills: prevState.skills.filter(element => element.id !== id)
      };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Form saveData={this.saveData} />
        <Show skills={this.state.skills} handleSuppr={this.handleSuppr} />
      </div>
    );
  }
}

export default Container;
