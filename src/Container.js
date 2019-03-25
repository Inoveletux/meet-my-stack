import React from 'react'
import Form from './Form'
import Show from './Show'

class Container extends React.Component {
    state ={value : ''}

        /*handleChange=(e) => {
            this.setState({value:e.target.value});
        }*/
        handleSubmit=(event) => {
            console.log(event.target)
            this.setState({value:event.target.value})
            console.log(event)
            event.preventDefault()
            
        }
        handleKeyPress=(event)=> {
            event.preventDefault()
            console.log(event.keyCode)
            
        }

    render(){
        return(<div>
            <Form handleKeyPress={this.handleKeyPress} 
            handleSubmit={this.handleSubmit}/>
            <Show value={this.state.value}/>
            </div>
        )
    }    
}

export default Container