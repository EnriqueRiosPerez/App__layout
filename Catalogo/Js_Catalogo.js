let contenedorTarjetas = document.getElementById("tarjetas")
let inputSearch = document.getElementById("searchInput")
//variables para la paginacion
const botonAtrasDOM = document.querySelector("#atras");
const informacionPaginaDOM = document.querySelector("#informacion-pagina");
const botonSiguienteDOM = document.querySelector("#siguiente");
const elementosPorPagina = 10;
let paginaActual = 1;
const baseDeDatos = [];
let dbPrincipal = [];
let dbPrincipal__Copia =[];
let datosCopia = [];

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
                            <img loading="lazy"  class="sectionImage__Image" src="${serverPart+elemento.ID_NP}" alt="" >
                            
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
    dbPrincipal = await fetch(serverAll).then(res => res.json()).then(respuesta => {
        return respuesta
      })
      console.log(dbPrincipal);
      dbPrincipal__Copia = [...dbPrincipal]
      renderizar(dbPrincipal__Copia)


}

function avanzarPagina() {
    // Incrementar "paginaActual"
    paginaActual = paginaActual + 1;
    // Redibujar
    renderizar(dbPrincipal__Copia);
}

function retrocederPagina() {
    // Disminuye "paginaActual"
    paginaActual = paginaActual - 1;
    // Redibujar
    renderizar(dbPrincipal__Copia);
}
function obtenerPaginasTotales(useData) {
    return Math.ceil(useData.length / elementosPorPagina);
}
function gestionarBotones(useData) {
    // Comprobar que no se pueda retroceder
    if (paginaActual === 1) {
    botonAtrasDOM.setAttribute("disabled", true);
    } else {
    botonAtrasDOM.removeAttribute("disabled");
    }
    // Comprobar que no se pueda avanzar
    if (paginaActual === obtenerPaginasTotales(useData)) {
    botonSiguienteDOM.setAttribute("disabled", true);
    } else {
    botonSiguienteDOM.removeAttribute("disabled");
    }
}

function obtenerRebanadaDeBaseDeDatos(pagina = 1,useData) {
   const corteDeInicio = (paginaActual - 1) * elementosPorPagina;
   const corteDeFinal = corteDeInicio + elementosPorPagina;
   return useData.slice(corteDeInicio, corteDeFinal);
}
function renderizar(useData) {
    informacionPaginaDOM.innerHTML=""
    const rebanadaDatos = obtenerRebanadaDeBaseDeDatos(paginaActual,useData);
    gestionarBotones(useData);
    informacionPaginaDOM.textContent = `${paginaActual}/${obtenerPaginasTotales(useData)}`;
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
    let search = inputSearch.value.toUpperCase().trim()
    let arraySearchs = search.trim().split(" ")
    let arrayFiltrados = []
    let arrayConcatenado = []
    console.log(arraySearchs)

    dbPrincipal__Copia = [...dbPrincipal]
    // busqueda =  busqueda.toUpperCase()
    // console.log(busqueda)
    if (search.length !== 0 ){

        arraySearchs.forEach(searchItem =>{
            let filtrado = dbPrincipal__Copia.filter(dato =>{
                let valores= Object.values(dato).toString()
                valores = valores.replaceAll(",","")
                valores = valores.replace(/\s+/g, '')  
                valores = valores.toUpperCase()
                if (valores.indexOf(searchItem,0) > 0 ){
                    arrayConcatenado.push(dato)
                    return true
                       // console.log(valores)
                   }
            })
            // arrayFiltrados.concat(filtrado);
            arrayFiltrados.push(filtrado)
            console.log("uno ");
            console.log(filtrado)

        })

        function findDuplicates(arr) {
            const distinct = new Set(arr);        // para mejorar el rendimiento
            const filtered = arr.filter(item => {
                // elimina el elemento del conjunto en el primer encuentro
                if (distinct.has(item)) {
                    distinct.delete(item);
                }
                // devolver el elemento en encuentros posteriores
                else {
                    return item;
                }
            });
         
            return [...new Set(filtered)]
        }
     



        let filtradito = dbPrincipal__Copia.filter(dato=> {
            // let filtradito = dbPrincipal__Copia.map(dato=> {
            let valores= Object.values(dato).toString()
            valores = valores.replaceAll(",","")
            valores = valores.replace(/\s+/g, '')  
            valores = valores.toUpperCase()
            //console.log(valores)
            if (valores.indexOf(search,0) > 0 ){
             return true
                // console.log(valores)
            }
           
        })
        // console.log(filtradito)
        // if(filtradito.length === 0){
        //     alert("no existen elementos")
        // }else{
        //     dbPrincipal__Copia = filtradito
        //     renderizar(dbPrincipal__Copia)
        // }

        console.log("las paabras son "+arraySearchs.length)


        if (arraySearchs.length > 1){
            
            const duplicates = findDuplicates(arrayConcatenado);
            console.log("array concatenado filtrado");
            console.log(duplicates);
            renderizar(duplicates)

            
        }
        else{
            if(arrayConcatenado.length ===0){
                alert("no se encontraron itmes con esas caracterizticas")
                // console.log("no se encontraron itmes con esas caracterizticas")
            }
            else{
                console.log("array concatenado");
                renderizar(arrayConcatenado)
                console.log(arrayConcatenado);
            }
        }

        // let filtrados = dbPrincipal__Copia.filter((dato)=>{
        //     if (dato.Proveedor === busqueda){
        //         // console.log(dato.Proveedor)
        //         return true
        //     }
        // })
        // if(filtrados.length === 0){
        //     alert("no existen elementos")
        // }else{
        //     dbPrincipal__Copia = filtrados
        //     renderizar(dbPrincipal__Copia)
        // }
    }
    else{
        // console.log("original")
        dbPrincipal__Copia = [...dbPrincipal]
        renderizar(dbPrincipal__Copia)
        // console.log(dbPrincipal__Copia);
    }
    
     

    //  datos.map(elementos => {
        
    //     filterNP = elementos.filter((elemento) => {
    //         elemento.Proveedor === "ASM"})
    //     console.log(filterNP);
    //  })

})




botonAtrasDOM.addEventListener("click", retrocederPagina);
botonSiguienteDOM.addEventListener("click", avanzarPagina);


