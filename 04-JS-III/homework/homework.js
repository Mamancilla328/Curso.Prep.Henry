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
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
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
