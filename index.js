function buscarProdutos(){
    fetch('https://fakestoreapi.com/products')
    .then(resposta => resposta.json())
    .then(listaProdutos => {

        listaProdutos.map(produto => {
            produtos.innerHTML += `
                <li class="">
                    <div>
                        <img src="${produto.image}" alt="" class="w-full">
                        <span>${produto.rating.rate}</span>
                    </div>
                    <div>
                        <h3>${produto.title}</h3>
                        <h6>${produto.category}</h6>
                        <h2>R$ ${produto.price}</h2>
                    </div>
                </li>
            `;
        })
    })
}

buscarProdutos()