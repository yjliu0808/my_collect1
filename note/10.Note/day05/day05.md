#笔记列表显示
1. 发送Ajax请求
- 事件绑定: 笔记本li元素单击事件
- 获取参数: bookId
- 请求地址: /note/list.do
事件绑定:
$("#book_ul li").click(function());

$("#note_ul").on("click","li",fn());

$(this)


2. 服务器处理
- NoteController.list(String bookId)
- NoteService.loadNotes(String bookId)
- NoteDao.findByBookId(String bookId)
- Mapper: select id,title from cn_note where

3. Ajax回调处理
-success:
加载笔记li元素到笔记列表中
笔记的id绑定到li元素上
-error:
提示:笔记加载失败

文本编辑器:UEditor(富文本编辑器)
用js开发的开源组件

怎么用?
1. 引入组件的三个js文件
2. Script代码中生成实例
		var um = UM.getEditor('myEditor');
3. 通过ID,将组件放置到预期的位置
		<script type="text/plain" id="myEditor" style="width:100%;height:400px;">
		</script>
4. 通过set/get方法操作组件
- um.setContent
- um.getContent


作业:
1. 独立完成加载笔记功能(重点)
- 发送Ajax请求
- 服务器处理
- Ajax回调处理
2. 点击笔记记录,标题和编辑区显示相关数据(扩展)













