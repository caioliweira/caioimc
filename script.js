function imcalc() {
  const valor1 = document.getElementById('valor1');
  const valor2 = document.getElementById('valor2');
  const n1 = Number(valor1.value);
  const n2 = Number(valor2.value);
  const num1 = n1 * n1;
  const num2 = n2 / num1;

  if (num2 <= 16.9) { let comota = 'Muito abaixo do peso'; } else if (num2 >= 17 && num2 <= 18.4) { comota = 'Abaixo do peso'; }
  else if (num2 >= 18.5 && num2 <= 24.9) { comota = 'Peso normal'; } else if (num2 >= 25 && num2 <= 29.9) { comota = 'Acima do peso'; }
  else if (num2 >= 30 && num2 <= 34.9) { comota = 'Obesidade grau I'; } else if (num2 >= 35 && num2 <= 40) { comota = 'Obesidade grau II'; }
  else { comota = 'Obesidade grau III'; }
  document.getElementById('resultado').innerText = `Resultado: ${num2.toFixed(1)}, voce está: ${comota}`;
}
