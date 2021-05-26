
import './App.css';
import React, { useState,Component,useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import {useSelector} from 'react-redux';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';


const data1=[
  {
    image:"https://pschool.in/image2/animals/lion.jpg"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/horse.png"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/goat.png"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/cat.jpg"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/dog.jpg"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/sheep.jpg"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/zebra.jpg"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/pig.png"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/rhino.jpg"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/tiger.jpg"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/monkey.jpg"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/elephant.jpg"
  }
  
]

const data2=[];

function App() {
//       const score=useSelector(state=>state.reducer.cond);    
//       const gameover=useSelector(state=>state.reducer.over);
//       const [sviewscore,setsviewscore]=useState(false);


const onDragend=result=>{

console.log(result);
const item=data1[result.source.index]
data2.splice(0,0,item);

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
      
    >
      <div className="container">
      <div className="container-top">

      <Droppable
       droppableId="1"
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                 className="box2"
                 >
                   {data2.map((value,indexes)=>(
                       
                       
                      
                       <img  className="card" src={value.image}></img>
       
                      ))}
                      
         
         {provided.placeholder}
         </div>
         )}
       </Droppable>
       <Droppable
       droppableId="2"
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                 className="box2"
                 >
                   {data2.map((value,indexes)=>(
                       
                       
                      
                        <h1>{value.text}</h1> 
       
                      ))}
                      
         
         {provided.placeholder}
         </div>
         )}
       </Droppable>
       </div>
       <Droppable
       droppableId="3"
      
       
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                  className="box1"
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
                        
                        <img  className="card" src={val.image}></img>
                        </div>
         )}
         </Draggable>
                      ))}
                      
                      
         {provided.placeholder}
         </div>
         )}
       </Droppable>
       </div>
       
        </DragDropContext>
  );
}

export default App;
