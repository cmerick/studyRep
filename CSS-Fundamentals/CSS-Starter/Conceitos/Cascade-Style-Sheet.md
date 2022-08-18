Seu estilo é lido de cima para baixo, ou seja, caso haja algum selector com informações conflitantes, o mais embaixo é o que será atribuído.
São levados em consideração 3 fatores:

A origem do estilo;

A especificidade; <!-- os Seletores que definem a ordem como o css será lido ele é lido de uma forma mais especifica para uma forma mais geral, como de uma classe para um seletor global -->
A oderm que se segue do menos importante para o mais importante é:
.universal
.element
.class/attribute
.id
.inline

A importância;<!-- !important é considerada uma pratica ruim e quebra  o fluxo natual da cascata-->