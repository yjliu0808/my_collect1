#获取自增列或序列生成的主键
##MYSQL:
        <!-- MYSQL数据库将自增ID自动装载到对象id属性中 -->
    <insert id="save" useGeneratedKeys="true"
    		keyProperty="id" parameterType="cn.tedu.cloudnote.entity.Emp">
    insert into t_emp(name,age)
    			values(#{name},#{age})
    </insert>

###创建表：采用自增列作为主键

    create table t_emp(id int primary key auto_increment, name varchar(20),age int)

    insert into t_emp(name,age) values()

###练习：Mybatis自动获取主键值
1. 创建Emp类
2. EmpDao接口中定义方法 save(Emp emp)
3. EmpMapper定义<insert useGenerateKeys="true" 					 keyProperty="id">
4. 创建测试类


##ORACLE

    <!-- ORACLE数据库将自增ID自动装载到对象id属性中 -->
    <insert id="save1">
    	<selectKey order="BEFORE" resultType="int"
    					  keyProperty="id">
    	select emp_seq.nextval from dual
    	</selectKey>
    insert into t_emp(id,name,age) 
    			values(#{id},#{name},#{age})
    </insert>

#Mybatis动态SQL

##作用：可以在定义SQL的XML文件中，动态的形成SQL语句

##如何实现？通过Mybatis提供的一些列标签实现

    <if test=""></if>
    <choose>
    	<when test=""></when>
    	<when test=""></when>
    	<otherwise></otherwise>
    </choose>
    <foreach collection=""></foreach>
    <where></where>
    <set></set>
    <trim></trim>

##案例：组合查询功能

按条件搜索笔记的功能：笔记名称 笔记本名称 用户名

IF：简单的条件判断，符合条件时，拼接相关字符串

    <select id="">
    		select * from cn_note
    		set 
    		<if test="bookName!=null">
    			and cn_notebook_name=#{bookName}，
    		</if>
    		<if test="noteName!=null">
    			and cn_note_name=#{noteName}，
    		</if>
    		<if test="userName!=null">
    			and cn_user_name=#{userName}
    		</if>
    </select>

CHOOSE:当条件匹配时，后续代码不被执行。当when条件都补匹配时，执行otherwise包含的代码

    <select id="">
    		<choose>
    			<when test="bookName!=null">
    				and cn_notebook_name=#{bookName}
    			</when>
    			<when test="noteName!=null">
    				and cn_note_name=#{noteName}
    			</when>
    			<otherwise>
    			</otherwise>
    		</choose>
    </select>

WHERE:可以在标记处输出(where)，同时自动处理SQL中多余的and，逗号等多余的符号功能同<set>

    <select id="">
    		select * from cn_note
    		<where>
    			<if test="bookName!=null">
    				cn_notebook_name=#{bookName}
    			</if>
    			<if test="noteName!=null">
    				and cn_note_name=#{noteName}
    			</if>
    			<if test="userName!=null">
    				and cn_user_name=#{userName}
    			</if>
    		</where>
    </select>

TRIME:可以使用前置后置符号(prefix)，覆盖需要被处理的符号(prefixOverrides)

    <trim prefix="" prefixOverrides="and|or"
    	  suffix="" suffixOverrides=",">
    	<if test="bookName!=null">
    		cn_notebook_name=#{bookName},
    	</if>
    	<if test="noteName!=null">
    		and cn_note_name=#{noteName},
    	</if>
    	<if test="userName!=null">
    		and cn_user_name=#{userName},
    	</if>
    </trim>

##案例：保存笔记功能的NoteMapper.xml重构

##练习：模糊查询功能ShareMapper.xml重构

##<foreach>标签

    delte from cn_note where cn_note_id in
    <foreach collection="list/array"
    item="id" open="(" close=")" separator=",">
    #{id}
    </foreach>

##练习：动态SQL批量删除笔记

##案例：笔记组合查询功能
###发送Ajax请求
- 发送事件：单击搜索按钮
- 请求参数：标题，状态，开始时间，结束时间,用户ID
- 请求地址：/note/find.do
###服务器处理
- Contronller:JsonResult loadNotes(.....)
- Service：List<Note> loadNotes(.....)
- Dao:List<Note> findNotes(Map params)
- Mapper: select cn_note;

###Ajax回调处理

- SUCCESS:标题		内容		创建时间

- ERROR:	ALERT("搜索失败")

#作业：完成组合查询笔记功能

- Service处理

- Controller处理

- 回调处理



	


























