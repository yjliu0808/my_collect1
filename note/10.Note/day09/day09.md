#模糊查询
##发送ajax请求
- 事件绑定：input获取焦点的时候，回车事件绑定

      $("#input").keydown(function(event){
	var code=event.keyCode；
	if(code==13){
		//获取参数
		//发送请求
	}	
	})

- 参数获取：输入的关键字

- 请求地址：/share/search.do

##服务器处理
- ShareController.searchNote(String keyword)

  调用shareService.searchNote(keyword)

测试请求：
    http://localhost:8080/cloudnote/share/search.do?
    keword=笔记

- ShareService.searchNote(String keyword)

拼接字符串： %keyword%

调用findLikeTitle方法

- ShareDao.findLikeTitle(String title)
- mapper:

	select * from cn_share 
	where cn_share_title like #{}

##Ajax回调处理

SUCCESS:

- 将结果集记录添加到pc_part_6

- 将shareId绑定到data中 

- 显示pc_part_6,隐藏其他列表

- 显示pc_part_5,隐藏编辑笔记

列表区域

- pc_part_1 全部笔记本

- pc_part_2 全部笔记

- pc_part_4 回收站笔记

- pc_part_6 搜索笔记列表

- pc_part_7 收藏笔记列表

- pc_part_8 参加活动的笔记列表

- pc_part_3 编辑笔记

- pc_part_5 预览笔记

ERROR: 提示搜索失败

#搜索分页显示
    select * from cn_share
     
    where cn_share_title like '%java%' limit n,m
    
    n:抓取数据的起点，从0开始，0代表第一条
    
    m:每页可显示的最大数

- 请求/share/search.do(keyword,page)

- Controller.searchNote(keyword,page)

- Service.searchNote(keyword,page)

- Dao.findLikeTitle(Map params)

- mapper:

	select * from cn_share 
	where cn_share_title 
	like '%str%' limit #{begin},3

##如何通过page获取begin的值

    1 - 0
    2 - 3
    3 - 6
    n - (n-1)*3

#作业：

1. 实现模糊查询功能

2. 实现分页显示功能





