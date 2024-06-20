import { useState } from "react";
function Counter({ initialValue }) {
    const [count, setCount] = useState(initialValue ?? 0);
    function add() {
        setCount((prevcount) => prevcount + 1)
    };
    function remove() {
        setCount((prevcount)=>{
            if(prevcount > 0){
                return prevcount - 1
            }
            return prevcount
        });
    };
    return (
        <div>
            
            <button onClick={remove}>Remove</button>
            <span>{count}</span>
            <button onClick={add}>Add</button>
            </div>
    );
    };

    export default Counter;