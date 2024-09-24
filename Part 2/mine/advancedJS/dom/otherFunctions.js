// first class  function

function sayHello(name) {
  return "Hello " + name + "!";
}

let greet = sayHello;

// console.log(greet("Praveen"));

// HOF

const mathOperation = (x, y, operation) => {
  return operation(x, y);
};

const add = (x, y) => {
  return x + y;
};
const sub = (x, y) => {
  return y - x;
};

// console.log(mathOperation(2,3,sub))

// Promise
// const pr = new Promise((resolve, reject) => {
//     const time = 6;
//     setTimeout(()=>{
//         if(time === 5){
//             resolve("aagya")
//         } else {
//             reject("Gaand me daal le time")
//         }
//     }, 1000)
// })

// pr.then((value)=> {
//     console.log( value);

// }).catch((error)=>{
//     console.error(error);

// }).finally(()=>{
//     console.warn("Mai to aaunag");

// })

const fetchData = async () => {
    const {joke} = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    }).then((result) => result.json());

    console.log('data',joke);
}

fetchData();