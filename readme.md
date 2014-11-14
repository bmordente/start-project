<h1>Start Project</h1>
<h4>Versão: 1.1</h4>

<h2>Arquivos</h2>
<pre lang="shell"><code>Configurações de Caminhos: /config.rb</code></pre>
<pre lang="shell"><code>Dependências: package.json</code></pre>
<pre lang="shell"><code>Grunt Tasks: Gruntfile.js</code></pre>
<pre lang="shell"><code>ToDo list: /default.todo</code></pre>

<h2>Paths Desenvolvimento</h2>
<pre lang="shell"><code>SASS: /ProjectPath/assets/sass</code></pre>
<pre lang="shell"><code>Js: /ProjectPath/assets/js</code></pre>
<pre lang="shell"><code>Imagens: /ProjectPath/assets/img</code></pre>

<h2>Paths Produção</h2>
<pre lang="shell"><code>CSS: /ProjectPath/dist/css</code></pre>
<pre lang="shell"><code>Js: /ProjectPath/dist/js</code></pre>
<pre lang="shell"><code>Imagens: /ProjectPath/dist/img</code></pre>
<pre lang="shell"><code>Ico: /ProjectPath/dist/ico</code></pre>



<h2>Instalando o Grunt e as dependências no projeto</h2>
	1 - Verificar se já está instalado na máquina o node.js, compass, grunt, etc.
	2 - Configurar arquivo 'package.json' com os dados do projeto (Obs.: Não mexer nas dependências).
	3 - Entrar na raiz do projeto pela linha de comando(CMD).
	4 - Dê o comando "npm install" no CMD.
	5 - Divirta-se!


<h2>Comandos Utilizados</h2>
<pre lang="shell"><code>"grunt c": Compass (Compilador de SASS/CSS)</code></pre>
<pre lang="shell"><code>"grunt u": Uglify (Compilador de JavaScripts)</code></pre>
<pre lang="shell"><code>"grunt i": Imagemin (Otimizador de Imagens)</code></pre>
<pre lang="shell"><code>"grunt w": Watch (Sincronizador de Arquivos)</code></pre>
<pre lang="shell"><code>"grunt b": BrowserSync (Sincronizador de Browsers)</code></pre>
<pre lang="shell"><code>"grunt": BrowserSync, Compass, Uglify, Watch</code></pre>


<h2>Trabalhando com SASS/CSS</h2>
<h4>Atualizar SASS:</h4>

	1 - Entrar na raiz do projeto pelo CMD
	2 - Utilizar o comando "grunt" ou "grunt c"
	3 - Pronto, comece a editar o arquivo SASS na pasta de desenvolvimento!
	4 - Para finalizar com a tarefa, pressione Ctrl+C
	
<h4>Inserir CSS:</h4>
	1 - Colocar o arquivo na pasta de desenvolvimento
	2 - Mudar extensão do arquivo para ".scss"
	3 - Renomear o arquivo colocando "_" no inicio. Ex.: _nomeArquivo.scss
	4 - Inserir o import no arquivo "estilo.scss". Obs.: Não é necessário utiliunderscore no início do nome, e também a extensão .scss no import. Ex.: @import "nomeArquivo";
	5 - Entrar na raiz do projeto pelo CMD
	6 - Utilizar o comando "grunt" ou "grunt c"
	7 - Para finalizar com a tarefa, pressione Ctrl+C

<blockquote><p>Obs.: O estilo.css será gerado na pasta de produção</p></blockquote>


<h2>Trabalhando com JavaScript</h2>
<h4>Atualizar Código Analytics:</h4>

		1 - Entrar na raiz do projeto pelo CMD.
		3 - Pronto, comece a editar o arquivo "analytics" na pasta de desenvolvimento.
		2 - Utilizar o comando "grunt" ou "grunt u".
<h4>Atualizar JavaScript:</h4>
		1 - Entrar na raiz do projeto pelo CMD.
		3 - Pronto, comece a editar os arquivos na pasta de desenvolvimento.
		2 - Utilizar o comando "grunt" ou "grunt u".
<h4>Inserir uma biblioteca Js:</h4>
		1 - Entrar na raiz do projeto pelo CMD.
		2 - Colocar o arquivo na pasta de desenvolvimento.
		3 - Editar o arquivo "Gruntfile.js"(na linha 39) colocando na tarefa "Uglify no file: "main.min.js" o caminho para a nova biblioteca ser compilada junto as demais
		5 - Pronto, comece a editar os arquivos na pasta de desenvolvimento!
		4 - Utilizar o comando "grunt" ou "grunt u"
<h4>Criar outro arquivo minified:</h4>
		1 - Entrar na raiz do projeto pelo CMD.
		2 - Editar o arquivo "Gruntfile.js"(na linha 39) na tarefa "Uglify, seguindo como padrão as relações já criadas, com o nome do arquivo a ser criado e de quais arquivos ele vai ser gerado.
		4 - Utilizar o comando "grunt" ou "grunt u"


<h2>Otimizar as Imagens</h2>
	1 - Colocar as imagens na pasta de desenvolvimento
	2 - Utilize o comando "grunt i"
	
<blockquote>Obs.:As imagens serão geradas na pasta de produção</blockquote>