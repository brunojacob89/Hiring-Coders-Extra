interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return {
        nome: 'Bruno',
        email: 'Bruno@Jacob.com',
    }
}

function setUser(usuario: Usuario){
    //...
}