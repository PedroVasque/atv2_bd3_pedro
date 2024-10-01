/* NOME DO BANCO DE DADOS */
const database = "bd3_atv2_pedro";

/* NOME DO BANCO DA COLEÇÃO DE DADOS: */
const collection = "bd3_atv2_produtos";

/* CRIAR OU ACESSAR O BANCO DE DADOS: */
use(database);

/* PESQUISA ORDENAÇÃO DO MAIS BARATO AO MAIS CARO */
db[collection].find()
.sort({ valor: 1 });
