import React from 'react'
import Form from './Form'
import Show from './Show'

class Container extends React.Component {

    constructor(props){
        super(props);
        this.state={skills: []}
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

        saveData=(technovalue, levelvalue)=> {
            this.setState(prevState => {
                let arr = {...prevState,
                    skills: [...prevState.skills, {techno: technovalue, level: levelvalue}]};
                return arr;
            })
        }

    render(){
        return(<div>
            <Form saveData={this.saveData}/>
            <Show skills={this.state.skills}/>
            </div>
        )
    }    
}


export default Container