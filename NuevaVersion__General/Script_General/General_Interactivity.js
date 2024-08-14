
// import { ShowItemNav, revisarClase, ShowSubItemNav } from "./General_interactivity_module.js"
import { ShowItemNav, revisarClase, ShowSubItemNav } from "./General_Interactivity_Module.js"
import { Template__Nav__HTML, Function_Create_Nav } from "./General_Template_Nav_Menu.js"

import { Template__User_Menu__HTLM, Function_Create_UserMenu } from "./General_Template_User_Menu.js"

//variables del menu
let nav = document.getElementById("Nav__Main")
//variables del menu del usuario
let userMenu = document.getElementById("User_Menu")

// variables para mostrar menu de usuario
// let imgUser = document.getElementById("headIamgen_IMG")
//lo agregue por de mientras
let imgUser = document.getElementById("Show_User_Menu")

let falseBackground = document.getElementById("subMenu")
// variables para mostrar el submenu 
let side_nav 
let side_nav_Li_Elements 

//varibles del sub sub menu
let sub_side_nav_Li_Elements


//funciones de creacion del menu
window.addEventListener("load",async () => {
    Function_Create_Nav(Template__Nav__HTML, nav).then(res => {
        side_nav = document.getElementById("Ul_Menu")
        side_nav_Li_Elements = side_nav.querySelectorAll("li.Menu__Item")
        // agregar eventos a los elementos de side bar 
        side_nav_Li_Elements.forEach(li => {
            li.addEventListener("click", ShowItemNav);
        })
        sub_side_nav_Li_Elements = side_nav.querySelectorAll("li.Menu__Item__Submenu")
        sub_side_nav_Li_Elements.forEach(li => {
            li.addEventListener("click", ShowSubItemNav);
        })

    })

    Function_Create_UserMenu(Template__User_Menu__HTLM, userMenu).then(res => {
        // metodos para mostrar 
        imgUser.addEventListener("click", async (e) => {
            revisarClase(e)
        })
        falseBackground.addEventListener("click", async (e) => {
            revisarClase(e)
        })
    })
    //nav.insertAdjacentHTML("afterbegin", Template__Nav__HTML)
})







