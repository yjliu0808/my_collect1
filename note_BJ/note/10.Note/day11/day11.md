#事务管理
##什么是？

事务：程序为了保证业务处理的完整性，执行的一条或多条SQL语句。

事务管理：对事务中的SQL语句进行提交或者回滚。

##为什么？

确保数据库数据的完整性，不出现脏数据

    A B账户间的转账
    
    A--update(balance-10000)
    
    抛出异常
    
    B--update(balance+10000)

##事务回顾
- Oracle:commit/rollback(DML操作)
- JDBC：默认自动commit

##怎么用？
1. 配置spring的事务管理
2. 使用注解标记@Transactional 作用于service

##事务管理类型

- 编程式事务管理

	try{
		业务SQL1
		业务SQL2
		发生异常
		业务SQL3
		conn.commit();
	}
	catch(Exception e){
		conn.rollback();
	}
	
- 声明式事务管理（重点）

案例：记录批量删除

#@Transactional标记属性（了解）
##可读可写:readOnly

作用于select语句的事务上

    语法：
    @Transactional（readOnly=true）

##回滚特性：rollBackFor

用于指定回滚的异常类型

    语法：
    @Transactional(rollBackFor=IOException)

##传播特性

- REQUIRED--支持当前事务，如果当前没有事务，就新建一个事务。这是最常见的选择。
- SUPPORTS--支持当前事务，如果当前没有事务，就以非事务方式执行。
- MANDATORY--支持当前事务，如果当前没有事务，就抛出异常。
- REQUIRES_NEW--新建事务，如果当前存在事务，把当前事务挂起。
- NOT_SUPPORTED--以非事务方式执行操作，如果当前存在事务，就把当前事务挂起。
- NEVER--以非事务方式执行，如果当前存在事务，则抛出异常。
- NESTED--如果当前存在事务，则在嵌套事务内执行。如果当前没有事务，则进行与REQUIRED类似的操作。


    @Transaction
    public void fn1(){
    业务1处理
    fn2()
    业务2处理
    }
    @Transaction
    public void fn2(){
    业务3处理 默认
    }

##隔离特性

为解决并发访问数据库而设计的

脏读：事务一进行了增删改操作，但并未提交。事务2读取了事务1操作的数据。此时，事务1进行了回滚。我们说事务2进行了一次脏读的操作

幻读：事务1在一定范围内查询数据，同时事务2在该范围内又增加了数据，这种现象我们说事务1做了一次幻读。

- READ_UNCOMMITTED 读未提交（级别最低）
- READ_COMMITTED 读已提交
- REPEATABLE_READ 可重复读
- SERIALIZABLE 序列化操作（级别最高）
- DEFAULT 根据数据库自动选择READ_COMMITTED
?或REPEATABLE_READ

#关联映射
##什么是？

通过数据库对象之间的关联关系，反映到到实体对象之间的引用。

##为什么？

加载多个表中的关联数据，封装到我们的实体对象中。

##何时用？

当业务对数据库进行关联查询。

##怎么用？

Mybatis中对象关联方式：

###单个对象关联

	cn_user-->User
	cn_notebook--Book
    public class Book{
    id
    name 
    User user
    }

###多个对象的关联

    public class User{
    id
    name
    List<Book> books
    }

#案例1：通过用户ID查询User和关联Book的信息
- 利用一个SQL语句提取User信息，然后再一个SQL语句提取Book信息（简单，与DB进行了两次交互）
- 利用一条SQL语句，进行关联查询，提取User和Book的关联信息（复杂，与DB只进行一次交互）

实现步骤：

1. 定义持久层DAo--RelationDao
2. 定义mapper文件--拼写SQL语句，配置映射关系
3. 编写测试方法进行测试

#案例2：查询Book信息关联User信息

实现步骤：一个SQL实现查询

1. 定义持久层DAo--RelationDao
2. 定义mapper文件--拼写SQL语句，配置映射关系
3. 编写测试方法进行测试

#作业：

利用两个SQL语句实现查询Book信息关联User信息







