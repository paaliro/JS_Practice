// ----------------- 25.06.2024 ===========================================>
//____________ ----- LOOPs ----- ____________\\
// i. while loop
// ii. do while loop
// iii. for while loop


//? i. syntax - while (condition) {
//? code is be executed as long as the condition is true.
//? }

// ii. syntax - do { Code to be executed at least once.
// } while (condiition);

// iii. syntax - for(initializer; condition; iteration)
// {
    // code to be executed
// }

// **** Simple while LOOP to count 1 tl 10.
// var num = 1;
// while ( num <= 15) {
//     console.log(num)
//     num++;
// }

// **** DO-WHILE LOOP to count 1 tl 10.
// var num = 1;
// do {console.log(num)
//     num++;
// } while ( num <= 15)

// **** FOR WHILE LOOP to count 1 to 10.
// for (var num = 1; num <= 15; num++) {
//     console.log(num)
// }



// let's create a table of 5 ?

// var num = 1;
// while (num <= 10) {
//     console.log("5 * " + num + " = " + 5*num);
//     num++
// }


// Calculate the sum of numbers "1 to 10" using a "For Loop" ?
// var sum = 0;
// for(var num=1; num <= 10; num++) {
//     sum = sum + num;
    
// }console.log(sum)


// var year = 2002;

// if ((year % 4 === 0 && year % 100 !== 0) year % 400 === 0 ) {
//     console.log(year, "It's a Leap Year.")
// } else {
//     console.log(year, "It's not a Leap Year.")
// }

// var Hello = "it's me.";
// console.log(Hello);

 for ( var i = 1; i <= 5; i++) {
    var pattern = "";
    for ( var j = 1; j <= i; j++){
        var pattern = pattern + "* "
    }
    console.log(pattern);
 } 