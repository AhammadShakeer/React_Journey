import axios from "axios";
import { useState,useEffect } from "react";

export function CardAxios()
{
    const[product,setProduct]=useState({title:null, price:0, image:null, rating:{rate:0, ratings:0, reviews:0}, offers:[]});

    function LoadProduct()
    {
        axios.get("product.json")
        .then(response=>{
            setProduct(response.data)
        })
    }

    useEffect(()=>{
        LoadProduct();
    },[]);

    return(
        <div>
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} width="100%"/>
                </div>
                <div className="col-9">
                    <div className="fs-5 fw-bold">{product.title}</div>
                    <div><span className="badge bg-success rounded rounded-3">{product.rating.rate}<span className=" bi mx-1 bi-star-fill"></span></span>
                        <span className="mx-2 fw-bold text-secondary">{product.rating.reviews.toLocaleString('en-in')} ratings</span>
                    </div>
                <div className="fw-bold fs-3">
                    {product.price.toLocaleString('en-in',{style:"currency",currency:'INR'})}
                </div>
                <div>
                    <ul className="list-unstyled">
                        {product.offers.map(offer=>
                            <li className="my-3" key={offer}><span className="bi bi-tag-fill text-success"></span>{offer}</li>
                        )}
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}