'use strict'
/* variables*/

/* Nombre de cards */
let cupcakeHTML = document.querySelector('#cupcakeHTML');
let panHTML = document.querySelector('#panHTML');
let sandwichHTML = document.querySelector('#sandwichHTML');
let tortaHTML = document.querySelector('#tortaHTML');
/* botones comprar */
let btn_cupcake = document.querySelector('#btn-cupcake');
let btn_pan = document.querySelector('#btn-pan');
let btn_sandwich = document.querySelector('#btn-sandwich');
let btn_torta = document.querySelector('#btn-torta');
/*  */
let canastaProd = document.querySelectorAll('.carrito>h2');

let totProd = [
    { boton: btn_cupcake, producto: "cupcacke", cantidad: '' },
    { boton: btn_pan, producto: "pan", cantidad: '' },
    { boton: btn_sandwich, producto: "sandwich", cantidad: '' },
    { boton: btn_torta, producto: "tortas", cantidad: '' }
];

if(localStorage.getItem('cupcacke') !== null) {
    totProd[0].cantidad = localStorage.getItem('cupcacke'); 
}


for (let i = 0; i < totProd.length; i++) {
    totProd[i].boton.onclick = (e) => {
        e.preventDefault();
        totProd[i].cantidad++;
        localStorage.setItem(totProd[i].producto, totProd[i].cantidad);
        let producto = totProd[i].producto;
        let cantidadProd = localStorage.getItem(producto);
        console.log(cantidadProd);
        canastaProd[i].innerHTML = producto + ' ' + cantidadProd;
    }
}
function fScroll(val)
{
        var hidScroll = document.getElementById('hidScroll');
        hidScroll.value = val.scrollTop;
}

// function moves scroll position to saved value
function fScrollMove(what)
{
        var hidScroll = document.getElementById('hidScroll');
        document.getElementById(what).scrollTop = hidScroll.value;
}



/*
function EsCupcake(seleccion) {
    return seleccion.producto === "cupcacke"
};
*/



/*
let aProd = [btn_cupcake, btn_pan, btn_sandwich, btn_torta ];
let aCantProd = [0,0,0,0];

for (let i = 0; i < aProd.length; i++) {
    aProd[i].onclick = (e) => {
        e.preventDefault();
        aCantProd[i]++;
        canastaProd[i].innerHTML = aCantProd[i];
    }
}

let FuncProd = (boton, producto) => {
    boton.onclick = (e) => {
        e.preventDefault();
        return producto += 1;
    }
    return producto;
}
 */
