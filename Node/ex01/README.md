# Login e Cadastro

### O projeto consiste de 2 rotas:
#### POST /login
    - Recebe Email e Senha da Request
    - Se o email n existir, manda um 404 (Not Found)
    - Se a senha estiver incorreta, manda um 401 (Unauthorized)
    - Manda um 200 (Ok)

#### POST /register
    - Recebe Email, Nome e Senha
    - Se já existe alguem com esse email, manda um 400 (Bad Request)
    - Cria o usuário no banco e manda um 201 (Created)