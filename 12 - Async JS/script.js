// // Sync Programming
// console.log("First");
// console.log("Second");
// console.log("Third");

// // Async Programming
// console.log("First");
// setTimeout(() => console.log("Second"), 2000); // Delay of (2s)
// console.log("Third");

// // JS Callbacks for Async Operations
// const getData = (callback) => {
//   setTimeout(() => {
//     const data = "This is a data.";
//     callback(data);
//   }, 2000);
// }
// const processData = (data) => {
//   console.log("Processed data: ", data);
// }
// getData(processData);

// // Avoid too many callback functions
// // it will result to callback hell

// // Callback Hell
// const step1 = (callback) => {
//   setTimeout(() => {
//     console.log("Step 1 Complete");
//     callback();
//   }, 1000);
// }

// const step2 = (callback) => {
//   setTimeout(() => {
//     console.log("Step 2 Complete");
//     callback();
//   }, 1000);
// }

// const step3 = (callback) => {
//   setTimeout(() => {
//     console.log("Step 3 Complete");
//     callback();
//   }, 1000);
// }

// // Nested Callbacks
// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All Steps Complete");
//     })
//   })
// });


// Addressing Callback Hell using Promises
const stepOne = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 Complete");
      resolve();
    }, 1000)
  })
};

const stepTwo = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 Complete");
      resolve();
    }, 1000)
  })
};

const stepThree = () => { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 Complete");
      resolve();
    }, 1000)
  })
};

// Chaining Promises
stepOne()
  .then(stepTwo)
  .then(stepThree)
  .then(() => {
    console.log("All steps complete");
  }).catch((error) => {
    console.log("An error occured", error);
  })

// Async Await
const performSteps = async() => {
  try {
    await stepOne();
    await stepTwo();
    await stepThree();
    console.log("All steps complete")
  } catch (error) {
    console.error("An error occured", error);
  }
}
performSteps();