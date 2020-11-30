const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

let ul = document.querySelector("#gallery");

images.forEach((item) => { 
    ul.insertAdjacentHTML("beforeend", `<li><img src="${item.url}", alt="${item.alt}"></li>`);
}); 

// const ulRef = document.querySelector("#gallery");
// const createLi = images.reduce((acc, imgObj) => {
//   const li = document.createElement("li");
//   li.classList.add("gallery__img");
//   // img.setAtribute("src", img.url);
//   // img.setAtribute("src", alt.url);
//   img.src = imgObj.url;
//   img.alt = imgObj.alt;
//   li.append(img);
//   acc.push(li);
//   return acc;
// }, [])
// console.log(createLi);
// ulRef.append(createLi);