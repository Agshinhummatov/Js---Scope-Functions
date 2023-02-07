"use strict"


// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.


//  function isDivided (n){


//     if(n % 21 == 0){

//         console.log("bolunur");
//     }else{
//         console.log("bolunmur")
//     }


// }

// isDivided(42)



// let isDivided =(n) =>{

//     if(n % 21 == 0){

//         console.log("bolunur");
//     }else{
//         console.log("bolunmur")
//     }

// }

// isDivided(45)



// 2)Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 


// function factorialize(num) {
//     if (num === 0 || num === 1)
//         return 1;
//     for (let i = num - 1; i >= 1; i--) {
//         num *= i;
//     }
//     return num;
// }

// console.log(factorialize(5));



// let factorialize=(num) =>{

//     if (num === 0 || num === 1)
//     return 1;
// for (let i = num - 1; i >= 1; i--) {
//     num *= i;
// }
// return num;

// }

// console.log(factorialize(6));


// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.


// let num = [ 2, 4 ]


// getSumPowwer(num);

// function getSumPowwer(num){

//     let result = 1;

//     for (let i = 0; i < num.length; i++) {

//         if (num[i] % 2 == 0){


//             result = num[i] * num[i];
//             result +=num[i];
//         }

//     }

//     console.log(result);


// }








// let getSumPowwer =(num) =>{

//      let result = 1;

//     for (let i = 0; i < num.length; i++) {

//         if (num[i] % 2 == 0) {


//             result = num[i] * num[i];
//             result += num[i];
//         }

//     }

//     console.log(result);

// }



// let num = [ 2, 4 ]

// getSumPowwer(num);



// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.



// function login(username, password) {

//     if (username == "cavid@code.edu.az" && password == 12345) {

//         console.log("Girish olundu");

//     } else {

//         console.log("Mail ve yaxud password sehvdir");
//     }


// }


// login("cavid@code.edu.az",12345)



// let login = (username, password) => {


//     if (username == "cavid@code.edu.az" && password == 12345) {

//         console.log("Girish olundu");

//     } else {

//         console.log("Mail ve yaxud password sehvdir");
//     }

// }

// login("cavid@code.edu.az",12345);



// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir



// function getOddSum (num){

//     let result =0;

//     for (let i = 0; i < num.length; i++) {

//         if (num[i] % 2 ==1) {
//             result += num[i]
//         }
//     }

//     return result;

// }

// let num = [2,7];
// console.log(getOddSum(num));


// let getOddSum =(num)=> {

//     let result =0;

//     for (let i = 0; i < num.length; i++) {

//         if (num[i] % 2 == 1){

//             result += num[i]
//         }
//     }

//     return result;

// }

// let result=[2,6,7,9];

// console.log(getOddSum(result));



// 6)Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.



// function getEvven(num){

//     let count = 0;
//     for (let i = 0; i < num.length; i++){

//         if (num[i] % 2 ==0){

//            count++;

//         }
//     }

//     return count;



// }

// let result = [1,2,3,4,5,6];

// console.log(getEvven(result));



// let getEvven = (num) =>{


//     let count = 0;
//     for (let i = 0; i < num.length; i++) {

//         if (num[i] % 2 == 0) {

//             count++;

//         }
//     }

//     return count;

// }



// let result = [1,2,3,4];
// console.log(getEvven(result));




















