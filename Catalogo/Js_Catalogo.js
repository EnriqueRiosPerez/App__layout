let contenedorTarjetas = document.getElementById("tarjetas")
let inputSearch = document.getElementById("searchInput")
//variables para la paginacion
const botonAtrasDOM = document.querySelector("#atras");
const informacionPaginaDOM = document.querySelector("#informacion-pagina");
const botonSiguienteDOM = document.querySelector("#siguiente");
const elementosPorPagina = 10;
let paginaActual = 1;
const baseDeDatos = [];
let datos = [];

//variablas de conexion del servidor
let localhostAll =  "https://localhost:44314/handlers/catalog_header.ashx?type=all&id=65"
let localhostPart = "https://localhost:44314/Handlers/Catalog_Header.ashx?type=part&id="
const serverAll = "http://gdjf04819.americas.ad.flextronics.com:85//Handlers/Catalog_Header.ashx?type=all&id=0"
const serverPart = "http://gdjf04819.americas.ad.flextronics.com:85/Handlers/Catalog_Header.ashx?type=part&id="

const proveedores = {
    "ASM2":"https://d1c1fyrod5p5bz.cloudfront.net/corp/site/templates/_corporate/images/asmpt_logo.svg",
    "ASM":"logos/asmpt_logo.png",
    "Fuji America":"https://smt.fuji.co.jp/wp-content/themes/fss/assets/img/logo.svg",
    "panasonic":"logos/asmpt_logo.png",
    "Heller":"logos/heller-logo.png",
    "Rehm Thermal":"logos/rehm.png",
    "SINVO":"logos/sinvo.png"

}
const defaulProveedor = "logos/MM.png"






window.addEventListener("load", ()=>{

    datoAwait()
    // fetch(localhostAll).then(res => res.json()).then(respuesta => {
    //     console.log("Cantidad datos: "+respuesta.length)
    //     let mitad = (respuesta.length)/103
    //     mitad = 10
    //     console.log("datos a mostrar: "+mitad);
    //     let arreglo = respuesta.splice(0, mitad )
    //     let arregloMitad = respuesta.splice(mitad+1, respuesta.length )

    //     metodoForeach(arreglo).then(res =>{
    //         console.time("dibujar")
    //         contenedorTarjetas.insertAdjacentHTML("afterbegin",res)
    //         // contenedorTarjetas.innerHTML = res
    //         console.timeEnd("dibujar")
    //     })

    // })
})

function metodoForeach(respuesta){



    return new Promise((resolve, reject)=>{
        if(respuesta.length === 0){
            reject(new Error(""))
        }
        palabra=""
        respuesta.forEach(elemento=>{

            palabra +=`<main class="card">
                    
                    <section class="card__sectionImage">
                        <figure class="sectionImage__ImageContainer">
                            <img loading="lazy"  class="sectionImage__Image" src="${localhostPart+elemento.ID_NP}" alt="" >
                            
                            <figcaption><h3 class="sectionImage__Titulo ">${elemento.Num_parte}</h3> </figcaption>
                        </figure>
                            <picture class="sectionImage__icono">
                                <img class="sectionImage__iconlogo" src="${proveedores[elemento.Proveedor] || defaulProveedor}" alt="" srcset="">
                            </picture>

                    </section>  
                    <section class="card__sectionInfo">
                        <div class="twoContainer">
                            <div class="twoContainer__coolinput">
                                <label for="input" class="twoContainer__Title">Machine type</label>
                                <input type="text" name="input" class="twoContainer__Input" readonly value="${elemento.Tipo_maquina}" />
                                
                            </div>
                            <div class="twoContainer__coolinput">
                                <label for="input" class="twoContainer__Title">Supplier</label>
                                <input type="text" name="input" class="twoContainer__Input" readonly value="${elemento.Proveedor}" />
                            </div>
                        </div>
                    <div class="twoContainer">
                        <div class="twoContainer__coolinput">
                            <label for="input" class="twoContainer__Title">Warehouse</label>
                            <input type="text" name="input" class="twoContainer__Input"  readonly value="${elemento.Almacen}" />
                          
                        </div>
                        <div class="twoContainer__coolinput">
                            <label for="input" class="twoContainer__Title">Bin</label>
                            <input type="text" name="input" class="twoContainer__Input" readonly value="${elemento.Long_ubicacion_I}" />
               
                        </div>
                    </div>
                    <div class="twoContainer">
                        <div class="twoContainer__coolinput">
                            <label for="input" class="twoContainer__Title">Stock</label>
                            <input type="text" name="input" class="twoContainer__Input" readonly value="${elemento.Quatity}" />
                        </div>
                        <div class="twoContainer__coolinput">
                            <label for="input" class="twoContainer__Title">Active</label>
                            <input type="text" name="input" class="twoContainer__Input" readonly value="${elemento.Estatus}" />
                        </div>
                    </div>
                   
                    <div class="oneContainer">
                        <div class="twoContainer__coolinput">
                            <label for="input" class="twoContainer__Title">Description</label>
                            <textarea class="twoContainer__Input" readonly >${elemento.Descripcion}</textarea>
                        </div>
                    </div>
                   
                        <div class="contenedorBoton">
                            <button class="comic-button" onclick="modal(${elemento.ID_NP})">Details</button>
                    
                        </div>
                    </section>
                  
                    
                  
                  

                </main>`
        })
        resolve(palabra)

    })
}

