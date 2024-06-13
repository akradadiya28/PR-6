// Create a shape class and create a rectangle and circle method find circle area(3.14*r*r) and rectangle area (width*height) using with argument.

const r = document.getElementById("radius");

const radiusSubmit = () => {
    let radius = r.value;

    area.circleArea(radius);
    return false;
}

const w = document.getElementById("width");
const h = document.getElementById("height");

const rectangleSubmit = () => {
    let width = w.value;
    let height = h.value;

    area.rectangleArea(width, height);
    return false;
}
class Shape {
    circleArea(r) {
        let area = 3.14 * r * r;
        document.getElementById("aoc").innerHTML = (`Area of Circle is ${area}`)
    }

    rectangleArea(width, height) {
        let area = width * height;
        document.getElementById("roc").innerHTML = (`Rectangle of Circle is ${area}`)
    }
}

const area = new Shape();




