const frontEnd=['HTML','CSS','JS','React','Redux']//the first
const backEnd=['Node','Express','MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack);
const ages=[19,22,19,24,20,25,26,24,25,24]//the second
function average(arr){
    let sum=0
    for (let i = 0; i < ages.length; i++) {
        sum+=ages[i]/ages.length
    }
    return Math.trunc(sum)
}
console.log(average(ages));
const countries=["Albania","Bolivia","Canada","Denmark","Ethiopia","Finland","Germany","Hungary","Ireland","Japan","Kenya"];//the third
let newCountries = countries.map((el, i, arr) => {
    return `${i}. ${el}`;
  });
  console.log(newCountries);
  let numbers = [ 4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2,5, 6, 3, 7, 3, 7, ];//the fourth
let sum=0;
for (let i = 0; i < numbers.length; i++) {
  sum+=numbers[i];
}
console.log(sum);
const todos = [
    {
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: true,
    },
    {
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
  ];
  function find (arr){//the fifth
    return arr.filter((element)=>element.completed===true)
  }
  console.log(find(todos));
  function find (arr){//the sixth
    return arr.filter((element)=>element.title.length>=40)
  }
  console.log(find(todos));