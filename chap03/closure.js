function outerFunc(){
    var x = 10;
    var innerFunc = function () {
        console.log(x);
    };
    innerFunc();
}
outerFunc();

function outerFunc(){
    var x = 10;
    var innerFunc = function(){
        console.log(x);
    };
    return innerFunc;
}
var inner = outerFunc();
inner();

const numbers = [1, 2, 3, 4, 5, 6];
function displayNum(){
    for(var i = 0; i < numbers.length; i++){
        setTimeout(() => {
            console.log(numbers[i], i);
        }, 1000* (i + 1));
    }
}
displayNum();

// const makeDisplayList = () =>{
//     const displayList = [];
//     var i = 0;
//     while(i < 10){
//         const displayNum = () => {
//             console.log(i);
//         };
//         displayList.push(displayNum);
//         i++;
//     }
//     return displayList;
// }
// const myList = makeDisplayList();
// myList[0]();
// myList[3]();
// myList[7]();

//위 코드를 for 반복문으로 바꿔서
const makeDisplayList = () =>{
    const displayList = [];
    for(let i = 0; i < 10; i++){
        const displayNum = () =>{  
            console.log(i);
        };
        displayList.push(displayNum);
        i++;
    }
    return displayList;
}
const myList = makeDisplayList();
myList[0]();
myList[3]();
myList[7]();

//재귀함수
function func(a){
    func(a + 1);
}
func(1);