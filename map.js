let arr = ["chain" , "catch" , "pack" , "go"];
let arr1 = arr.map(mergeName, "The");
function mergeName(x){
    return this+" "+x+"ing";
}
console.log(arr1)















// let employees = [
//     {firstName : "Farhan", lastName: "Khan"},
//     {firstName : "Muhammad", lastName: "Ali"},
//     {firstName : "Taha", lastName: "Bilal"},
//     {firstName : "Salman", lastName: "Shah"}
//   ];
  
// let employeesFullname = employees.map(fname)

//   function fname(x){
//     return(x.firstName + " " + x.lastName)
//   }
  
// console.log(employeesFullname);