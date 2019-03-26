import React from 'react'

function Show(props){
    console.log(props.skills)

    return(
        <div>
            {props.skills.map((skill, index)=>{
                return(
                    <div key= {index}>
                    La technologie est {skill.techno}
                    <br/>
                    Le niveau est {skill.level}
                    </div>
                )
            })}
            
        </div>
    )
}


export default Show