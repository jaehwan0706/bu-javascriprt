/*let globalVar = "전역 변수";
function outer(){
    let outerVar = "외부 변수";
    inner();
}
function inner(){
    console.log(globalVar);
    console.log(outerVar);
}
function another(){
    let outerVar = "또 다른 외부 변수";
    inner();
}
outer();
another();*/

/* let globalVar = "전역 변수";
function outer(){
    outerVar = "외부 변수";
    inner();
}
function inner(){
    console.log(globalVar);
    console.log(outerVar);
}
function another(){
    outerVar = "또 다른 외부 변수";
    inner();
}
outer();
another();*/
//let outerVar 함수 안에서 동작하지만 outerVar = "또 다른 외부 변수" let을 사용하지 않으면 함수 안에 작성하였더라도 함수 밖에서 동작한다.

let globalVar = "전역 변수";
function outer(){
    let outerVar = "외부 변수";
    function inner(){
        console.log(globalVar);
        console/log(outerVar);
    }
    inner();
}
outer();

