const student = {
    name : "Saira",
    age : 22,
    gender : 'female',
    contact : {
        phone : '123 456 000',
        email : 'abc@gmail.com'
    }
};
console.log(student.contact.fax?.email);

let students = [
    {name : "Saira", age : 22},
    {name : "Aliya", age : 22},
    {name : "Adeena", age : 22},
    {name : "Amber", age : 22}
];
console.log(students[5]?.age);


// let arr = ["shazia" , "aliyah" , "bareera" , "kinza" , "sara" , "faria" , "dua" , "summaiyah" , "ammara" ];
// let arr1 = arr.filter(strlength).map(strUppercase).sort();
// function strlength(x){
//     return x.length == 6;
// }
// function strUppercase(x){
//     return x.toUpperCase();
// }
// function single(prev, next){
//     return (prev + " " + next)
// }
// console.log(arr1);


// let arr = ["shazia" , "aliyah" , "bareera" , "kinza" , "sara" , "faria" , "dua" , "summaiyah" , "ammara" ];

// let arr1 = arr.sort().filter((x)=>{
//     return x.length == 6;
// }).map((x)=>{
//     return x.toUpperCase();
// }).reduce((prev, next)=>{
//     return (prev + " " + next)
// });

// console.log(arr1);


// let arr = [3 , -2.1 , 17.4 , -20 , 72.1352 , -36.632 , -16.9 , 42.791];
// let sum = 0 , average = 0;
// let arr1 = arr.filter(pos).reduce(avg);
// function pos(x){
//     return x > 0;
// }
// function avg(prev, next){
//     sum = prev + next;
//     return sum;
// }
// console.log(sum);
// console.log(arr1);
