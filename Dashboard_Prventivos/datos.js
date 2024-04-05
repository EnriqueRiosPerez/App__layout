


let DataCPK = [{
    Machine:"Aimex",
    Ok:15,
    Onplan:4
},
{
    Machine:"NXT",
    Ok:11,
    Onplan:10
},
{
    Machine:"NXT-2",
    Ok:98,
    Onplan:28
},
{
    Machine:"NXT-3",
    Ok:15,
    Onplan:4
},
{
    Machine:"Panasonic",
    Ok:12,
    Onplan:6
},
{
    Machine:"Reflow Oven",
    Ok:96,
    Onplan:0
},
{
    Machine:"Screen Printer",
    Ok:58,
    Onplan:17
}
]
let pickandplace = ["Aimex","NXT","NXT-2","NXT-3","Panasonic"]

let Title_1 = document.getElementById("Title_1")

document.addEventListener("DOMContentLoaded", () => {
    document.startViewTransition(()=>crearTable() )
    //Fill__Drops(Json__Dropss)
})



let copia = [...new Set (DataCPK)]
let total = copia.reduce((acumulador, element) =>{
    return element.Ok + element.Onplan + acumulador
}, 0)   

let tatal_Onplan = copia.reduce((acumulador, element )=>{
    return  + element.Onplan + acumulador
}, 0)
let tatal_Ok = copia.reduce((acumulador, element )=>{
    return  + element.Ok + acumulador
}, 0)
let array = []
array.push(tatal_Ok)
array.push(tatal_Onplan)
Title_1.innerHTML =  `All Equipment: ${total}`



//datos de los hornos 
let ReflowOven = copia.filter(element =>{
    if(element.Machine === "Reflow Oven"){
        return element
    }
})
console.log(ReflowOven)
let ReflowOven__Total = ReflowOven[0].Ok + ReflowOven[0].Onplan
let ReflowOven__Data = ["OK", "Onplan"]
let ReflowOven__Values = [ReflowOven[0].Ok, ReflowOven[0].Onplan]
console.log(ReflowOven__Data)
    console.log(ReflowOven__Values)


function crearTable(){
    new Chart(document.getElementById("Chart1"), {
        type: 'pie',
        data: {
          labels: ["Ok", "Onplan"], 
          datasets: [{
            label: "Machines",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: array
          }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                title: {
                    display: false,
                    text: `Total de equipos: ${total}`
                },
                tooltip:{
                    enabled: false
                },
                legend: {      //mostrar los valores por ensima
                    display: true,
                    position:"right"
                },
                datalabels:{
                    color:'#fff',
                    aling:'center',
                    formatter: (value, context)=>{
                        // console.log(value)
                        // console.log(context.chart)
                        const datapoints = context.chart.data.datasets[0].data
                        function totalSum(total, datapoint){
                            return total + datapoint
                        }
                        const totalvalue = datapoints.reduce(totalSum,0)
                        const percentajeValue = (value/ totalvalue* 100).toFixed(1)
                        return `${percentajeValue}%`  
                    }
    
                }
            }
        },
        plugins: [ ChartDataLabels ],
        // plugins: [ ChartDataLabels ], con esta parte podemos traer la cantidad de elementos por cada particion
    });

    new Chart(document.getElementById("Chart4"), {
        type: 'pie',
        data: {
          labels: ["Ok", "Onplan"], 
          datasets: [{
            label: "Machines",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: array
          }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                title: {
                    display: false,
                    text: `Total de equipos: ${total}`
                },
                tooltip:{
                    enabled: false
                },
                legend: {      //mostrar los valores por ensima
                    display: true,
                    position:"right"
                },
                datalabels:{
                    color:'#fff',
                    aling:'center',
                    formatter: (value, context)=>{
                        // console.log(value)
                        // console.log(context.chart)
                        const datapoints = context.chart.data.datasets[0].data
                        function totalSum(total, datapoint){
                            return total + datapoint
                        }
                        const totalvalue = datapoints.reduce(totalSum,0)
                        const percentajeValue = (value/ totalvalue* 100).toFixed(1)
                        return `${percentajeValue}%`  
                    }
    
                }
            }
        },
        plugins: [ ChartDataLabels ],
        // plugins: [ ChartDataLabels ], con esta parte podemos traer la cantidad de elementos por cada particion
    });
    
    new Chart(document.getElementById("Chart3"), {
        type: 'pie',
        data: {
          labels: ReflowOven__Data, 
          datasets: [{
            label: "Machines",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: ReflowOven__Values
          }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                title: {
                    display: false,
                    text: `Total de equipos: ${total}`
                },
                tooltip:{
                    enabled: false
                },
                legend: {      //mostrar los valores por ensima
                    display: true,
                    position:"right"
                },
                datalabels:{
                    color:'#fff',
                    aling:'center',
                    formatter: (value, context)=>{
                        // console.log(value)
                        // console.log(context.chart)
                        const datapoints = context.chart.data.datasets[0].data
                        function totalSum(total, datapoint){
                            return total + datapoint
                        }
                        const totalvalue = datapoints.reduce(totalSum,0)
                        const percentajeValue = (value/ totalvalue* 100).toFixed(1)
                        return `${percentajeValue}%`  
                    }
    
                }
            }
        },
        plugins: [ ChartDataLabels ],
        // plugins: [ ChartDataLabels ], con esta parte podemos traer la cantidad de elementos por cada particion
    });
    new Chart(document.getElementById("Chart2"), {
        type: 'pie',
        data: {
          labels: ["Ok", "Onplan"], 
          datasets: [{
            label: "Machines",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: array
          }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
                title: {
                    display: false,
                    text: `Total de equipos: ${total}`
                },
                tooltip:{
                    enabled: false
                },
                legend: {      //mostrar los valores por ensima
                    display: true,
                    position:"right"
                },
                datalabels:{
                    color:'#fff',
                    aling:'center',
                    formatter: (value, context)=>{
                        // console.log(value)
                        // console.log(context.chart)
                        const datapoints = context.chart.data.datasets[0].data
                        function totalSum(total, datapoint){
                            return total + datapoint
                        }
                        const totalvalue = datapoints.reduce(totalSum,0)
                        const percentajeValue = (value/ totalvalue* 100).toFixed(1)
                        return `${percentajeValue}%`  
                    }
    
                }
            }
        },
        plugins: [ ChartDataLabels ],
        // plugins: [ ChartDataLabels ], con esta parte podemos traer la cantidad de elementos por cada particion
    });
    
}


