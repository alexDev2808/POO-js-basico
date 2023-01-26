

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






class Teachers {
    constructor({
        id,
        name,
        courses = []
    })
    {
        this.id = id;
        this.name = name;
        this.courses = courses
    }
}


class BodyComments{
    constructor({
        text,
        image = undefined,
        code = undefined,
    })
    {
        this.text = text;
        this.image = image;
        this.code = code;
    }
}


class Comments {
    constructor({
        id,
        username,
        likes = 1,
        date,
        body
    })
    {
        this.id = id;
        this.username = username;
        this.likes = likes;
        this.date = date;
        this.body = body;
    }
}


class Lessons {
    constructor({
        id,
        nameLesson,
        duration,
        links,
        comments = []
    })
    {
        this.id = id;
        this.nameLesson = nameLesson;
        this.duration = duration;
        this.links = links;
        this.comments = comments;
    }
}


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



const introProgBasica = new Lessons({
    nameLesson: "Introduccion al curso"
})

const claseImportanteParaTodos = new Lessons({
    id: "l00001",
    duration: 180,
    nameLesson: "Clase Importante para todos"
})

const teacherFreddyVega = new Teachers({
    name: "Freddy Vega"
})



const cursoProgBasica = new Course({
    id: 00001,
    nameCourse: "Curso gratis de Programacion Basica",
    teacher: teacherFreddyVega,
    lessons: [
        introProgBasica,
        claseImportanteParaTodos
    ]
})

const cursoDefinitivoHTMLCSS= new Course({
    id:00010,
    nameCourse: "Curso Definitivo de HTML y CSS",
    teacher: "Diego DeGranda",
    lessons: [
        claseImportanteParaTodos
    ]
})

const cursoPracticoHTMLCSS = new Course({
    id: 00011,
    nameCourse: "Curso Practico HTML y CSS",
    teacher: "Diego DeGranda",
    lessons: [
        claseImportanteParaTodos
    ]
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

const martha = new Estudiante({
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

const fernanda = new Estudiante({
    name: "Fernanda",
    email: "fernanda_mylove@gmail.com",
    username: "fernandamendez",
    facebook: "fernanda_mendez",
    learningPaths: [
        escuelaData,
        escuelaVgs
    ]
})
