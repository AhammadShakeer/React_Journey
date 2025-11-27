import { useState } from "react"

export function FocusDemo()
{
    const[code,setCode]=useState("");
    const[tip,setTip]=useState("")
    function handleChange(e)
    {
        setCode(e.target.value)
    }
    function handleBlur()
    {
        setCode(code.toUpperCase())
        setTip("")
    }
    function handleFocus()
    {
        setTip('eg: IFSC Code SBIN000022,HDFC932234');
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>Enter IFSC Code</dt>
                <dd>
                    <input type="text" value={code} onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} />
                </dd>
                <dd className="text-warning">{tip}</dd>
            </dl>
        </div>
    );
}