const fs = require("fs");

const content = "Hello, Node.js";

fs.writeFile("output.txt", content, "utf8", (err) => {
  if(err){
    console.error(err);
    return;
  }
  console.log("Data written to file successfully.");
})