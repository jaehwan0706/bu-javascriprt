/*function Shape(x, y) {
    this.name = "Shape";
    this.move(x, y);
}
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};
Shape.prototype.whereAmI = function () {
    console.log(`(${this.x}, ${this.y})`);
}
Shape.prototype.area = function () {
    return 0;
};
let s = new Shape(10, 5);
s.whereAmI();
s.move(20, 15);
s.whereAmI(); */

/* 파생 클래스
function Monster(name, hp, att) {
    this.name = name;
    this.hp = hp;
    this.att = att;
}
Monster.prototype.whoami = function () {
    console.log(`name: ${this.name}`)
}
function BigMonster(name, hp, att, size){
    Monster.call(this, name, hp, att);
    this.size = size;
}
Object.assign(BigMonster.prototype, Monster.prototype)
const monster1 = new BigMonster('슬라임', 25, 10, 100);
monster1.whoami(); */

/*클래스
function Shape(x, y) {
    this.name = "Shape";
    this.move(x, y);
}
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};
Shape.prototype.whereAmI = function () {
    console.log(`(${this.x}, ${this.y})`);
}
Shape.prototype.area = function () {
    return 0;
};

function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.name = 'Circle';
    this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
    area: function () {
        return this.radius * this.radius * Math.PI;
    },
});
var c = new Circle(0, 0, 10);
console.log(c.area()); */

/*퀴즈 Box 클래스 -> 직사각형 면적 출력
function Shape(x, y) {
    this.name = "Shape";
    this.move(x, y);
}
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};
Shape.prototype.whereAmI = function () {
    console.log(`(${this.x}, ${this.y})`);
}
Shape.prototype.area = function () {
    return 0;
};

function Rectangle(x, y, width, height) {
    Shape.call(this, x, y);
    this.name = 'Rectangle';
    this.width = width;
    this.height = height;
}
Object.assign(Rectangle.prototype, Shape.prototype, {
    area: function () {
        return this.width * this.height;
    },
});
var r = new Rectangle(0, 0, 10, 20);
console.log(r.area()); */

/*클래스
class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}
let user = new User("홍길동");
user.sayHi(); */

/* class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}
console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));*/

/*class User{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 4){
            console.log("이름 너무 짧습니다.");
            return;
        }else 
        this._name = value;
    }
}
let user = new User("보라돌이");
console.log(user.name);
user = new User("");*/

/*class Button{
    constructor(value){
        this.value = value;
    }
    click(){
        console.log(this.value);
    }
}
let button = new Button("안녕하세요.");
//setTimeout(button.click,1000); 
setTimeout(button.click.bind(button),1000);*/

/*클래스 상속하기
class Shape{
    name = "Shape";
    constructor(x, y){
        this.move(x, y);
    }
    move(x, y){
        this.x = x;
        this.y = y;
    }
    whereAmI(){
        console.log(`(${this.x}, ${this.y})`);
    };
    area(){
        return 0;
    }
}*/

class Circle extends Shape{
    constructor(x, y, radius){
        super(x, y);
        this.radius = radius;
    }
    area(){
        return this.radius * this.radius * Math.PI;
    }
}
let c = new Circle(0, 0, 10);
console.log(c.area());