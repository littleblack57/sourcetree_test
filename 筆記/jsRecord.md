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