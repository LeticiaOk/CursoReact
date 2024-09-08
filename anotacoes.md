# `Aula 3 | Entendendo o JSX:`

* Para se colocar lógica de programação dentro do react utilizamos: '{}'.
~~~~js

mport './App.css';

function App() {

  const name = 'Matheus'
  const newName = name.toLocaleUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="minha imagem"/>

    </div>
  );
}

export default App;
~~~~

# `Aula 4 | Criando componentes no React:`

* É possível usar as tags dos componentes quantas vezes quiser no código

*  É possível importar componentes dentro de outros componentes além do App.js

## Frase.js
~~~~js
function Frase(){
    return(
        <div>
            <p>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase
~~~~

## HelloWorld
* Importando o componente Frase.js

~~~~js
import Frase from "./Frase";
function HelloWorld(){
    return(
        <div>
            <Frase />
            <h1>Meu primeiro componente</h1>
            <Frase />
            <Frase />
        </div>
    );
}

export default HelloWorld;
~~~~


## App.jsx

* Arquivo principal onde é importado o componente HelloWorld.js:

~~~~js
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  return (
    <div className="App">
      <HelloWorld />

    </div>
  );
}

export default App;

~~~~

# `Aula 5 | Props:`


  * Criamos um componente, passamos as propriedades na função e utilizamos dentro do código.
  
  ~~~~js
  function Pessoa({nome, idade, profissao, foto}){
      return(
          <div>
              <img src={foto} alt={nome}/>
              <h2> Nome: {nome}</h2>
              <p>Idade: {idade}</p>
              <p>Profissão: {profissao}</p>
          </div>
      )
  }
  
  export default Pessoa;
~~~~

* Passamos os valores das propriedades no arquivo principal.

~~~~js
import './App.css';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"
  return (
    <div className="App">
      <Pessoa nome="Rodrigo" idade="28" profissao="Programador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;

~~~~

# `AULA 6 | CSS no React (CSS modules)`

* Para criar um CSS específico para um componente utilizamos a seguinte estrutura: "NomeDoComponente.module.css". Dessa forma todos os estilo deste CSS vão ser aplicados ao componente que está no nome do arquivo CSS.

* Esse formato não aceita '-', apenas camelCase e '_'.

* Para importar o CSS modules dentro de um componente e aplica-lo nos elementos fazemos:

~~~~js
import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
        </div>
    )
}

export default Frase
~~~~

# `AULA 7 | Utilizando o React fragments`

* Utilizamos fragments quando não queromos usar o elemento <div></div> dentro do React/HTML, dessa forma não poluindo o DOM.

* Formato: <></>

# `AULA 8 | Avançando em props`

* Podemos definir tipos para a props, realizando uma espécie de validação e ainda há a possibilidade de definir um valor padrão.

* Quando queremos passar valores de string para a props usar "" e quando queremos passar valores numéricos usamos {}:

~~~~js
import Item from "./Item";
function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Renault" />    
            </ul>
        </>
    );
}

export default List;
~~~~

* Podemos requerir valores especificos para a props, como string, number, se o campo é obrigatório e também valores padrão, caso não seja passado nenhum valor para as propriedades.

* Para isso importamos a biblioteca PropTypes do React.

~~~~js
import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
            <p>Teste</p>
        </>
    );
}

Item.propTypes = { {/*Utilizamos o nome da função e o proptypes*/}
    marca: PropTypes.string.isRequired, {/*A marca deve ser uma string e é obrigatória*/}
    ano_lancamento: PropTypes.number, {/*O ano_lancamento deve ser do tipo numério*/}
}

Item.defaultProps = {
    marca: 'Faltou a marca', {/*Valor padrão para a propriedade*/}
    ano_lancamento: 0, {/*Valor padrão para a propriedade*/}
}

export default Item;
~~~~

# `AULA 9 | Eventos no React (onClick, onChange e onSubmit)`

* Funcionamento do evento 'onClick':

~~~~js
function Evento({numero}){
   function meuEvento(){
        console.log(`Opa, fui ativado! ${numero}`) {/*Pega cada valor passado para a propriedade 'numero' e imprime na tela*/}
    }
    return(
        <div>
            <p>Clique para disparar um vento:</p>
            <button onClick={meuEvento}>Ativar!</button> {/*Ao clicar no botão a função meuEvento é ativada*/}
        </div>
    );
}

export default Evento;
~~~~

* Funcionamento do evento "onSubmit": 

