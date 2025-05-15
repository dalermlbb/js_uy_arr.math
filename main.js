// String methods


/*
1.slice(startIndex, endIndex) (+negative) → yangi string

//slice kesish uchun kerak . kesish uchun boshlanish index 
// va tugash index beriladi, boshlanish va tugash indexlarni 
// orasini kessib beradi

misol: let str = daler turaqulov 

let newstr = str.slice(0,5)

output: daler

Eslatma! slice negativ qabul qiladi

_________________________________________________________________

2.substring(startIndex, endIndex) → yangi string

//slice bilan bir xil farqi negativ qiymat qabul qilmaydi qabul yani 

_________________________________________________________________


3.toLowerCase(), toUpperCase() → yangi string

//toLowerCase(), harflarni hamsini kichik
//toUpperCase(), harflarni hamsini katta

_________________________________________________________________


4.replace, replaceAll() → yangi string

//replace joyini almash tirish
//replaceAll hamasini topbib almashtiradi

misol: let str = daler turaqulov 

let newstr = str.replace('daler','damir')

output: damir turaqulov 

_________________________________________________________________

5.concat() → yangi string

concat yoniga qoshish

let str1 = ' daler'
let str2 = ' turaqulov'

let newstr = str1.concat(str2)

output:dalet turaqulov

_________________________________________________________________


6.trim(), trimStart(), trimEnd() → yangi string

probel larni yoq qiladi

let s =                 d             .

s.trim()

output:d

_________________________________________________________________


7.padStart(nechtaSomBolishi, 'agar bomasa nima qoyish kerak ligi'), padEnd(reachNumber, item) → yangi string

son yoki harf lar yetmasa bror nima qoshish

_________________________________________________________________

8.charAt(), charCodeAt()


console.log('hello'.charAt(1));
console.log('hello'.charCodeAt(1));

e
101
_________________________________________________________________


9.repeat(number) → new string

takrorlash

console.log(''hello'.repeat(10))takrorlanadi 10 marta

_________________________________________________________________


10.split() → new array

stringi eray ga otkazib beradi

_________________________________________________________________

12.startsWith(), endsWith(), includes() → Boolean

startsWith('salom') salom bilan boshlangan bosa true 
endsWith('salom') salom bilan tugagan bosa true true

_________________________________________________________________


13.indexOf(), lastIndexOf(), search() → index

indexOf() malum bir sozni nechinchi index dan boshlan ganligini aytib beradi
lastIndexOf() oxirgi sozni indexini beradi topomasa boshidagini beradi
search() buyam shunaqa
_________________________________________________________________

14.eval()

*/


//-----------------------------------------------------------------------------------------------------------------------------------------------------------



//let str1 = ' daler'
//let str2 = ' turaqulov'

//let newstr = s

//console.log(newstr);
 







// Array methods 

let meva = ['olma','banan','qulbnay','apelsin','kiwi']

// console.log(meva.toReversed());

// console.log(meva);


// toReversed()

// let length = meva.length

// for (let i = 0; i < length; i++) {
//     meva.pop()
//     console.log(meva);
    
// }

// let arr = meva.push('eshmat')

// meva.pop()
// meva.push(false)

// console.log(meva);



/*
1.at(index)nechinchsi     da 

let meva = ['olma','banan','qulbnay','apelsin','kiwi']

console.log(meva.at(0));

autput:olma

_________________________________________________________________


2.toString(), join()

toString() sting qilib beradi 
join() ikkalasi bir xil farqi join da 
orasida nima qoyishimiz ozimiz belgilaymiz

_________________________________________________________________


3.push(), pop()

push() array oxirisida bitta element qoshadi qoshadi
pup() teskarisi yani oxiridan nimadir olib tashay di
_________________________________________________________________


4.unshift(), shift()

unshift() array boshidan bitta element qoshadi qoshadi
shift() teskarisi yani boshidan nimadir olib tashay di

_________________________________________________________________


5.reverse() vs toReversed()

reverse() teskari qilish
reverse() teskari qilish faqat ozgarubchisiga tasir qilmaydi

_________________________________________________________________


6.splice(boshlanishIndex, Nechta, qoshish, va yana qoshsak ham boladi yani op tasha masdan)

splice ham qoshadi ham obtashash ham ozgar tiradi


_________________________________________________________________


7.fill(value, startIndex, endIndex) [startIndex, endIndex)

nimdir bilam toldirish toldirish

_________________________________________________________________


8.slice(startIndex, endIndex) → new array [startIndex, endIndex)


_________________________________________________________________


9.includes(el) → boolean


_________________________________________________________________


10.indexOf(), lastIndexOf()


_________________________________________________________________


11.concat() → new array


_________________________________________________________________


*/

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

function getEvenReverse(arr) {
    
}