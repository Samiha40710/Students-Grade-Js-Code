let English = parseInt(prompt("Enter the marks of English:"));

console.log("English:", English);

let Urdu = parseInt(prompt("Enter the marks of Urdu:"));

console.log("Urdu:", Urdu);

let Math = parseInt(prompt("Enter the marks of Math:"));

console.log("Math", Math);

let Science = parseInt(prompt("Enter the marks of Science:"));

console.log("Science", Science);

let Islamiat = parseInt(prompt("Enter the marks of Islamiat:"));

console.log("Islamiat", Islamiat);

const TotalMarks = 500;

console.log("Total Marks: ", TotalMarks);

const ObtainedMarks = English + Urdu + Math + Science + Islamiat;

console.log("Obtained Marks: ", ObtainedMarks);

let percentage = (ObtainedMarks / TotalMarks) * 100;

console.log("Percentage: ", percentage,"%");

if (percentage >= 90 && percentage <= 100) {
    console.log("Grade: A+");
} else if(percentage >= 80 && percentage <= 89){
    console.log("Grade: A");
}else if(percentage >= 70 && percentage <= 79){
    console.log("Grade: B");
}else if(percentage >= 60 && percentage <= 69){
    console.log("Grade: C");
}else if(percentage >= 50 && percentage <= 59){
    console.log("Grade: D");
}else if(percentage >= 40 && percentage <= 49){
    console.log("Grade: E");
}else{
    console.log("Fail");
}