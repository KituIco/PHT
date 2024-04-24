const print = () => {
  let arr = JSON.parse(document.getElementById("numbers").value);
  let max = arr[0];
  
  arr.forEach( element => {
    if(max < element) {
      max = element;
    }
  });

  console.log(max);
}