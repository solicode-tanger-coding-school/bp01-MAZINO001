const allLikes = document.getElementsByTagName("span")
// this for some reason count an an object
// const allButtons = document.getElementsByTagName("button")

// we use Array.from to turn it to an arrya the tforeach will work on it 
const allButtons = Array.from(document.getElementsByTagName("button"))



allButtons.forEach((button, index) => {
  let counter = 0;
  button.addEventListener("click", () => {
    allLikes[index].innerHTML = ++counter;
    console.log(allLikes[index]);
  });
});

/********************* exercide 2********************/
const allBoxes = document.getElementsByClassName("box")
const headerNumber = document.getElementById("header-Number")
const bobxesCount = allBoxes.length
headerNumber.innerHTML = bobxesCount



