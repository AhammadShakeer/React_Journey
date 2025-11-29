import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function FakestoreHome()
{
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories')
        .then(res=>setCategories(res.data))
    },[])
    return(
        <div className="container-fluid p-3">
            <header>Home</header>
            <section>
                <ol className="list-unstyled">
                    {
                        categories.map(item=>
                        
                            <li key={item} className="my-2 bg-black w-25 p-3">
                                <Link className="text-decoration-none text-white" to={`/products/${item}`} >{item.toUpperCase()}</Link>
                            </li>
                        
                        )
                    }
                </ol>
            </section>
        </div>
    );
}