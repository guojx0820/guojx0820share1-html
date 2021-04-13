var eg = {};//声明一个对象，当作命名空间来使用
//定义一个公共函数来获取制定的ID元素，减少代码量，提高代码复用率
eg.$ = function(id){
    return document.getElementById(id);
};
eg.regCheck = function(){
  var uid = eg.$("userid");
  var upwd = eg.$("userpwd");
  var upwd2 = eg.$("userpwd2");
    if (uid.value == ''){
        alert('账户不能为空！');
        return false;//返回false就会阻止表单form提交
    }
    if (upwd.value == ''){
        alert('密码不能为空！');
        return false;
    }
    if (upwd.value != upwd2.value){
        alert(' 两次输入密码不相同！')；
        return true;//返回true就会提交表单form
    }
}