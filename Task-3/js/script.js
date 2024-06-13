// Employee class create a constructor called print a simple message.

class Employee {
    constructor(name, salary, experience) {
        this.name = name;
        this.salary = salary;
        this.experience = experience;
    }

    employeeDetails() {
        document.getElementById("ename").innerHTML += (`Name: ${this.name}`)
        document.getElementById("esalary").innerHTML += (`Salary: ${this.salary}`)
        document.getElementById("eexp").innerHTML += (`Experience: ${this.experience}`)
    }
}

const employee1 = new Employee("Arpit", "55k", "4 Year");
employee1.employeeDetails();