import React from "react";
import styled from "styled-components";

/*function KeyPress(event) {
    console.log({
      key: event.key
    })
}*/

/*function Form ({handleSubmit, handleKeyPress, handleLevel}) {
    return (
        <form onSubmit={(event) =>handleSubmit(event)}>
            <div>
                <label>
                    Technologie : 
                    <input type='text' onKeyPress={handleKeyPress}/>
                </label>
            </div>    
            <div>
                <label>
                    Niveau de la Technologie :
                    <input type="number" min="1" max="10" onClick={(event) => {
                        console.log(event);
                        return handleLevel(event.target.value)}}/>
                </label>
                <button > Valider </button>
            </div>    
        </form>
    )
}*/

const Button = styled.button`
  background-color: yellow;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.textSkillInput = React.createRef();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnChange() {
    /*console.log(this.textInput.current.value)
                console.log(this.textSkillInput.current.value)*/
  }
  handleSubmit(event) {
    this.props.saveData(
      this.textInput.current.value,
      this.textSkillInput.current.value
    );
    event.preventDefault();
    /*console.log(this.props)
                console.log(this.textInput.current.value)
                console.log(this.textSkillInput.current.value)*/
  }

  render() {
    // const { handleSubmit, handleLevel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          Technologie :
          <select size="1" ref={this.textInput} onChange={this.handleOnChange}>
            <option>React</option>
            <option>JS</option>
            <option>ECMAScript</option>
            <option>Node</option>
            <option>Redux</option>
          </select>
        </div>
        <div>
          <label>
            Niveau de la Technologie :
            <input type="number" min="1" max="5" ref={this.textSkillInput} />
          </label>
          <Button> Valider </Button>
        </div>
      </form>
    );
  }
}
export default Form;
