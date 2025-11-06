import { useEffect,useState } from "react";

export function DataBinding()
{
    const[uname,setUname]=useState('David');
    const[mail,setMail]=useState('abc@gmail.com');

    useEffect(()=>
    {
        setUname('John');
        setMail('xyz@gmail.com');
    })

    return(
        <div className="container p-4 text-center">
            <h2>Data Binding Small Example</h2>
            <p>Hello {uname}</p>
            <p>Your mail is {mail}</p>
        </div>
    );
}