~~~~js
function Form(){
    function cadastrarUsuario(e){ {/*Esse 'e' pode ser qualquer coisa, mas está representando um evento*/}
        e.preventDefault() {/*Para o comportamento padrão do HTML e faz com que a página nãos eja recarregada ao submetermos o  formulário*/}
        console.log("Cadastrou o usuário!")
    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}> {/*Chamamos o evento na tag 'Form'*/}
                <div>
                    <input type="text" placeholder="Digite o seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cdastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;
~~~~

# `AULA 10 | useState na prática`

* Com ele conseguimos manusear o estado de cum componente de forma simples

~~~~js
import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`) /*Retorno dos valores*/
        console.log("Cadastrou o usuário!")
    }

    const[name,setName] = useState('Matheus') /*name: resgata o valor, setName: atribui o valor. 'Matheus é definido como valor padrão de name'*/
    const [password, setPassword] = useState()
    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Noame: </label>
                    {/*o valor do campo name recebe o valor padrão de name que é 'Matheus' inicilamente ou até que seja mudado*/}
                    <input type="text" id="name" name="name" placeholder="Digite o seu nome" value={name} onChange={(e) => setName(e.target.value)}></input> {/* recebe o evento (e) e  manda o valor desse vento para o setName, assim cada letra digitada no campo modifica o valor do state */}
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" name="password" placeholder="Digite a sua senha" onChange={(e) => setPassword(e.target.value)}
                    ></input> 
                </div>
                <div>
                    <input type="submit" value="Cdastrar" />
                </div>
                
            </form>
        </div>
    );
}

export default Form;
~~~~

# `AULA 11 | Passar eventos por props`

* Os métodos também podem ser passados por props
* Ou seja, um componente filho pode ativar o método do seu ancestral
* Vamos acessar o método por meio de evento

Button.js

~~~~js
function Button(props){
    return <button onClick={props.event}>{props.text}</button> /
}

export default Button;
~~~~

Evento.js

~~~~js
import Button from "./evento/Button";
function Evento(){
   function meuEvento(){
        console.log(`Ativando primeiro evento!`)
    }

    function segundoEvento(){
        console.log('Ativando o segundo evento')
    }

    return(
        <div>
            <p>Clique para disparar um vento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    );
}

export default Evento;
~~~~

# `AULA 12 | Renderização condicional `

~~~~js
import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail() {
        setUserEmail('') // Isso gera um False na condição de mostrar o e-mail e a div deixa de ser imprimida.
    }
    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..." onChange={(e) => setEmail(e.target.value)}></input>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && ( // Condicional if: se userEmail for True (basta ter um valor) mostra a div com o userEmail.
                    <div>
                        <p>O email do usuário é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar e-mail</button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default Condicional
~~~~

# `AULA 13 | Renderização de listas `


App.js:
~~~~js
import './App.css';
import OutraLista from './components/OutraLista';

function App() {

  const meusItens =['React', 'Vue', 'Angular']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]} />
    </div>
  );
}

export default App;
~~~~

OutraLista.js
~~~~js
function OutraLista({itens}){
    return(
        <>
            <h3>Lista de coisas boas:</h3>
            {itens.length > 0 ? ( // Condicional: Se o número de itens na lista for maior que 0, imprime os itens.
                itens.map((item, index) => (  
                    <p key={index}>{item}</p> // cada item vai ter sua chave que equivale ao seu index.
                ))) : ( // Se não imprime o parágrafo
                    <p>Não há itens na lista</p>
                )
            }
        </>
    )
}

export default OutraLista
~~~~

# `AULA 14 | State Lift`

* State Lift é uma técnica utilizada para compartilhar o state
* É normal vários componente dependerem do mesmo estado
* Então precisamos elevar o nível do mesmo para um compoentne pai

App.js
~~~~js
import { useState } from 'react';
import './App.css';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState() // O valor vai alterando conforme o valor da propriedade setNome

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}/> {/* Passamos o valor para a propriedade setNome*/}
      <Saudacao nome={nome}/> {/*Passamos o valor da propriedada nome, que será alterada de acordo com setNome*/}
    </div>
  );
}

export default App;
~~~~

SeuNome.js
~~~~js
function SeuNome({setNome}) { // Recebe o valor da propriedada setNome
    return (
        <div>
            <p>Digite o seu nome:</p>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/> {/*Conforme o usuário vai digitando esse valor é passado para setNome*/}
        </div>
    )
}

export default SeuNome
~~~~

Saudacao.js
~~~~js
function Saudacao({nome}) { // Recebe o valor da propriedade nome

    function gerarSaudacao(algumNome){
        return `Olá, ${algumNome}, tudo bem?` /*Retorna a frase de acordo com o nome passado como parâmetro para a função */
    }

    return (
        <>
            {nome && <p>{ gerarSaudacao(nome)}</p>} {/*Caso nome seja True (basta que haja algum valor nele) chama a função e passa como parâmetro a propriedada nome*/}
        </>
    )
}

export default Saudacao
~~~~

# `AULA 15 | Implementando o Reacr Router`
* É um pacote para mudança de URLs da aplicação.
* Podemos assim acessar outras views sem o page reload.
* Trocando apenas uma parte de layout da aplicação, ou seja, que muda de view para view.

App.js
~~~~js
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; //Importando biblioteca do Routes
import Home from "./Pages/Home"; // Importado página do link
import Empresa from "./Pages/Empresa"; // Importado página do link
import Contato from "./Pages/Contato"; // Importado página do link
import NavBar from "./components/layout/NavBar"; // Importando o NavBar
import Footer from "./components/layout/Footer"; // Importando o Footer

function App() {
  return (
    <Router> {/*Tag que deve envolver todo o componente*/}
        <NavBar /> {/*Nav Bar*/}
        <Routes> {/*Tag das rotas*/}
          <Route exact path="/" element={<Home />} /> {/*Rota com caminho e elementos correspondente*/}
          <Route path="/empresa" element={<Empresa />} /> {/*Rota com caminho e elementos correspondente*/}
          <Route path="/contato" element={<Contato />} /> {/*Rota com caminho e elementos correspondente*/}
        </Routes>
        <Footer /> {/*Rodapé*/}
    </Router>
  );
}

export default App;

~~~~

* Exemplo de página com Routes:
Home.js
~~~~js
function Home(){ // Esse é o componente correspondente a um dos links no App.js dentro de Routes
    return( // Conteúdo da página que será exibida
        <div>
            <h1>Home</h1>
            <p>Conteúdo da página</p>
        </div>
    )
}

export default Home;
~~~~