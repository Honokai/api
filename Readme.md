# API

## URLs disponíveis
1. Exemplos:
  * http://localhost:3000/api/aluno - GET
  * http://localhost:3000/api/aluno/:id - GET 
  * http://localhost:3000/api/aluno - POST
  * http://localhost:3000/api/aluno/:id - PUT
  * http://localhost:3000/api/aluno/:id - DELETE

### Recursos disponíveis
1. aluno (GET, POST, PUT, DELETE)  
2. professor (GET, POST, PUT, DELETE)
3. softskill (GET, POST, PUT, DELETE)
4. hardskill (GET, POST, PUT, DELETE)
5. curso (GET, POST, PUT, DELETE)
6. usuario (GET, POST, PUT, DELETE)
7. aluno_hardskills (POST, DELETE)
8. aluno_softskills (POST, DELETE)

### OBSERVAÇÕES

**PARA CRIAÇÃO DE ALUNO, SEM APRESENTAÇÃO DE ERRO, É NECESSÁRIO QUE HAJA UM CURSO, E QUE ESTE CURSO SEJA INFORMADO QUANDO INSERINDO O MESMO**

### Formato esperado para cada recurso 
#### ALUNO POST
```json
{
    "matricula": "2017200458",
    "curso": {
        "descricao": "nome do curso"
    },
    "usuario": {
        "nome_completo": "Emerson",
        "senha": "minha senha",
        "email": "meu email 178"
    },
//----------------------opcionais-----------------------------
    "hardskill": {
        "descricao": "nome da hard"
    },
    "softskill": [
        {"descricao": "nova soft 1"},
        {"descricao": "nova soft 2"}
    ]
}
```
OU 
```json
{
   "matricula": "2017200458",
    "id_usuario":6,
    "id_curso": 1
}
```





