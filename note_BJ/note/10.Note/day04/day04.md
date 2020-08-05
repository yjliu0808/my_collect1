#@ExceptionHandler 可以统一处理控制器中的异常类型
		@ExceptionHandler(Exception.class)
		@ResponseBody
		public JsonResult exp(Exception e){
			e.printStackTrace();
			return new JsonResult(e);
		}
#笔记本显示

##发送Ajax请求
- 事件绑定: $(function(){})
- 获取参数: userId
- 请求地址: /book/loadbooks.do

##服务器处理
- Controller JsonResult list()
  调用bookService
  异常的处理
- Service  list<book> listLoadBooks()

  userId:是否为空 为空时抛出异常

  cn_user表中无法找到数据时,抛出用户不存在异常

  bookDao.findByUserId()

- Dao

定义BookDao- List<Book> findByUserId(String userId)

定义Mapper:

(select cn_notebook_name,cn_notebook_id from cn_notebook
where cn_notebook_userid=#{userId})

##Ajax回调处理
- success(result):
		if sate==0
		data获取bookName
		for(){
			添加笔记本li
		}

列表中添加笔记本名称

		<li class="online">
		<a  class='checked'>
		<i class="fa fa-book" title="online" rel="tooltip-bottom">
		</i> 默认笔记本</a></li>
error:
提示:笔记本加载失败





