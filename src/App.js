
import './App.css';
import React, { useState,Component,useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import {Set_right,gameover} from './redux/actions';

const data1=[
  {
    image:"https://pschool.in/image2/animals/lion.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/horse.png",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/goat.png",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/cat.jpg",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/dog.jpg",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/sheep.jpg",
    nature:"domestic"
  }
  ,
  {
    image:"https://pschool.in/image2/animals/zebra.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/pig.png",
    nature:"domestic",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/rhino.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/tiger.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/monkey.jpg",
    nature:"wild",
  }
  ,
  {
    image:"https://pschool.in/image2/animals/elephant.jpg",
    nature:"wild",
  }
  
]



const data3=[];
const data2=[];

function App() {
  const [animal,setanimal]=useState("");
  const [count,setcount]=useState(0);
  const dispatch=useDispatch();
      const score=useSelector(state=>state.reducer.cond);    
      const gameovered=useSelector(state=>state.reducer.over);
      const [sviewscore,setsviewscore]=useState(false);


const onDragend=result=>{
  setcount(count+1);
console.log(animal)
console.log(result);
setcount(count+1);
if(data1[result.source.index].nature==='wild'){
  if(result.destination.droppableId==='1'){
    dispatch(Set_right(score+1));
    const item=data1[result.source.index]
    data2.splice(0,0,item);
    
    data1.splice(result.source.index,1);
  
  }
  else{
   
    data1.splice(result.source.index,1);
    alert("Wrong Choice");
   
    
  }


  
}
else{
  if(result.destination.droppableId==='2'){
    dispatch(Set_right(score+1));
    const item=data1[result.source.index]
    data3.splice(0,0,item);
    
    data1.splice(result.source.index,1);
  
  }
  else{
   
    data1.splice(result.source.index,1);
    alert("Wrong Choice");
   
   
  }
}
console.log(count)
if(count===11){
  dispatch(gameover(true));
  alert("gameover");
}

}

const setplay=()=>{
  data1=data2+data3;
  console.log(data1);
  dispatch(Set_right(0));
  dispatch(gameover(false));
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
        <div className="box-con">
      <span className="heading" >Wild Animals</span>
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
       </div>
    {gameovered?<div className="score">Score:{score}/12</div>:""} 
    <div className="box-con" >
    <span className="heading">Domestic Animals</span>
       <Droppable
       droppableId="2"
       >
         {(provided) => (
                   <div
                   {...provided.droppableProps}
                   ref={provided.innerRef}
                 className="box2"
                 >
                   {data3.map((value,indexes)=>(
                       
                       
                      
                        <img  className="card" src={value.image}></img>
       
                      ))}
                      
         
         {provided.placeholder}
         </div>
         )}
       </Droppable>
       </div>
       </div>
       <div style={{marginLeft:'100px',marginTop:'50px'}}>{gameovered?<div className="score-mob">Score:{score}/12</div>:""}</div> 
      {gameovered?"":
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
      </Droppable>} 
       </div>
       
        </DragDropContext>
  );
}

export default App;
