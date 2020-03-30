import React from 'react'


const Fruit = (props) => {

    console.log("This component works!")
    console.log(props.name, props.color, props.type)

    return (
        <div>
            <span>This is my fruit component</span>
            <h2>{props.name}</h2>
            <h2 style={{color:props.color}}>{props.color}</h2>
            <h2>{props.type}</h2>
        </div>
    )

}

export default Fruit