import React from "react";


function Products(props) {

    return (
        <div className="products">
           <img src={props.data.img} alt="#" />
           <div>{props.data.price}</div>
           <div>{props.data.size}</div>
        </div>
    )
}







export default Products;

/*

            <img className="img" src={props.data.img} alt="#"/>
            <div className="title">{props.data.title}</div>
            <div className="author">Author: {props.data.author}</div>
            <div className="price">{props.data.price} eur</div>
            <button className="button" onClick={props.soldout}>Buy It!</button>

*/