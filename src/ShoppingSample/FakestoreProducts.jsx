import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export function FakestoreProducts()
{
    const params=useParams();
    const [products , setProducts] =useState([{id:0,title:null,description:null,category:null,price:0, rating:{rate:0, count:0}, image:null}]);
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
        .then(res=>setProducts(res.data))
    },[])
    return(
        <div className="container-fluid p-3">
            <h3>{params.category.toUpperCase}</h3>
            <div className="d-flex">
                {
                    products.map(item=>
                        <div key={item.id} className="card m-2 p-2">
                            <img src={item.image} className="card-image-top" height="100"></img>
                            <Link to={`details/${item.id}`} ><span className=" btn btn-primary bi bi-eye"> view</span></Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
}