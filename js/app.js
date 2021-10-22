    var correctas = 0;

    function incisos(numeritoAleatorio) {
      var posibilidades = "";
      for( var i = 0; i < arregloDeRespuestas[numeritoAleatorio].length; i ++){
        posibilidades += '<input type="radio" name = "preguntitas'+numeritoAleatorio+'" value= "'+i+'"><label>'+ arregloDeRespuestas[numeritoAleatorio][i] + '</label><br>';
      }
      return posibilidades;
    }

    var arregloDePreguntas = [
    '1.	¿Los circuitos de una computadora se construyen mediante?', '2.	¿La lógica de la computadora se basa en las reglas de?', '3. ¿Quién desarrolló el Álgebra Booleana?', '4. El operador NOT, ¿Para cuántas variables funciona?', '5. ¿Quién fue el primero en aplicar el álgebra de Boole en el diseño de circuitos?', '6. ¿Qué compuerta lógica es?', '7. ¿A qué compuerta lógica pertenece la siguiente tabla de verdad?', '8. ¿Que son las compuertas lógicas?', '9. ¿Quién propuso el método del mapa de Karnaugh?', '10.	¿A qué compuerta lógica pertenece la siguiente expresión?', '11.	¿Cuáles son las compuertas básicas?', '12. ¿Con qué componentes se encuentra implementada una compuerta lógica?', '13. Característica principal de una compuerta lógica', '14. ¿De qué compuerta hablamos cuando de inversor?', '15. La función OR es:', '16. Repasando el Álgebra de Boole, 1+1=', '17. La función lógica que nos da 1 cuando el número de unos en sus entradas es impar es:', '18. La expresión que relaciona las variables de entrada mediante producto, suma y negación, se llama:', '19. Si quieres diseñar un circuito digital utilizando puertas lógicas NAND, necesitarás comprar circuitos integrados:', '20. Los circuitos integrados deben alimentarse con voltajes de:', '21. La tabla de verdad representa...', '22. Un valor X en la tabla de verdad ...', '23. En un mapa de Karnaugh se puede hacer grupos de ...', '24. La función AND es:', '25. La función NOT es:'];

    var imagenes = new Array();
    imagenes[0] = "../img/bg-img/c3.jpg";
    imagenes[1] = "../img/ITEMS/circlet_lg.png";
    imagenes[2] = "../img/ITEMS/clarity_lg.png";
    imagenes[3] = "../img/ITEMS/mantle_lg.png";
    imagenes[4] = "../img/ITEMS/boots_lg.png";
    imagenes[5] = "../img/ITEMS/slippers_lg.png";
    imagenes[6] = "../img/ITEMS/recipe_lg.png";
    imagenes[7] = "../img/ITEMS/gloves.png";

    var arregloDeRespuestas = [
    ['a. La lógica combinatoria y secuencial', 'b. La lógica relacional', 'c. La lógica conceptual.', 'd. La lógica natural. 	'],['a. La lógica Booleana', 'b. El álgebra Booleana', 'c. Las tablas de verdad','d. Leyes de De Morgan'],['a. Bill Gates', 'b. Augustus De Morgan', 'c. George Boole','d. Alan Turing'],['a. Más de 2 variables', 'b. Es un operador unario', 'c. Es un operador binario','d. No es un operador valido'],['a. Maurice Karnaugh', 'b. George Boole','c. Claude Shannon','d. John Von Neumann'],['a. OR', 'b. NOT','c. AND','d. XNOT'],['a. XOR', 'b. NOT','c. AND','d. NAND'],['a. Dispositivos que son para la limpieza de equipo de computo', 'b. Dispositivos que ayudan a una función mas rápida de un ordenador','c. Son circuitos electrónicos diseñados para obtener resultados booleanos','d. Dispositivos de almacenamiento'],['a. Maurice Karnaugh', 'b. Edward W. Veitch','c. Charles Babbage','d. Herman Hollerith'],['a. XOR', 'b. XNOR','c. OR','d. AND'],['a. AND, OR, Inversor','b. XOR, NAND, NOR', 'c. AND, NAND, NOT', 'd. XOR, NOT, AND'],['a. Resistencias y Capacitores', 'b. Transistores y Capacitores', 'c. Transistores y Resistencias', 'd. Transistores y Diodos'],['a. Tiene mucha capacidad', 'b. Tiene una forma alargada', 'c. Tiene una tabla de verdad', 'd. Es microscopico'],['a. NAND', 'b. NOR', 'c. OR', 'd. NOT'],['a. f= a*b', 'b. f= a+b', 'c. f= a/b', 'd. f= a-b'],['a. 0', 'b. 1', 'c. 2', 'd. 3'],['a. Una puerta NAND', 'b. Una puerta NOR', 'c. Una puerta OR Exclusiva', 'd. Una puerta AND'],['a. Función lógica', 'b. Expresión matemática', 'c. Tabla de verdad', 'd. Polinomio booleano'],['a. 7404', 'b. 7802', 'c. 7400', 'd. 7800'],['a. 5 v', 'b. 12 v', 'c. 7 v', 'd. No deben alimentarse'],['a. Para simplificar las funciones lógicas y utilizar el menor número de puertas lógicas', 'b. Para dibujar los circuitos lógicos una vez simplificados', 'c. Para comprobar el voltaje de salida', 'd. El comportamiento de la salida del sistema digital para todas las combinaciones de las variables de entrada'],['a. Debe ponerse 0 para asegurarnos que no funcione el sistema en esas condiciones', 'b. Indica un error en la tabla de verdad', ' c. Indica que puede tomarse el valor 0 o 1 según interese a la hora de simplificar', 'd. Indica la salida de la tabla'], ['a. 1, 2, 4, 8 y 16 unos', 'b. 1, 2, 4, 6 y 8 unos', 'c. 1, 2, 4 y unos', 'd. el máximo número de unos' ],['a. f= a*b', 'b. f= a+b', 'c. f= a/b', 'd. f= a-b'], ['a. f= a*b', 'b. f= a+b', 'c. f= a/b', 'd. f= a´']];

    var arregloDeIncisosRespuestasCorrectas= ['0', '1', '2', '1', '2','2', '1', '2', '1', '0', '0', '3', '2', '3', '1', '1', '2', '0', '2', '0', '3', '2', '0', '0', '3'];

    /*Validación de preguntas aleatorias no repetidas*/
    var cantidadNumeros = arregloDePreguntas.length;
    var arregloDeAleatorios = []
    while(arregloDeAleatorios.length < cantidadNumeros ){
      var numeroAleatorio = Math.floor(Math.random()*cantidadNumeros);
      var existe = false;
      for(var i=0;i<arregloDeAleatorios.length;i++){
        if(arregloDeAleatorios [i] == numeroAleatorio){
          existe = true;
          break;
        }
      }
      if(!existe){
        arregloDeAleatorios[arregloDeAleatorios.length] = numeroAleatorio;
      }

    }

  /*document.write("números aleatorios : " + arregloDeAleatorios);*/

    var aleatorio1 = arregloDeAleatorios[0];
    var aleatorio2 = arregloDeAleatorios[1];
    var aleatorio3 = arregloDeAleatorios[2];
    var aleatorio4 = arregloDeAleatorios[3];
    var aleatorio5 = arregloDeAleatorios[4];
    var aleatorio6 = arregloDeAleatorios[5];
    var aleatorio7 = arregloDeAleatorios[6];
    var aleatorio8 = arregloDeAleatorios[7];
    var aleatorio9 = arregloDeAleatorios[8];
    var aleatorio10 = arregloDeAleatorios[9];

    document.getElementById('pregunta1').innerHTML = arregloDePreguntas[aleatorio1];
    document.getElementById('respuestas1').innerHTML = incisos(aleatorio1);

    document.getElementById('pregunta2').innerHTML = arregloDePreguntas[aleatorio2];
    document.getElementById('respuestas2').innerHTML = incisos(aleatorio2);

    document.getElementById('pregunta3').innerHTML = arregloDePreguntas[aleatorio3];
    document.getElementById('respuestas3').innerHTML = incisos(aleatorio3);

    document.getElementById('pregunta4').innerHTML = arregloDePreguntas[aleatorio4];
    document.getElementById('respuestas4').innerHTML = incisos(aleatorio4);

    document.getElementById('pregunta5').innerHTML = arregloDePreguntas[aleatorio5];
    document.getElementById('respuestas5').innerHTML = incisos(aleatorio5);

    document.getElementById('pregunta6').innerHTML = arregloDePreguntas[aleatorio6];
    document.getElementById('respuestas6').innerHTML = incisos(aleatorio6);

    document.getElementById('pregunta7').innerHTML = arregloDePreguntas[aleatorio7];
    document.getElementById('respuestas7').innerHTML = incisos(aleatorio7);

    document.getElementById('pregunta8').innerHTML = arregloDePreguntas[aleatorio8];
    document.getElementById('respuestas8').innerHTML = incisos(aleatorio8);

    document.getElementById('pregunta9').innerHTML = arregloDePreguntas[aleatorio9];
    document.getElementById('respuestas9').innerHTML = incisos(aleatorio9);

    document.getElementById('pregunta10').innerHTML = arregloDePreguntas[aleatorio10];
    document.getElementById('respuestas10').innerHTML = incisos(aleatorio10);

    var correctas = 0;

    function calificacion(arregloAleatorios){
      for (var i = 0; i < arregloAleatorios.length; i++) {
        var respuesta = $("input[name=preguntitas"+arregloAleatorios[i]+"]:checked").val();
        if (respuesta == arregloDeIncisosRespuestasCorrectas[arregloAleatorios[i]]){
          correctas++;
        }
      }
      alert('tu calificación es:'+correctas);
      correctas =0 ;
    }

    function comprobar(){
      calificacion(arregloDeAleatorios);

    }
