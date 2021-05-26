
import './App.css';
import React, { useState,Component,useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import {useSelector} from 'react-redux';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';


const data1=[{
  text:'how r u'
},
{
  text:'how am i'
},
{
  text:'how is everyone'
}]

const data2=[];

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
console.log(result);
const item=data1[result.source.index]
data2.splice(result.destination.index,0,item);
data1.splice(result.source.index,1);

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
      style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}
    >
       <Droppable
       droppableId="1"
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                  style={{width:'400px',height:'300px',backgroundColor:'green'}}
                 >
         
                      {data1.map((val,ind)=>(
                       
                       
                       <Draggable
                       draggableId={`${ind}`}
                       index={ind}
                       
                       >
                       {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    
                                  >
                        
                        <h1>{val.text}</h1> 
                        </div>
         )}
         </Draggable>
                      ))}
                      
                      
         {provided.placeholder}
         </div>
         )}
       </Droppable>
       <Droppable
       droppableId="3"
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                  style={{width:'400px',height:'300px',backgroundColor:'yellow'}}
                 >
                   {data2.map((val,ind)=>(
                       
                       
                       <Draggable
                       draggableId={`${ind}`}
                       index={ind}
                       
                       >
                       {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    
                                  >
                        
                        <h1>{val.text}</h1> 
                        </div>
         )}
         </Draggable>
                      ))}
                      
         
         {provided.placeholder}
         </div>
         )}
       </Droppable>
        </DragDropContext>
  );
}

export default App;
