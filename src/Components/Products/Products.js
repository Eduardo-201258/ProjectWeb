import React from "react";

let totalPrice = 0;

const Products = ({products, saleNote, setSaleNote, product}) =>{

    const {id, code, urlImage, name, price, description, stock, amount} = products;

    const calculatePrice = (total) =>{
        totalPrice = totalPrice + ( total - (totalPrice - total)) - total;
        var total_ = 0;
        total_ = total_ + total;
        console.log(total_);
    }

    const addSale = (id) => {
        let filterProduct = product.filter((products) => products.id === id);

        let value = true;
        var producto = [];
        let total = 0;

        if (filterProduct[0].stock>0){
            for (var i =0; i<saleNote.length; i++){
                producto.push(saleNote[i]);

                if (filterProduct[0].id === saleNote[i].id){
                    filterProduct[0].stock = filterProduct[0].stock -1;
                    saleNote[i].amount = saleNote[i].amount + 1;
                    total = saleNote[i].price * saleNote[i].amount ;

                    value = false;

                    setSaleNote(producto);
                }
            }
            if(value){
                filterProduct[0].stock = filterProduct[0].stock -1;
                filterProduct[0].amount = filterProduct[0].amount +1;
                total = filterProduct[0].price * filterProduct[0].amount;
                setSaleNote([...saleNote, ...filterProduct]);

            }

        }else {
            alert('No quedan productos disponibles')
        }
        calculatePrice(total);
    }

    const deleteSale = (id) =>{
        let filterProduct = saleNote.filter((products) => products.id === id);
        let filterNote = saleNote.filter((products) => products.id !== id);

        products.stock = products.stock + filterProduct[0].amount;
        filterProduct[0].amount = 0;
        setSaleNote(filterNote);
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
                            Precio: ${price}.
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
                        Precio Unidad: ${price}.
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