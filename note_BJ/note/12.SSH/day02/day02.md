#filter与servlet的异同
- filter完全可以替代Servlet使用
- 概念：

Servlet运行在服务器端的程序，动态生成web页面

Filter是一段可以复用的代码，不能生成请求和响应，但可以对请求和响应做相关的处理

- 生命周期

servlet web服务器启动或web服务器接收到一次请求，调用init()实例化;之后的每次请求会调用doGet或doPost方法进行处理；当关闭服务器的时候，调用destroy方法销毁实例。

filter: web服务器启动，调用init方法实例化；之后的每次请求会调用doFilter方法进行处理；当关闭服务器的时候，调用destroy方法销毁实例。

为什么对内存中的字符进行编码？
字符在服务器内存中是16位的char(较大)，网络传输的单位是8位byte(较小)，我们必须对数据进行拆分才能够进行传输，拆分的过程我们叫做编码

##面试题：
描述一个GBK和UTF-8的特点。

- UTF-8国际化最优编码方法，10万+ 中文占3字节

- GBK本土化的最优编码方案，2万+  中文占2字节

#Struts2+Spring
为什么整合Spring？
使用Spring框架管理组件，实现注入，简化代码。

##怎么整合？
- 导包（Struts2-spring-plugin）
- 配置文件(web.xml/spring-*.xml)
- struts.xml

案例：HelloWorld（Struts2+Spring）

##注解回顾：@Component/@Controller/@Service/@Repository/@Resource/@Scope

格式：@Service("userServie")

- @Component：通用的标记，不推荐使用
- @Controller：作用于控制层
- @Service：作用于业务层
- @Repository:作用于持久层
- @Scope：避免线程安全问题，指定值为"prototype"
- @Resource:用于注入时的声明

#Result常用类型

##什么是？

就是结果，服务器处理完返回给用户的结果。
输出结果数据的组件。

##什么时候？

把要数据的结果数，按照我们制定的类型进行处理

##常见类型？

- dispatcher： 转发

- redirectAction:重定向Action

- redirect：重定向URL

- stream：流，处理图片

- json：用于处理Ajax请求


###redirectAction

语法：
    <result type="redirectAction">
    demo
    </result>
或者
    <result type="redirectAction">
    <param name="namespace">
    /demo
    </param>
    <param name="actionName">
    demo
    </param>
    </result>

###redirect
语法：
	<action name="test3" >
			<result type="redirect">
				http://doc.tedu.cn
			</result>
	</action>
或者
	<action name="test4" >
			<result type="redirect">
				<param name="location">
					http://doc.tedu.cn
				</param>
			</result>
	</action>

	method="方法名"

案例：浏览器发送不同的值给服务器，服务器根据值进行不同的处理。

###Stream

    <result name="success" type="stream">
       <param name="contentType">image/jpeg</param>
       <param name="inputName">imageStream</param> 
       <param name="contentDisposition">attachment;filename="document.pdf"</param>
       <param name="bufferSize">1024</param>
     </result>

- contentType:定义媒体类型
- inputName：必须是一个inputStream类型的流
- contentDisposition：可选，强制下载保存
- bufferSize：可选，指定缓存区大小

案例：向浏览器端发送图片数据并显示

###json（重点）
- 导包 Struts2-json-plugin 2.3.8
- 用法：两种方式

返回Action中的所有属性值

	<result name="xxx" type="json"></result>

返回Action中的单个属性值

	<result name="xxx" type="json">
		<param name="root">属性名</param>
	</result>

package标签中的extend属性变更为json-default


#作业：
独立完成Result使用json类型时，返回某一个Action属性值

	
  























