// const btn = document.querySelector("#myBtn")
// const btnStyle = btn.style;

// btnStyle.color = "white";
// btnStyle.backgroundColor = "black";

// setTimeOut

// setTimeout(()=>{
//     console.log("mai timeout hu");
// },2000) // ms time
// console.log("mai niche tha");

// // setInterval - after everyInterval
// let no = 1
// let interval = setInterval(()=>{
//     console.log(`2 * ${no} = ${2 * no}`);
//     if(no === 10) clearInterval(interval);
//     no++;
// },1000)

// const obj = {
//   name: "Praveen",
//   age: 21,
//   fn: function(){
//     return(this.name);
//   },
// };

// console.log(obj.fn());

// 1.
// let student = {
//   subject: [],
//   grade: "",
// };

// const fn = (sub, grd) => {
//   // add new subject
//   student.subject.push(sub);
//   // if grade is present
//   if (!student.grade) {
//     student.grade = grd;
//   } else{
//     console.log("grade is already available");
//   }
// };

// fn("hindi", "12th");
// fn("Math", "12th");

// console.log(student.subject);
// console.log(student.grade);

// 2.

// let obj1 = {
//   name: "Parveen",
//   age: 32,
// };

// let obj2 = {
//   name: "Parveen",
//   age: 27,
// };

// let fn = () => {
//   if (obj1.name == obj2.name) {
//     console.log("Name values are same");
//   } else {
//     console.log("Age are not same.");
//   }

//   if (obj1.age === obj2.age) {
//     console.log("Age values are same");
//   } else {
//     console.log("Age are not same.");
//   }
// };

// fn()


// // Pro level.
// const checkProperty = (pty_1, pty_2) => {
//   if (pty_1 === pty_2) console.log(`${pty_1} and ${pty_2} are same`);
//   else console.log(`${pty_1} and ${pty_2} are not same`);
// };

// checkProperty(obj1.age, obj2.age)


// 3. 

// array of object

// [
//     {id:0},
//     {id:1},
//     ...
// ]

// {
//     id: {}
// }