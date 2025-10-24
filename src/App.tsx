import React,{useState} from "react";
// import logo from "./logo.svg";
import Block from "./Block.tsx";
import "./App.css";

function App()
{
    const checkwinner=()=>{
        const win=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6]
        ]

        for(let i=0;i<win.length;i++)
        {
            let [a,b,c]=win[i];
            if(state[a]!=null && state[b]!=null && state[a]===state[b] && state[b]===state[c])
                return true;
        }
        return false;
    }
    const [state,setState]=useState(Array(9).fill(null));
    const [current, setCurrent]=useState("X");

    const handleclick=(index: number)=>{
        const statecopy=Array.from(state);
        statecopy[index]=current;
        setCurrent(current==='X'?'O':'X');
        setState(statecopy);

        const win=checkwinner();

        if(win)
        {
            alert(`Current player ${current} won the game`);
        }
    }
    console.log("State", state);
    return (
        <div className="board">
            <div className="row">
            <Block onClick={()=>handleclick(0)} value={state[0]}/>
            <Block onClick={()=>handleclick(1)} value={state[1]}/>
            <Block onClick={()=>handleclick(2)} value={state[2]}/>
            </div>
            <div className="row">
            <Block onClick={()=>handleclick(3)} value={state[3]}/>
            <Block onClick={()=>handleclick(4)} value={state[4]}/>
            <Block onClick={()=>handleclick(5)} value={state[5]}/>
            </div>
            <div className="row">
            <Block onClick={()=>handleclick(6)} value={state[6]}/>
            <Block onClick={()=>handleclick(7)} value={state[7]}/>
            <Block onClick={()=>handleclick(8)} value={state[8]}/>
            </div>
        </div>
    );
}
export default App;