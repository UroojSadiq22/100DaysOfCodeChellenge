for(let index = 1; index < 10; index++){
    if(index == 5){
        console.log('detected 5');
        continue;
    }
    console.log('value =' + index)
}

for(let index = 1; index < 10; index++){
    if(index == 5){
        console.log('detected 5');
        break;
    }
    console.log('value =' + index)
}