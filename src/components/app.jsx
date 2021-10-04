import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import axios from "axios";
import Products from "./Products";



function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://in3.dev/vinted/api/products/").then(function(response) {
            setProducts(response.data)
        })
    }, []);

    return (
        <div>
           <Header/>
           <Hero/>
           <div>
               {products.map((product) => (<Products key={product.id} data={product}></Products>))}
           </div>
        </div>
    )

}





export default App;

// vinted: https://in3.dev/vinted/api/users/
// https://in3.dev/vinted/api/products/