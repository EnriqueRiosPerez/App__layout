let subMenusHTML = document.getElementsByClassName("Menu__Item__Submenu")
let Items = document.getElementsByClassName("Menu__Item__Title")
let Rows = document.getElementsByClassName("fa-caret-right")
let usuarioImageInfo = document.getElementById("subMenu")
let aside__Hiden = document.getElementById("cerrarNav")
let Menu__Item__Title__sub = document.getElementsByClassName("Menu__Item__Title__sub")
let Nav__Header__TitleContainer = document.getElementsByClassName("Nav__Header__TitleContainer")
let imgUser = document.getElementById("headIamgen_IMG")
let falseBackground = document.getElementById("subMenu")

let current

let nav= document.getElementById("Ul_Menu")
let li_Elements = nav.querySelectorAll("li.Menu__Item")
li_Elements.forEach((li) => {
    li.addEventListener('click', imprimmir_Elemento);
});
async function imprimmir_Elemento(e){
    let current = e.target
    console.log(current)
    let titulo= current.querySelectorAll("span.Menu__Item__Title")
    let submenu = current.querySelectorAll("ul.Menu__Item__Submenu")
    
    // console.time("Ocultar")
    // hideNavSubmenus(submenu[0])
    // selectMenu(titulo[0])
    // console.timeEnd("Ocultar")

    console.time("Ocultar2")
    hideNavSubmenusPromise(submenu[0])
    selectMenuPromise(titulo[0])
    console.timeEnd("Ocultar2")

}
function selectMenuPromise(current){
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
    return new Promise((resolve, reject)=>{
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

imgUser.addEventListener("click", async (e)=>{
   
    revisarClase(e)
})
falseBackground.addEventListener("click", async(e)=>{
    
  
    revisarClase(e)
})

function aside__Hide(current){
    let items = [...Menu__Item__Title__sub]
    let title = [...Nav__Header__TitleContainer]
    let all = [...items, ...title]
    console.log(all)
 
    all.forEach(element =>{
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




function revisarClase(e) {
    let current = e.target
    
   
        if (usuarioImageInfo.classList.contains("mostrar")) {
            if (current.id==="subMenu"){
                usuarioImageInfo.classList.remove("mostrar")
            }
           
        }
        else {
            usuarioImageInfo.classList.add("mostrar")
        }
   
    
    //console.log(aside.id)
}