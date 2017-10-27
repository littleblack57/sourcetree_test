# 用CSS製造出彈出選單的效果

### html
```
<div class="xxx" style="visibility: hidden;">
<p id="ooo">something in here</p>
</div>
```

### css
```
.xxx:hover #ooo{
    visibility: hidden;
}

#ooo{
    visibility: visible;
}
```

**.class:hover &emsp;#id ==> class觸發事件後 會改變子節裡id = ooo的物件**


# div的各種置中方法

[方法](http://www.oxxostudio.tw/articles/201502/css-vertical-align-7methods.html)
[方法：felxbox](http://www.oxxostudio.tw/articles/201501/css-flexbox.html)


# vm、vh單位

**響應式設計的好東西！！**
**用螢幕為基準的百分比**
vm ==> view-width
vh ==> view-hight
ex：width:20vm ==>  螢幕寬度的20%
[vm、vh解說](https://pjchender.blogspot.tw/2015/04/css-3vh-vw.html)


# MEDIA QUERY
**偵測視窗大小，接著再做判斷**

ex：
在視窗寬度小於600px時，做do something~~
```
//media query level 3
@media(max-width:600px) and ...{
    do something...
    p{...;}
    .class{...;}
}
```
or
```
//media query level 4

@media(width<=600px>) and ...{
    do something...
    p{...;}
    .class{...;}
}
```

# 響應式設計
### modile first
畫面佈局以移動設備優先，再給畫面大的陸續定規則
```
css rule for mobile device...

@media screen and (min-width:768px){
    ...
}

@media screen and (min-width:928px){
    ...
}

@media screen and (min-width:1200px){
    ...
}

```

# Transform、Transition、Animation

**Transfrom**
塊級元素、inner-block等可以做變形的效果
行內元素無法做變形

**Transition**
使變形效果有平滑的變化

**Animation**
可以有多個變化條件
ex：移動到一個地方後再移到另外一個地方