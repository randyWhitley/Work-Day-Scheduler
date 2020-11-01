// Select everything
//const dateElement = document.getElementById("date");

//const saveElements = document.getElementsByClassName("save");
//const contentElements = document.getElementsByClassName("content");
// select all content fields
const nineAM = document.getElementById("9_input");
const tenAM = document.getElementById("10_input");
const elevenAM = document.getElementById("11_input");
const twelvePM = document.getElementById("12_input");
const onePM = document.getElementById("1_input");
const twoPM = document.getElementById("2_input");
const threePM = document.getElementById("3_input");
const fourPM = document.getElementById("4_input");
const fivePM = document.getElementById("5_input");

//display date and time on top of page...
const currentday = document.getElementById("currentDay");
currentday.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");


const saveNine = document.getElementById('saveNine');
const saveNineField = () => {
  let nineAMText = nineAM.value;
  localStorage.setItem("9", nineAMText);

  console.log(localStorage.getItem("9"));
};
saveNine.addEventListener("click", saveNineField);



const saveTen = document.getElementById("saveTen");
const saveTenField = () => {
  let tenAMText = tenAM.value;
  localStorage.setItem("10", tenAMText);

  console.log(localStorage.getItem("10"));
};
saveTen.addEventListener("click", saveTenField);

const saveEleven = document.getElementById("saveEleven");
const saveElevenField = () => {
  let elevenAMText = elevenAM.value;
  localStorage.setItem("11", elevenAMText);

  console.log(localStorage.getItem("11"));
};
saveEleven.addEventListener("click", saveElevenField);

const saveTwelve = document.getElementById("saveTwelve");
const saveTwelveField = () => {
  let twelvePMText = twelvePM.value;
  localStorage.setItem("12", twelvePMText);
};
saveTwelve.addEventListener("click", saveTwelveField);

const saveOnePM = document.getElementById("saveOnePM");
const saveOnePMField = () => {
  let onePMText = onePM.value;
  localStorage.setItem("1", onePMText);
  console.log(localStorage.getItem("1"));
};
saveOne.addEventListener("click", saveOnePMField);

const saveTwo = document.getElementById("saveTwo");
const saveTwoField = () => {
  let twoPMText = twoPM.value;
  localStorage.setItem("2", twoPMText);
  console.log(localStorage.getItem("2"));
};
saveTwo.addEventListener("click", saveTwoField);

const saveThree = document.getElementById("saveThree");
const saveThreeField = () => {
  let threePMText = threePM.value;
  localStorage.setItem("3", threePMText);
  console.log(localStorage.getItem("3"));
};
saveThree.addEventListener("click", saveThreeField);

const saveFour = document.getElementById("saveFour");
const saveFourField = () => {
  let fourPMText = fourPM.value;
  localStorage.setItem("4", fourPMText);
  console.log(localStorage.getItem("4"));
};
saveFour.addEventListener("click", saveFourField);

const saveFive = document.getElementById("saveFive");
const saveFiveField = () => {
  let fivePMText = fivePM.value;
  localStorage.setItem("5", fivePMText);
  console.log(localStorage.getItem("5"));
};
saveFive.addEventListener("click", saveFiveField);

//setting values back from localstorage to input --start







//--end

let toDoList = [];

const initPlanner = () => {
  updateContent();

  checkTimes () ;
};

function updateContent() {
  nineAM.value = localStorage.getItem("9");
  tenAM.value = localStorage.getItem("10");
  elevenAM.value = localStorage.getItem("11");
  twelvePM.value = localStorage.getItem("12");
  onePM.value = localStorage.getItem("1");
  twoPM.value = localStorage.getItem("2");
  threePM.value = localStorage.getItem("3");
  fourPM.value = localStorage.getItem("4");
  fivePM.value = localStorage.getItem("5");
}

