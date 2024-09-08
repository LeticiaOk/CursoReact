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