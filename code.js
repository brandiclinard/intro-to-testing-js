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
    }else{
        return helloWorld();
    }
}
