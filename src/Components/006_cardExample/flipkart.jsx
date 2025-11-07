import {useEffect, useState} from "react";

export function FlipkartCard()
{
    const[product,setProduct]=useState({title:null,price:0,image:null,rating:{rate:0,reviews:0},offers:[]});

    function LoadProduct()
    {
        fetch("product.json")
        .then(response=>{return response.json();})
        .then(product=>{setProduct(product)})
        .catch(error=>console.error("fetch error: ",error))
        .finally(() => console.log("Fetch Completed"));
    }

    useEffect(()=>{
        LoadProduct();
    },[])


    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-3">
                    <img src={product.image} width="100%" alt="product" />
                </div>
                <div className="col-9">
                    <div className="">{product.title}</div>
                    <div className="mt-2 fs-5"><span className="badge bg-success">{product.rating.rate}<span className="bi bi-star-fill"></span></span>
                        <span className="mx-2 fw-bold fs-5">{product.rating.reviews} Reviews</span>
                    </div>
                    <div className="my-2 fs-1 fw-bold">{product.price.toLocaleString("en", {style: "currency",currency: "INR",minimumFractionDigits: 0})}
                    </div>
                    <div className="mt-4">
                        <h6>Available Offers</h6>
                        <ul className="list-unstyled">
                            {product.offers.map(offer => (
                            <li className="bi bi-tag-fill text-success my-3" key={offer}>
                            <span className="text-secondary">{offer}</span>
                            </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}