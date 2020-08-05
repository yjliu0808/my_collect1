#对话框
##如何弹出对话框
- <id="can">中加载(load)alert.html
- 显示背景色<div class="opacity_bg">

##如何关闭对话框
- <id="can">清空内容html("")
- <div class="opacity_bg">对象.hide()

#新增笔记本功能
##发送Ajax请求
- 发送事件:绑定创建按钮单击事件(.sure)
- 获取参数: userId bookName
- 请求地址: /book/add.do
##服务器处理
- BookController.addBook(userId,bookName)
- BookService.addBook(userId,bookName)
- BookDao.save(Book)
- mapper:insert into

测试请求:
http://localhost:8080/cloudnote/book/add.do?
userId=48595f52-b22c-4485-9244-f4004255b972
&bookName=TEST123

##回调处理

SUCCESS:

- 关闭创建Alert
- 获取restult中相关数据
- 笔记本列表增加新建名称
- 提示:创建成功

ERROR:

提示:创建笔记本失败

#事件绑定冲突
解决方案:

在alert_notebook.html 和 alert_note.html文件中
分别增加ID

id="sure_addbook"

id="sure_addnote"

    $("#can").on("click","#sure_addbook",function(){})
    
    $("#can").on("click","#sure_addnote",function(){})

#创建笔记
##发送Ajax请求
- 发送事件: 绑定alert_note.html中的创建按钮单击事件
- 获取参数: userId bookId bookName  
- 请求地址: /note/add.do

    var $li=$("#book_ul a.checked").parent();
    //判断是否选中笔记本li
    if($li.length==0){
    	alert("请先选择笔记本");
    }else{
    	
    }

##服务器处理
- NoteController.addNote(userId,bookId,bookName)
- NoteService.addNote(userId,bookId,bookName)
- NoteDao.save()
- mapper: insert into cn_note() values()
##回调处理

SUCCESS:

- 关闭对话框
- 刷新笔记列表:将新建笔记名称增加到列表中
- 提示:创建笔记成功

ERROR:

提示:创建笔记失败	

作业:
- 独立完成添加笔记功能(重点)
  发送请求
  服务器处理
  回调处理
- 显示笔记记录的下拉操作菜单(扩展)
绑定箭头按钮单击事件
获取div对象,通过对象.show()显示操作列表












