import axios from "axios";
import React, { useEffect, useState } from "react";
import { ShowProduct } from "./ShowProduct";


export function Product() {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get("https://in3.dev/vinted/api/products/1").then(function(response) {
            console.log(response.data);
            setProducts(response.data)
        })
    }, []);

    return (
        <div className="product-container">
            <div>
                <img src={products.img[products.main_img]} alt="#" />
            </div>
            <div className="size">{products.size}</div>
            <div className="price">{products.price}</div>

        </div>
    )
}