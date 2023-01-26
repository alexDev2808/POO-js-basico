

// Creacion de un prototipo Prototipo Student

function Student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function(nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)
}

const alexis = new Student("Alexis", 22, ["Curso de Kotlin", "Curso de JAVA"])



// Prototipos con sintaxis de clases

class Student2 {
    // metodo constructor, se ejecuta al crear una instancia
    constructor(name, age, cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    // Metodos
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }


}

const jesus = new Student2('Jesus', 22, ["Curso de Scope y Closures", "Curso de manipulacion de Arrays"])
