# 在js 動態新增一個div在指定的位置

#### 新增物件的位置目標.insertAdjacentElement("在該目標的哪裡",想動態新增的物件)

*ex:可選的設定的目標位置*  
>beforebegin  
>\<p\>  
>afterbegin   
>foo  
>beforeend     
>\<\/p\>  
>afterend  

```
var p = document.getElementById("insert_here")
var div = document.createElement("div")
div.id="puthere"
p.insertAdjacentElement("afterend",div)
```




# 在js上移除項目
*x ==> 要移除的物件*
執行完該項目會直接從html裡消失 

```
x.remove()
```




#找尋child並且對其做變

*\<p>x\</p>* 裡面的x是一個 text 子節，它是 **\<p>\</p>的子節點 !!!**
[example](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_childnodes_length) 




```
var childs = document.getElementById("show").childNodes
        var childlist_len = document.getElementById("show").childElementCount
        for (i = 1; i < childlist_len * 2; i += 2) {
            childs[i].style.display = ''
```

#javascript 的一些小方法

[點我](http://jjnnykimo.pixnet.net/blog/post/23631565-%5B%E6%95%99%E5%AD%B8%5D-40%E7%A8%AE%E7%B6%B2%E7%AB%99%E5%B8%B8%E7%94%A8javascript%E6%8A%80%E5%B7%A7)

#全域變量、區域變量

```
function fn(){
    var x = 2 
    y = 6
}
// x ==> 局部變量
// y ==> 全局變量
```
#嚴格模式
````
'use strict';
````

#函數名稱

**在嚴格模式下無法使用**


```
function facterial(num){
    if(num <=1){
        return 1;
    }else{
        return num*arguments.callee(num - 1);
        //arguments.callee ==> 目前指的是facterial這個方法
        //arguments.callee ==> function名的改變不會引響
    }
}
```
**callee ==> 被調用的方法**
**caller ==> 調用的方法**

#fun.call(thisObj,a,b,...)、fun.apply(thisObj,[a,b,...])

**call跟apply用法一樣只是在第二個之後的變數上宣告方式不同**
**thisObj是帶入的fun內的this**
```
ex：
function cat(){
    food : "fish",
    say:function(){
        alert("I love"+this.food);
    }
}

var black_cat = new cat();
black_cat.say;

/*
當我們有了一個對象 white_dog = {food:"bone"}，
但是我們不想重新對他定義say這個方法時，就可以使用call、apply
*/

var white_dog = {food:"bone"};
black_cat.say.call(white_dog);
```

#懶加載(延遲加載)

&nbsp;
&nbsp;

# == & ===
**== &nbsp;&nbsp;(一般相等)**
**=== &nbsp;&nbsp;(嚴格相等)**

&nbsp;
*==(一般相等) ：*
*只比較'值'(類型如果不同會先做轉換再比較)*

````
var num = 0;
var obj = new String("0");
var str = "0";

console.log(num == num); // true
console.log(obj == obj); // true
console.log(str == str); // true

console.log(num == obj); // true
console.log(num == str); // true
console.log(obj == str); // true
console.log(null == undefined); // true

// 除了少數情況，這兩個應該是 false。
console.log(obj == null);
console.log(obj == undefined)
````

&nbsp;

*===(嚴格相等)*
*比較'類型'與'值'(類型不同不會做轉換)(還會看reference)*
````
var num = 0;
var obj = new String("0");
var str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
````

#類別的判斷
**typeof & instanceof**

*typeof 任何實例化的物件都是 object*
[typeof](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/typeof)

*instanceof 可區分不同實例化後的類別(class)*
*但是如果有一方改變prototype 則兩個物件就不會一樣！！*

#url結構分析

![url結構分析](urlmassege.png)