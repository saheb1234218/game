
import './App.css';
import React, { useState,Component,useEffect } from 'react';
import Board from './Board';
import Card from './Card';
import {useSelector} from 'react-redux';

function App() {
      const score=useSelector(state=>state.reducer.cond);    
      const gameover=useSelector(state=>state.reducer.over);
      const [sviewscore,setsviewscore]=useState(false);

useEffect(()=>{
  if(gameover){
    alert("Thanks gor playing :)");
  }
},[])


const viewscore=()=>{
if(gameover){
  alert("Thanks for playing :)");
  setsviewscore(true)

}
}
  return (
    <div className="App">
      <div className="flexbox"> 
      <div className="boards">
        <div >
        <h3 className="heading" >Domestic Animals</h3>
        <Board id="board-1" className="board">
   
   </Board>
        </div>
     
    {sviewscore?<h1>Score:{score}/12</h1>:
    <button className="pc" onClick={viewscore}>View Score</button> }
    <div >
          <h3 className="heading" >Wild Animals</h3>
        <Board id="board-2" className="board">
   
   </Board>
   
        </div>
      </div>
      {sviewscore?<h1>Score:{score}/12</h1>:
    <button className="mobiles" onClick={viewscore} >View Score</button>
    }
    <div className="cards">
    <Card id="card-1" className="card_1" draggable="true" bid="board-2">
  

</Card>
<Card id="card-2" className="card_2" draggable="true" bid="board-1">

      
      </Card>
      <Card id="card-3" className="card_3" draggable="true" bid="board-1">

        
      </Card>
      <Card id="card-4" className="card_4" draggable="true" bid="board-1">

        
      </Card>
      <Card id="card-5" className="card_5" draggable="true" bid="board-1">

        
      </Card>
      <Card id="card-6" className="card_6" draggable="true" bid="board-2">

        
      </Card>
      <Card id="card-7" className="card_7" draggable="true" bid="board-2">

        
      </Card>
      <Card id="card-8" className="card_8" draggable="true" bid="board-1">

        
      </Card>
      <Card id="card-9" className="card_9" draggable="true" bid="board-1">

        
      </Card>
      <Card id="card-10" className="card_10" draggable="true" bid="board-2">

        
      </Card>
      <Card id="card-11" className="card_11" draggable="true" bid="board-2">

        
      </Card>
      <Card id="card-12" className="card_12" draggable="true" bid="board-2">

        
      </Card>
    </div>
    
      </div>
    </div>
  );
}

export default App;
