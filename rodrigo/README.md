# Dados sobre mim

* Nome: **Rodrigo Antunes dos Santos**
* Idade: **20 anos**
* Número: **3160575**
* Localidade: **Alvaiázere**



# Casey Edwin Barker Reas

Casey Reas é um professor da Universidade da Califórnia, Los Angeles. 
Em 2001, Casey Reas e Ben Fry criaram uma linguagem de programação chamada [Processing] (https://processing.org/).
As imagens criadas através do software de Casey Reas derivam das instruções do texto que definem uma rede de ações. Estas instruções são simulações que resultam em imagens dinâmicas e estáticas. Cada imagem transmite uma perspectiva diferente sobre o processo de traços visuais, ainda em evolução. 

# Trabalho

O trabalho do Casey Reas está exposto em várias coleções públicas e privadas, estando entre eles o Centro Georges Pompidou e o Museu Victoria and Albert.
O seu primeiro [trabalho] (http://artport.whitney.org/commissions/softwarestructures/map.html) foi exposto no Museu Whitney na secção artport.

# Obras

* Vários trabalhos do [Casey Reas] (http://reas.com/).

* _Este livro introduz os conceitos fundamentais de programação de computadores e trabalho com Processing._ [Processing] (https://books.google.pt/books/about/Processing.html?id=cNf3BQAAQBAJ&source=kp_cover&redir_esc=y&hl=pt-PT) publicado em 2007.

* _Website_ [Form+Code] (http://formandcode.com/) publicado em 2010.

* _Aprende rapidamente os conceitos básicos de programação, desde variáveis a objetos;_ [Getting Started with P5.js: Making Interactive Graphics in JavaScript and Processing] (https://p5js.org/books/) publicado em 2015.



* _Este livro introduz os conceitos fundamentais de programação de computadores e trabalho com Processing._ [Getting Started with Processing. Py] (https://www.amazon.com/Getting-Started-Processing-py-Interactive-Processing/dp/1457186837) publicado em 2016.

# 'Allegory Of The Cave'

* Segundo o Casey esta obra:

A instalação, "Mesmo as maiores estrelas se descobrem no espelho, uma alegoria de uma caverna para três pessoas", apresenta uma experiência compartilhada por três participantes do público, mediada por dois instrumentos personalizados e um aparelho fotográfico. Ele explora a identidade eo corpo, especificamente em relação à vigilância de dados e retrato / fotografia.

Tomando o formato de um script, ele define uma interação entre três pessoas, cada uma com um papel específico. A "estrela" olha para si mesma em um espelho, enquanto uma grade (a "métrica") é projetada no seu rosto. Os outros dois artistas ("administradores") sentam-se na frente de uma tela, diretamente oposto ao espelho. Eles podem ver a tela, mas não podem ver a "estrela". Os "administradores" controlam a imagem da "estrela", enquanto a "estrela" não pode vê-los ou a imagem que estão controlando. Um "administrador" define a resolução da "métrica" ​​projetada. O segundo "administrador" define a forma como a imagem é resolvida na tela. Todos os três participantes fazem parte de um sistema integrado de mídia, mas agem de forma independente.

(https://vimeo.com/86582456)

# **Exercício 4** 

Para fazer este exercício utilizei este código:

function setup(){
	createCanvas(400 400);
	angleMode(DEGREES);
}

function draw(){
	background(51);
	var x = 100;
	var y = 100;
	stroke(255);
	strokeWeight(8);
	point(x,y);
	var angle = map(mouseX,0,width,-90,90);
	var r = 100;
	var dx = r * cos(angle);
	var dy = r * sin(angle);
	point(x+dx, y+dy);
	line(x,y,x+dx, y+dy);
}

Este exercício baseia-se numa linha que segue o rato. ()