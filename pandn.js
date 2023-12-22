let arr=[-4,-1,5,4,6,-7,3,1,-3];
let pcount=sum=0;
for(let i=0; i<= arr.length ;i++){
    if(arr[i] > 0){
        pcount++;
        sum = sum +arr[i];
    }   
}

console.log("Total Positive Numbers=",pcount);
console.log("Sum of Numbers=",sum);

