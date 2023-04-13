//the first
let arr1=[1,2,3];
let arr2=[80,5,100]
let arr3=[-500,0,50]
function getFirstValue(){
}
  console.log(arr1[0]);
  console.log(arr2[0]);
  console.log(arr3[0]);
  //the second
  let arr4=[1,2,3]
  let arr5=["cat","dog","duck"]
  let arr6=[true,false,true]
  function getLastItem(){
  }
  console.log(arr4[2]);
  console.log(arr5[2]);
  console.log(arr6[2]);
  //the third(first)
  const findIndex = (arr, x)=>{
let a;
for (let i = 0; i < arr.length; i++) {
    if(arr[i]!==x){
        a=i;
    } else{
        return i;
    }
    
}
  }
  console.log(findIndex(["hi","edabit","fgh","abc"],"fgh"));
  console.log(findIndex(["red","blue","Blue","green"],"blue"));
  console.log(findIndex(["a","g","y","d"],"d"));
  console.log(findIndex(["Pineapple","Orange","Grape","Apple"],"Pineapple"));
  //the third(second)
  
  //the fourth
  function addition(num1,num2){
let result=num1+num2
return result
  }
  let plus1=addition(3,2)
  let plus2=addition(-3,-6)
  let plus3=addition(7,3)
  console.log(plus1);
  console.log(plus2);
  console.log(plus3);
  //the fifth
function numbers(a,b){
  let sum=a+b;
  if(a==22||b==15||sum==100){return true}else{return false}
 }
console.log(numbers(22,15));
console.log(numbers(83,34));
console.log(numbers(3,77));
//the eighth
const arr8=[
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    },
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    },
    {
        name:'my name',
        surname:'my surname',
        city:'my city'
    }
    ]
    function fillInfo(){
        for(let item of arr8){
            item.name="Narmin"
            item.surname="Gasimova"
            item.city="Samux"
        }
        return arr8
    }
    console.log(fillInfo());