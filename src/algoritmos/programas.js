import Stack from './stack.js';


const Programas = new Stack();


Programas.push( { id: 1, nombre: 'Adobe Photoshop', Memoria: 45 });
Programas.push( { id: 2, nombre: 'Microsoft Word', Memoria: 30 });
Programas.push( { id: 3, nombre: 'Microsoft Powerpoint', Memoria: 25 });
Programas.push( { id: 4, nombre: 'Adobe Premiere', Memoria: 50 });
Programas.push( { id: 5, nombre: 'Visual Studio', Memoria: 55 });
Programas.push( { id: 6, nombre: 'Adobe InDesign', Memoria: 35 });
Programas.push( { id: 7, nombre: 'Microsoft Store', Memoria: 40 });
Programas.push( { id: 8, nombre: 'Adobe Audition', Memoria: 30 });



console.log(Programas.peek());


export default Programas;


