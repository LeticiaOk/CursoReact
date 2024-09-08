function SeuNome({setNome}) { // Recebe o valor da propriedada setNome
    return (
        <div>
            <p>Digite o seu nome:</p>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}/> {/*Conforme o usuário vai digitando esse valor é passado para setNome*/}
        </div>
    )
}

export default SeuNome