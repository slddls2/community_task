<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	pageContext.setAttribute("basePath", basePath);
%>
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>e家无忧-社区任务|任务展示</title>
<!--<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">-->
<meta name="theme-color" content="#000000">

<link rel="shortcut icon" href="${basePath}img/favicon.png">
<link href="${basePath}css/main.css" rel="stylesheet">

</head>

<body>
	<noscript>You need to enable JavaScript to run this app.</noscript>
	<i></i>
	<div id="root">
		<div class="App">
			<div style="" class="news observation activities">
				<div class="App-header">
					<div class="juzi-header-box">
						<div class="login-box">
							<div class="inner-box">
								欢迎来到E家无忧！ 
								<c:if test="${empty userinfo }">
									<a href="${basePath }jsp/login.jsp" class="marl">请登录</a>
									<a href="${basePath }jsp/register.jsp" class="marl">免费注册</a>
								</c:if>
								<c:if test="${!empty userinfo }">
									<a href="${basePath }jsp/login.jsp" class="marl"><span id="login_name">${userinfo.uname }</span></a>
									<a href="${basePath }UserinfoServlet?type=exit" class="marl">安全退出</a>
								</c:if>
								<a href="#" class="pull-right marl">新版建议</a> 
								<a href="#" class="pull-right">常见问题</a>
							</div>
						</div>
						<div class="search-box">
							<div class="inner-box">
								<a class="logo-box" href="#"><img class="logo"
									src="img/about-prod-juzi.png" alt="图片加载失败"></a>
								<div class="search-input-box">
									<form class="form-inline" id="likeFindForm" action="PublicTaskServlet?type=likeFind" method="post">
										<div class="form-group">
											<div class="input-group">
												<div class="input-group-addon for-icon-search" id="likeFindImg">
													<i class="iconfont icon-search"> </i>
												</div>
												<input name="like" autocomplete="off" class="form-control"
													placeholder="请输入任务关键字搜索" type="text">
												<span id="likeFindBtn" class="input-group-addon header-search-btn">搜 索</span>
											</div>
										</div>
									</form>
								</div>
								<!-- <div class="app-qr-code-box"><img src="img/qr.png" alt="图片加载失败"><span>iPhone&amp;Android</span></div> -->
							</div>
						</div>
					</div>
				</div>
				<div class="main-container">
					<div class="breadcrumb-box">
						<ul class="breadcrumb">
							<li><a href="#">社区任务</a> <span class="divider">&gt;</span></li>
							<li class="active">近期任务</li>
						</ul>
						<div class="riverline"></div>
					</div>
					<div class="content-box">
						<div class="left-box">
							<div class="report-list observation-list">
								<ul class="list-unstyled data-list">
									<c:if test="${empty taskList}">
										<div style="width:300px;margin: 120px auto;font-size:20px;">没有找到匹配内容</div>
									</c:if>
									<c:forEach items="${taskList}" var="task">
										<li><c:if test="${task.state==0 }">
												<a id="start" class="status-tag active"
													href="${basePath }PublicTaskServlet?type=findById&tid=${task.tid}"
													>待接取</a>
											</c:if> <c:if test="${task.state==1 }">
												<a id="start" class="status-tag "
													href="${basePath }PublicTaskServlet?type=findById&tid=${task.tid}"
													>已接取</a>
											</c:if> <c:if test="${task.state==2}">
												<a id="start" class="status-tag "
													href="${basePath }PublicTaskServlet?type=findById&tid=${task.tid}"
													>已完成</a>
											</c:if>
											<c:if test="${!empty task.t_img}">
											 <a id="xingqing" href="${basePath }PublicTaskServlet?type=findById&tid=${task.tid}"
											 class="img-box">
												<img id="t_img" src="${basePath }${task.t_img}" alt="图片加载失败">
												</a>
											</c:if>
											<div class="report-name-box">
												<a id="tname" class="line2"
													href="${basePath }PublicTaskServlet?type=findById&tid=${task.tid}"
													>${task.tname }</a>
												<p id="start_time">${task.start_time }</p>
												<p id="didian">${task.content }</p>
											</div>
											<div class="report-name-box note-box">
												<span class="marr10">发布人</span><span id="uname">${task.start_user.uname }</span>
												
											</div>
												<span class="money">悬赏:&emsp;${task.task_money }</span>
											</li>
									</c:forEach>
								</ul>
							</div>
							<div class="page-box">
								<div class="custom-btn list-load-more-btn" onclick="nextPage()">
									<span>浏览更多</span>
								</div>
							</div>
						</div>
						<div class="right-box pull-right">
							<div>
								<a href="${basePath}TaskServlet?type=forwardAdd" class="aBtn">发布新任务</a> <a href="" class="aBtn">我的任务</a>
							</div>
							<ul class="nav nav-tabs list-inline sub-nav">
								<li class="sub-nav-tab active"><a>热心用户</a></li>
							</ul>
							<div class="hot-news">
								<!-- <ul class="list-unstyled">
									<li><a href="https://www.itjuzi.com/activity/summary/130"
										class="line2">兼职猫林玩松：用B2C+ B2L2C模式打造移动兼职招聘平台</a>
										<div class="note-box">
											<span>2016-11-19</span>
										</div></li>
									<li><a href="https://www.itjuzi.com/activity/summary/131"
										class="line2">即构科技冼牛：连麦互动直播是直播行业新的趋势</a>
										<div class="note-box">
											<span>2016-11-19</span>
										</div></li>
									<li><a href="https://www.itjuzi.com/activity/summary/132"
										class="line2">商理事陈润鑫：如何更高效的找到你的合作伙伴</a>
										<div class="note-box">
											<span>2016-11-19</span>
										</div></li>
									<li><a href="https://www.itjuzi.com/activity/summary/128"
										class="line2">柠檬云财税张子荣：用免费策略撬动财税市场</a>
										<div class="note-box">
											<span>2016-11-19</span>
										</div></li>
									<li><a href="https://www.itjuzi.com/activity/summary/129"
										class="line2">MyHR李沛国：在人力资源领域做些不一样的事</a>
										<div class="note-box">
											<span>2016-11-19</span>
										</div></li>
								</ul> -->
							</div>
						</div>
					</div>
				</div>
				<div class="footer">
					<div class="footer-container">
						<div class="search-input-box hidden-for-mobile"></div>

						<div class="link-box">
							<a class="logo-box" href="https://www.itjuzi.com/"><img
								class="logo" src="img/about-prod-juzi.png" alt="图片加载失败"></a>
							<ul class="list-unstyled list-inline">
								<li><a target="_blank" href="#">关于e家无忧-社区任务</a></li>
								<li><a target="_blank" href="#">加入我们</a></li>
								<li><a target="_blank" href="#">联系我们</a></li>
								<li><a target="_blank" href="#">合作伙伴</a></li>

								<li><a target="_blank" href="#">用户协议</a></li>
								<li><a target="_blank" href="#">隐私条款</a></li>

							</ul>
							<div class="record-box">© 2013~2018 E家无忧 |
								厚溥ICP备20180723号-2</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
<script type="text/javascript" src="${basePath}js/main.js"></script>
<script type="text/javascript">
	var currentPage="${currentPage}";
	function nextPage(){
		currentPage++;
		window.location.href="PublicTaskServlet?type=Find&currentPage="+currentPage;
	}
</script>
</html>