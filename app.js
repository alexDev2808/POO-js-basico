

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


function videoPlay(id){
    const urlSecreta = "https://urlsupersecreta.com/" + id;
    console.log(`Se esta reproduciendo el video de la url super secreta: ${urlSecreta}`)
}

function videoStop(id){
    const urlSecreta = "https://urlsupersecreta.com/" + id;
    console.log(`Se pauso el video de la url super secreta: ${urlSecreta}`)
}


class PlatziClass {
    constructor({
        name,
        videoID
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID)
    }

    pausar(){
        videoStop(this.videoID)
    }
}


class Reto {
    constructor({
      name,
      classes = [],
    }) {
      this._name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito !== "string") {
        console.log("Entre")
        return this._name;
      } else {
        this._name = nuevoNombrecito.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")

      }
    }
  }


class Lessons{
    constructor({
        id,
        nameLesson,
        duration
    })
    {
        this.id = id;
        this.nameLesson = nameLesson;
        this.duration = duration;
    }
}


class Course {
    constructor({
        id,
        nameCourse,
        teacher,
        lessons = [],
        comments = [],
        isFree = false,
        lang = 'spanish'
    })
    {
        this.id = id;
        this._nameCourse = nameCourse;
        this.teacher = teacher;
        this.lessons = lessons;
        this.comments = comments;
        this.isFree = isFree;
        this.lang = lang;
    }

    // Creando el primer getter
    get name(){
        return this._nameCourse
    }

    set name(newName){
        if(newName.length > 6){
            this._nameCourse = newName;
        }else{
            console.error("Nombre invalido!!")
        }
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



const introProgBasica = new Lessons({
    nameLesson: "Introduccion al curso"
})

const claseImportanteParaTodos = new Lessons({
    id: "l00001",
    duration: 180,
    nameLesson: "Clase Importante para todos"
})




const cursoProgBasica = new Course({
    id: "00001",
    nameCourse: "Curso gratis de Programacion Basica",
    teacher: "Freddy Vega",
    lessons: [
        introProgBasica,
        claseImportanteParaTodos
    ],
    isFree: true
})

// cursoProgBasica.name = "Curso completo de Programacion Basica Gratis"

const cursoDefinitivoHTMLCSS= new Course({
    id:"00010",
    nameCourse: "Curso Definitivo de HTML y CSS",
    teacher: "Diego DeGranda",
    lessons: [
        claseImportanteParaTodos
    ]
})

const cursoPracticoHTMLCSS = new Course({
    id: "00011",
    nameCourse: "Curso Practico HTML y CSS",
    teacher: "Diego DeGranda",
    lessons: [
        claseImportanteParaTodos
    ],
    lang: 'english'
})

const escuelaWeb = new LearningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTMLCSS,
        cursoPracticoHTMLCSS
    ]
});
const escuelaData = new LearningPaths({
    name: "Escuela de Data Science"
});
const escuelaVgs = new LearningPaths({
    name: "Escuela de Unreal Engine"
});


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

class FreeStudent extends Estudiante{
    // Recibimos todas nuestras propiedades
    constructor(props){
        // Nos permite llamar al constructor de clase madre 
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn(`Lo siento ${this.name} solo puedes tomar cursos abiertos.`)
        }
    }
}

class BasicStudent extends Estudiante{
    // Recibimos todas nuestras propiedades
    constructor(props){
        // Nos permite llamar al constructor de clase madre 
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn(`Lo siento ${this.name} solo puedes tomar cursos en ingles.`)
        }
    }
}

class ExpertStudent extends Estudiante{
    // Recibimos todas nuestras propiedades
    constructor(props){
        // Nos permite llamar al constructor de clase madre 
        super(props)
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse)
    }
}

const martha = new ExpertStudent({
    name: "Martha",
    age: 23,
    username: "majisa",
    email: "martha_iloveyou@gmail.com",
    instagram: "__majisa",
    learningPaths: [
        escuelaWeb,
        escuelaData
    ]
})

const fernanda = new BasicStudent({
    name: "Fernanda",
    email: "fernanda_mylove@gmail.com",
    username: "fernandamendez",
    facebook: "fernanda_mendez",
    learningPaths: [
        escuelaData,
        escuelaVgs
    ]
})

const mary = new FreeStudent({
    name: "Maribel",
    email: "maripotts@gmail.com",
    username: "maripotts",
    facebook: "maripotts",
    learningPaths: [
        escuelaData,
        escuelaVgs
    ]
})
