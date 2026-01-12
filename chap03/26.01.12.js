/*let a = 1;
const id = setInterval(() => {
    console.log(a++);
}, 1000);*/


/* let b = 1;
const Func = () =>{
    console.log(b++);
}
setTimeout(Func,1000);
//변수가 함수하면 앞에 const을 써준다. (통일)  let X */

/*위와 같은 느낌=>b가 10보다 작을떄까지 출력 setTimeout은 한번만 동작하는데 자기 자신도 호출할수 있다.
let b = 1;
const Func = () =>{
    console.log(b++);
    if(b < 10) setTimeout(Func,1000);
}
setTimeout(Func,1000); */

//위 예제를 setInterval로 변경해서 동작
let b = 1;
const Func = () =>{
    console.log(b++);
}
setInterval(Func,1000);


[1, 2, 3, 4, 5].forEach((c, i) => {
    setTimeout(() => {
        console.log(c);
    }, 1000 * i);
});
// 출력 (c) == 1, 2, 3, 4, 5 console.log(c);그대로 출력
/* 출력 (i) == 0, 1, 2, 3, 4 setTimeout(() => {
        console.log(c);
    }, 1000 * i);
== 0초후 출력, 1초후 출력, 2초후 출력 .....*/

//String 에 대해서
//let str = "안녕하세요";
//str.slice(1,3) 1부터 2번쨰까지 = 녕하
//str.slice(1) 1부터 끝까지
//str+str = 안녕하세요안녕하세요
//str+str[0] = 안녕하세요안
/*setInterval(() => {
    str.slice(0); = 안녕하세요
    str.slice(1,5)+str[0]; = 녕하세요안
    str.slice(3,5)+str.slice(0,2); = 하세요안녕
    str.slice(4,5)+str.slice(0,3); = 세요안녕하
    str.slice(4,5)+str.slice(0,4); = 요안녕하세
    str.slice(0); = 안녕하세요
}, 1000);
*/

let str = "안녕하세요";
let index = 0;
let id;
const rotate = () => {
    console.log(str);
    str = str.slice(1) + str[0]
    index ++;
    if(index===6)clearInterval(id);
}
id = setInterval(rotate,1000);

let globalNum = 100;
function example(){
    let localNum = 50;
    console.log(globalNum);
    console.log(localNum);
}
example();
console.log(globalNum);
console.log(localNum);

function example(){
    var funcVar = '함수 스코프 변수';
    console.log(funcVar);
}
example();
console.log(funcVar);

//함수에서 빠져나와서 실행에 오류가 발생
if(true){
    let blockVar = '블록 스코프 변수';
    console.log(blockVar);
}
console.log(blockVar); //-실행 오류

//var은 함수를 빠져나가도 실행이 된다
if(true){
    var blockVar = '블록 스코프 변수';
    console.log(blockVar);
}
console.log(blockVar);

