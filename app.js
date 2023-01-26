

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
    // patron RORO(recibe un objeto, retorna un objeto)
    // Ahora el constructor recibe un objeto, y asi se tiene mas control sobre el
    // Se le pueden dar parametros por defecto
    constructor({
        name,
        age,
        cursosAprobados = [],
        email,
    })
    {
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
        this.email = email
    }

    // Metodos
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }


}

/*
Con el patron RORO, de igual manera al crear una instancia del prototipo Student2 se debe enviar un objeto como argumento, aqui ya no importa el orden con el que se envian, ya que en el constructor ya estan definidas esas propiedades
*/
const jesus = new Student2({
    email: "ACDC2808@proton.me",
    name: "Jesus",
    age: 22,
    // cursosAprobados: ["Curso de ReactJS", "Curso de NextJS"]
})