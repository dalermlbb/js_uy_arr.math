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





function rangeSum(arr, K, L) {
    let y = 0
    for (let i = K; i <= L; i++) {
        y+=arr[i]
        
    }
    console.log(y);
}

rangeSum([1, 6, 9, 5, 8, 10, 15], 2 ,5 )

