import axios from "axios";
import { useState,useEffect } from "react";

export function ImageSelection()
{
    const[imag,setImag]=useState([{img_src:null}])

    const[preview,setPreview]=useState("pic1.jpg");

    function LoadData()
    {
        axios.get("imgSelect.json")
        .then(res=>setImag(res.data))
    }

    function handleMouseOver(e)
    {
        setPreview(e.target.src)
    }
    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div>
            <div className="row">
                <div className="col-3">
                   {
                        imag.map((i,index)=>
                            <div key={index} className="mb-3">
                                <img onMouseOver={handleMouseOver} src={i.img_src} width="100" height="100" />
                            </div>
                        )
                   }
                </div>
                <div className="col-9">
                   <img src={preview}  width="100" height="100"/>
                </div>
            </div>
        </div>
    );
}