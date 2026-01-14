const p1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log('먼저 할일 완료');
        resolve('success');
    }, 1000);
});
p1.then((data) => 
    console.log(data)
);
//

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('먼저 할일 완료');
    if(true){
        resolve('SUCCESS');
    }else{
    resolve('erro');
    }
    }, 1000);
});
p2.then((data) => 
    console.log(data)
);
p2.catch((erro) =>
    console.log(data)
);
//

function work(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('먼저 할일 완료');
    if(false){
        resolve('SUCCESS');
    }else{
    resolve('erro');
    }
    }, 1000);
});
}
work.then((data) => 
    console.log(data)
);
work.catch((erro) =>
    console.log(data)
);
//
//callback.js에 있던 코드에서 callback를 빼고 작성문
function work1(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('작업1 완료');
        resolve('SUCCESS');
    }, 2000);
});
}
function work2(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("작업2 완료");
        resolve('SUCCESS');
    }, 3000);
});
}
function work3(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("작업3 완료");
        resolve('SUCCESS');
    }, 2000);
});
}
function nextWork(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("다음 작업");
    }, 1000);
});
}
work1()
.then(() => work2())
.then(() => work3())
.then(nextWork);
//
//또 다른 방법
function work1(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('작업1 완료');
    }, 2000);
});
}
function work2(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("작업2 완료");
    }, 3000);
});
}
function work3(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("작업3 완료");
    }, 2000);
});
}
function nextWork(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("다음 작업");
    }, 1000);
});
}
work1()
.then((msg) => {console.log(msg); return work2()})
.then((msg) => {console.log(msg); return work3()})
.then((msg) => {console.log(msg); nextWork()});
//

//또 다른 방법
function work1(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("작업1 완료")
        resolve('작업1 완료');
    }, 2000);
});
}
function work2(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("작업2 완료")
        resolve("작업2 완료");
    }, 3000);
});
}
function work3(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("작업3 완료")
        resolve("작업3 완료");
    }, 2000);
});
}
function nextWork(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("다음 작업")
        resolve("다음 작업");
    }, 1000);
});
}
async function Ordering() {
    await work1();
    await work2();
    await work3();
    nextWork();
}
Ordering();
//
//또 다른 방법
function work1(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("작업1 완료")
        resolve('작업1 완료');
    }, 2000);
});
}
function work2(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("작업2 완료")
        resolve("작업2 완료");
    }, 3000);
});
}
function work3(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("작업3 완료")
        resolve("작업3 완료");
    }, 2000);
});
}
function nextWork(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("다음 작업")
        resolve("다음 작업");
    }, 1000);
});
}
async function Ordering() {
    await work1() = console.log(await work1());
    await work2() ;
    await work3();
    nextWork();
    return;
}
Ordering();
//
//또 다른 방법
function work1(){
return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("작업1 완료")
        resolve('작업1 완료');
    }, 2000);
});
}
function work2(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("작업2 완료")
        resolve("작업2 완료");
    }, 3000);
});
}
function work3(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("작업3 완료")
        resolve("작업3 완료");
    }, 2000);
});
}
function nextWork(){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log("다음 작업")
        resolve("다음 작업");
    }, 1000);
});
}
fetch("http://jsonplaceholder.typicode.com/users/1")
.then((res) => res.json())
.then((data) => console.log(data));