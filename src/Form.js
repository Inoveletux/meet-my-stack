import React, { Component } from 'react'

function Form (props) {
    return (
        <form>
            <div>
                <label>
                    Technologie : 
                    <input type="text"/>
                </label>
                <input type="submit" value="Valider" />
            </div>    
            <div>
                <label>
                    Niveau de la Technologie :
                    <input type="text"/>
                </label>
                <input type="submit" value="Valider" />
            </div>    
        </form>
    )
}

export default Form