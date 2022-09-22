import { useSelector,useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const HookIceCreamContainer = (props) => {
    const numOfIceCreams= useSelector((state)=> state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Creams : {numOfIceCreams}</h2>
      <button onClick={()=> dispatch(buyIceCream())}>Buy Ice Creams</button>
    </div>
  );
};

export default HookIceCreamContainer;