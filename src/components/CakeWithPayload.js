import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {buyCake} from "../redux/cake/cakeActions" 

const CakeWithPayload = (props) => {
    const[number,setNumber]=useState(0);

    const numOfCakes= useSelector((state)=> state.cake.numOfCakes);
    const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes : {numOfCakes}</h2>
      <input type="text" onChange={(e)=> setNumber(e.target.value)}/>
      <button onClick={()=> dispatch(buyCake(number))}>Buy {number} Cake</button>
    </div>
  );
};

export default CakeWithPayload;