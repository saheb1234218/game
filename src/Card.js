import React from 'react'
import {Draggable} from 'react-beautiful-dnd';
import './Card.css';
function Card(props) {

//     const dragstart=e=>{
        
//         const target=e.target;
//         console.log(target);

//         e.dataTransfer.setData(props.bid || target.id,target.id);
    
//         console.log("card",e);
    
//         setTimeout(() => {
//         target.style.display="none"
//     }, 0);
//     }
// const dragover=e=>{
//     e.stopPropagation();
// }

    return (
        <Draggable
        draggableId={props.id}
        index={props.id*10}
        
        
        >
            {(provided)=>{

           
        <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        innerRef={provided.innerRef}
       // id={props.id}
       // onDragStart={dragstart}
       // onDragOver={dragover}
      //  draggable={props.draggable}
        className={props.className}
        >
            {props.children}
        </div>
         }}
        </Draggable>
    )
}

export default Card
