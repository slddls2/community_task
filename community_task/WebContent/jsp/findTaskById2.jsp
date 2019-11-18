<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
	pageContext.setAttribute("basePath", basePath);
%>
<!DOCTYPE html >
<html>
<head>
<meta  charset="UTF-8">
<title>任务详情 | e家无忧-社区任务</title>
<meta name="theme-color" content="#000000">

<link rel="shortcut icon" href="${basePath}img/favicon.png">
<link href="${basePath}css/main.css" rel="stylesheet">
<script type="text/javascript" src="${basePath}js/upload.js"></script>
<style type="text/css">
.addTask-content {
	box-shadow: 0 0 8px 1px rgba(0, 0, 0, .33);
	margin: 20px auto !important;
	max-width: 650px;
	padding: 30px !important;
	background-color: #fff;
	box-sizing: border-box;
	border-radius: 5px;
}

.formrow {
	padding: 15px 0 !important;
	margin-bottom: 15px !important;
	line-height: 30px !important;
}

.row-title {
	border-bottom: 1px solid rgba(0, 0, 0, .22) !important;
}

.row-title span {
	border-bottom: 3px solid #f86;
	display: inline-block;
	vertical-align: bottom;
	font-weight: 700;
	font-size: 1.3em;
	margin-bottom: -1px;
}

.formrow textarea {
	width: 100%;
	height: 40px;
	padding-left: 12px;
	box-sizing: border-box;
	border-radius: 5px;
	border: 1px solid #ddd;
	outline: none;
	color: #444;
	font-size: 20px;
	word-break: break-all;
	overflow: hidden;
	resize: none;
	padding: 5px 12px;
}

.formrow textarea[name=content] {
	height: 150px;
}

.addbtn {
	height: 50px;
	width: 100%;
	font-size: 1.3em;
	border-color: #f86;
	background-color: #f86;
	color: #fff !important;
}

input:focus, textarea:focus {
	border-color: #37c3ff;
}

.formrow input::placeholder, .formrow textarea::placeholder {
	color: #23323e !important;
}
/* input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { 
			color: #b8c4ce!important; 
			} 
			input:-moz-placeholder, textarea:-moz-placeholder { 
			color: #b8c4ce!important; 
			} 
			input::-moz-placeholder, textarea::-moz-placeholder { 
			color: #b8c4ce!important; 
			} 
			input:-ms-input-placeholder, textarea:-ms-input-placeholder { 
			color: #b8c4ce!important; 
			}   */
