import React from "react";
import Products from "../Products/Products";

const SaleNote = ({saleNote, setSaleNote}) =>{
    return(
        <div className="saleNote">
            <scroll-container>
                <h3>Nota de ventas</h3>
                <pre>
                    |            Producto.           Precio.        Cantidad.           Total.
                </pre>
                {saleNote.length ===0 ? (<p>Aun no cuenta con productos</p>) : (saleNote.map((products => <Products key={products.id} products={products} saleNote={saleNote} setSaleNote={setSaleNote} />)))}

            </scroll-container>

        </div>
    );

};

export default SaleNote;