const checkTimes = () => {
  let currentTime = moment().hour(); //moment().hour();13
  //currentTime = 11;
  if (currentTime === 9) {
    nineAM.style.backgroundColor = "#FFA07A";
  } else if (currentTime === 10) {
    nineAM.style.backgroundColor = "grey";;
    nineAM.setAttribute("readOnly", true);
    tenAM.style.backgroundColor = "#ff0000";
  } else if (currentTime === 11) {
    nineAM.style.backgroundColor = "grey";
    nineAM.setAttribute("readOnly", true);
    tenAM.style.backgroundColor = "grey";
    tenAM.setAttribute("readOnly", true);
    elevenAM.style.background = "#ff0000";
  } else if (currentTime === 12) {
    nineAM.style.body.backgroundColor = "grey";
    nineAM.setAttribute("readOnly", true);
    tenAM.style.body.backgroundColor = "grey";
    tenAM.setAttribute("readOnly", true);
    elevenAM.style.body.backgroundColor = "grey";
    elevenAM.setAttribute("readOnly", true);
    twelvePM.style.body.backgroundColor = "#ff0000";
  } else if (currentTime === 13) {
    nineAM.style.body.backgroundColor = "grey";
    nineAM.setAttribute("readOnly", true);
    tenAM.style.body.backgroundColor = "grey";
    tenAM.setAttribute("readOnly", true);
    elevenAM.style.backgroundColor = "grey";
    elevenAM.setAttribute("readOnly", true);
    twelvePM.style.backgroundColor = "grey";
    twelvePM.setAttribute("readOnly", true);
    onePM.style.backgroundColor = "#ff00000";
  } else if (currentTime === 14) {
    nineAM.style.backgroundColor = "grey";
    nineAM.setAttribute("readOnly", true);
    tenAM.style.backgroundColor = "grey";
    tenAM.setAttribute("readOnly", true);
    elevenAM.style.backgroundColor = "grey";
    elevenAM.setAttribute("readOnly", true);
    twelvePM.style.backgroundColor = "grey";
    twelvePM.setAttribute("readOnly", true);
    onePM.style.backgroundColor = "grey";
    onePM.setAttribute("readOnly", true);
    twoPM.style.backgroundColor = "#ff0000";
  } else if (currentTime === 15) {
    nineAM.style.backgroundColor = "grey";
    nineAM.setAttribute("readOnly", true);
    tenAM.style.backgroundColor = "grey";
    tenAM.setAttribute("readOnly", true);
    elevenAM.style.backgroundColor = "grey";
    elevenAM.setAttribute("readOnly", true);
    twelvePM.style.backgroundColor = "grey";
    twelvePM.setAttribute("readOnly", true);
    onePM.style.backgroundColor = "grey";
    onePM.setAttribute("readOnly", true);
    twoPM.style.backgroundColor = "grey";
    twoPM.setAttribute("readOnly", true);
    threePM.style.backgroundColor = "#ff0000";
  } else if (currentTime === 16) {
    nineAM.style.backgroundColor = "grey";
    nineAM.setAttribute("readOnly", true);
    tenAM.style.backgroundColor = "grey";
    tenAM.setAttribute("readOnly", true);
    elevenAM.style.backgroundColor = "grey";
    elevenAM.setAttribute("readOnly", true);
    twelvePM.style.backgroundColor = "grey";
    twelvePM.setAttribute("readOnly", true);
    onePM.style.backgroundColor = "grey";
    onePM.setAttribute("readOnly", true);
    twoPM.style.backgroundColor = "grey";
    twoPM.setAttribute("readOnly", true);
    threePM.style.backgroundColor = "grey";
    threePM.setAttribute("readOnly", true);
    fourPM.style.backgroundColor = "#ff0000";
  } else if (currentTime === 17) {
    nineAM.style.backgroundColor = "grey";
    nineAM.setAttribute("readOnly", true);
    tenAM.style.backgroundColor = "grey";
    tenAM.setAttribute("readOnly", true);
    elevenAM.style.backgroundColor = "grey";
    elevenAM.setAttribute("readOnly", true);
    twelvePM.style.backgroundColor = "grey";
    twelvePM.setAttribute("readOnly", true);
    onePM.style.backgroundColor = "grey";
    onePM.setAttribute("readOnly", true);
    twoPM.style.backgroundColor = "grey";
    twoPM.setAttribute("readOnly", true);
    threePM.style.backgroundColor = "grey";
    threePM.setAttribute("readOnly", true);
    fourPM.style.backgroundColor = "grey";
    fourPM.setAttribute("readOnly", true);
    fivePM.style.backgroundColor = "#ff0000";
  } else if (currentTime === 18) {
    nineAM.style.backgroundColor = "grey";
    nineAM.setAttribute("readOnly", true);
    tenAM.style.backgroundColor = "grey";
    tenAM.setAttribute("readOnly", true);
    elevenAM.style.backgroundColor = "grey";
    elevenAM.setAttribute("readOnly", true);
    twelvePM.style.backgroundColor = "grey";
    twelvePM.setAttribute("readOnly", true);
    onePM.style.backgroundColor = "grey";
    onePM.setAttribute("readOnly", true);
    twoPM.style.backgroundColor = "grey";
    twoPM.setAttribute("readOnly", true);
    threePM.style.backgroundColor = "grey";
    threePM.setAttribute("readOnly", true);
    fourPM.style.backgroundColor = "grey";
    fourPM.setAttribute("readOnly", true);
    fivePM.style.backgroundColor = "grey";
    fivePM.setAttribute("readOnly", true);
  }
};

initPlanner();

// past present and future ...
//Checking time to determine present, past, or future

// get the element that the info goes into

// decide on what it should look like
// and then update it...
// should this run in a loop and update the clock reguraly?
// create timeblocks with inputs and buttons
// loop and dynamically or I could hard code it.
// add events to the submit button to save what is in the
//     input to local storage
//  get the value out of local storage and populate
//     the input with the data
// check to see what the color of the input should be based on the time
//      moment?
// look at the css for classes later for this
// store data in localstrage as an object where the key is the hour of the day...
