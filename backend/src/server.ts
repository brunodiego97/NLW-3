import express from 'express';

const app = express();



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

app.get('/users', (request, response) => {
    return response.json({ message: 'Hello World' });
});

app.listen(3333);

