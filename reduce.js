let arr = [1, 2 , 3 , 4 , 5 , 6 , 7];
let arr1 =[];
let sum = 0;
for (let i=0 ; i<arr.length ; i++){
    if(arr[i]%2 == 0){
        arr1.push(arr[i]);
        }
    }
    sum = arr1.reduce(add);

function add(prev , current){
        return prev + current;
    }

 console.log(arr1);
 console.log(sum);





// let arr = [1, 2 , 3 , 4 , 5];
// let sum = arr.reduce(add);

// function add(prev , current){
//         return prev + current;
//     }
// console.log("The sum of array is "+sum);
