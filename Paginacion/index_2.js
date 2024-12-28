import {Pager} from "./Pager.js"
// import {Buttons} from "./Buttons.js"
let Alldata = []




let Previus= document.getElementById("Previus")
let Next= document.getElementById("Next")
let Pager_Numbers = document.getElementById("Pager")

let QTY_Items = document.getElementById("Pager_Value")
console.log()
let PagerTabla = new Pager(QTY_Items.value,1, Previus, Next, Pager_Numbers)

QTY_Items.addEventListener("change", Edit_ElementsPerPage)
async function Edit_ElementsPerPage(e) {
    console.log(e.target.value)
    //  = e.target.value
    PagerTabla.SetElementoPerPage(e.target.value)
}

document.addEventListener("DOMContentLoaded" , async ()=>{
    
    Alldata =  await GetInfo()
    PagerTabla.SetData(Alldata)
    console.log(await PagerTabla.Inicialiced())
    // Init()
})
async function Init(){
    
    // PagerTabla.SetElementoPerPage(100)
    PagerTabla.ModifyPager()
    console.log(PagerTabla.TotalPages())
    console.log(await PagerTabla.SliceData(1))
}

Next.addEventListener("click" , async(e)=>{
    // console.log(PagerTabla.TotalPages())
    console.log( await PagerTabla.Control_Butons(e))
})


Previus.addEventListener("click" , async(e)=>{
    // console.log(PagerTabla.TotalPages())
    console.log(await PagerTabla.Control_Butons(e))
})




async function GetInfo(params) {
    let direction = 'http://gdjnt280.americas.ad.flextronics.com:90/get_Data.aspx?type=User_All'
    let json = await fetch(direction)
    let data = await json.json() 
    return data
}