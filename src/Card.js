import React from 'react'
import './Card.css';
function Card(props) {

    const dragstart=e=>{
        
        const target=e.target;
        console.log(target);

        e.dataTransfer.setData(props.bid || target.id,target.id);
    
        console.log("card",e);
    
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
