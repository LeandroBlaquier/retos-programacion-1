let num1 = Number(prompt("Ingresa un numero mayor a 1000"));
let num2 = Number(prompt("Ingresa un numero menor a 100"));
let res = num1 / num2;
res = res.toFixed(2);
res = parseFloat(res);

alert(`${num2} cabe ${res} veces en ${num1}`);
