import {  useState } from "react"

export function PasswordStrength()
{
    const[pass,setPass]=useState('');
    const [meterValue, setMeterValue] =useState(1);
    function verifyPass(e)
    {
        if(e.target.value.match(/(?=.*[A-Z])\w{4,10}/))
        {
            setPass('Strong Password');
            setMeterValue(100);
            } else {
            if(e.target.value.length<4){
            setPass('Poor Password');
            setMeterValue(30);
            } else {
            setPass('Weak Password');
            setMeterValue(70);
            }
        }
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>Password</dt>
                <dd>
                    <input type="password" onKeyUp={verifyPass} className="form-control"/>
                </dd>
                <dd><meter className="w-100"min="1" max="100" value={meterValue}></meter></dd>
                <dd>{pass}</dd>
            </dl>

        </div>
    );
}