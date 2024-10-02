const allLikes = document.getElementsByTagName("span");
// we use Array.from to turn it to an arrya the tforeach will work on it
const allButtons = Array.from(document.getElementsByClassName("btn"));

allButtons.forEach((button, index) => {
  let counter = 0;
  button.addEventListener("click", () => {
    allLikes[index].innerHTML = ++counter;
  });
});

/********************* exercide 2********************/
const allBoxes = document.getElementsByClassName("box");
const headerNumber = document.getElementById("header-Number");
const bobxesCount = allBoxes.length;
headerNumber.innerHTML = bobxesCount;

/********************************************bonus : adding comments ************************************** */

const ALLTextArea = Array.from(document.getElementsByClassName("comment"));
const theBox = Array.from(document.getElementsByClassName("box"));
const AllAddCommentBtn = Array.from(
  document.getElementsByClassName("addcomment")
);
// this one from chat GPT to get the accurate time and date the time
const date = new Date();
const formattedDate = date.toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
}).replace(',', '');

AllAddCommentBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    // for ading comment paragraph
    let inervalue = ALLTextArea[index].value;
    const newParagraph = document.createElement("p");
    newParagraph.classList.add("mycommnet");
    newParagraph.textContent = inervalue;
    theBox[index].appendChild(newParagraph);
    ALLTextArea[index].value = "";
    //for adding the date in the comment
    const DtaeSpan = document.createElement("p");
    DtaeSpan.classList.add("datespan");
    DtaeSpan.textContent = formattedDate;
    newParagraph.appendChild(DtaeSpan);
  });
});
