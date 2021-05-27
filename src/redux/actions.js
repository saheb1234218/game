export const Set_right=(condition)=>{
    return {
        type: 'SET_RIGHT',
        payload: condition
    }

}
export const Set_wrong=(condition)=>{
    return {
        type: 'SET_WRONG',
        payload: condition
    }

}
export const gameover=(over)=>{
    return {
        type:'SET_OVER',
        payload: over
    }
}

