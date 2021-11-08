import React from "react";

let totalPay = 0;
let view = document.getElementById('totalFinal');
const Products = ({products, saleNote, setSaleNote, product}) =>{

    const {id, code, urlImage, name, price, description, stock, amount, total} = products;


    const addSale = function(id) {
        let filterProduct = product.filter((products) => products.id === id);
        let value = true;
        var producto = [];
        let finalTotal = 0;

        if (filterProduct[0].stock>0){
            for (let i =0; i<saleNote.length; i++){
                producto.push(saleNote[i]);

                if (filterProduct[0].id === saleNote[i].id){
                    filterProduct[0].stock = filterProduct[0].stock -1;
                    saleNote[i].amount = saleNote[i].amount + 1;
                    saleNote[i].total = saleNote[i].price * saleNote[i].amount;
                    value = false;
                    setSaleNote(producto);
                }
            }
            if(value){
                filterProduct[0].stock = filterProduct[0].stock -1;
                filterProduct[0].amount = filterProduct[0].amount +1;
                finalTotal = finalTotal + filterProduct[0].price * filterProduct[0].amount;
                filterProduct[0].total = filterProduct[0].total + finalTotal;
                setSaleNote([...saleNote, ...filterProduct]);

            }
            for (let i =0; i<saleNote.length; i++ ){
                finalTotal = finalTotal + saleNote[i].total;
            }
            totalPay = finalTotal;
            view.innerHTML = totalPay;

        }else {
            alert('No quedan productos disponibles')
        }
    }

    const deleteSale = (id) =>{
        let filterProduct = saleNote.filter((products) => products.id === id);
        let filterNote = saleNote.filter((products) => products.id !== id);

        products.stock = products.stock + filterProduct[0].amount;

        totalPay = totalPay - (filterProduct[0].amount * filterProduct[0].price);
        console.log(totalPay);
        view.innerHTML = totalPay;

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
                            Precio unidad: ${price}.
                            <br/>
                            <button type='button' onClick={() => addSale(id)}>Agregar producto</button>
                        </li>
                ):(
                    <li>
                        <br/>
                        {name}
                        <br/>
                        Precio Unidad: ${price}.
                        <br/>
                        Cantidad: {amount}.
                        <br/>
                        Total: ${total}
                        <br/>
                        <button type='button' onClick={() => deleteSale(id)}>Eliminar</button>
                        <button type='button' onClick={() => deleteSale(id)}>CONFIRMAR</button>
                    </li>
                )
                }

            </ul>

        </div>

    );

}

export default Products;