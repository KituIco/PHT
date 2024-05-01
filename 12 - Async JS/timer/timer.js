// get necessary elements
const tens = document.getElementById("tens");
const ones = document.getElementById("ones");
const enter = document.getElementById("enter");
const reset = document.getElementById("reset");
const minutes = document.getElementById("minNum");
const seconds = document.getElementById("secNum");

// add listener for buttons on click
enter.addEventListener("click", start);
reset.addEventListener("click", resets);


// executes when start button is clicked
function start(e) {
  e.preventDefault();
  
  // checksif value is valid
  let value = parseInt(tens.value + ones.value);
  console.log(value);
  if ( !(value <= 60 && value >= 1) ) {
    alert("Please enter proper input.");
    return;
  } 

  // starts/restarts the timer
  resets();
  if(enter.innerHTML == "Restart the Timer") {
    setTimeout(() => countdown(value), 1000);
  } else {
    countdown(value);
  }  
}


// executes when reset button is clicked
function resets(e = null) {
  if(e) {
    e.preventDefault();
  }

  // resets min and sec to 0
  updateNum(minutes,0);
  updateNum(seconds,0);
  console.log("Reseted");
}


// resolves promise every 1 sec
const oneSecond = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
};


// performs countdown when called by start
async function countdown(minute, second = 0) {
  try {
    // updates min and sec with input, updates view
    updateNum(minutes,minute);
    updateNum(seconds,second);
    enter.innerHTML = "Restart the Timer";
    enter.classList.add("warning");

    // loop to decrease time every one sec, exits on negative time
    while(minutes.innerHTML > 0 || seconds.innerHTML > 0 && !(minutes.innerHTML < 0)) {  
      await oneSecond();
      second = parseInt(seconds.innerHTML) - 1;

      if(second == -1 && minutes.innerHTML > 0) {
        minute = parseInt(minutes.innerHTML) - 1;
        second = 59;
        updateNum(minutes,minute);
      }
      updateNum(seconds,second);
    }

    // resets min and sec, updates view
    updateNum(minutes,0);
    updateNum(seconds,0);
    enter.innerHTML = "Start the Timer";
    enter.classList.remove("warning");
  } 
  catch (error) {
    console.error(error)
  }
}


// updates innerHTML, appends 0 to value if less than 10
function updateNum(element, value) {
  if(value < 10) element.innerHTML = "0" + value;
  else element.innerHTML = value;
}


resets();