import React, {Fragment, useState} from "react";
import './App.css';
import Products from "./Components/Products/Products";
import SaleNote from "./Components/SalesNote/SaleNote";


function App(){
    const [product, setProduct] = useState([
        { id: 0,
            code: 750100,
            urlImage: 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7501008491966.jpg',
            name: 'Aspirina®',
            price: 45,
            description: 'Aspirina® para dolor de cabeza y resfriado, caja con 40 tabletas, 500mg cada una.',
            stock: 8,
        },
        { id: 1,
            code: 750111,
            urlImage: 'https://www.farmaciasespecializadas.com/ccstore/v1/images/?source=/file/v6287467053812393761/products/11944.png&height=475&width=475',
            name: 'Tempra Forte',
            price: 75,
            description: 'Para el dolor, fiebre y malestares, paracetamol caja con 24 tabletas de 500mg cada una.',
            stock: 6,
        },

    ])

    const [saleNote, setSaleNote] = useState([])


    return(
        <Fragment>
            <h2>Productos</h2>
            {product.map((products) => (
                <Products
                    key={products.id}
                    products={products}
                    saleNote={saleNote}
                    setSaleNote={setSaleNote}
                    product={product}
                />
            ))}
            <SaleNote saleNote={saleNote} setSaleNote={setSaleNote}/>
        </Fragment>


    );


}
export default App;
