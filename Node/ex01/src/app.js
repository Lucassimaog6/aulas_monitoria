const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())

// COSR - Cross Origin Resource Sharing
app.use(cors())

// Pasta para HTML
app.use(express.static("public"))

let arrayUsuarios = [
    {
        nome: "Lucas",
        email: "lucas@gmail.com",
        senha: "123456"
    },
    {
        nome: "Carlos",
        email: "carlos@gmail.com",
        senha: "123456"
    },
    {
        nome: "Gabi",
        email: "gabi@gmail.com",
        senha: "123456"
    }
]

app.post("/register", (req, res) => {
    // const nome = req.body.nome
    // const email = req.body.email
    // const senha = req.body.senha

    // Destructuring assignment
    const { nome, email, senha } = req.body

    arrayUsuarios.forEach(u => {
        if (u.email === email) {
            return res.status(400).json({ error: "Email já cadastrado" })
        }
    });

    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    }

    arrayUsuarios.push(usuario)

    return res.status(201).json({ message: `Usuário ${nome} cadastrado com sucesso` })
})

app.post("/login", (req, res) => {
    const { email, senha } = req.body

    // const usuario;
    // for (let i = 0; i < arrayUsuarios.length; i++) {
    //     if (arrayUsuarios[i].email === email) {
    //         usuario = arrayUsuarios[i]
    //     }
    // }

    // Preferivel usar funções de array
    const usuario = arrayUsuarios.find(u => u.email === email)

    if (!usuario) {
        return res.status(404).json({ error: "Usuário não encontrado" })
    }

    if (usuario.senha !== senha) {
        return res.status(401).json({ error: "Senha incorreta" })
    }

    return res.status(200).json({ message: "Usuário logado com sucesso" })
})

app.listen(3000)
