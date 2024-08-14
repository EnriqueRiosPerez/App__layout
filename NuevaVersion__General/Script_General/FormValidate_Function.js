//expresiones regulares que se pueden utilizar en un formulario
const expressions = {
    Name: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/, //nombre con espacios y acentos 
    Alias: /^[a-zA-Z]+$/,  //letras mayusculas minisculas sin espacion ni caracteres especiales 
    Workday: /^[0-9]+$/,   //solo numeros
    Email: /^(|[a-zA-Z0-9._%+-]+@flex\.com)+$/, //emain @flex.com y puede estar vacio
    Phone: /^(|[0-9])+$/ // solo numeros y puede estar vacio 
}
//exporta la respuesta que tiene al evaluar una cierta expresion sobre un elemento 
//este recibe el name del elemento y el  valor que este tiene
export function validarRegex(quien, que) {

    let comando = `expressions["${quien}"].test("${que}")`
    let respuesta = eval(comando)
  
    return eval(comando)
}
