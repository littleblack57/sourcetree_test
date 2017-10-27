# 索引

[索引使用技巧](http://jackyshih.pixnet.net/blog/post/5839238-sql-server-index%E6%9E%B6%E6%A7%8B%E8%AE%80%E5%BE%8C%E5%BF%83%E5%BE%97)


# SELECT... INTO...
**用來從某資料表查詢所得之資料集結果新增到另一個新建的資料表中**
*此一指令常用來複製備份資料表，或將資料表輸出至另一資料庫中*
[來源](https://www.fooish.com/sql/select-into.html)

````
SELECT table_column1, table_column2, table_column3...
INTO new_table_name [IN another_database]
FROM table_name;

/*其中 new_table_name 為欲新建的資料表名稱，
該資料表會自動建立，且不可與已經存在的資料表名稱相同；
而 another_database 為至外部資料庫的路徑。*/
````

# WHERE 1=0 (1=1)
[資料在這](http://www.cnblogs.com/junyuz/archive/2011/03/10/1979646.html)


# LIMIT
**TOP (SQL Server), LIMIT (MySQL), ROWNUM (Oracle) 這些語法其實都是同樣的功能，都是用來限制您的 SQL 查詢語句最多只影響幾筆資料，而不同的語法則只因不同的資料庫實作時採用不同的名稱**

[資料在這](https://www.fooish.com/sql/top-limit-rownum.html)

# WITH
[資料在這](http://ysde.blogspot.tw/2009/05/sql-with.html)


# nvl(A,B) (for Oracle)
**如果 A 不等於 NULL，則傳回 A，否則傳回 B**
[資料在這](https://dotblogs.com.tw/teng1026/2011/11/23/59221)
[另一份資料在這](http://pclevin.blogspot.tw/2014/05/oracle-sql-nvl-null.html)