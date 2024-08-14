
export async function busquedaArraysObjetos(ArrayDeArrays) {
    //console.time("Busqueda")
    //console.log(ArrayDeArrays)
    let AllObjects = [].concat(...ArrayDeArrays)
    let frecuencia = {}
    //console.log(AllObjects)
    for (let i = 0; i < AllObjects.length; i++) {
        let objeto = AllObjects[i]
        let cadenajson = JSON.stringify(objeto)
        frecuencia[cadenajson] = (frecuencia[cadenajson] || 0) + 1
    }
    let repetidos = Object.keys(frecuencia).filter(element => {
        return frecuencia[element] === ArrayDeArrays.length
    })

    let objetosRepetidos = repetidos.map(e => {
        return JSON.parse(e)
    })

    //console.timeEnd("Busqueda")
    return objetosRepetidos

}




//export async funciton busquedaConIntersection(ArrayDeArrays){
//    let AllObject = [].concat(...ArrayDeArrays)
//}