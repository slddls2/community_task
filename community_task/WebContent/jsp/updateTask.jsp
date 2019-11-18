<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
pageContext.setAttribute("basePath", basePath);
%>
<!DOCTYPE html >
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>修改任务 | e家无忧-社区任务</title>
	<meta name="theme-color" content="#000000">
	
	<link rel="shortcut icon" href="${basePath}img/favicon.png">
	<link href="${basePath}css/main.css" rel="stylesheet">
	<script type="text/javascript" src="${basePath}js/upload.js"></script>
		<style type="text/css">
			
			
			.addTask-content{
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
			.row-title{
				border-bottom: 1px solid rgba(0, 0, 0, .22) !important;
			}
			.row-title span{
				border-bottom: 3px solid #f86;
				display: inline-block;
				vertical-align: bottom;
				font-weight: 700;
				font-size: 1.3em;
				margin-bottom: -1px;
			}
			.formrow textarea{
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
				padding:  5px 12px;
				
			}
			.formrow textarea[name=content]{
				height: 150px;
				
			}
			.addbtn{
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
			
			.formrow input::placeholder,.formrow textarea::placeholder{
				color:#23323e !important;
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
								<a class="logo-box" href="${basePath}index.jsp"><img class="logo"
									src="${basePath}img/about-prod-juzi.png" alt="图片加载失败"></a>
								<div class="search-input-box">
									<form class="form-inline" action="PublicTaskServlet?type=likeFind">
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
								<!-- <div class="app-qr-code-box"><img src="img/qr.png" alt="图片加载失败"><span>iPhone&amp;Android</span></div> -->
							</div>
						</div>
					</div>
				</div>
				<div class="main-container">
					<div class="breadcrumb-box">
						<ul class="breadcrumb">
							<li><a href="${basePath}index.jsp">社区任务</a> <span class="divider">&gt;</span></li>
							<li class="active">修改任务</li>
						</ul>
						<div class="riverline"></div>
					</div>
					
					<div class="content-box">
						<div class="addTask-content">
					<form action="${basePath}TaskServlet?type=update_update" method="post" enctype="multipart/form-data"  >

						<div class="formrow row-title">
							<span class="title">修改任务</span><span style="margin-left:50px;color:red; font-size:14px" >${update_message }</span>
						</div>
						<div class="formrow row-input">
							<span>任务标题</span><textarea name="tname" maxlength="50" required="required">${task.tname}</textarea>
							<input type="hidden" name="tid" value="${task.tid}">
						</div>
						<div class="formrow row-input">
							<span>任务描述</span><textarea name="content" >${task.content}</textarea>
						</div>
						<div class="formrow row-input">
							<div class="tel">
								<div style="vertical-align: top;margin-right: 20px;">联系方式</div>
								<div class="">
									<input type="radio" name="telType" id="qq" value="qq" required="required"/>qq
									<input type="radio" name="telType" id="weixin" value="微信" required="required"/>微信
									<input type="radio" name="telType" id="tel" value="电话" required="required"/>手机<br />
									<input type="text" name="tel" id="telvalue" placeholder="请输入你的号码" required="required"/>
								</div>
							</div>
						</div>
						<div class="formrow row-input">
							<span>选择图片</span>
							<input type="file" name="t_img" id="titleImg" accept="image/*"  
									onChange="previewImage(this,'imgPreviewId1');"/>
							<div id="imgDiv">
							    <img id="imgPreviewId1"   width='80'/>
							</div>
							<input type="hidden" name="oid_t_img" value="${task.t_img}"/>
						</div>
						<div class="formrow row-input">
							<span>悬赏虚拟币</span><input name="task_money" 
								type="number" style="width:50px;margin-left: 20px;" value="${task.task_money}">
						</div>
						<div class="formrow row-logcheck">
						</div>
						<div class="formrow row-btn">
							<button type="submit" class="addbtn">立即修改</button>
						</div>
					</form>
				</div>
					</div>
				</div>
				<div class="footer">
					<div class="footer-container">
						<div class="search-input-box hidden-for-mobile"></div>

						<div class="link-box">
							<a class="logo-box" href="${basePath}index.jsp"><img
								class="logo" src="${basePath}img/about-prod-juzi.png" alt="图片加载失败"></a>
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
<script type="text/javascript">
	var task_tel = "${task.start_user_tel}";
	if(task_tel!=null&&task_tel!=""){
		var tels=task_tel.split(":");
		switch (tels[0]){
			case "qq":
				document.getElementById("qq").checked="checked";
				break;
			case "微信":
				document.getElementById("weixin").checked="checked";
				break;
			case "电话":
				document.getElementById("tel").checked="checked";
				break;
			default:
				break;
		}
		document.getElementById("telvalue").value=tels[1];
	}
	if("${task.t_img}"!=""){
		
		document.getElementById("imgPreviewId1").src="${task.t_img}";
	}
</script>
</html>