# Exerc�cio 4
## Movimento


Este movimento constituido por v�rias elipses, pretende simular um buraco negro e a sua gravidade a atuar sob um conjunto de planetas.

Ao absorver cada planeta, a stroke da elipse altera-se para a cor correspondente. Para isso usei uma s�rie de condi��es If, que constatam que se a posi��o do planeta for maior ou igual a 1280 a subtrair pelo valor do tamanho em x da elipse "buraco negro" a dividir por dois (para encontrar o raio atual) a stroke ser� alterada e crescer� em tamanho.

Para os planetas, usei varia��es de velocidade tanto em x como y e para o buraco negro escalei por um factor de 2 o seu tamanho por cada ciclo, nos dois eixos.

N�o est� em loop nem tem qualquer input do utilizador.