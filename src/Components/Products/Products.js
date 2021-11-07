import React from "react";

const Products = ({products, saleNote, setSaleNote, product}) =>{


    const {id, code, urlImage, name, price, description, stock, amount} = products;


    const addSale = (id) => {
        const filterProduct = product.filter((products) => products.id === id);
        let value = true;
        var producto = [];

        for (var i =0; i<saleNote.length; i++){
            producto.push(saleNote[i])
            if (filterProduct[0].id == saleNote[i].id){
                filterProduct[0].stock = filterProduct[0].stock -1;
                saleNote[i].amount = saleNote[i].amount + 1;
                setSaleNote(producto)
                value = false;
            }
        }
        if(value){
            filterProduct[0].stock = filterProduct[0].stock -1;
            filterProduct[0].amount = filterProduct[0].amount +1;
            setSaleNote([...saleNote, ...filterProduct])
        }

    }

    const deleteSale = id =>{

        let filterNote = saleNote.filter((products) => products.id !== id);
        setSaleNote(filterNote)

    }


    return(
        <div>
            <ul>
                {product ?(
                        <li>
                            <img src={urlImage} width="100px"/>
                            <br/>
                            {name}.
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
                        {name}.
                        <br/>
                        {description}
                        <br/>
                        Cantidad: {amount}.
                        <br/>
                        Precio: ${price}.
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