</style>
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
								<c:if test="${empty userinfo}">
									<a href="${basePath }jsp/login.jsp" class="marl">请登录</a>
									<a href="${basePath }jsp/register.jsp" class="marl">免费注册</a>
								</c:if>
								<c:if test="${!empty userinfo}">
									<a href="${basePath }jsp/login.jsp" class="marl"><span
										id="login_name">${userinfo.uname }</span></a>
									<a href="${basePath }UserinfoServlet?type=exit" class="marl">安全退出</a>
								</c:if>
								<a href="#" class="pull-right marl">新版建议</a> <a href="#"
									class="pull-right">常见问题</a>
							</div>
						</div>
						<div class="search-box">
							<div class="inner-box">
								<a class="logo-box" href="${basePath}index.jsp"><img class="logo"
									src="${basePath}img/about-prod-juzi.png" alt="图片加载失败"></a>
								<div class="search-input-box">
									<form class="form-inline" action="TaskServlet?type=likeFind">
										<div class="form-group">
											<div class="input-group">
												<div class="input-group-addon for-icon-search">
													<i class="iconfont icon-search"> </i>
												</div>
												<input name="word" autocomplete="off" class="form-control"
													placeholder="请输入任务关键字搜索" type="text"><span
													class="input-group-addon header-search-btn">搜 索</span>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="main-container">
					<div class="breadcrumb-box">
						<ul class="breadcrumb">
							<li><a href="${basePath}index.jsp">社区任务</a> <span class="divider">&gt;</span></li>
							<li class="active">任务详情</li>
						</ul>
						<div class="riverline"></div>
					</div>
					<div class="main">
						<c:if test="${!empty findMessage}">
							<div class="sec">
								${findMessage}
							</div>
						</c:if>
						<c:if test="${empty findMessage}">
							<div class='title1'>
								<sapn class="task-title">
									${task.tname}
								</sapn>
								<c:if test="${task.state==0 }">
									<!-- <div class="task-state "> -->
										<a id="start" class="task-btn task-btn-main"
											href="${basePath }TaskServlet?type=update_jiequ&tid=${task.tid}"
											>待接取</a>
									<!-- </div> -->
								</c:if> <c:if test="${task.state==1 }">
									<div class="task-state task-state-bg2">已接取</div>
									
								</c:if> <c:if test="${task.state==2}">
									<div class="task-state task-state-bg2">已完成</div>
								</c:if>
							</div>
							<div class="title2">
								<sapn class="task-money">
									悬赏：&ensp;${task.task_money}
								</sapn>
								<div class="task-startUname">
									发布人：&ensp;${task.start_user.uname}
								</div>
								<div class="task-start_time">
									发布时间：&ensp;${task.start_time}
								</div>
								
							</div>
							<div class="content-title">
								任务描述
							</div>
							<div class="content1">
								<div class="task-content">
									<span>${task.content}</span>
								</div>
								<c:if test="${!empty task.t_img}">
									<div class="task-t_img">
										<img class="task-t_img"  alt="" src="${task.t_img}">
									</div>
								</c:if>
							</div>
							<c:if test="${task.state==2}">
								<div class="title2">
									<span class="task-end_user">
										完成人：&ensp;${task.end_user.uname}
									</span>
									<span class="task-end_time">
										完成时间：&ensp;${task.end_time}
									</span>
								</div>
							</c:if>
							<c:if test="${task.state==1}">
								<div class="title2">
									<span class="task-end_user">
										接取人：&ensp;${task.end_user.uname}
									</span>
									<span class="task-end_time">
										接取时间：&ensp;${task.end_time}
									</span>
								</div>
							</c:if>
							<c:if test="${userinfo.uid eq task.start_user.uid }">
								<div>
										<a href="${basePath }TaskServlet?type=update&tid=${task.tid}" class="task-btn task-btn-main">修改任务</a>
									<c:if test="${task.state==1}">
										<a href="${basePath }TaskServlet?type=update_jujue&tid=${task.tid}" class="task-btn task-btn-main">拒接接取人</a>
									</c:if>
									<c:if test="${task.state!=1}">
										<a href="${basePath }TaskServlet?type=update_over&tid=${task.tid}" class="task-btn task-btn-main">结束任务</a>
									</c:if>
								</div>
							</c:if>
							<c:if test="${(!empty userinfo)&& userinfo.uid == task.end_user.uid && task.state eq 2 }">
								<div>
									<a href="${basePath }TaskServlet?type=update_fangqi&tid=${task.tid}" class="task-btn task-btn-main">放弃任务</a>
									<a href="${basePath }TaskServlet?type=update_wancheng&tid=${task.tid}" class="task-btn task-btn-main">完成任务</a>
								</div>
							</c:if>
						</c:if>
						
					</div>
					<div style="color: gray;">
						<i class="icon-wenxintishi iconfontTiShi"></i>
						温馨提示：本平台只负责提供用户交流和信息共享，对用户发布的信息真伪不做鉴别，
						如涉及财物相关请自行联系交付方式！
						
					</div>
				</div>
				<div class="footer">
					<div class="footer-container">
						<div class="search-input-box hidden-for-mobile"></div>

						<div class="link-box">
							<a class="logo-box" href="${basePath}index.jsp"><img
								class="logo" src="${basePath}img/about-prod-juzi.png"
								alt="图片加载失败"></a>
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
	<!--弹出窗口--接取-->
	<c:if test="${task.state==0 }">
	<div class="hiddendiv2" id="receive" style="display: block;">
	</c:if>
	<c:if test="${task.state!=0 }">
	<jsp:forward page="PublicTaskServlet?type=findById&tid=${task.tid}"></jsp:forward>
	</c:if>
		<form action="${basePath }TaskServlet?type=update_jiequ2" method="post">
		<div class="start-title title2" >
			<div class="task-title" style="font-size: 20px; width: 100%;">
				${task.tname}
			</div>
			<div class="user">
				发布人：&ensp;${task.start_user.uname}
			</div>
			<div class="time">
				发布时间：&ensp;${task.start_time}
			</div>
			
			<div style="color:#f86;">
				赏金：&ensp;${task.task_money}
			</div>
			<input type="hidden" name="tid" value="${task.tid}" />
			<div class="tel">
				<div style="vertical-align: top;margin-right: 20px;">联系方式</div>
				<div class="">
					<input type="radio" name="telType" value="qq" required="required"/>qq
					<input type="radio" name="telType" value="微信" required="required"/>微信
					<input type="radio" name="telType" value="电话" required="required"/>手机<br />
					<input type="text" name="tel" placeholder="请输入你的号码" required="required"/>
				</div>
			</div>
			<div class="hiddeBtn">
				<a class="task-btn "><input type="submit" value="确认接取" /></a>
				<a class="task-btn"><input type="button" class="exitBtn" value="放弃" /></a>
			</div>
		</div>
		<div style="color: gray;">
			<i class="icon-wenxintishi iconfontTiShi"></i>
			温馨提示：本平台只负责提供用户交流和信息共享，对用户发布的信息真伪不做鉴别，
			如涉及财物相关请自行联系交付方式！
			
		</div>
		</form>
	</div>
	<!--弹出窗口--拒接-->
	<div class="hiddendiv" id="hiddeDiv" style="display: block;"></div>
	<div class="hiddendiv2" id="hiddeDiv2">
		<form id="hiddeForm" action="" method="post">
		<div class="start-title title2">
			<div class="task-title" style="font-size: 20px; width: 100%;">
				${task.tname}
			</div>
			<div class="user">
				发布人：&ensp;${task.start_user.uname}
			</div>
			<div class="time">
				发布时间：&ensp;${task.start_time}
			</div>
			<div class="user">
				接取人：&ensp;${task.end_user.uname}
			</div>
			<div class="time">
				完成时间：&ensp;${task.end_time}
			</div>
			<div style="color:#f86;">
				赏金：&ensp;${task.task_money}
			</div>
			<input type="hidden" name="tid" value="${task.tid}" />
			<div class="hiddeBtn">
				<a class="task-btn"><input type="submit" id="hiddenFormSum"  value="确认" /></a>
				<a class="task-btn"><input type="button" class="exitBtn" value="取消" /></a>
			</div>
		</div>
		<div style="color: gray;">
			<i class="icon-wenxintishi iconfontTiShi"></i>
			温馨提示：本平台只负责提供用户交流和信息共享，对用户发布的信息真伪不做鉴别，
			如涉及财物相关请自行联系交付方式！
			
		</div>
		</form>
	</div>
	
