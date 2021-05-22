import React from 'react'
import './Card.css';
function Card(props) {

    const dragstart=e=>{
        console.log("card",e);
        const target=e.target;


        e.dataTransfer.setData(props.bid,target.id);
    
    
    
        setTimeout(() => {
        target.style.display="none"
    }, 0);
    }
const dragover=e=>{
    e.stopPropagation();
}

    return (
        <div
        id={props.id}
        onDragStart={dragstart}
        onDragOver={dragover}
        draggable={props.draggable}
        className={props.className}
        >
            {props.children}
        </div>
        
    )
}

export default Card
