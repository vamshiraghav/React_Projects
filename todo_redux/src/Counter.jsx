import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./app/counterSlice"

export default function Counter(){

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    return (
        <div>
            <p>Counter : {count}</p>
            <div>
                <button onClick={()=>dispatch(increment())}>Increment</button>

            </div>
            <div>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
            <div>
                <button onClick={()=>dispatch(incrementByAmount(5))}>Add 5</button>
            </div>
        </div>
    )

}
