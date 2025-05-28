const fs = require('fs');

const createFile = (nomArchivo, contenido) => {
    try{
        fs.writeFileSync(`data/${nomArchivo}.json`, JSON.stringify(contenido))
        console.log("Archivo creado exitosamente")
    }catch(e){
        console.log(e.error)
    }
}

const readFile = (nomArchivo) => {
    try{
        const data = fs.readFileSync(`data/${nomArchivo}.json`,'UTF8')
        console.log(data)
    }catch(e){
        console.log(e.error)
    }
}

module.exports = {createFile, readFile}