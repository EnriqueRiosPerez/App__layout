let cards =[
    {"des":{
        "name":"Attrition",
        "sourseImg":"/Metricos/Metricos_Images/Dashboard__Attrition.png",
        "linkPage":"https://app.powerbi.com/reportEmbed?reportId=0e1b4560-5fc4-4bc5-82de-9f21e1ac959f&autoAuth=true&ctid=3f0e69e0-eb38-4eb2-b4ee-52919719d31e"
    }},
    {"des":{
        "name":"CentralWareHouse",
        "sourseImg":"/Metricos/Metricos_Images/Dashboard__CentralWareHouse.png",
        "linkPage":"https://app.powerbi.com/reportEmbed?reportId=749d4ef5-f0d1-4cec-9497-19dc46b2a691&autoAuth=true&ctid=3f0e69e0-eb38-4eb2-b4ee-52919719d31e"
    }},
    {"des":{
        "name":"DownTime",
        "sourseImg":"/Metricos/Metricos_Images/Dashboard__Dowtime.png",
        "linkPage":"https://app.powerbi.com/reportEmbed?reportId=749d4ef5-f0d1-4cec-9497-19dc46b2a691&autoAuth=true&ctid=3f0e69e0-eb38-4eb2-b4ee-52919719d31e"
    }},
    {"des":{
        "name":"EDM",
        "sourseImg":"/Metricos/Metricos_Images/Dashboard__EDM.png",
        "linkPage":"https://insighttwo.flex.com/t/LMXR/views/Tool_EDM_Supply/ByItem?:embed=y&amp;:showVizHome=no&amp;:host_url=https%3A%2F%2Finsighttwo.flex.com%2F&amp;:embed_code_version=3&amp;:tabs=no&amp;:toolbar=yes&amp;:showAppBanner=false&amp;:display_spinner=no&amp;:loadOrderID=0"
    }}
]
// if (parametro === "string") {
//     //console.log("soy un string");
//     informacion = JSON.parse(parametro);
// }
// else {
//     //console.log("soy un objeto")
//     informacion = parametro
// }
let section = document.getElementById("sectionCards")


const arr = cards.map(elemento => Object.entries(elemento));
let string =JSON.stringify(cards)
let cardsJson =JSON.parse(string)  
console.log(cardsJson)
window.addEventListener("load", ()=>{
    metodoForeach(cardsJson).then(res =>{
        section.insertAdjacentHTML("afterbegin",res)
    })



})

function metodoForeach(respuesta){



    return new Promise((resolve, reject)=>{
        if(respuesta.length === 0){
            reject(new Error(""))
        }
        palabra=""
        respuesta.forEach(elemento=>{

            palabra +=` <div class="Card">
            <section class="Card__Container__Images">
                <img class="Container__Images__Img" src="${elemento.des.sourseImg}" alt="" srcset="">
            </section>
            <section class="Card__Container__Info">
                <p>${elemento.des.name}</p>

            </section>
            <section class="Card__Container__Buttons">
                <button class="Container__Buttons__Button" type="button">Open </button>
            </section> 


        </div>`
        })
        resolve(palabra)

    })
}





