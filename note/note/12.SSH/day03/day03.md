#拦截器
##什么是？
JAVA中动态拦截Action调用的对象

##为什么？
封装一些通用处理，便于复用。通过配置的方式调用，灵活便于扩展

##什么时候？
在不修改现有逻辑代码的情况系看，为系统追加共有的功能处理

##怎么使用？
- 创建拦截器
- 注册拦截器
- 引用拦截器

###拦截器的编写规则：
实现interceptor接口，在既定方法中做共同的处理。


###拦截器注册规则：(struts.xml)
- 在Package中注册拦截器

		<interceptors>
			<interceptor name="demo" 
			class="cn.tedu.DemoInterceptor" />
		</interceptors>

###拦截器引用规则：(struts.xml)
- 在Action中定义引用

		<interceptor-ref name="demo" />

#ValueStack
##什么是？
称为值栈，Struts提供的共享数据的数据结构。

##为什么？
- 从控制器向浏览器传递数据
- 存储与请求相关的对象信息(Session/Application)

##生命周期
请求进入服务器后，在内存中创建ValueStack对象，
当请求处理结束以后，ValueStack对象被清除

##数据访问
- OGNL
- EL

##区域划分
- Contents(栈)
OGNL/EL
- Context（Map）
(#key)

##<s:debug> 
在浏览器显示ValueStack区域内容

###案例：从控制器向浏览器传值，展示ValueStack区域
1. 创建项目
2. 导包
3. 配置文件(web.xml/struts.xml/spring-context.xml)
4. 实现Action
5. 实现JSP

#Struts2+Spring+Mybatis
##步骤
1. 导包
2. 配置文件(web.xml/Spring-*.xml/struts.xml)\
3. 测试环境

##使用test数据库（use test；）

    create table user(id int primary key,
    name varchar(20));
    
    insert into user values(1,'Jackson');

##案例：登录功能

    create table user_pwd(id int,name varchar(20),password varchar(30));
    
    insert into user_pwd values(1,'zhangsan','123456');

#作业：
独立搭建Struts2+spring+Mybatis环境，
并在该环境下完成登录功能案例。