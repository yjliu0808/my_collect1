#需求实现流程
1. 发送Ajax请求
2. 服务器端处理
3. 回调处理

#登录功能
1. 发送Ajax请求
   - 事件绑定:"登录"按钮单击
   - 请求参数:用户名和密码
   - 请求地址:/user/login.do
   - 提交类型:post
2. 服务器端处理
- Controller--UserController-login()
- Service

  密码比对

  调用dao
- Dao

  UserDao

  mapper-select
3. 回调处理
- success
成功:

将用户信息保存至cookie

跳转到系统主页面(edit.html)

失败:

用户名异常处理

用户密码异常处理

- error
	 
提示:登录失败

请求伪代码:	

定义onload事件:$(function(){})

绑定登录按钮:$("#login").click();

#MD5 摘要算法
- 文本比对
- 将数据处理成等长数据
- 不可逆

#base64?
- a-z 
- A-Z
- 0-9
- = +

service测试请求:
localhost:8080/cloudnote/user/login.do?name=demo&password=123456

作业:
独立完成登录功能的服务器处理:
- Controller--login()
- Service--login()
- Dao--findByName()


























