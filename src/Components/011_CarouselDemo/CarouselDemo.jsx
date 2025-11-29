import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { NavBar } from "../../ContrrolledComponents/001_NavBar";

export function CarouselDemo()
{
    const [product, setProduct] = useState({id:0, title:null, price:0,description:null, category:null, image:null, rating:{rate:0,count:0}});

    let thread=useRef(null);
    let productId=useRef(1);
    function LoadProduct(id)
    {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
    }

    function nextClick()
    {
        if(productId.current!=20)
        productId.current=productId.current+1;
        else
        productId.current=1;

        LoadProduct(productId.current)
    }
    function prevClick()
    {
        if(productId.current!=1)
        productId.current=productId.current-1;
        else
        productId.current=20;
        LoadProduct(productId.current)
    }
    useEffect(()=>
    {
        LoadProduct(1)
    },[])

    function seekBarChange(e)
    {
        productId.current=parseInt(e.target.value);
        LoadProduct(productId.current)
    }
    function handlePlay()
    {
        thread.current=setInterval(nextClick,4000)
    }
    function handlePause()
    {
        clearTimeout(thread.current)
    }

    return(
        <div>
            <NavBar brand="Broklyn" menu={['home','contasct','serach']} />
            <NavBar brand="amplify" menu={['address']} />
        <div className="container-fluid d-flex justify-content-center p-3">
            
            <div className="card p-2 mt-4 w-50">
                <div className="card-header text-center fw-bold">
                    {product.title}
                </div>
                <div className="card-body row">
                    <div className="col-1  d-flex flex-column justify-content-center align-items-center" onClick={prevClick}>
                        <button className="btn btn-dark bi bi-chevron-left"></button>
                    </div>
                    <div className="col-10 position-relative">
                        <div className="position-absolute rounded rounded-circle top-0 end-0 badge bg-danger fs-4">{product.price.toLocaleString('en-in',{style:"currency",currency:"inr"})}</div>
                        <img className="p-5 " height="400" width="80%" src={product.image}/>
                        <div>
                            <input type="range" onChange={seekBarChange} min={1} max={20} value={productId.current} className="form-range" />
                        </div>
                    </div>
                    <div className="col-1  d-flex flex-column justify-content-center align-items-center" onClick={nextClick}>
                        <button className="btn btn-dark bi bi-chevron-right"></button>
                    </div>
                </div>
                <div className="card-footer  d-flex justify-content-center align-items-center">
                    <button className="btn btn-danger bi bi-pause" onClick={handlePause}></button>
                    <button className="btn btn-warning bi bi-play mx-2" onClick={handlePlay}></button>
                </div>
            </div>
        </div>
        </div>
    );
}