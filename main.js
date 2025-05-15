/*1

function getInitialOdds(n) {
    
   let arr = []

    for (let i = 1; arr.length < n; i++) {
        if (!(i%2 == 0)) {
            arr.push(i)
            
        }
        
    }   
    console.log(arr);
    
}

getInitialOdds(5)
*/

// 2
// function getEvenReverse(arr) {
//     let b = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 2 === 0) {
//             b.push(arr[i]);
//         }
//     }

//     return b;
// }

// console.log(getEvenReverse([4, 5, 7, 8, 6, 9]));

/*3
let n = [1, 2, 3, 4, 5];

let arr = [];

for (let i = 0; i < Math.floor(n.length / 2); i++) {
  arr.push(n[i]);
  arr.push(n[n.length - 1 - i]);
}

if (n.length % 2 !== 0) {
  arr.push(n[Math.floor(n.length / 2)]);
}
console.log(arr);
*/



// function rangeSum(arr, K, L) {
//     let y = 0
//     for (let i = K; i <= L; i++) {
//         y+=arr[i]

//     }
//     console.log(y);
// }

// rangeSum([1, 6, 9, 5, 8, 10, 15], 2 ,5 )





// function GetCalc(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   let maxIndex = 0;
//   let minIndex = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       maxIndex = i;
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//       minIndex = i;
//     }
//   }
//   arr.splice(maxIndex, 1, min);
//   arr.splice(minIndex, 1, max);

//   return arr;
// }

// console.log(GetCalc([7, 4, 9, 2, 3, 1, 5]));


// let n = 5

// let arr = []

// for (let i = 1; i <= n; i++) {
//     arr.push(2**i)
    
// }
// console.log(arr);


// function getSumArray(n, A, B) {
//     let arr = [A, B];

//     for (let i = 2; i < n; i++) {
//         let sum = 0;
//         for (let j = 0; j < i; j++) {
//             sum += arr[j];
//         }
//         arr.push(sum);
//     }

//     return arr;
// }

// console.log(getSumArray(5, 2, 3)); // [2, 3, 5, 10, 20]
