let total_Elements = 0
export async function SliceData(pagina, useData,elementosPorPagina) {
    
    const corteDeInicio = (pagina- 1) * elementosPorPagina;
    const corteDeFinal = corteDeInicio + elementosPorPagina;
    let dd = useData.slice(corteDeInicio, corteDeFinal);
    total_Elements += dd.length
    return dd
}
export async function TotalPages(data,elementosPorPagina) {
    return Math.ceil(data.length / elementosPorPagina);
}
export function modifyPager(element,actual, total){
    element.textContent = `${actual} of ${total}`
}


export async function Control_Butons(actual, pageActual, Base_data, elementosPorPagina, pager){
    let ea = true
    console.log(actual)
    // console.log(Base_data)
    let total_pages = await TotalPages(Base_data,elementosPorPagina)
    
    if(actual.id === "Next"){
        pageActual +=1
        if(pageActual === total_pages){
            Next.setAttribute("disabled",true)
        }else{  
            Next.removeAttribute("disabled")
            if(pageActual>1){
                Previus.removeAttribute("disabled");    
            }
            // console.log(`${total_Elements} o f ${Base_data.length}`)
        }        
    }
    else{
        pageActual -=1
        ea = false
        if (pageActual === 1) {
            Previus.setAttribute("disabled", true);
        } else {
            Previus.removeAttribute("disabled");
            if(pageActual<total_pages){
                Next.removeAttribute("disabled");    
            }
        }
        
    }
   
    let data = await SliceData(pageActual,Base_data,elementosPorPagina)
    
    if(ea===false){
        console.log("eaeaea")
        // console.log(total_Elements)
        total_Elements = total_Elements - 2*data.length
    }
    console.log(`${total_Elements} o f ${Base_data.length}`)
    

    modifyPager(pager,pageActual,total_pages)
    // console.log()
    return {"Actual":pageActual, "data":data} 
    
}

