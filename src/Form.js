import React from 'react'
import Container from './Container.js'


/*function KeyPress(event) {
    console.log({
      key: event.key
    })
}*/

function Form ({handleSubmit, handleKeyPress}) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Technologie : 
                    <input type='text' onKeyPress={handleKeyPress}/>
                </label>
            </div>    
            <div>
                <label>
                    Niveau de la Technologie :
                    <input type="text"/>
                </label>
                <button> Valider </button>
            </div>    
        </form>
    )
}

export default Form