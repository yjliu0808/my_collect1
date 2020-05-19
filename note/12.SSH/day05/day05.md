#Spring+Hibernate

- hibernate-core
- spring-orm
- c3p0
- mysql-connector
- junit

步骤：

- 导包
- 配置文件
- 测试环境

			create table cn_user(cn_user_id varchar(60),
					cn_user_name varchar(60),
					cn_user_password varchar(60),
					cn_user_nick varchar(60),
					cn_user_token varchar(60),
					primary key(cn_user_id));

			insert into cn_user 
			values('1','Jackson','123456','JACK','123456');


localhost:8080/sshday05/login/login.action?username=Jackson&password=123456


