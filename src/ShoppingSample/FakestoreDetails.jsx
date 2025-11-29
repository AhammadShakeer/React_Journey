import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function FakestoreDetails()
{
    const params=useParams();
    const [product , setProduct] =useState({id:0,title:null,description:null,category:null,price:0, rating:{rate:0, count:0}, image:null});
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(res=>setProduct(res.data))
    },[])
    return(
        <div className="container-fluid">
             <img  src={product.image} height="200" width="300" />
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Price</dt>
                <dd>{product.price}</dd>
                <dt>Rating</dt>
                <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
            </dl>
            <Link to={`/products/${product.category}`} > Back to Products </Link>
        </div>
    );
}