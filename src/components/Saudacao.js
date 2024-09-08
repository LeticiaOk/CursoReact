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