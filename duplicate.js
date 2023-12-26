let array = [5,2,3,2,5,5,1,7,2,1,5,8];
const result = [];

for (let i = 0; i < array.length; i++){
    let exists = false;
    for (j = 0; j < result.length; j++)
    {
        if (array[i] == result[j])
        {
          exists = true;
          break;
        }
      }
      if (!exists){
        result.push(array[i]);
      }
    }
console.log(result);