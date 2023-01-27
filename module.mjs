import { Reto } from './app.mjs'


const courseName = "curso de programación básica"
const nombreMayusculas = new Reto({
    name: courseName,
})
nombreMayusculas.name = courseName;
console.log(nombreMayusculas.name)