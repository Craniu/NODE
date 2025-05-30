const fs = require('fs');

const vaciarJson = (archivo) => {
    try{
        fs.writeFileSync(archivo,'[]');
        console.log('Archivo JSON vaciado exitosamente');
    }catch(e){
        console.log(e.error);
    }
}

module.exports = {
    vaciarJson
}