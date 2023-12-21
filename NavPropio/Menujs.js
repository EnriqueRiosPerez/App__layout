let subMenusHTML = document.getElementsByClassName("Menu__Item__Submenu")
let Items = document.getElementsByClassName("Menu__Item__Title")
let Rows = document.getElementsByClassName("fa-caret-right")
let usuarioImageInfo = document.getElementById("subMenu")
let aside__Hiden = document.getElementById("cerrarNav")
let Menu__Item__Title__sub = document.getElementsByClassName("Menu__Item__Title__sub")


console.log(Rows.length)
let current
document.addEventListener('click', function (e) {
    current = e.target
    let i =0 
    while (true) {
        if (current.id=== "cerrarNav"){
            console.log("se presiono el boton del aside")
            aside__Hide(current)

            // current.classList.toggle("aside__Hide")
            break
        }
        if (current.id === "headIamgen_IMG") {
            console.log("entro al image");
            revisarClase()
            break
        }
        if (current.tagName == "SPAN") {

            if (current.classList.contains("Menu__Item__Title")) {
                selectMenu(current)
                let subMenu_Current = current.parentNode.childNodes[3]
                hideNavSubmenus(subMenu_Current)
                rotateRow(current.childNodes[3])
                break
            }
        }
        else {
            hideNavSubmenus(current)
            selectMenu(current)
            rotateRow(current.childNodes[3])
            // break
        }
        if(current.tagName === "BODY"){
            usuarioImageInfo.classList.remove("mostrar")
            break
        }
        else{
            current = current.parentElement
            console.log("current")
            console.log(current)
        }
    }



})


function aside__Hide(current){
    let items = [...Menu__Item__Title__sub]
    let si=[]
    let no = []
    items.forEach(element =>{
        element.classList.toggle("aside__Hiden")
    })
}


function selectMenu(current){
    let items = [...Items]
    let si = []
    let no = []
    items.forEach(element => {
        if (element !== current) {
            no.push(element)
            element.classList.remove("seleccionando")
        } else {
            si.push(element)
            element.classList.toggle("seleccionando")
        }
    });
}
function rotateRow(current){
    let rows = [...Rows]
    let si = []
    let no = []
    rows.forEach(element => {
        if (element !== current) {
            no.push(element)
            // element.classList.remove("fa-rotate-90")
            element.classList.remove("c_rotateIcon")
        } else {
            si.push(element)
            // element.classList.toggle("fa-rotate-90")
            element.classList.toggle("c_rotateIcon")
        }
    });
}
function hideNavSubmenus(current) {
    let subMenus = [...subMenusHTML]
    let si = []
    let no = []
    subMenus.forEach(element => {
        if (element !== current) {
            no.push(element)
            element.classList.remove("open")
        } else {
            si.push(element)
            element.classList.toggle("open")
        }
    });
}

function revisarClase() {

    if (usuarioImageInfo.classList.contains("mostrar")) {
        usuarioImageInfo.classList.remove("mostrar")
    }
    else {
        usuarioImageInfo.classList.add("mostrar")
    }
    //console.log(aside.id)
}