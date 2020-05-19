刘雪松
liuxs@tedu.cn

阶段目标
根据项目文档独立实现需求

教学分四个阶段

课程安排
第1天:项目简介/搭建项目环境
2-9天:实现项目需求
10-12天:
Spring-AOP
事务处理
关联映射
动态SQL

正课
项目简介
搭建项目环境

Spring webmvc + Sring +Mybatis
JSP响应流程
请求
-->DispatcherServlet
-->HandlerMapping
-->Controller
-->返回MV
-->viewResolver
-->jsp响应

Json响应流程
请求
-->DispatcherServlet
-->HandlerMapping
-->Controller
-->返回数据对象(String/User/list/map)
-->JSON响应

如何使用:
- 导包:jackson-core 2.2.3
- 配置spring文件-启动注解
- 在返回数据对象的方法上添加
  @ResponseBody

项目简介
1. 项目概述

  云笔记,学员在线学习时,可以随时的记录 

  分享 收藏笔记,并且可以参加活动

2. 模块划分

  用户模块 : 登录 注册 修改密码 退出

  笔记本模块: 创建 修改 删除 查看

  笔记模块: 创建 修改 删除 查看 分享 收藏 转移

  分享收藏模块

  回收模块:  查看 恢复 彻底删除

  活动模块: 查看 参加活动等

3. 设计思想

   MVC设计思想 分成以下几层:

   表现层(V): HTML+CSS+JQUERY+ AJAX

   控制层(C): spring mvc

   业务层:(M): service组件

   数据层:(M): dao组件
4. 技术架构

   java+jQuery+ajax+SpringMVC+IOC+AOP+Mybatis
   
   java:基础的核心技术

   jQuery :简化JavaScript代码(提供$对象 API)

   ajax :局部刷新 改善用户体验

   SpringMVC: 接收请求,调用处理组件,返回JSON数据

   IOC: 管理Controller service Dao组件

   AOP: 面向切面编程 日志处理 事务处理

   Mybatis:数据库框架
  
  项目规范:

  - 所有请求ajax方式交互

  - jsp+jstl +el(html)

  - result(state:  message:   data:)

E-R图:  Entity-Relation 实体关系模型图

E-R图怎么来的?

从业务分析得来

关联关系:
- 一对一
- 一对多
- 多对多

数据库常用命令

- mysql -uroot -p

- show databases; //查看有哪些数据库

- use 库名;       //使用某个数据库

- show tables;   //查看库中有那些表

- desc; 	     //查看表结构

- create database 库名;//创建数据库

- drop database 库名;//删除数据库

- source sql文件;        //导入sql文件

- set names utf8;

- source /home/soft01/cloud_note.sql;

- source e:\\cloud_note.sql;

- show databases;

#Spring + Mybatis

- spirng webmvc 3.28
- mybatis 3.3.0
- mybatis-spring 1.2.3
- commons-dbcp 1.4
- mysql-connector-java 5.1.37
- spring-jdbc 3.2.8
- junit 4.12

Spring webmvc + Spring + Mybatis

1-Spring webmvc + Spring 
2-Spring + Mybatis

练习:项目整体环境搭建
1-创建项目
	cloudnote
2-导包
	11个包
3-配置文件
	conf/spring-mvc.xml
	conf/spring-mybais.xml
	web.xml

数据库构建
source sql文件













