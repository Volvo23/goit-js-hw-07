const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let ulList = document.querySelector('#ingredients');

const createElements = ingredients.map(ingredient => {
    const createList = document.createElement('li');
    createList.textContent = ingredient;
    ulList.append(createList);
})
console.log(createElements);



// const list = document.getElementById("ingredients")
// console.log(list);

// const listItems = reduce((acc, ingredient) => {
//   let li = document.createElement("li");
//   li.textContent = ingredient;

//   acc.push(li)
//   return acc;
  
// }, []);
// list.append(listItems);
// console.log(...listItems);