async function datoAwait()
{
    datos = await fetch(localhostAll).then(res => res.json()).then(respuesta => {
        return respuesta
      })
      console.log(datos);
      renderizar()

}

function avanzarPagina() {
    // Incrementar "paginaActual"
    paginaActual = paginaActual + 1;
    // Redibujar
    renderizar();
}

function retrocederPagina() {
    // Disminuye "paginaActual"
    paginaActual = paginaActual - 1;
    // Redibujar
    renderizar();
}
function obtenerPaginasTotales() {
    return Math.ceil(datos.length / elementosPorPagina);
}
function gestionarBotones() {
    // Comprobar que no se pueda retroceder
    if (paginaActual === 1) {
    botonAtrasDOM.setAttribute("disabled", true);
    } else {
    botonAtrasDOM.removeAttribute("disabled");
    }
    // Comprobar que no se pueda avanzar
    if (paginaActual === obtenerPaginasTotales()) {
    botonSiguienteDOM.setAttribute("disabled", true);
    } else {
    botonSiguienteDOM.removeAttribute("disabled");
    }
}

function obtenerRebanadaDeBaseDeDatos(pagina = 1) {
   const corteDeInicio = (paginaActual - 1) * elementosPorPagina;
   const corteDeFinal = corteDeInicio + elementosPorPagina;
   return datos.slice(corteDeInicio, corteDeFinal);
}
function renderizar() {
    informacionPaginaDOM.innerHTML=""
    const rebanadaDatos = obtenerRebanadaDeBaseDeDatos(paginaActual,);
    gestionarBotones();
    informacionPaginaDOM.textContent = `${paginaActual}/${obtenerPaginasTotales()}`;
    contenedorTarjetas.innerHTML=""
           metodoForeach(rebanadaDatos).then(res =>{
            console.time("dibujar")
            contenedorTarjetas.insertAdjacentHTML("afterbegin",res)
            // contenedorTarjetas.innerHTML = res
            console.timeEnd("dibujar")
        })
}


let buttonSearch = document.getElementById("searchInput__Buton")
buttonSearch.addEventListener("click",()=>{
    let busqueda = "aSm"
    busqueda =  busqueda.toUpperCase()
    // console.log(busqueda)
    let filtrados = datos.filter((dato)=>{
        if (dato.Proveedor === busqueda){
            // console.log(dato.Proveedor)
            return true
        }
        
  
    })
    
    console.log(filtrados);
    //  datos.map(elementos => {
        
    //     filterNP = elementos.filter((elemento) => {
    //         elemento.Proveedor === "ASM"})
    //     console.log(filterNP);
    //  })

})



function searchNPs() {
    var  filter, table, tr, td, i, txtValue;
    // input = document.getElementById("myInput");
    filter = inputSearch.value.toUpperCase();
    //table = document.getElementById("datosTable");

    table = document.getElementById("tablaAcciones");
    tr = table.getElementsByTagName("tr");
    //console.log(tabla_1)
    //tr = table_1.getElementsByTagName("tr");
    //console.log(tr)
    let ocultar = [];
    let mostrar = []
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        
        if (td) {
            txtValue = td.textContent || td.innerText;
            let textoconsulta2 = tr[i].cells[2].innerText;
            let textocampo3 = tr[i].cells[3].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || textoconsulta2.toUpperCase().indexOf(filter) > -1 || textocampo3.toUpperCase().indexOf(filter) > -1 ) {
                //console.log("true" + i)
                //console.log(tr[i])
                //tr[i].style.display = "";
                mostrar.push(tr[i])
            } else {
                //console.log("false" + i)
                //console.log(tr[i])
                ocultar.push(tr[i])
            //    tr[i].style.display = "none";
            }
        }
        //console.log(ocultar)
        
    }
    ocultar.forEach(item => {
        item.style.display = "none";
    })
    mostrar.forEach(item => {
        item.style.display = "";
    })
}




botonAtrasDOM.addEventListener("click", retrocederPagina);
botonSiguienteDOM.addEventListener("click", avanzarPagina);


