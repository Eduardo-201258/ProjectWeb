import React from "react";
import Products from "../Products/Products";

const SaleNote = ({saleNote, setSaleNote}) =>{
    return(
        <div className="saleNote">
            <h3>Nota de ventas</h3>
            {saleNote.length ===0 ? (<p>Aun no cuenta con productos</p>) : (saleNote.map((products => <Products key={products.id} products={products} saleNote={saleNote} setSaleNote={setSaleNote} />)))}
        </div>
    );
};

export default SaleNote;