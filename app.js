const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    }).command('crear', 'Genera un archivo con los datos', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { listar, crearArchivo } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;
switch (comando) {
    case 'listar':
        listar(base, limite)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}