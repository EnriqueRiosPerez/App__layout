import {ShowItemNav, revisarClase, hola} from "./NewVersion_interactive.js"
// variables para mostrar menu de usuario
let imgUser = document.getElementById("headIamgen_IMG")
let falseBackground = document.getElementById("subMenu")
// variables para mostrar el submenu 
let side_nav = document.getElementById("Ul_Menu")
let side_nav_Li_Elements = side_nav.querySelectorAll("li.Menu__Item")
console.log(hola)

// agregar eventos a los elementos de side bar 
side_nav_Li_Elements.forEach(li=>{
    li.addEventListener("click", ShowItemNav);
})
// metodos para mostrar 
imgUser.addEventListener("click", async (e)=>{
    revisarClase(e)
})
falseBackground.addEventListener("click", async(e)=>{
    revisarClase(e)
})


// imgUser.addEventListener("click", revisarClase(e))
// falseBackground.addEventListener("click", revisarClase(e))