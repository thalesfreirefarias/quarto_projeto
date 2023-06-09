// Velocidade Máxima de 70
// A cada 5km do limite você ganha 1 ponto na carteira
// math.floor()- arredonda valores
// caso pontos maior que 12 -> " Carteira Supendida"
verificarVelocidade(77);

function verificarVelocidade(velocidade){
const velocidadeMaxima = 70;
if (velocidade <= velocidadeMaxima)
  console.log ('Dentro da velocidade!');
  
else{
  const pontos = Math.floor((velocidade - velocidadeMaxima)/5);
  const carteiraPontos = 0 + pontos;
  
  if (carteiraPontos >= 12)
    console.log('Carteira Suspensa. Sua pontuação atual é:' + carteiraPontos);
  
  else
     console.log('Sua pontuação atual é ' + carteiraPontos);
  }
   
}