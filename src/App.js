import React, {useRef} from "react";
import './App.css';

function App() {
    constructor(props) {
        super(props)
        this.state = {
            openOrder: false,
            total: 0,
            sum: 0,
            products: [
                {
                    id: 1,
                    name: 'ADerogyl Efect',
                    picture: 'https://m.media-amazon.com/images/I/811dtxPyHeL._AC_SX425_.jpg',
                    price: 60,
                    datails: 'ADerogyl, 5 ampolletas de 3ml, vitaminas en solucion para el sistema inmune',
                    code: 750101,
                },
                {
                    id: 2,
                    name: 'Sony Dsc-h300 20 Mp',
                    picture: 'https://www.aspirina.com.mx/sites/g/files/vrxlpx24696/files/2021-02/Aspirina%2040_Frente_Alta.png',
                    price: 3938,
                    datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
                    marca: 'Sony',
                    status: 6,
                },
                {
                    id: 3,
                    name: 'Fujifilm X-t10 40.0 Mp',
                    picture: 'https://http2.mlstatic.com/camara-D_Q_NP_997939-MLM25733136676_072017-X.webp',
                    price: 18999,
                    datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
                    marca: 'Fujifilm',
                    status: 2,
                },
                {
                    id: 4,
                    name: 'Reflex Canon Eos 30 ',
                    picture: 'https://http2.mlstatic.com/camara-D_Q_NP_743505-MLM25028787002_082016-X.webp',
                    price: 1000,
                    datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
                    marca: 'Canon',
                    status: 6,
                },
                {
                    id: 5,
                    name: 'Holster Camera Case ',
                    picture: 'https://images-na.ssl-images-amazon.com/images/I/91cMeS6xLHL._SX522_.jpg',
                    price: 328,
                    marca: 'Amazon',
                    status: 10,
                },
                {
                    id: 6,
                    name: 'Olympus M. 40-150mm ',
                    picture: 'https://images-na.ssl-images-amazon.com/images/I/81vy-AiCWSL._AC_UL160_SR160,160_.jpg',
                    price: 2733,
                    marca: 'Olympus',
                    status: 4,
                },
                {
                    id: 7,
                    name: 'Tripié ligero ',
                    picture: 'https://images-na.ssl-images-amazon.com/images/G/33/aplusautomation/vendorimages/2ad656e6-6b25-48fd-af65-0a113979bc54.jpg._CB293876631__SR300,300_.jpg',
                    price: 372,
                    marca: 'Amazon',
                    status: 2,
                },
                {
                    id: 8,
                    name: 'Fujinon XF10-24MMF4 ',
                    picture: 'https://images-na.ssl-images-amazon.com/images/I/81tbbvcsJIL._AC_UL160_SR160,160_.jpg',
                    price: 25023,
                    marca: 'Fujinon',
                    status: 4,
                },
                {
                    id: 9,
                    name: 'Fujifilm X-T2 Mirrorless ',
                    picture: 'https://images-na.ssl-images-amazon.com/images/I/81CUJvIrFML._AC_UL160_SR160,160_.jpg',
                    price: 50399,
                    marca: 'Fujifilm',
                    status: 3,
                },
                {
                    id: 10,
                    name: 'LUMIX G Lens, 25mm',
                    picture: 'https://images-na.ssl-images-amazon.com/images/I/71dTWmH4vxL._SL1500_.jpg',
                    price: 3262,
                    marca: 'Panasonic',
                    status: 4,
                },
                {
                    id: 11,
                    name: 'Olympus OM-D E-M5 ',
                    picture: 'https://images-na.ssl-images-amazon.com/images/I/918N6QYcTjL._SL1500_.jpg',
                    price: 18688,
                    marca: 'Olympus',
                    status: 3,
                },
                {
                    id: 12,
                    name: 'Fujifilm X-T20 ',
                    picture: 'https://images-na.ssl-images-amazon.com/images/I/91in%2BYvDGtL._AC_UL160_SR160,160_.jpg',
                    price: 32699,
                    marca: 'Fujifilm',
                    status: 10,
                }
            ],
            cart: [],
        }
}

export default App;
