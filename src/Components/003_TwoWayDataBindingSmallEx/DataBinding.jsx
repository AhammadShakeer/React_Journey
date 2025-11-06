import { useState } from "react";

export function DataBinding()
{
    const[username ,setUsername]=useState('');

    return(
        <div className="container ">
            <h2>Two Way Data Binding small Example</h2>
            <input type="text" placeholder="Type Here" 
            className="form-control" 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}/>
            <p>You Typed ,{username}</p>
        </div>
    );
}