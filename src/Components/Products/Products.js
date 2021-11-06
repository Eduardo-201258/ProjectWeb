import React from "react";
import SaleNote from "../SalesNote/SaleNote";

const Products = ({products, saleNote, setSaleNote, product}) =>{
    
    const {id, code, urlImage, name, price, description, stock} = products;

    const addSale = (id) => {
        const filterProduct = product.filter((products) => products.id === id);
        setSaleNote([...saleNote, ...filterProduct])
    }

    const deleteSale = id =>{
        const filterNote = saleNote.filter(products => products.id !== id);
        setSaleNote(filterNote)
    }


    return(
        <div>
            <ul>
                <li>
                    <img src={urlImage} width="100px"/>
                    <br/>
                    {description}
                    <br/>
                    Codigo: {code}.
                    <br/>
                    Stock: {stock}.
                    <br/>
                    Precio: {price}.
                    <br/>
                </li>
                {product ?(
                    <button type='button' onClick={() => addSale(id)}>Agregar producto</button>
                ):(
                    <button type='button' onClick={() => deleteSale(id)}>Eliminar</button>
                )
                }
            </ul>
        </div>
    );
}

export default Products;