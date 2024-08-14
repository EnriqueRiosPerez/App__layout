


let subMenusHTML = document.getElementsByClassName("Menu__Item__Submenu")
let Items = document.getElementsByClassName("Menu__Item__Title")
let usuarioImageInfo = document.getElementById("subMenu")
let rowsIcons = document.getElementsByClassName("Menu__Item__Title__sub")


//variables del submenu
let sub_subMenusHTML = document.getElementsByClassName("Menu__Item__Submenu__Submenu")
let sub_rowsIcons = document.getElementsByClassName("Menu__Item__Title__Icon__Submenu")

export async function ShowItemNav(e) {
    let current = e.target
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
        if (!current) {
            return 
        } else {

        let iconRows = [...rowsIcons]
        iconRows.forEach(element => {
            element !== current ? element.classList.remove("c_rotateIcon") : element.classList.toggle("c_rotateIcon");

        })
        resolve("yeah rotate!")
        }
    })
}


function hideNavSubmenusPromise(current) {
    return new Promise((resolve, reject) => {
        if (!current) {
            //reject(new Error("Submenu element not found"))
            return
        } else {

        cerrarTodoSub()
        let subMenus = [...subMenusHTML]
        subMenus.forEach(element => {
            if (element !== current) {
                element.classList.remove("open")
            } else {
                element.classList.toggle("open")
            }
        })
        resolve("Okay");
        }
    })
}

function selectMenuPromise(current) {
    return new Promise((resolve, reject) => {
        let items = [...Items]
        if (!current) {
            //reject(new Error("Element no select"))
        } else {

        items.forEach(element => {
            if (element !== current) {
                element.classList.remove("seleccionando")
            } else {
                element.classList.toggle("seleccionando")
            }
        });
        resolve("Okay")
        }
    })
}


export async function ShowSubItemNav(e) {
    let current = e.target
    let submenu = current.querySelectorAll("ul.Menu__Item__Submenu__Submenu")
    let rowIcon2 = current.querySelectorAll("span.Menu__Item__Title__Icon__Submenu")
    hideNavSubmenusPromise2(submenu[0])
    rotateRowIcon2(rowIcon2[0])
}
function hideNavSubmenusPromise2(current) {
    return new Promise((resolve, reject) => {
        // console.log(current)
        let subMenus = [...sub_subMenusHTML]
        if (!current) {
            // reject(new Error("Submenu element not found"))
            return

        }
        else {
            subMenus.forEach(element => {
                if (element !== current) {
                    element.classList.remove("open")
                } else {
                    // element.classList.toggle("open")
                    element.classList.toggle("open")
                }
            })
            resolve("Okay");
        }

    })
}
function rotateRowIcon2(current) {


    return new Promise((resolve, reject) => {
        let iconRows = [...sub_rowsIcons]
        iconRows.forEach(element => {
            element !== current ? element.classList.remove("c_rotateIcon") : element.classList.toggle("c_rotateIcon");

        })
        resolve("yeah rotate!")
    })
}

function cerrarTodoSub() {

    return new Promise((resolve, reject) => {
        let subMenus = [...sub_subMenusHTML]
        let iconRows = [...sub_rowsIcons]
        subMenus.forEach(element => {
            element.classList.remove("open")
        })

        iconRows.forEach(element => {
            element.classList.remove("c_rotateIcon")

        })
        resolve("Okay");
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
        resolve();
    })
}

