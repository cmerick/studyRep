Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.
São levados em consideração 3 fatores:

A origem do estilo;

A especificidade; ** os Seletores que definem a ordem como o css será lido ele é lido de uma forma mais especifica para uma forma mais geral, como de uma classe para um seletor global 
A oderm que se segue do menos importante para o mais importante é:
<ul>
<li>universal</li>
<li>element</li>
<li>class/attribute</li>
<li>id</li>
<li>inline</li>
</ul>

A importância; ** !important é considerada uma pratica ruim e quebra  o fluxo natual da cascata

At rules

<ul><li>@import serve para incluir um CSS externo.</li><li>@media são regras condicionais para vários dispositivos.</li><li>@font-face é para colocar fontes externas.</li><li>@keyframes serve para as animations do CSS.</li></ul>

Shorthand

    *background properties *
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    *background shorthand*
    background: #000 url(images/bg.gif) no-repeat left top;


CSS - functions
    *property: property-value-function(arguments);    
    ex: color: rgb(255,0,100);*

Vendor prefixes
    -webkit-background-clip: text; /*Chrome, Safari, iOS e Android*/
	-moz-background-clip: text; /* Mozilla (Firefox) */
	-ms-background-clip: text; /* Internet Explorer ou Edge*/
	-o-background-clip: text; /* Opera */ 

    *for more*
    http://ireade.github.io/which-vendor-prefix/