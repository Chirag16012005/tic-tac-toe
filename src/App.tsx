import React from "react";
// import logo from "./logo.svg";
import Block from "./Block.tsx";
import "./App.css";

function App()
{
    return (
        <div className="board">
            <div className="row">
            <Block />
            <Block />
            </div>
        </div>
    );
}
export default App;