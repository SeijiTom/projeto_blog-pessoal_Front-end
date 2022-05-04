/*Camada model, onde armazena-se os modelos, ou seja, a parte que se refere aos dados(aobanco de dados), aqui
dentro cria-se o objeto que vai conter os campos que irão fazer a conexão com os bancos.*/

interface UserLogin {
    id: number;
    usuario: string;
    senha: string;
    token?: string| null
}

export default UserLogin;