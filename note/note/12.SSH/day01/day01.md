#SSH
##是什么？

Struts2+Spring+Hibernate

##阶段安排

- day01:Struts2简介/消息传递/Session的使用

- day02:Struts2+Spring/result常用类型/拦截器

- day03:ValueStack/Struts2+Spring+Mybatis/hibernate

- day04:ID生成规则/对象声明周期/HQL查询

- day05:Struts2+Spring+Hibernate

#Struts2简介

##是什么？

基于MVC设计模式的web应用框架

1. 来自于Apache
2. Struts1 和Struts2没有任何关系
3. Struts2的前身是WebWork  
   Struts1/Struts2/SpringMVC都是MVC设计模式的表现层框架

##怎么用？

1. 导包 Struts2-core

2. 配置主控制器(web.xml)

3. 配置struts.xml(名字不可更改)

##手动创建struts.xml模板

1. 创建空Struts.xml文件

2. 从Struts-default中抽取DTD文件声明，追加到Struts.xml中

3. 输入<struts><struts/>根标签

##Struts.xml常用标签

- package-namespace="" 匹配请求路径 

- extends="struts-default" 必须指定

- action-name="" 匹配具体请求名

- action-class="" 指定处理该请求的类

- result-name="" 匹配返回结果


##案例：HelloWorld

**步骤：**

1. 创建项目-导包-配置(web.xml)
2. 配置Struts.xml
3. 实现处理类HelloAction
4. 显示效果(msg.jsp)

#消息传递
##什么是？
浏览器与服务器之间的数据传递。

##有控制器向浏览器发送数据
###怎么实现？
1. 在控制器(HelloAction类)中增加属性，并针对属性增加GET()方法
2. 在控制器方法中为属性赋值
3. JSP采用EL表达式获取属性值

##从浏览器向控制器传递数据
###基本属性的传递方式(个体传递)
- 在控制器中定义与浏览器页面元素name属性一致的Bean属性
- 针对新增的Bean属性，增加SET/GET方法
###域模型传递方式(打包的传递)
- 便捷的处理表单项目
- 表单被重用时，优势尤其明显

# 登录逻辑
1. 获取数据
2. 调用service，验证数据信息
3. 登录成功：保存用户信息(Session)
4. 登录失败：保留在登录页面，提示登录失败

##回顾Session：是什么？会话对象，共享数据。

##Struts2下获取Session对象的方式

- 通过工厂类获取对象

- 通过注入方式获取对象

##怎么用？

- 控制器实现 implements SessionAware

- 注入Session（定义属性/定义SET/GET）

- 调用Session API

#作业：
- 搭建Struts2环境
- 利用基本属性传递方式实现登录需求
- 利用域模型传递方式实现登录需求

#面试题：springMVC和Struts2的区别？
- Struts2是类级别拦截，springMVC是方法级别的拦截
- springMVC方法之间是独立的，变量不共享；Struts2的方法虽然独立，但Action变量是共享的
- Struts2为保证线程安全，每一个请求都生成一个action为其服务，比较消耗内存
- springMVC与Spring框架整合是无缝，在项目管理和安全性上比Struts2好。




















































