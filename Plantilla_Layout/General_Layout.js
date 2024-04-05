let aside = document.getElementById("aside")

let button_aside = document.getElementById("button_aside")

button_aside.addEventListener("click", ()=>{
    console.log("hola")
    console.log(aside)
    aside.classList.toggle("button_display")
})