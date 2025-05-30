//Trabajo final //
const fs = require('fs')
const {createFile, readFile} = require('./Operaciones')

const nombre = "Archivo";
const contenido = "Hola Soy el contenido";


createFile(nombre,contenido)
readFile(nombre)

const argumentos = process.argv.slice(2);
argumentos.forEach((arg, index) => {
    console.log(`Argumento ${index + 1}: ${arg}`);
})














//ANTERIOR
// const fs = require('fs')
// const tareas = [
//  { text: 'Ir al gimnasio' },
//  { text: 'Buscar al niño al colegio' },
//  { text: 'Pagar los gastos comunes' },
//  {text: 'caca'}
// ]
// fs.writeFileSync('tareas.json', JSON.stringify(tareas) )