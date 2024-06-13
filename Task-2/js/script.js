// Create a Person class and with argument create a Father and Child method father age of 60 and child age of 20 print with argument.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    fatherInfo() {
        document.getElementById("fname").innerHTML = (`Father Name: ${this.name}`)
        document.getElementById("fage").innerHTML = (`Father Age: ${this.age}`)
    }

    childInfo() {
        document.getElementById("cname").innerHTML = (`Child Name: ${this.name}`)
        document.getElementById("cage").innerHTML = (`Child Age: ${this.age}`)
    }
}

const father = new Person("Mukeshbhai", 60);
father.fatherInfo();

const child = new Person("Nayan", 20);
child.childInfo();