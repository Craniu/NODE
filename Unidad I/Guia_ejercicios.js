const fs = require('fs');
const {vaciarJson} = require('./funciones.js');

const word = "Este es mi primer trabajo en word";
const excel = "Celda 1 /t Celda 2";

const creaWord = (contenido) => {
    try{
        fs.writeFileSync('data/doc.doc',contenido);
        console.log('Archivo Word creado exitosamente');
    }catch(e){
        console.log(e.errror);
    }
}

const creaExcel = (contenido) => {
    try{
        fs.writeFileSync('data/excel.xls',contenido);
        console.log('Archivo Excel creado exitosamente');
    }catch(e){
        console.log(e.error);
    }
}

const test = () => console.log('Test function executed successfully');

// test();
// creaWord(word);
// creaExcel(excel);
vaciarJson('data/ejemplo.json');

const argumentos = process.argv.slice(2);
console.log('Argumentos recibidos:', argumentos);
argumentos.forEach((arg, index) => {
    creaExcel(arg);
    creaWord(arg);
});