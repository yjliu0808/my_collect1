#加载笔记内容
##发送Ajax请求
- 事件绑定: 父元素.on();
- 获取参数: 笔记id
- 请求地址: /note/loadnote.do
##服务器处理
- NoteController.loadNote()
- NoteService. Note loadNote(String noteId)
- NoteDao.findNoteById(String noteId)
- Mapper:
	select * from cn_note where cn_note_id=#{noteId}
##Ajax回调处理
- success:

  设置笔记标题:input.val(title)

  设置笔记内容:um.setContent(body)

- error:
  提示:笔记加载失败


#更新笔记信息
##发送Ajax请求
- 事件的绑定:对象.click() "保存笔记"按钮的单击事件
- 请求参数: 笔记ID,笔记Title,笔记Body
- 请求地址: /note/update.do
##服务器处理
- Controller
- Service
- NoteDao:int update(Note note)
- mapper:

    update cn_note
    set 
    cn_note_title=?
    cn_note_body=?
    where cn_note_id=?

##Ajax回调处理
- success:

  提示:保存成功

  更新笔记列表中的title

- error:

  提示:保存笔记信息失败

#mybatis Dao方法参数列表中不允许传入多个值

fn(String id);

fn(Note note);

fn(Map)


#作业:
##独立实现笔记保存功能(重点)
- 发送Ajax请求
- 服务器处理
- Ajax回调处理

##尝试关闭对话框功能(扩展)














