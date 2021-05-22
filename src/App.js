
import './App.css';
import React, { useState,Component } from 'react';
import Board from './Board';
import Card from './Card';
import {useSelector} from 'react-redux';

function App() {
      const score=useSelector(state=>state.reducer);    
  return (
    <div className="App">
      <div className="flexbox"> 
      <div className="boards">
      <Board id="board-1" className="board">
   
    </Board>
    <h3>Score:{score} </h3>

    <Board id="board-2" className="board">
   
    </Board>
      </div>
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
