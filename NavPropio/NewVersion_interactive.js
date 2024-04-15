


let subMenusHTML = document.getElementsByClassName("Menu__Item__Submenu")
let Items = document.getElementsByClassName("Menu__Item__Title")
let usuarioImageInfo = document.getElementById("subMenu")
let rowsIcons = document.getElementsByClassName("Menu__Item__Title__sub")


export async function ShowItemNav(e) {
    let current = e.target
    console.log(current)
    //estos son los elemntos que son seleccionados
    let title = current.querySelectorAll("span.Menu__Item__Title")

    let submenu = current.querySelectorAll("ul.Menu__Item__Submenu")
    let rowIcon = current.querySelectorAll("span.Menu__Item__Title__sub")

    console.time("Ocultar2")
    hideNavSubmenusPromise(submenu[0])
    selectMenuPromise(title[0])
    rotateRowIcon(rowIcon[0])
    console.timeEnd("Ocultar2")
}
function rotateRowIcon(current) {
    return new Promise((resolve, reject) => {
        let iconRows = [...rowsIcons]
        let iconRows_length = iconRows.length
        if (iconRows_length === 0) {
            reject(new Error("No se tienen rows"))
            return
        }
        iconRows.forEach(element => {
            
            element !== current ? element.classList.remove("c_rotateIcon") : element.classList.toggle("c_rotateIcon");
           
        })
        resolve("yeah rotate!")
    })
}


function hideNavSubmenusPromise(current) {
    return new Promise((resolve, reject) => {
        if (!current) {reject(new Error("Submenu element not found"))
         return
        }
        let subMenus = [...subMenusHTML]
        subMenus.forEach(element => {
            if (element !== current) {
                element.classList.remove("open")
            } else {
                element.classList.toggle("open")
            }
        })
        resolve("Okay");
    })
}

function selectMenuPromise(current) {
    return new Promise((resolve, reject) => {
        let items = [...Items]
        if (!current) {
            reject(new Error("Element no select"))
        }
        items.forEach(element => {
            if (element !== current) {
                element.classList.remove("seleccionando")
            } else {
                element.classList.toggle("seleccionando")
            }
        });
        resolve("Okay")
    })
}

export async function revisarClase(e) {
    return new Promise((resolve, reject) => {
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