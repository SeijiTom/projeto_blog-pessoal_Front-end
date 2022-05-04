/*A camada de serviços é nossa regra de negócios que vai fazer de fato a comunicação com o nosso backend.
Toda requisição é interceptada pela camda de serviçoes, por isso ela é responsável por comunicar-se com a
model, ou seja, o banco de dados.*/

import axios from 'axios'; /*Axios é uma biblioteca que permite requisições Http, ela que forma a ponte entre
requisições e respostas, e é ela que intercepta todas as requisições.*/

export const api = axios.create({ /* criando objeto api que será exportado dps, esse objeto recebe o axios e
por consequência todas as suas funcionalidades. Dps vem o método create que permite armazenar dentro do axios
o endereço da api criada pela Gen. A baseURL é a propriedade que vai armazenar de fato o endereço da api.*/
    baseURL: 'https://bloggeneration.herokuapp.com'
})

export const cadastroUsuario = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const login = async(url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}