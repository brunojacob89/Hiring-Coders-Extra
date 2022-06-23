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

export function listarPsicologo(){
    return baseAPI.get("/psicologos");
}