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
            {products.map((product) => (<ShowProduct key={product.id} data={product}></ShowProduct>))}
        </div>
    )
}