import { useState } from "react";

export function DataBinding()
{
    const[categories]=useState(['All','Electronics','Fashion','FootWear'])

    return(
        <div className="container mt-4">
            <h2>Data from Array</h2>
            <hr />
            <nav>
                {categories.map(category=>(
                    <button className="btn mx-4 btn-warning" key={category}>{category}</button>
                ))}
            </nav>
            <hr />
            <ol>
                {categories.map((category,index)=>
                (
                    <li key={index}>{category}</li>
                ))}
            </ol>
            <hr/>
            <select>
                {categories.map(category=>(
                    <option key={category}>{category}</option>
                ))}
            </select>
            <hr/>
            <ul className="list-unstyled">
                {categories.map((category)=>(
                    <li key={category}>
                        <input type="checkbox" /><label>{category}</label>
                    </li>
                ))}
            </ul>
        </div>
    );
}