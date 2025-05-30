
const fs = require('fs')
const {autos, mostrar, saludar} = require('./autos.js')


//fs.writeFileSync('autos.json', JSON.stringify(autos)) 
const write = (ruta,data) => fs.writeFileSync(ruta, JSON.stringify(data))
write('data/autos.json',autos)


//const ListaAutos = JSON.parse(fs.readFileSync('data/autos.json', 'utf8'))
const ListaAutos = require('./data/autos.json')
console.log(ListaAutos)
console.log(autos)
mostrar()
saludar('Julito')

ListaAutos.forEach((element) => {
        console.log(`Marca: ${element.marca}, Modelo: ${element.modelo}`)
    })


