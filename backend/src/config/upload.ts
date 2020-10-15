import { request } from 'express';
import multer from 'multer';
import path from 'path'; // formar de fazer caminhos relativos a aplicação
import { fileURLToPath } from 'url';

export default{
    storage: multer.diskStorage({  // usa diskstorage pois irei armazenar as imagens no disco daaplicação
        destination: path.join(__dirname,'..','..','uploads'), //__dirname retorna qual é o diretorio do arq. upload.
        filename: (request, file, cd) =>{ //cria um nome para a imagem
            const filename = `${Date.now()}-${file.originalname}`; //define o nome da imagem com a data atual no momento do save + nome original da imagem

            cd(null,filename); // cb = callback
        }
    }),
}