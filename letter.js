let word = "i love karachi";
function capitalizeEachWord(string)
{
    const str_arr = string.split(' ')

    for(i = 0; i < str_arr.length; i++)
    {
        str_arr[i] = str_arr[i][0].toUpperCase() + str_arr[i].slice(1);
    }
    return str_arr.join(' ')
}


console.log(capitalizeEachWord(word))