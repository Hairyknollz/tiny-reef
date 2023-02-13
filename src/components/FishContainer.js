import React from 'react'

const FishContainer = (props) => {
    console.log(props)
    return (
        <div className='fishContainer'>
            <img className='border' src={props.imgSrc} alt={props.alt} />
            <h2>{props.name}</h2>
        </div>
    )
}

export default FishContainer;