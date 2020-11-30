

 let ul = document.getElementById("categories");
// let items = document.querySelectorAll(".item")

let items = ul.querySelectorAll(".item")


items.forEach((listItem) => {
    // console.log(listItem);
    let h2 = listItem.querySelector('h2');
    let li = listItem.querySelectorAll('li');
    // console.log(`Категория: ${h2.textContent}`);

    console.log(`Категория: ${h2.textContent}, Количество элементов ${li.length}`);
})


//  console.log(items);
//  console.log(`в с писке ${items.length} категории`);

// const items = document.querySelectorAll('li.item');
// console.log(У списку ${items.length} категорії.);
// items.forEach(elem =>
//     console.log(`Категория: ${elem.firstElementChild.textContent}
//     Количество элементов: ${elem.lastElementChild.children.length}`)
// );