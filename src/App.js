import React, {Component, useRef} from "react";
import './App.css';
import Products from "./Components/Products/Products";

const products = [
    { id: 750100,
        urlImage: 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7501008491966.jpg',
        name: 'Aspirina',
        price: 3,
        description: '',
        stock: 3,
    },
    { id: 750111,
        urlImage: 'https://www.farmaciasespecializadas.com/ccstore/v1/images/?source=/file/v6287467053812393761/products/11944.png&height=475&width=475',
        name: 'Tempra Forte',
        price: 3,
        description: '',
        stock: 3,
    },
];


function App(){
    return (
        <div className="App">
            <h1>My wishlist app</h1>
            <div className="view-products">
                { products.map(({ id, urlImage, name,price,description,stock}) => (
                    <div className="view-products-margin">
                        <li key={id} className= {`product-list_item ${name ? 'product-list_item--done' : ''}`}>
                            <input id={ `products${id}` } type="checkbox" checked = {stock} />
                            <img src={urlImage} width={100}/>
                            <label htmlFor={ `products${id}` }> {name}, {price}, {description}, {stock}</label>
                        </li>
                    </div>
                ) )}
            </div>
            <button  type="button">
                Archive done
            </button>
        </div>
    );
}
export default App;
