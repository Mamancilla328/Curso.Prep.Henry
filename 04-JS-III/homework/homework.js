// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {

return array[0]

}

function devolverUltimoElemento(array) {

return array [array.length - 1]

}

function obtenerLargoDelArray(array) {

return (array.length)

}

function incrementarPorUno(array) {

  var nuevoArray = []

for (var i = 0; i< array.length; i++) {
  
  nuevoArray[i] = array[i] +1

}

return nuevoArray

}

function agregarItemAlFinalDelArray(array, elemento) {
  
 array.push(elemento) ;

 return array

}

function agregarItemAlComienzoDelArray(array, elemento) {

array.unshift(elemento) ;

return array

}

function dePalabrasAFrase(palabras) {
 
  return palabras.join(' ')
}

function arrayContiene(array, elemento) {

 if (array.includes(elemento)){

  return true

 }else {

  return false
 }
}

function agregarNumeros(numeros) {

  var reduce = (accumulator, currentValue) => accumulator + currentValue
  
  return numeros.reduce(reduce)

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
   var reduce = (accumulator, currentValue) => accumulator + currentValue

  
  return ( resultadosTest.reduce(reduce) / resultadosTest.length )


}

function numeroMasGrande(numeros) {


var Max = Math.max(...numeros) ;

return Max

}



function multiplicarArgumentos() {
  

  if ( arguments.length < 1 ) 

    return  0 ;
   
  var numero = 1

  for ( i = 0 ; i<arguments.length ; i++ ) {
    
    numero = (numero * arguments[i])

  }
 return numero
  
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
