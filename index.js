let prods = [];

function buscarProdutos(){
    fetch('https://fakestoreapi.com/products')
    .then(resposta => resposta.json())
    .then(listaProdutos => {
        prods = listaProdutos;
        carregarProdutos(prods);
    })
}

function buscarCategorias(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then((listaCategorias) => {
        listaCategorias.map(categoria => {
            categorias.innerHTML += `<option>${categoria}</option>`;
        })
    })
}

function carregarProdutos(listaProdutos){
    produtos.innerHTML = ``;
    listaProdutos.map(produto => {
        produtos.innerHTML += `
            <li class="bg-white p-3 rounded-lg">
                <div class="relative mb-5">
                    <img src="${produto.image}" alt="" class="w-full h-[250px] object-contain">
                    <span class="absolute top-[16px] right-[16px] bg-gray-600 text-white font-bold text-xs px-2 py-1 rounded-sm">${produto.rating.rate}</span>
                </div>
                <div class="block">
                    <h6 class="bg-gray-300 px-2 inline-block font-bold rounded-sm mb-1">${produto.category}</h6>
                    <h3 class="text-lg truncate" title="${produto.title}">${produto.title}</h3>
                    <h2 class="text-[32px]">R$ ${produto.price.toFixed(2)}</h2>
                </div>
            </li>
        `;
    })
}

function ordenarProdutos(){
    if(ordenar.value == 1){
        prods.sort((a ,b) => b.price - a.price);
        carregarProdutos(prods);
    }
    if(ordenar.value == 2){
        prods.sort((a ,b) => b.rating.rate - a.rating.rate);
        carregarProdutos(prods);
    }
}

function mostrarUmaCategoria(){
    let lis = document.querySelectorAll('li');
    lis.forEach(li => {
        if(li.children[1].children[0].innerText != categorias.value){
            li.classList.add('hidden')
        }else{
            li.classList.remove('hidden')
        }
    })
}

buscarProdutos();
buscarCategorias();