let cantMillas = Number(prompt("Introduce tus distancia en millas"));

function calcDist(milla) {
  let calcular = milla * 1.609;
  calcular = calcular.toFixed(1);
  alert(`Aproximadamente son ${calcular} kilometros`);
}

calcDist(cantMillas);
