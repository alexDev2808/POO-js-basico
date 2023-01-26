

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




class Course {
    constructor({
        id,
        nameCourse,
        teacher,
        lessons = []
    })
    {
        this.id = id;
        this.nameCourse = nameCourse;
        this.teacher = teacher;
        this.lessons = lessons;
    }
}

class LearningPaths {
    constructor({
        id,
        name,
        courses = []
    })
    {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }

    addCourse(course){
        this.courses.push(course)
    }

    replaceCourse(oldCourse, newCourse){
        const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);

        if(oldCourseIndex !== -1){
            this.courses[oldCourseIndex] = newCourse
        }

        return this.courses
    }


    deleteCourse(oldCourse){
        const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id)

        this.courses.splice(courseIndex, 1);

        return this.courses;
    }


}

const escuelaWeb = new LearningPaths();
const escuelaData = new LearningPaths();
const escuelaVgs = new LearningPaths();


class Estudiante {
    constructor({
        name,
        email,
        username,
        age,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = []
    })
    {
        this.email = email;
        this.name = name;
        this.username = username;
        this.age = age;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const martha = new Estudiante({
    name: "Martha",
    username: "majisa",
    email: "martha_iloveyou@gmail.com",
    intagram: "__majisa"
})

const fernanda = new Estudiante({
    name: "Fernanda",
    email: "fernanda_mylove@gmail.com",
    username: "fernandamendez",
    facebook: "fernanda_mendez"
})