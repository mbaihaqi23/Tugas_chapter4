//const paragraf1 = document.getElementById("p1");
//paragraf1.innerText = "hei there"
//paragraf1.style.backgroundColor = 'orange';

//const paragraf2 = document.getElementsByName("p2");
//paragraf2[0].style.backgroundColor = 'blue';
//paragraf2[1].style.backgroundColor = 'yellow';

const button = document.getElementById("add");
const paragraf1 = document.getElementById("p1");
// let newElement = document.createElement("div");
// newElement.innerText = "New Element";


let newId = 2;
button.onclick = function () {
  const parent = document.getElementById("wrapper");
  let clonedElement = paragraf1.cloneNode(true);
  clonedElement.id = "p"+newId;
  parent.append(clonedElement);
  ++newId;
  //   let clonedElement = parent.append(newElement);
};