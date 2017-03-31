# Exercício 4
## Movimento


Este movimento constituido por várias elipses, pretende simular um buraco negro e a sua gravidade a atuar sob um conjunto de planetas.

Ao absorver cada planeta, a stroke da elipse altera-se para a cor correspondente. Para isso usei uma série de condições If, que constatam que se a posição do planeta for maior ou igual a 1280 a subtrair pelo valor do tamanho em x da elipse "buraco negro" a dividir por dois (para encontrar o raio atual) a stroke será alterada e crescerá em tamanho.

Para os planetas, usei variações de velocidade tanto em x como y e para o buraco negro escalei por um factor de 2 o seu tamanho por cada ciclo, nos dois eixos.

Não está em loop nem tem qualquer input do utilizador.