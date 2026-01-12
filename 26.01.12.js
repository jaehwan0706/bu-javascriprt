let a = 1;
const id = setInterval(() => {
    console.log(a++);
}, 1000);


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


