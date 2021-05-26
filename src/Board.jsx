import {useState} from 'react'
import "./Board.css";
import {Set_right,Set_wrong,gameover} from './redux/actions';
import {useDispatch,useSelector} from 'react-redux';
import {Droppable} from 'react-beautiful-dnd';



function Board(props) {
    // const score=useSelector(state=>state.reducer.cond)
    // const [count,setcount]=useState(0)

    // const dispatch=useDispatch();
    
    
    // const drop= e=>{
        
    //     e.preventDefault();
    //     const card_id=e.dataTransfer.getData(props.id);
    //     console.log(card_id);
    //     if(card_id==='<empty string>'){
    //         console.log("empty")
    //     }
    //     const card = document.getElementById(card_id);
    //    console.log(card);
    //     if(card==null){
    //         setcount(count+1);
    //         dispatch(Set_wrong(score-1));
    //         alert("wrong choice");
    //     }
    //     else{
    //         setcount(count+1);
    //         if(card.id==='card-12' || count===12){
    //             dispatch(Set_right(score+1))
            
    //         card.style.display='block';

    //         e.target.appendChild(card)
    //         console.log("reached board 12",card.id);
    //         dispatch(gameover());
               
    //         }
    //         dispatch(Set_right(score+1))
           
    //         card.style.display='block';

    //         e.target.appendChild(card)
    //         console.log("board",e);
    //     }
       

    // }
    // const dragOver=e=>{
    //     e.preventDefault();
    // }


    return (
        <>
        <Droppable 
        droppableId={props.id}
        
        
        >
            {(provided)=>{

            
        <div
        // id={props.id}
        // onDrop={drop}
        // onDragOver={dragOver}
        className={props.className} 
        innerRef={provided.innerRef}
        {...provided.droppableProps}
        >
            {props.children}
            {provided.placeholder}
        </div>
            }}
        </Droppable>
        </>
    )
}

export default Board
