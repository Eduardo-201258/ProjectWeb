import React, {Fragment, useState} from "react";
import './App.css';
import Products from "./Components/Products/Products";




function App(){
    const [product, setProduct] = useState([
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
        }
    ])

    const [note, setNote] = useState([])


    return(
        <Fragment>
            <h2>Productos</h2>
            {product.map((products) => (
                <Products
                    key={products.id}
                    products={products}
                    note={note}
                    setNote={setNote}
                    product={product}
                />
            ))}
        </Fragment>
    );

}
export default App;