</body>
<script type="text/javascript">
	
	var task_btn = document.getElementsByClassName("task-btn-main");
	for (var btn=0;btn<task_btn.length;btn++) {
		task_btn[btn].onclick= function(){
			document.getElementById("hiddeDiv").style.display="block";
			var htmlStr = this.innerHTML;
			if(htmlStr==="修改任务"){
				return true;
			}else if(htmlStr==="拒接接取人"){
				document.getElementById("hiddeForm").action="${basePath }TaskServlet?type=update_jujue&tid=${task.tid}";
				document.getElementById("hiddenFormSum").value="确认拒绝";
			}else if(htmlStr==="结束任务"){
				document.getElementById("hiddeForm").action="${basePath }TaskServlet?type=update_over&tid=${task.tid}";
				document.getElementById("hiddenFormSum").value="确认结束";
			}else if(htmlStr==="放弃任务"){
				document.getElementById("hiddeForm").action="${basePath }TaskServlet?type=update_fangqi&tid=${task.tid}";
				document.getElementById("hiddenFormSum").value="确认放弃";
			}else if(htmlStr==="完成任务"){
				document.getElementById("hiddeForm").action="${basePath }TaskServlet?type=update_wancheng&tid=${task.tid}";
				document.getElementById("hiddenFormSum").value="确认完成";
			}else if(htmlStr==="待接取"){
				document.getElementById("receive").style.display="block";
				return false;
			}else{
				hiddeDiv.style.display="none";
				return true;
			}
			document.getElementById("hiddeDiv2").style.display="block";
			return false;
		}
	}
	var exitBtn= document.getElementsByClassName("exitBtn");
	for (var i=0;i<task_btn.length;i++) {
		exitBtn[i].onclick=function(){
			document.getElementById("hiddeDiv").style.display="none";
			document.getElementById("hiddeDiv2").style.display="none";
			document.getElementById("receive").style.display="none";
			return false;
		}
	}
</script>
</html>