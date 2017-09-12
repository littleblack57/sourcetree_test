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