import baseAPI from "./config";

interface PsicologoPayLoad{
    nome: string;
    apresentacao: string;
    email: string;
    senha: string;
}

export function cadastroPsicologo(payload: PsicologoPayLoad){

    return baseAPI.post("/psicologos", payload);
}

export function listarPsicologo(token : string){
    return baseAPI.get("/psicologos", {
        headers:{
            Authorization: `JWT ${token}`,
        }
    });
}