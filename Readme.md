# API
- [API](#api)
  - [URLs disponíveis](#urls-disponíveis)
    - [Recursos disponíveis](#recursos-disponíveis)
      - [URL para os recursos](#url-para-os-recursos)
      - [Recursos de tabelas associativas](#recursos-de-tabelas-associativas)
    - [Formato esperado para cada recurso](#formato-esperado-para-cada-recurso)
      - [Aluno POST](#aluno-post)
      - [Aluno PUT](#aluno-put)
      - [Usuário POST](#usuário-post)
      - [Usuário PUT](#usuário-put)
      - [HardSkill POST](#hardskill-post)
      - [HardSkill PUT](#hardskill-put)
      - [SoftSkill POST](#softskill-post)
      - [SoftSkill PUT](#softskill-put)
      - [Questões POST](#questões-post)
      - [Questões PUT](#questões-put)
      - [Curso POST](#curso-post)
      - [Curso PUT](#curso-put)
      - [Aluno_turma POST](#aluno_turma-post)
      - [Aluno_turma DELETE](#aluno_turma-delete)
      - [Aluno_hardskill POST](#aluno_hardskill-post)
      - [Aluno_hardskill DELETE](#aluno_hardskill-delete)
      - [aluno_softskill POST](#aluno_softskill-post)
      - [aluno_softskill DELETE](#aluno_softskill-delete)
  - [Integrantes](#integrantes)

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
9. aluno_turma (POST, DELETE)

#### URL para os recursos
|URL | MÉTODO | DESCRIÇÃO|
|----|--------|----------|
|http://localhost:3000/api/usuario |  **GET** | Listar todos os alunos cadastrados|
|http://localhost:3000/api/usuario |  **POST** | Criar um novo registro para usuário|
|http://localhost:3000/api/usuario |  **GET** | Listar todos os alunos cadastrados|
|http://localhost:3000/api/usuario/:id |  **PUT** | `:id` é esperado um número que será o id do usuário a ser atualizado, atualiza um registro existente|
|http://localhost:3000/api/usuario/:id |  **DELETE** | `:id` é esperado um número que será o id do usuário a ser deletado, exclui um registro existente. |

#### Recursos de tabelas associativas
| URL  | MÉTODO  | DESCRICAO |
|---|---|---|
| http://localhost:3000/api/aluno_hardskill/:id  |  **POST** |  `:id` é o identificador do aluno, cria um registro para na tabela associativa **aluno_hardskill**
| http://localhost:3000/api/aluno_turma/:id  |  **POST** | `:id` é o identificador do aluno, cria um registro para na tabela associativa **aluno_turma**
| http://localhost:3000/api/aluno_softskill/:id  |  **POST** | `:id` é o identificador do aluno, cria um registro para na tabela associativa **aluno_softskill**


### Formato esperado para cada recurso 
#### Aluno POST
Campos `id_usuario` e `id_curso` não podem ser omitidos quando criando um registro de aluno.
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
    ],
    "grupo": [
      {"grupo_nome": "Nome do grupo aqui oh"},
      {"grupo_nome": "Olha soh temos outro grupo aqui"}
    ],
    "turma": [
      {"turma_nome": "865 - pastelaria"},
      {"turma_nome": "865 - OTELARIA"}
    ]
//----------------------fim opcionais-----------------------------
}
```
OU 
```json
{
   "matricula": "2017200458",
   "id_usuario":6,
   "id_curso": 1
//----------------------opcionais-----------------------------
.....
}
```

#### Aluno PUT

```json
{
//       campos atualizáveis do aluno
    "matricula": "2020111111",
    "id_curso": 2,
    "id_usuario": 1
// vale notar que o id_curso tem que ser um id existente na tabela curso
// poderá alterar também o usuário do aluno, 
// contanto que nenhum outro aluno possua este usuário como seu
}
```

#### Usuário POST
```json
{
    "nome_completo": "ERICK",
    "email": "ericka@com",
    "senha": "senha nova",
//-----------opcionais-------------
    "aluno": {
        "id_curso": 1,
        "matricula": "2017200458"
    },
    "questoes": [
        {"descricao": "valor da descricao"},
        {"descricao": "valor da descricao 2"}
    ]    
}
//----------fim opcionais------------
```

#### Usuário PUT
Você pode alterar basicamente os mesmos campos que quando cria.
```json
{
    "nome_completo": "ERICK",
    "email": "ericka@com",
    "senha": "senha nova"
}
```

#### HardSkill POST

```json
{ 
  "descricao": "hardskill aqui"
}
```

#### HardSkill PUT
```json
{ 
  "descricao": "alteracao aqui"
}
```

#### SoftSkill POST

```json
{ 
  "descricao": "softskill aqui"
}
```

#### SoftSkill PUT
```json
{ 
  "descricao": "SoftSkill alteracao aqui"
}
```

#### Questões POST

```json
{ 
  "descricao": "questao aqui"
}
```

#### Questões PUT
```json
{ 
  "descricao": "questao revista aqui"
}
```

#### Curso POST

```json
{ 
  "nome_curso": "hardskill aqui"
}
```

#### Curso PUT
```json
{ 
  "nome_curso": "alteracao aqui"
}
```

#### Aluno_turma POST
```json
{
  "turma": [
    {"turma_nome": "458 - Nova turma de artes"},
    {"turma_nome": "469 - Pastelo Normalizt"},
    {"turma_nome": "865 - Valores de turma"}
  ]
}
```

#### Aluno_turma DELETE
```json
{
  "turma": [
    {"turma_nome": "458 - Nova turma de artes"},
    {"turma_nome": "469 - Pastelo Normalizt"},
    {"turma_nome": "865 - Valores de turma"}
  ]
}
```

#### Aluno_hardskill POST
```json
{
  "hardskill": [
    {"descricao": "aleatorio"},
    {"descricao": "outro valor aleatorio"},
    {"descricao": "e mais um valor aleatorio"}
  ]
}
```

#### Aluno_hardskill DELETE
```json
{
  "hardskill": [
    {"descricao": "aleatorio"},
    {"descricao": "outro valor aleatorio"},
    {"descricao": "e mais um valor aleatorio"}
  ]
}
```

#### aluno_softskill POST
```json
{ 
  "softskill": [
    {"descricao": "aleatorio"},
    {"descricao": "outro valor aleatorio"},
    {"descricao": "e mais um valor aleatorio"}
  ]
}
```

#### aluno_softskill DELETE
```json
{
  "softskill": [
    {"descricao": "aleatorio"},
    {"descricao": "outro valor aleatorio"},
    {"descricao": "e mais um valor aleatorio"}
  ]
}
```

## Integrantes
| Nome  | Turma  | Matrícula  |
|---|---| --- |
| Emerson F. Fernandes  | 863  | 2017200458 
