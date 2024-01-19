const person = {
  name: "Alireza",
  age: 38,
  city: "Stockholm",
};
//********************************************* */
console.log(person.name);
console.log(person.age);
console.log(person.city);
//********************************************* */
person.age=39;
console.log(person.age);
//********************************************* */
const car = {
  make: "Volovo",
  model: "V60",
  showDetail:function(){
    console.log(`${this.make} ${this.model} `);
  },
};
car.showDetail();
//********************************************* */
for(let key in person){
  console.log(`${key}: ${person[key]}`);
}
//********************************************* */
let student = {
  name: "Alireza",
  grades: {
    math: 90,
    science: 85,
    history: 95,
  }
};
//********************************************* */
let historyGrade=student.grades.history=98;
console.log(historyGrade);
//********************************************* */
let books=[
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  {title: "To Kill a Mockingbird", author: "Harper Lee"}
]
//********************************************* */
for(let index=0; index<books.length;index++){
console.log(`Title: ${books[index].title}, Author: ${books[index].author}`);
}
//********************************************* */




