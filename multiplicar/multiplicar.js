const fs = require('fs');

let listar = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('Ingresa solo numeros');
            return;
        }
        for (let i = 0; i <= limite; i++) {
            console.log(base + ' * ' + i + ' = ' + base * i);
        }
        resolve('Tabla listada correctamente');
    });
};


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } x ${ i } = ${ base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`The file tabla-${base}.txt has been saved!`);
        });
    });
};

module.exports = {
    crearArchivo,
    listar
}