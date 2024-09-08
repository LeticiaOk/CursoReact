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