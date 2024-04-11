const btn = document.getElementById('b_downtime')
const btn_cerrar = document.getElementById('btn_cerrar')
let modal = document.getElementById('modal_1')



function down_time(){
    alert("boton pra el downtime")
}

// function mostrar_modal() {
    
// }
// function cerrar_modal() {
//     modal.close()
// }


btn.addEventListener("click", ()=>{
    modal.showModal()
    modal.classList.add('active')

})

btn_cerrar.addEventListener("click", async ()=>{
    
    modal.classList.remove('active')

    setTimeout(() => modal.close(), 200)
    // modal.close()
})

