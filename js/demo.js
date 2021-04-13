//ES6中类和对象
//类中的this指向问题
var that;//全局变量，储存的是constructor里面的this
var _that;//全局变量
class Star {
    constructor(uname,age){
        //constructor里面的this指向的是创建的实例对象
        that = this;
        console.log(this);
        this.uname = uname;
        this.age = age;
        this.btn = document.querySelector('button');
        this.btn.onclick = this.sing;
    }
    sing() {
        //这个sing方法中的this指向的是btn这个按钮，因为这个按钮调用了这个函数
        //在btn中是没有属性的，所以输出的是undefined
        console.log(this);
        console.log(that.uname); 
    }
    dance() {
        //这个dance里面的this指向的是实例对象ldh，因为ldh调用了这个函数
        _that =this;
        console.log(this);
    }
}

var ldh = new Star ('刘德华');
console.log(that === ldh);
ldh.dance(); 
console.log(_that === ldh);
 
/*   class Star {
    constructor(uname,age){
        this.uname = uname;
        this.age = age;
        this.btn = document.querySelector('button');
        this.btn.onclick = this.sing;
    }
    sing (){
        console.log(this.uname);
    }
}


var ldh = new Star('刘德华');
//ldh.sing();*/
