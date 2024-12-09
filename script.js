/*
let length = 1; 
let width = 2;
let base = 3; 
let height = 4; 
let radius = 5; 

let rectangle = 1 * 2; 

console.log(); 

let triangle = 1/2 * 3 * 4;

console.log(); 

let circle = 3.14 * 5 * 2 ;
*/ 

function area(shape, measure1, measure2){
    if(shape === "rectangle"){
        return measure1 * measure2;
    } else if (shape === "triangle"){
        return 0.5 * measure1 * measure2;
    } else if (shape === "circle"){
        return Math.PI * measure1 * measure2; 
    }else {
        "Shape not recognized";
    }
}

console.log(area("rectangle", 10, 5)); 
console.log(area("triangle", 3, 6)); 
console.log(area("circle", 2, 8)); 