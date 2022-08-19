Tamanho (largura x altura): width e height, respectivamente
Conteúdo: o content
Bordas: o border
Preenchimento interno: o padding
Espaços fora da caixa: a margin


Normalmente usa-se o código abaixo como forma de "resetar" o box-sizing que vem por padrão nos navegadores.

* {
   box-sizing: border-box;
}

Documentação do MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/border

value: <border-style> | <border-width> | <border-color>

style: solid | dotted | dashed | double | groove | ridge | inset | outset
width: <length>
color: <color>

O outline é muito semelhante ao border, mas difere em 4 sentidos:;
Não modifica o tamanho da caixa, pois não é parte do Box Model;
Poderá ser diferente de retangular;
Não permite ajuste individuais;
Mais usado pelo user agent para acessibilidade;