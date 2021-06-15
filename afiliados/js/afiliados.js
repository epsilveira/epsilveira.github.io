import produtos from './links.js';

function addProduto(produto) {
  let ulProdutos = document.querySelector(`#${produto.categoria}`);
  let liProduto = document.createElement("li");
  let linkProduto = document.createElement("a");
  linkProduto.target = "_blank";
  linkProduto.href = produto.url;
  linkProduto.textContent = produto.titulo;
  liProduto.appendChild(linkProduto);
  ulProdutos.appendChild(liProduto);
}

for (let i = 0; i < produtos.length; i++) {
  addProduto(produtos[i]);
}