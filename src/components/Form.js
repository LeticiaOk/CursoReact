import { useState } from "react";

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
        console.log("Cadastrou o usuário!")
    }

    const[name,setName] = useState('Matheus') /*name: resgata o valor, setName: atribui o valor. 'Matheus é definido como valor padrão de name'*/
    const [password, setPassword] = useState()
    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome: </label>
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