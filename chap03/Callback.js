function work1(){
    setTimeout(() => 
        console.log('작업 1 완료!'), 2000
);
}
function work2(){
    setTimeout(() => 
        console.log('작업 2 완료!'), 3000
);
}
function work3(){
    setTimeout(() => 
        console.log('작업 3 완료!'), 1000
);
}
function nextWork(){
    console.log('다음 작업');
}
work1();
work2();
work3();
nextWork();

//위 함수를 callback함수를 써서 변경
function work1(callback){
    setTimeout(() =>{
        console.log("작업 1 완료");
        callback();
    }, 2000);
}
function work2(callback){
    setTimeout(() =>{
        console.log("작업2 완료");
        callback();
    }, 3000);
}
function work3(callback){
    setTimeout(() =>{
        console.log("작업3 완료");
        callback();
    }, 2000);
}
function nextWork(callback){
    setTimeout(() =>{
        console.log("다음 작업");
    }, 1000);
}
work1(() => {
    work2(() => {
        work3(() => {
            nextWork();
        });
    });
});
// work3(nextwork) 이렇게 써도 되지만 다음에 무슨 작업이 있을지 모르고 어떤거랑 이어서 할지 모르니 
// work3(() => {
//             nextWork();
//         });
//이런 구조를 맞춰서 작성한는것이 좋다.