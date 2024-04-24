const print = () => {
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;

  if (end < start) console.log("Invalid Inputs");
  for (i=start ; i<=end ;i++) {
    console.log(i);
  }
}