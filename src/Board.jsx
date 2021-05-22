import {useState} from 'react'
import "./Board.css";
import {Set_right,Set_wrong,gameover} from './redux/actions';
import {useDispatch,useSelector} from 'react-redux';
function Board(props) {
    const score=useSelector(state=>state.reducer.cond)
   

    const dispatch=useDispatch();
    
    
    const drop= e=>{
        
        e.preventDefault();
        const card_id=e.dataTransfer.getData(props.id);

        const card = document.getElementById(card_id);
       
        if(card==null){
            dispatch(Set_wrong(score-1));
            alert("wrong choice");
        }
        else{
            if(card.id==='card-12'){
                dispatch(Set_right(score+1))
            
            card.style.display='block';

            e.target.appendChild(card)
            console.log("reached board 12",card.id);
            dispatch(gameover());
               
            }
            dispatch(Set_right(score+1))
           
            card.style.display='block';

            e.target.appendChild(card)
            console.log("board",e);
        }
       

    }
    const dragOver=e=>{
        e.preventDefault();
    }


    return (
        <>
        
        <div
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
        className={props.className} 
        >
            {props.children}
        </div>
        </>
    )
}

export default Board
