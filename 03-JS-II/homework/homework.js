// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x===y) {

    return(x)

  } else if (x<y) {

    return(y)
     
  }else {

    return(x)

  }
}

function saludo(idioma) {
  
  if (idioma==='aleman') {

    return ('Guten Tag!')

  }
  if (idioma==='mandarin') {

    return ('Ni Hao!')

  }else if (idioma==='ingles') {

    return ('Hello!')

  }else {

    return ('Hola!')

  }

}

function esDiezOCinco(numero) {
    

    if (numero===10 || numero===5) {

      return (true)

    } else {

      return (false)

    }
}

function estaEnRango(numero) {
 
  if (20<numero&&numero<50) {

    return(true)

  }else {

    return (false)
  }
}

function esEntero(numero) {

  if (numero===Math.floor(numero)) {

    return (true)

  } else {

    return(false)

  }
}

function fizzBuzz(numero) {
  
  if (( numero % 3 === 0 ) && ( numero % 5 === 0 )) {

    return 'fizzbuzz'
  }

  if ( numero % 3 === 0) {

    return 'fizz'

  }  else if ( numero % 5 === 0) {

    return 'buzz'

  }else {

    return (numero)
  }
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
 if( numero < 2) return false;
  if(numero === 2) return true;
  for(var i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }
  return true;
 

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
