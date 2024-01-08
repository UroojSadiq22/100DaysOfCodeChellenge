function myFunc(){
    let string = "My name is Urooj";

    function showFunc(){
        console.log(string);
    }
    return showFunc;
}
let bigFunc = myFunc(); bigFunc();