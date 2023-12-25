let str = "My name is Urooj";
let vowels =["a" , "e" , "i" , "o" , "u"];
let count=0;
for (let i of str.toLowerCase()){
  if (vowels.includes(i)){
     count++;
  }
}

console.log(count);