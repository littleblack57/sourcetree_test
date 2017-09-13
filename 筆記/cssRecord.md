#用CSS製造出彈出選單的效果

###html
```
<div class="xxx" style="visibility: hidden;">
<p id="ooo">something in here</p>
</div>
```

###css
```
.xxx:hover #ooo{
    visibility: hidden;
}

#ooo{
    visibility: visible;
}
```

**.class:hover &emsp;#id ==> class觸發事件後 會改變子節裡id = ooo的物件**


#div的各種置中方法

[方法](http://www.oxxostudio.tw/articles/201502/css-vertical-align-7methods.html)
[方法：felxbox](http://www.oxxostudio.tw/articles/201501/css-flexbox.html)


#vm、vh單位

**用螢幕為基準的百分比**
vm ==> view-width
vh ==> view-hight
ex：width:20vm ==>  螢幕寬度的20%
[vm、vh解說](https://pjchender.blogspot.tw/2015/04/css-3vh-vw.html)