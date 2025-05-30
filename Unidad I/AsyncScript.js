import { writeFile, readFile } from 'fs/promises';

const arg = process.argv.slice(2);
const [opcion, contenido] = arg;


const leerTareas = async () => {
    try {
        return JSON.parse(await readFile('data/Archivo.json', 'utf8'));
    } catch (e) {
        await writeFile('data/Archivo.json', '[]');
        return [];
    }
}

const crearArchivo = async (tareas) => {
    try{
        await writeFile('data/Archivo.json', JSON.stringify(tareas, null, 2));
    }catch(e){
        console.error('Error al crear el archivo:', e);
    }
}

const agregarTarea = async (tarea) => {
    const tareas = await leerTareas();
    tareas.push(tarea);
    await crearArchivo(tareas);
    console.log('Tarea agregada:', tarea);
}

const eliminarTarea = async (tarea) => {
    const tareas = await leerTareas();
    const index = tareas.findIndex(t => t === tarea);
    if (index !== -1) {
        tareas.splice(index, 1);
        await crearArchivo(tareas);
        console.log('Tarea eliminada:', tarea);
    } else {
        console.log('Tarea no encontrada:', tarea);
    }
}

const listarTareas = async () => {
    const tareas = await leerTareas();
    if (tareas.length === 0) {
        console.log('No hay tareas pendientes.');
    } else {
        console.log('Tareas pendientes:');
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}. ${tarea}`);
        });
    }
}

switch (opcion) {
    case 'agregar':
        if (contenido) {
            agregarTarea(contenido);
        } else {
            console.log('Por favor, proporciona una tarea para agregar.');
        }
        break;
    case 'eliminar':
        if (contenido) {
            eliminarTarea(contenido);
        } else {
            console.log('Por favor, proporciona una tarea para eliminar.');
        }
        break;
    case 'listar':
        listarTareas();
        break;
    default:
        console.log('Opción no válida. Usa "agregar", "eliminar" o "listar".');
}