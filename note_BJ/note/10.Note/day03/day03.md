#注册功能
- 发送Ajax请求

绑定事件:注册按钮的单击事件

获取参数:用户名 昵称 密码

发送请求:/user/regist.do

- 服务器处理

		@ResponseBody
		Controller-regist(name,password,nick)
		调用service
		异常处理
		返回数据对象

Service-regist()

1. dao.addUser(user)

2. 用户是否被占用

3. 准备user的属性数据

Dao-insert(addUser(User user))

mapper:
insert into cn_user(cn_user_name) values(#{name})

- Ajax回调处理

		success:function(result){
		if state==0
		提示成功
		返回按钮对象.click()
		user=result.data
		用户名.val(user.name)
		密码.focus();

		else if state==2
		warnning_1 span.html("用户占用")

- 成功:

提示注册成功

返回登录页面,输入密码登录

- 失败:用户被占用

error:

提示:注册失败

UUID算法?

?useUnicode=true&amp;characterEncoding=utf8

作业:
独立实现注册功能需求
- 发送Ajax请求
- 服务器处理
- Ajax回调处理











