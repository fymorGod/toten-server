const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const Ideia = require('./ideias');

app.use(express.json());

app.get("/", async (req, res) => {
    const result = await Ideia.findAll(req.body);
    return res.json(result);
    });

app.post('/register', async (req, res)=> {
    await Ideia.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Ideia registrada"
        })
    }).catch(()=> {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Ideia não registrada"
        });
    });
    //res.send('ook')
})


app.listen(3001, ()=> {
    console.log('server rodando')
})