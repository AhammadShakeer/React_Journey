import { useState } from "react";

export function DataBinding()
{
    const[product]=useState({
        Name: "Samsung TV",
        Price: 45000,
        ShippedTo: ["Delhi", "Hyd"],
        Rating: { Rate: 4.3, Count: 600 }
        });
    return(
        <div className="container p-4">
            <h3>Products Table</h3>
            <table className="table table-bordered table-hover bg-dark font-white">
                <thead>
                    <tr>
                        {Object.keys(product).map(k=>
                            <th key={k}>{k}</th>
                        )}
                    </tr>
                </thead>
            </table>
            <h3>Product Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{product.Name}</dd>
                <dt>Price</dt>
                <dd>{product.Price.toLocaleString('en-in',{style:'currency',currency:'INR'})}</dd>
                <dt>Shipped to</dt>
                <dd>
                    <ul>
                        {product.ShippedTo.map(city=> <li key={city}>{city}</li> )}
                    </ul>
                </dd>
                <dt>Ratings</dt>
                <dd>
                    <span className="badge bg-success rounded p-2">{product.Rating.Rate}<span className="bi bi-star-fill"></span></span>
                    <span className="fw-bold text-secondary ms-2">{product.Rating.Count}ratings</span>
                </dd>
            </dl>
        </div>
    );
}