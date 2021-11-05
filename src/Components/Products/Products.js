import React from "react";

const Products = ({products, note, setNote, product}) =>{

    const {id, urlImage, name, price, description, stock} = products;

    return(
        <div>
            <ul>
                <li>
                    <input id={id} type="Checkbox"/>
                    <img src={urlImage} width="100px"/>
                    <label htmlFor={ `product${id}` }>{name}</label>
                </li>
            </ul>
        </div>
    );
};

export default Products;