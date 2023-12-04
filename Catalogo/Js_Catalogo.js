let contenedorTarjetas = document.getElementById("tarjetas")

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
    fetch(localhostAll).then(res => res.json()).then(respuesta => {
        console.log("Cantidad datos: "+respuesta.length)
        let mitad = (respuesta.length)/103
        mitad = 10
        console.log("datos a mostrar: "+mitad);
        let arreglo = respuesta.splice(0, mitad )
        let arregloMitad = respuesta.splice(mitad+1, respuesta.length )

        metodoForeach(arreglo).then(res =>{
            console.time("dibujar")
            contenedorTarjetas.insertAdjacentHTML("afterbegin",res)
            // contenedorTarjetas.innerHTML = res
            console.timeEnd("dibujar")
        })

    })
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