import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../actions/action';

function Count() {

    const dispatch = useDispatch()
    const count = useSelector((state)=>state.countReducer.num)
    console.log(count);

    const decrementCount = () =>{
        dispatch(decrement())
    }

    const incrementCount = () =>{
        dispatch(increment())
    }

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
        <h1>{count}</h1>
        <button onClick={decrementCount}>decrement</button>
        <button onClick={incrementCount}>increment</button>
    </div>
  )
}   

export default Count
