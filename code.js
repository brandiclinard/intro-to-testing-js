// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function add(num1, num2){
    if(typeof num1 === 'string' || typeof num2 === 'string'){
        return false;
    }else{
        return num1 + num2;
    }
}

function sayHello(input){

    if (typeof input === 'string') {
        return "Hello, " + input + "!";
    // }else if () {
    //     return helloWorld();
    }else{
        return helloWorld();
    }
}

function isFive(input){
    if((input === 5) || (Number(input) === 5)){
        return true;
    }else{
        return typeof input === 'boolean';
    }
}

function isEven(input){
    if((parseInt(input)) % 2 === 0) {
        return true;
    }else{
        return false;
    }
}