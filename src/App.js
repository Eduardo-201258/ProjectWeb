import React, {Fragment, useState} from "react";
import './App.css';
import Products from "./Components/Products/Products";
import SaleNote from "./Components/SalesNote/SaleNote";


function App(){
    const [product, setProduct] = useState([
        { id: 0,
            code: 750110,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907027797460017232/unknown.png',
            name: 'Aspirina®',
            price: 45,
            description: 'Aspirina® para dolor de cabeza y resfriado, caja con 40 tabletas, 500mg cada una.',
            stock: 8,
            amount: 0,
            total:0,
        },
        { id: 1,
            code: 750111,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907028032873709578/unknown.png',
            name: 'Tempra Forte',
            price: 70,
            description: 'Calmante para el dolor y reduce la fiebre',
            stock: 10,
            amount: 0,
            total:0,
        },
        { id: 2,
            code: 750112,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907028190952833034/unknown.png',
            name: 'Tabcin',
            price: 40,
            description: 'Efervescente para aliviar los síntomas del resfriado',
            stock: 15,
            amount: 0,
            total:0,
        },
        { id: 3,
            code: 750113,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907028400378622032/unknown.png',
            name: 'Alcohol Etilico',
            price: 15,
            description: 'antiséptico y desinfectante',
            stock: 15,
            amount: 0,
            total:0,
        },
        { id: 4,
            code: 750114,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907028631941963816/unknown.png',
            name: 'Naproxeno',
            price: 24,
            description: 'para reducir la fiebre y para aliviar el dolor',
            stock: 20,
            amount: 0,
            total:0,
        },
        { id: 5,
            code: 750115,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907028781271777320/unknown.png',
            name: 'Vaporub',
            price: 24,
            description: 'mejora los síntomas de congestión nasal y tos',
            stock: 10,
            amount: 0,
            total:0,
        },
        { id: 6,
            code: 750116,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907028923316076614/unknown.png',
            name: 'Diclofenaco',
            price: 18,
            description: 'detener la producción de una sustancia que causa dolor',
            stock: 10,
            amount: 0,
            total:0,
        },
        { id: 7,
            code: 750117,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907029279597015131/unknown.png',
            name: 'Flanax 550',
            price: 32,
            description: 'brinda una compresión uniforme y suave',
            stock: 10,
            amount: 0,
            total:0,
        },
        { id: 8,
            code: 750118,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907029476217610321/unknown.png',
            name: 'Treda',
            price: 12,
            description: 'para aliviar malestares estomacales',
            stock: 10,
            amount: 0,
            total:0,
        },
        { id: 9,
            code: 750119,
            urlImage: 'https://cdn.discordapp.com/attachments/841804600532008961/907029815813619712/unknown.png',
            name: 'Para aliviar dolor',
            price: 70,
            description: 'elementos indispensables para dar atención satisfactoria',
            stock: 10,
            amount: 0,
            total:0,
        },
    ])

    const [saleNote, setSaleNote] = useState([])


    return(
        <Fragment>
            <h2 id="titulo">Farmacia</h2>
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
