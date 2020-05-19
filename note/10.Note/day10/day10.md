#spring AOP

##是什么？

Aspect Oriented Programming（面向切面编程）

将有共同处理的业务，从传统的业务中抽离出来，单独的封装，通过配置（注解）的方式作用于系统。

切面儿：指一个事务的横截面

##理解切面的两句话

- 对系统service层进行AOP处理
- 对系统service下所有方法追加相同的功能处理

##为什么？
在不修改系统业务逻辑的前提下，给系统追加功能。


##如何使用AOP?

1. 导包 AspectJ

2. 创建切面组件

3. 配置切面组件

案例：在每个Controller方法执行前，输出打桩信息

- 配置方式实现

- 注解方式实现

  @Component @Aspect @Before

##AOP相关概念
- OOP : 类 对象 封装 多态

- AOP : 切面儿/通知/切入点（重点）动态代理（了解）

###切面儿（Aspect）

指的是封装了共同处理的组件，即切面代码


###切入点（pointcut）

用于指定目标方法

####表达式：三种

方法限定表达式：execution

为某个组件的部分方法追加功能

execution(修饰符？ 返回类型 方法名(参数) 抛出异常？)

匹配所有以add开头的方法

execution(* add*(..))

匹配UserService组件下所有的方法

execution(* cn.tedu.service.UserService.*(..))

匹配的service下所有组件的所有方法

execution(* cn.tedu.service.*.*(..))

匹配的service包及子包中的所有方法

execution(* cn.tedu.service..*.*(..))

案例：

@Before execution(* cn.tedu.cloudnote.service..*.*(..))

类级限定表达式：within

匹配UserService组件下的所有方法

within(cn.tedu.cloudnote.service.UserService)

匹配到service包下所有类的所有方法

within(cn.tedu.cloudnote.service.*)

匹配到service包及子包下的所有类的所有方法

within(cn.tedu.cloudnote.service..*)


bean限定表达式：bean(id名)

匹配userService组件的所有方法

bean(userService)

匹配所有以service结尾的组件的所有方法

bean(*Service)

@Bfore("bean(userController)")

###通知（Advice）

sprig 提供了五种通知类型

    try{
    前置通知（@Before）
    //执行目标组件方法
    后置通知（@AfterReturning）
    }catch{
    异常通知（@AfterThrowing）
    }finaly{
    最终通知（@After）
    }
    环绕通知（@Around）

练习：实现后置通知和最终通知的AOP切入
要求：切入点分别使用方法/类型/bean表达式

####AOP编程三要素：

- 切面：追加啥？单独封装的切面代码

- 通知：啥时候？前置/后置/异常/最终/环绕

- 切入点：切谁？方法/类型/Bean限定表达式

###动态代理

AOP底层实现是通过动态代理技术实现

动态代理技术：动态创建类的技术

####动态代理技术有两种

- 基于接口技术(java.reflect.Proxy)：

  实现接口，重写接口中的方法

      public class $Proxy25 implements UserService{
    	//事务处理
		//login()处理
      }

- 基于类的技术(CGLIB包)：

  继承类后，重写类方法

通过动态代理创建了一个新的类型

##AOP经典应用
- 事务管理
- 异常日志管理

案例：实现性能审计

- 切面：输出消耗时间
- 切入点：所有service下的所有方法
- 通知：@Around

案例：异常信息写入日志

- 要求：当service处理发生的异常的时候，将异常信息写入文件中（AOP实现）

- 切面：将异常信息写入文件（FileWriter-              PrintWriter）

- 切入点：service层面的所有方法

- 通知：@AfterThrowing


#作业
- 创建切面组件使用Bean/方法/类型限定表达式指定切入点

- 独立完成云笔记service层的性能审计









	





