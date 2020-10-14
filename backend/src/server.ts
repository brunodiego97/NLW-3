import express from 'express';
import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

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

//isso abaixo é uma rota

app.listen(3333);

