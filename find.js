let arr =[
        {id : "102" , status : "incomplete"},
        {id : "1093" , status : "incomplete"},
        {id : "3024" , status : "incomplete"},
        {id : "107" , status : "incomplete"},
        {id : "1521" , status : "incomplete"},
        {id : "1922" , status : "incomplete"},
    ];
    var b = arr.find(checkStatus);
    function checkStatus(x){
        if(x.id == "3024"){
          return  x.status = "completed";
        }
    }
    console.log(arr);
    console.log(b);



// let arr = [
//     {Id : 103 , Name : "Aslam" , Age : 24},
//     {Id : 104 , Name : "Ali" , Age : 16},
//     {Id : 105 , Name : "Faraz" , Age : 30},
//     {Id : 106 , Name : "Bilal" , Age : 20},
// ]
//  var b = arr.find(check);
//  function check(x){
//     return x.Id == 105;
//  }
//  console.log(b);