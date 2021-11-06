import React from "react";

const Products = ({products, saleNote, setSaleNote, product}) =>{


    const {id, code, urlImage, name, price, description, stock} = products;

    const addSale = (id) => {
        const filterProduct = product.filter((products) => products.id === id);
        setSaleNote([...saleNote, ...filterProduct])
    }

    const deleteSale = id =>{
        const filterNote = saleNote.filter(products => products.id !== id);
        setSaleNote(filterNote)
        console.log({saleNote})
    }


    return(
        <div>
            <ul>

                {product ?(
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
                            <button type='button' onClick={() => addSale(id)}>Agregar producto</button>
                        </li>

                ):(
                    <li>
                        <img src={urlImage} width="100px"/>
                        <br/>
                        {description}
                        <br/>
                        Codigo: {code}.
                        <br/>
                        Precio: {price}.
                        <br/>
                        <button type='button' onClick={() => deleteSale(id)}>Eliminar</button>
                    </li>

                )
                }
            </ul>
        </div>
    );
}

export default Products;