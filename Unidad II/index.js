import express from 'express'
import 'dotenv/config'
import fs from 'fs'


const app = express()
const port = process.env.PORT ?? 3000


app.use(express.json())

app.get('/home',(req, res) =>{
    res.send('Hola Gente')
})

app.get('/heroes',(req, res) => {
    const heroes = JSON.parse(fs.readFileSync('data/heroes.json', 'utf8'))
    res.json(heroes)
})

app.post('/heroes', (req, res) =>{
    try {
            const heroe = req.body
            const heroes = JSON.parse(fs.readFileSync('data/heroes.json', 'utf8'))
            heroes.push(heroe)
            fs.writeFileSync('data/heroes.json', JSON.stringify(heroes))
            res.send('Se creo el heroe')
        }catch (error){
            console.error('[error] => ',error)
        }
})


app.listen(port, console.log(`🔥Server : http://localhost:${port} is On`))