
// http://gdjnt280.americas.ad.flextronics.com:90/Pages/Configuration/Administrator_User_V2.aspx?Type=All

import {Control_Butons, SliceData,TotalPages,modifyPager} from "./paginacion.js" 

let Previus= document.getElementById("Previus")
let Next= document.getElementById("Next")
let Pager = document.getElementById("Pager")

let Pager_Value = document.getElementById("Pager_Value")
let botones_Paginacion = Array.from(document.querySelectorAll("[name='paginacion']"))

console.log(botones_Paginacion)
let  elementosPorPagina = 100
let Base_data = []
let pageActual = 1
document.addEventListener("DOMContentLoaded", () => {
    Function_Get_Info_All()
    Set_Buttons(botones_Paginacion,pageActual,Previus)
   
})
Pager_Value.addEventListener("change", Edit_ElementsPerPage)
async function Edit_ElementsPerPage(e) {
    console.log(e.target.value)
    elementosPorPagina = e.target.value
    Function_Get_Info_All()
    // console.log(e.target.selectedIndex.value)
}

function Set_Buttons(array, actual,b_Previus){
    array.forEach(e =>{
        e.addEventListener("click" ,Buttons)
    })
    if (actual === 1) {
        b_Previus.setAttribute("disabled", true);
    } else {
        b_Previus.removeAttribute("disabled");
    }
    
}

async function Buttons(e){
    console.log(e.target)
    let jjj = await Control_Butons(e.target,pageActual, Base_data, elementosPorPagina,Pager)
    console.log(jjj)
    pageActual =jjj.Actual
    console.log(jjj.data)

}




async function Function_Get_Info_All() {
    // let direction = window.location.origin + window.location.pathname + "?Type=All"
    let direction = 'http://gdjnt280.americas.ad.flextronics.com:90/get_Data.aspx?type=User_All'
    let json = await fetch(direction)
    let data = await json.json() 
    Base_data=data
    console.log(Base_data)   
     let slide_data = await SliceData(pageActual,Base_data,elementosPorPagina)
    console.log(slide_data)
    let total = await TotalPages(Base_data,elementosPorPagina)
    modifyPager(Pager,pageActual,total)
    console.log(`${pageActual*slide_data.length} of ${Base_data.length}`)

}
