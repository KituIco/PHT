const isUnique = (set, num) => {
  return set.size == num.toString().length;
}

const digitSum = (arr, pre = '', k = 3) => {
  if (!k) return parseInt(pre);
  let sum = 0;
  for (let i = 0; i < 5; i++) {
    if (!pre.includes(arr[i])) {
      sum = sum + digitSum(arr, pre + arr[i], k-1);
    }
  }
  return parseInt(sum);
} 

for(let i = 12345; i <= 98765; i++) {
  let arr = i.toString().split('');
  if (isUnique(new Set(arr), i) && digitSum(arr) === i) {
    console.log(i);
  } 
}

