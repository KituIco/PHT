// get necessary elements
const tens = document.getElementById("tens");
const ones = document.getElementById("ones");
const enter = document.getElementById("enter");
const reset = document.getElementById("reset");
const minutes = document.getElementById("minNum");
const seconds = document.getElementById("secNum");

// add listener for buttons on click
enter.addEventListener("click", starts);
reset.addEventListener("click", resets);


// updates innerHTML, appends 0 to value if less than 10
const updateNum = (element, value) => {
  if(value < 10) element.innerHTML = "0" + value;
  else element.innerHTML = value;
}
// updateNum(minutes, 21);
// updateNum(seconds, 48);


// executes when reset button is clicked
function resets(e) {
  if(e) {
    e.preventDefault();
  }
  updateNum(minutes,0);
  updateNum(seconds,0);
}
// resets(null)


// resolves promise every 1 sec
const oneSecond = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("RESOLVED! 1 second has passed.");
      resolve();
    }, 1000)
  })
};
// oneSecond();
// console.log("Display me immediately!");


// notice earlier that the timer countdowns yet we were able to interact with buttons
// performs countdown when called by start
const countdown = async(minute, second = 0) => {
  try {
    // updates min and sec with input, updates view
    updateNum(minutes,minute);
    updateNum(seconds,second);
    enter.innerHTML = "Restart the Timer";
    enter.classList.add("warning");

    // loop to decrease time every one sec, exits loop on negative time
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

    // resets and updates the view
    updateNum(minutes,0);   // go back to reset button, before going here
    updateNum(seconds,0);   // go back to reset button, before going here
    enter.innerHTML = "Start the Timer";
    enter.classList.remove("warning");
  } 
  catch (error) {
    console.error(error)
  }
}
// go back to reset button

// executes when start button is clicked
function starts(e) {
  e.preventDefault();
  
  // alerts if value is not valid
  let value = tens.value + parseInt(ones.value);
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


resets(null);