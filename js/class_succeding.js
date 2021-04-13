
/*class Father{
    constructor(){
        
    }
    money(){
        console.log(100);
    }
}

class Son extends Father{
    
}

var son = new Son();
son.money();


class Father {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        console.log(this.x + this.y)
    }
}

class Son extends Father {
    constructor(x,y) {
        super(x,y);//super函数调用了父类中的构造函数
    }
}
var son = new Son(1,2);
var son1 = new Son(100,120);
son.sum();
son1.sum();

//（1）extends可以让子类继承父类中的函数；
//（2）constructor（）构造函数每个类中必有得函数，可以用super（）关键字来传递父类中的参数给子类，而不能直接运用子类中的构造函数继承父类中的函数。示例如下：


class Father {
    say() {
        return '我是爸爸';
    }
}

class Son extends Father {
    say() {
        //console.log('我是儿子');
        console.log(super.say() + '的儿子');
        //super.say()就是调用父类中的普通函数 say() 的
    }
}
var son = new Son();
son.say();

//在继承中的查找原则就是：就近原则。

//1、在继承中，如果实例化子类输出一个方法，先看看子类中有没有这样一个方法，如果有就先执行子类的；
//2、如果子类中没有，就去查找父类中有没有这个方法，如果有就去继承父类的这个方法即就近原则。

*/



/*class Father {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    sum(){
        console.log(this.x + this.y);
    }
}


class Son extends Father {
    constructor(x,y){ 
         //用super来调用父类中的构造函数
        //super必须在子类this之前调用，必须先调用父类中的构造函数，才能使用子类中的构造函数
        super(x,y);
        this.x = x;
        this.y = y;
       
    }
    subtract (){
    console.log(this.x - this.y);
    }
}

var son = new Son(5,3);
son.subtract();
son.sum();*/


/*
class Star {
    constructor(uname, age){
        this.uname = uname;
        this.age = age;
        this.btn = document.querySelector('button');
        this.btn.onclick = this.sing();
    }
    sing (){
        console.log(this.uname);
    }
}


var ldh = new Star('刘德华');
//ldh.sing();
*/





























