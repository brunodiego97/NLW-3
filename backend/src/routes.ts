import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);
//Recurso = usuário

/*
Metodos HTTP = GET/POST/PUT/DELETE

GET -> Buscar uma informação (Lista,item)
POST -> Criar uma nova informação
PUT -> Editar uma nova informação
DELETE -> Deletar  uma nova informação
*/

/*Parametros

Query params -> http://localhost:3333/users?serach=bruno (? =)

Route params -> http://localhost:3333/users/1  (identificar um recurso PUT/DELETE)

Body -> http://localhost:3
*/

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images'),OrphanagesController.create);

export default routes;