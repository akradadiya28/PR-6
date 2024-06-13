// Create a School class and create a student,faculty and peon method and student name email contact print same as faculty and peon using class & object.

class School {

    student(sName, sEmail, sContact) {
        // console.log(`Student Name: ${sName}`);
        document.getElementById("sname").innerHTML = (`${sName}`);
        // console.log(`Student Email: ${sEmail}`);
        document.getElementById("smail").innerHTML = (`${sEmail}`);
        // console.log(`Student Contact: ${sContact}`);
        document.getElementById("scon").innerHTML = (`${sContact}`);
    }
    faculty(fName, fEmail, fContact) {
        // console.log(`faculty Name: ${fName}`);
        document.getElementById("fname").innerHTML = (`${fName}`);
        // console.log(`faculty Email: ${fEmail}`);
        document.getElementById("fmail").innerHTML = (`${fEmail}`);
        // console.log(`faculty Contact: ${fContact}`);
        document.getElementById("fcon").innerHTML = (`${fContact}`);
    }
    peon(pName, pEmail, pContact) {
        // console.log(`Peon Name: ${pName}`);
        document.getElementById("pname").innerHTML = (`${pName}`);
        // console.log(`Peon Email: ${pEmail}`);
        document.getElementById("pmail").innerHTML = (`${pEmail}`);
        // console.log(`Peon Contact: ${pContact}`);
        document.getElementById("pcon").innerHTML = (`${pContact}`);
    }
}

const s1 = new School();
s1.student("Arpit Radadiya", "akradadiya28@gmail.com", "98794 87098");

const f1 = new School();
f1.faculty("Keyur Gohil", "kggohil12@gmail.com", "65388 90124");

const p1 = new School();
p1.peon("Rajubhai", "rajesh12@gmnil.com", "87623 54678")