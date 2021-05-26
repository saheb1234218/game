
import './App.css';
import React, { useState,Component,useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import {useSelector} from 'react-redux';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';

function App() {
//       const score=useSelector(state=>state.reducer.cond);    
//       const gameover=useSelector(state=>state.reducer.over);
//       const [sviewscore,setsviewscore]=useState(false);

// useEffect(()=>{
//   if(gameover){
//     alert("Thanks gor playing :)");
//   }
// },[])

const onDragend=result=>{

}

// const viewscore=()=>{
// if(gameover){
//   alert("Thanks for playing :)");
//   setsviewscore(true)

// }
// }
  return (
    <DragDropContext
      onDragEnd={onDragend}
    
    >
       <Droppable
       droppableId="1"
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                  style={{width:'600px',height:'500px',backgroundColor:'green'}}
                 >
         <Draggable
         draggableId="2"
         index="3"
         
         >
         {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      
                    >
                      <div style={{width:'200px',height:'40px',backgroundColor:'blue'}}>
                        hie
                      </div>
                      </div>
         )}
         </Draggable>
         {provided.placeholder}
         </div>
         )}
       </Droppable>
        </DragDropContext>
  );
}

export default App;
