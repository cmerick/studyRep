
<h3>Tipos numéricos</h3>
<hr>
<ul>
    <li><code>&lt;integer&gt;</code> - número inteiro como <code>-10</code> ou <code>223</code></li>
    <li><code>&lt;number&gt;</code> - número decimal como <code>-2.4</code>, <code>64</code> ou <code>0.234</code>
    </li>
    <li><code>&lt;dimension&gt;</code> - é um <code>&lt;number&gt;</code> com uma unidade junto: <code>90deg</code>,
        <code>2s</code>, <code>8px</code></li>
    <li><code>&lt;percentage&gt;</code> - representa uma fração de outro número: <code>50%</code></li>
</ul>
<h3>Unidades comuns</h3>
<hr>
<ul>
    <li><code>&lt;length&gt;</code> - é um dos mais usados no CSS e representa um valor de distância:
        <code>px</code>, <code>em</code>, <code>vw</code></li>
    <li><code>&lt;angle&gt;</code> - representa um ângulo: <code>deg</code>, <code>rad</code>, <code>turn</code>
    </li>
    <li><code>&lt;time&gt;</code> - representa um tempo: <code>s</code>, <code>ms</code></li>
    <li><code>&lt;resolution&gt;</code> - representa resoluções para dispositivos: <code>dpi</code></li>
</ul>


Unidade | Nome | Equivalência |
|----------|---------------------|----------------------|
| cm | Centímetros | 1cm = 96px/2.54 |
| in | Inches (polegadas) | 1in = 2.54cm = 96px |
| px | Pixels | 1px = 1/96th of 1in |
</code></pre>
<p>*o mais comum e mais utilizado é o <strong>px</strong></p>
<p>*não é recomendado usar <strong>cm</strong></p>
<h3>Distâncias relativas</h3>
<hr>
<ul>
    <li>São relativas a um outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.</li>
    <li><strong>Benefício</strong>: Maior adaptação aos diferentes tipos de tela.</li>
</ul>
<pre><code class="language-markdown">| Unidade  | Relativo a                                    |
|----------|-----------------------------------------------|
| em       | Tamanho da font do elemento pai               |
| rem      | Tamanho da font do elemento raiz (root/html)  | 
| vw       | 1% da viewport wid                            |  
| vh       | 1% da viewport height                         |</code></pre>
<ul>
    <li>Normalmente o tamanho da font padrão do navegador é de <code>16px</code> e para mudar esse valor temos que fazer
        a alteração no root ou no elemento html.</li>
</ul>
<pre><code class="language-css">:root {
	font-size: 18px;
}

/* OU */

html {
	font-size: 18px;
}</code></pre>
<ul>
    <li>O <strong>viewport</strong> é a parte da tela que está sendo exibida. No caso dos navegadores web, é o que é
        exibido na janela/tela do documento. Conteúdos que estão fora do viewport só serão exibidos quando feito um
        scroll da área de visualização.</li>
</ul>


<position>

Representa um conjunto de coordenadas 2D:
top, right, bottom, left e center
Usado para alguns tipos de propriedades como o background-position
Não confundir com a propriedade position

Strings: texto envolto em aspas
.box::after {
	content: "Isso é uma string"
}