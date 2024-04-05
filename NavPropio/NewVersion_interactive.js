let subMenusHTML = document.getElementsByClassName("Menu__Item__Submenu")
let Items = document.getElementsByClassName("Menu__Item__Title")
let usuarioImageInfo = document.getElementById("subMenu")
let rowsIcons = document.getElementsByClassName("Menu__Item__Title__sub")
// let side_nav = document.getElementById("Ul_Menu")
// let side_nav_Li_Elements = side_nav.querySelectorAll("li.Menu__Item")
// side_nav_Li_Elements.forEach(li=>{
//     li.addEventListener("click", imprimmir_Elemento);
// })


export async function ShowItemNav(e) {
    let current = e.target
    console.log(current)
    let title = current.querySelectorAll("span.Menu__Item__Title")
    let submenu = current.querySelectorAll("ul.Menu__Item__Submenu")
    let rowIcon = current.querySelectorAll("span.Menu__Item__Title__sub")

    console.time("Ocultar2")
    hideNavSubmenusPromise(submenu[0])
    selectMenuPromise(title[0])
    rotateRowIcon(rowIcon[0])
    console.timeEnd("Ocultar2")
}

//Original
// function rotateRowIcon(current) {
//     return new Promise((resolve, reject) => {
//         let iconRows = [...rowsIcons]
//         let si = []
//         let no = []
//         if(iconRows.length === 0 ){
//             reject(new Error("No se tienen rows"))
//         }
//             iconRows.forEach(element=>{
//                 if(element !== current){
//                     no.push(element)
//                     element.classList.remove("c_rotateIcon")
//                 }else{
//                     si.push(element)
//                     element.classList.toggle("c_rotateIcon")
//                 }
//             })
//             resolve("yeah rotate!")
//     })
// }

function rotateRowIcon(current) {
    return new Promise((resolve, reject) => {
        let iconRows = [...rowsIcons]
        let iconRows_length = iconRows.length
        if(iconRows_length === 0 ){
            reject(new Error("No se tienen rows"))
            return
        }
        // for(let i = 0; i < iconRows_length; i++){
        //     iconRows[i].classList.toggle("c_rotateIcon", element === current)
        // }
        iconRows.forEach(element => {
            //se mejoro la logica para hacer los cambios  
            element !== current ? element.classList.remove("c_rotateIcon") : element.classList.toggle("c_rotateIcon");
           //se revisa la logia y se observa que es mas facil utilizar el toggle para poder hacer los cambios    !!Falta revisar la velocidad con la que realiza 
            //el segundo es el valor condicional de hacer el toggle en este caso tiene que ser 
            // element.classList.toggle("c_rotateIcon", element === current)
        })
        resolve("yeah rotate!")
    })
}


function selectMenuPromise(current) {
    return new Promise((resolve, reject) => {
        let items = [...Items]
        let si = []
        let no = []
        if (items.length === 0) {
            reject(new Error("No se tiene items"))
        }
        items.forEach(element => {
            if (element !== current) {
                no.push(element)
                element.classList.remove("seleccionando")
            } else {
                si.push(element)
                element.classList.toggle("seleccionando")
            }
        });
        resolve("yeah!")
    })

}

function hideNavSubmenusPromise(current) {
    return new Promise((resolve, reject) => {
        let subMenus = [...subMenusHTML]
        let si = []
        let no = []
        if (subMenus.length === 0) {
            reject(new console.Error("none"))
        }
        subMenus.forEach(element => {
            if (element !== current) {
                no.push(element)
                element.classList.remove("open")
            } else {
                si.push(element)
                element.classList.toggle("open")
            }
        });
        resolve("Okay")
    })

}


export async function revisarClase(e) {
    return new Promise((resoove, reject) => {
        let current = e.target
        if (usuarioImageInfo.classList.contains("mostrar")) {
            if (current.id === "subMenu") {
                usuarioImageInfo.classList.remove("mostrar")
            }

        }
        else {
            usuarioImageInfo.classList.add("mostrar")
        }

    })
}