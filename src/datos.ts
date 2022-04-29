let btnEnv = document.getElementById("btnEnviar");
rotulo1.innerHTML = "Igrese tiempo de la vuelta 1";
rotulo2.innerHTML = "Igrese tiempo de la vuelta 2";
rotulo3.innerHTML = "Igrese tiempo de la vuelta 3";
rotulo4.innerHTML = "Igrese tiempo de la vuelta 4";

btnEnv.addEventListener("click", () => {
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);
  let tiempoTotal = vuelta1 + vuelta2 + vuelta3 + vuelta4;

  console.log("El tiempo total es:", tiempoTotal);
  console.log("El promedio de vuelta es:", tiempoTotal / 4);
  
  document.write("El tiempo total es:"+ tiempoTotal);
  
  document.write("El promedio de vuelta es:"+ tiempoTotal/4);

});
