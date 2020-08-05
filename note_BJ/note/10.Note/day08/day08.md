#删除笔记功能
##发送Ajax请求
- 发送事件:菜单中删除按钮的单击事件
- 获取参数:笔记ID
- 请求地址:/note/delete.do
##服务器处理
- NoteController.deleteNote(noteId)
- NoteService. int deleteNote(noteId)
- NoteDao. int updateStatus(noteId)
- mapper: 

		update cn_note 
		set cn_note_status_id='2' where cn_note_id=?
##回调处理
SUCCESS:

- 笔记列表中删除笔记li元素

- 提示删除成功

ERROR:

- 提示:删除操作失败

#分享笔记功能
##发送Ajax请求
- 发送事件:下拉菜单中的分享按钮的单击事件
- 获取参数:笔记ID
- 请求地址:/share/add.do
##服务器处理
- ShareController.addShare(String noteId)
- ShareService.StraddShare(ing noteId)
- ShareDao.save(Share)
- mapper:
 
		insert into cn_share() values()
	
##Ajax回调处理

SUCCESS:

- 笔记记录显示分享图标
- 提示笔记分享成功

ERROR:

- 提示:笔记分享失败

#作业:
##独立完成笔记分享(重点)

- 发送Ajax请求
- 服务器处理(Controller/Service/Dao)
- Ajax回调处理

##实现加载笔记列表显示分享图标(扩展)