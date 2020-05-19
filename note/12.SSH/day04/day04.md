#hibernate
##什么是？

冬眠。一个不用SQL的数据库框架。

##为什么？

将java中的对象映射存储到数据库的表中，只需要将对象与表做好关系定义，hibernate能自动生成SQL语句

##如何使用？
1. 导包
2. 配置主文件hibernate.cfg.xml
3. 配置映射文件
4. 调用API生成SQL访问数据库

**show global variables like 'port'**

#hibernate ID 生成规则

##什么是主键？

唯一标识一条记录的标记

##什么时候用？

对数据库操作插入记录的时候，需要用到主键

##hibernate主键类型(重点)

###自增类型(sqlserver和mysql)

		<generator class="identity" />

####练习：自增类型

		create table student(
					id int not null AUTO_INCREMENT,
					name varchar(20),
					PRIMARY KEY(id))
		insert into student(name) values('Tom')
		insert into student(id,name) values(
					null,'Jerry')

###序列类型(Oracle和DB2)
		
		create sequence seq_name;

		<generator class="sequence">
	      	<param name="sequence">seq_name
			</param>
	    </generator>

###UUID
语法：

	<generator class="uuid" />

**hibernate会自动调用UUID算法生成ID**

####练习：保存主键为UUID的对象数据

	create table teacher(id varchar(100) 
					NOT NULL,
					name varchar(30),
					primary key(id))

#hibernate对象的生命周期管理(重点)

##临时状态
内存中有对象，DB没有数据

##持久状态
内存中有对象，对象被缓存在session中，DB中有数据
修改对象属性，自动保存到数据库

##游离状态
内存中有对象，DB中有数据，修改对象属性，数据库中的数据不受对象的影响

###练习：
- 改变对象属性，DB数据随之改变
- 调用delete方法将对象切换到临时状态
- 调用evict方法，验证游离状态下对象的特点
- 调用update方法，将对象从游离状态切换回持久状态

#面试题：
描述hibernate的几种状态(即对象的状态)。

#hibernate的HQL查询
##是什么？
hibernate query language
面向对象的查询语言

##与SQL相近
- from 类名(select * from 表名)
- where 条件
- select 属性名 from 类名
- group by
- order by 

##SQL与HQL的不同点
- HQL面向对象，按属性/类名进行查询
- HQL不支持select *
- HQL不支持函数，支持分组函数count(*)
- HQL不支持join on

##如何使用？
- 获取Session对象
- 编写HQL语句
- 通过Session.createQuery方法获取查询对象
- 将HQL作为参数利用查询对象调用相关方法获取查询结果
- 如果HQL包含参数，会调用查询对象的setXXX方法给参数赋值

#作业：
- 掌握自增类型主键的使用，重做课堂练习
- 改变对象属性，DB数据随之改变
- 调用delete方法将对象切换到临时状态
- 调用evict方法，验证游离状态下对象的特点
- 调用update方法，将对象从游离状态切换回持久状态






























































