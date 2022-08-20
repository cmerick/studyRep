/* 
    Undefined
        -indefinido
*/

/* 
    Null
        nulo
        objeto não possui nada dentro
        diferente de indefinido
*/

//Variáveis
/* 
    *Nome simbólicos para receber algum valor
    *Atalhos de código
    *Identificadores
    *Palavras reservadas
        *var
        *let
        *const
*/

//Tipagem
/* 
O JS é uma linguagem fracamente tipada e dinâmica
 -Variáveis não precisão ter um tipo previamente definido
 -Podemos mudar o contúdo da variável

*/

//Scope
/* 
    * Escopo determina a visibilidade de alguma variável no JS

    //Block Statement
        '''
        //vamos iniciar um código
        {
            //aqui dentro é um bloco e posso colocar qualquer código
        }//aqui fechamos o bloco

    * O bloco criar um scopo chamado block-scoped

    //var
        * o var é global e poderá funcionar fora de um escopo de bloco

        console.log(">existe x antes do bloco?", x) 
    //indefinido acontece um hoisting onde 
    // var sendo global é declarado no inicio do programa indefinido

    {
        var x = 0
    }

    console.log(">existe x depois do bloco?", x)


    //hoisting 

    //let

    <!--  <script>
    //console.log(">existe x antes do bloco?", x) 
//error
// let não premite acesso antes da declaração mesmo que seja colocado dentro do bloco mas antes da delaração
let x = 0 //apenas a declaração fora do bloco e antes do acesso será possível
{
    x = 1 //com não é utilizado a palavra chave reservada "let" essa variável trás o valor da anterior
            //sendo assim alterando ela.
}

console.log(">existe x depois do bloco?", x)
</script> -->


    //const tera um comportamento diferente
        -const não recebe atribuições
        -porém se for declarada novamente em outro escopo ela será definida como 
        outra variável dentro daquele escopo e tera outro valor dentro 
        daquele escopo somente.
*/

/* 
//Nomeando Variáveis

    *JS é case-sensitive (sensível ao caso? ai não né)
        - Aula de inglês
            * case sensitive é um anglicismo, quer dizer que é uma expressão idiomática da lingua inglesa
            * ou seja é um costume ou giria da propria lingua
            * case sensitive se traduz para maiúsculas e minúsculas
        
    *JS aceita a cadeia de caracteres Unicode
        * Unicode é uma padrão que ppermite o sistema representar
        * e manipular qualquer sistema de escrita existente.

        -Posso:
            * Iniciar com esses caracteres especiais: $ _ 
            * Iniciar com letras
            * Colocar acentos
            * Lestras maiúsculas e minúsculas são diferenciadas

        - Não posso:
            * Iniciar com números
            * Clolocar espaços vazios no nome
        
        - Ideal
            * Criar nomes que fazem sentido
            * Que explique o que a variável é ou faz
            * camelCase
            * snake_case
            * Escrever em inglês é padrão
    
        - Interpolação com template literals or template string
            * faz uso de ``
            * console.log(`A ${variável} fica assim`);

*/

//Object
/* 
    -Declaração
        const person = {
            name: 'Jhon,
            age: 30,
            weight: 88.6,
            isAdmin: true,
        }

        console.log(person.argumento) //exibe o valor de um argumento especifico do objeto


*/

//Array
/* 
      -Declaração
        const animals = [
            'Lion',
            'Monkey',
            'Cat'
        ]  

        console.log(animals[posição]) //Acessa o valor baseado na posição dentro do array
                                    // um array tem formato de lista.
                                    // Arrays aceitam tipos variados de dados até objetos. mas não é legal
*/

