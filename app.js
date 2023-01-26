// Creando el objeto Literal de natalia

const natalia = {
    name: "Nath",
    age: 21,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS"
    ],

    // Crear metodos
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }

}

natalia.cursosAprobados.push("Curso de Responsive Design")


