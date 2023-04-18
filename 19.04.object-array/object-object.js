////////////////////////////////////////////////////the first
const arr1 = ['guba', 'mingecevir', 'baku', 'gazag', 'gence', 'shirvan'];
function getUpper(item){
    return arr1.map(item=>item[0].toLocaleUpperCase()+item.slice(1,-1)+item.at(-1).toLocaleUpperCase())
}
console.log(getUpper());
//////////////////////////////////////////////////////the second(1)
let text = 'We are MERN-Stack developers'
let result = text.replace("MERN-Stack", "Front-end");
console.log(result);
/////////////////////////////////////////////the second(2)
console.log("We are MERN-Stack developers".replaceAll("e", "a"));
///////////////////////////////////////////////the second(3)
console.log("We are MERN-Stack developers".concat(" in Microsoft!"));
///////////////////////////////////////////the second(4)
const newArr = []
text.split('').map((item, index) => item.toLowerCase() === 'r' ? newArr.push(index) : newArr)
console.log(newArr);
/////////////////////////////////////////////////////////the second(5)
console.log(text.toLocaleLowerCase().indexOf("r",7));
///////////////////////////////////////////////////////the second(6)
let vowels = ['a', 'e', 'o', 'u', 'i']
let arr=[...new Set(Array.from(text.toLocaleLowerCase()).filter((x)=>vowels.includes(x)))]
console.log(arr);
//////////////////////////////////////////////the third
const arr3 = [
    {
        region: 'Yasamal',
        area: 170,
    },

    {
        region: 'Nizami',
        area: 20,
    },

    {
        region: 'Nesimi',
        area: 10,
    },

    {
        region: 'Sebail',
        area: 30,
    },
    {
        region: 'Xetai',
        area: 30,
    },
]
console.log(arr3.reduce((sum,curr)=>curr.region.length===6?sum+curr.area:sum,0));
///////////////////////////////////////////////////////////the fourth
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6]
function sortNumbersAscending(a, b) {
    return a - b;
}
const sortedNumbers = arr4.sort(sortNumbersAscending);
console.log(sortedNumbers);
//////////////////////////////////////////////////////the fifth
const arr5 = [5, [8], [9, ['hi', ["don't touch me"], [0]], '9']]
console.log(arr5.flat(3));
//////////////////////////////////////////////////////the sixth
const colors = ['green', 'blue', 'yellow', 'black', 'red', 'brown', 'white', 'gray', 'violet', 'pink']
const result1=colors.sort((a,b)=>a.length-b.length||a.localeCompare(b))
console.log(result1);

/////////////////////////////////////////////////////////OBJECT-ARRAY////////////////////////////////////
///////////////////////////////////////////////////the first
let names1 = ["Adam", "Sarah", "Malcolm"] 
let names2 = ["Harry", "Newt", "Luna", "Cho"] 
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] 
 let arr7 = names1.map((array2) => array2[0]).join('')
 let arr8 = names2.map((array3) => array3[0]).join('')
 let arr9 = names3.map((array4) => array4[0]).join('')
 console.log(arr7);
 console.log(arr8);
 console.log(arr9);
 ///////////////////////////////////////////////the second
 const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender: 'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender: 'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender: 'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female' },
]
////////////////////////////////////////////////////the second(1)
console.log(users.filter((item)=>item.uni==="UNEC"&&item.surname[0]==="R"));
/////////////////////////////////////////////////////the second(2)
console.log(users.filter((item)=>item.age==="22"&&item.name[0]==="A"));
///////////////////////////////////////////////////the second(3)

//////////////////////////////////////////////////the third
const array = ["a", "b", "c", "d", ];
const shuffle = array.sort((a, b) => 0.5 - Math.random());
console.log(array);
//////////////////////////////////////////////////the fouth
const array1 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]
//////////////////////////////////////////////////////the fifth
let num1 = 246 //246642
let num2 = 102 //102201
let num3 = 152 //152251

