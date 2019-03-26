import React from 'react'
import Container from './Container.js'


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
class Form extends React.Component{
    constructor(props){
        super(props);
        this.textInput = React.createRef()
        this.textSkillInput = React.createRef()
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        }
            handleOnChange() {
                /*console.log(this.textInput.current.value)
                console.log(this.textSkillInput.current.value)*/
            }
            handleSubmit(event) {
                this.props.saveData(this.textInput.current.value, this.textSkillInput.current.value)
                event.preventDefault()
                /*console.log(this.props)
                console.log(this.textInput.current.value)
                console.log(this.textSkillInput.current.value)*/
            }
            
    render (){
        const {handleSubmit, handleLevel} = this.props
        
    return (
        <form onSubmit={this.handleSubmit} >
            <div>
                <label>
                    Technologie : 
                    <input type='text' ref={this.textInput} onChange={this.handleOnChange}/>
                </label>
            </div>    
            <div>
                <label>
                    Niveau de la Technologie :
                    <input type="number" min="1" max="10" ref={this.textSkillInput} />
                </label>
                <button > Valider </button>
            </div>    
        </form>
    )
    }
}
export default Form