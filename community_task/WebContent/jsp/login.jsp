<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
pageContext.setAttribute("basePath", basePath);
%>

<!DOCTYPE html>
<html class=" juzi js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths" style="" lang="">

	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>用户登录 | e家无忧-社区任务</title>
		<meta name="viewport" content="width=device-width">
		<meta name="applicable-device" content="pc,mobile">
		<link rel="shortcut icon" href="https://cdn.itjuzi.com/assets/front/favicon.png">

		<!-- Uploadify -->
		<link rel="stylesheet" type="text/css" href="${basePath}registerAndLogin/uploadify.css">

		<link rel="stylesheet" href="${basePath}registerAndLogin/vendor.css">

		<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
		<link rel="stylesheet" href="${basePath}registerAndLogin/main.css">
		<link rel="stylesheet" href="${basePath}registerAndLogin/faralert.css">
		<link rel="stylesheet" href="${basePath}registerAndLogin/animate.css">

		
		<style type="text/css" id="MEIQIA-ICON-STYLE">
			.MEIQIA-ICON {
				background-size: 64px auto !important;
				background-repeat: no-repeat !important;
				background-image: url("https://static.meiqia.com/dist/images/icon-mq-round.png?v=fjk78qdci9b") !important;
			}
			
			@media only screen and (-webkit-min-device-pixel-ratio: 2),
			only screen and (min--moz-device-pixel-ratio: 2),
			only screen and (-o-min-device-pixel-ratio: 2/1),
			only screen and (min-device-pixel-ratio: 2) {
				.MEIQIA-ICON {
					background-image: url("https://static.meiqia.com/dist/images/icon-mq-round@2x.png?v=fjk78qdci9b") !important;
				}
			}
			
			.MEIQIA-ICON-CHAT1 {
				background-position: 0 0 !important;
			}
			
			.MEIQIA-ICON-CHAT2 {
				background-position: 0 -32px !important;
			}
			
			.MEIQIA-ICON-CHAT3 {
				background-position: 0 -64px !important;
			}
			
			.MEIQIA-ICON-CHAT4 {
				background-position: 0 -96px !important;
			}
			
			.MEIQIA-ICON-CHAT5 {
				background-position: 0 -128px !important;
			}
			
			.MEIQIA-ICON-CHAT6 {
				background-position: 0 -160px !important;
			}
			
			.MEIQIA-ICON-CHAT7 {
				background-position: 0 -224px !important;
			}
			
			.MEIQIA-ICON-CHAT8 {
				background-position: 0 -256px !important;
			}
			
			.MEIQIA-ICON-CHAT9 {
				background-position: 0 -288px !important;
			}
			
			.MEIQIA-ICON-CHAT10 {
				background-position: 0 -320px !important;
			}
			
			.MEIQIA-ICON-CHAT11 {
				background-position: 0 -352px !important;
			}
			
			.MEIQIA-ICON-CHAT12 {
				background-position: 0 -384px !important;
			}
			
			.MEIQIA-ICON-TICKET1 {
				background-position: -32px 0 !important;
			}
			
			.MEIQIA-ICON-TICKET2 {
				background-position: -32px -32px !important;
			}
			
			.MEIQIA-ICON-TICKET3 {
				background-position: -32px -64px !important;
			}
			
			.MEIQIA-ICON-TICKET4 {
				background-position: -32px -96px !important;
			}
			
			.MEIQIA-ICON-TICKET5 {
				background-position: -32px -128px !important;
			}
			
			.MEIQIA-ICON-TICKET6 {
				background-position: -32px -160px !important;
			}
			
			.MEIQIA-ICON-TICKET7 {
				background-position: -32px -224px !important;
			}
			
			.MEIQIA-ICON-TICKET8 {
				background-position: -32px -256px !important;
			}
			
			.MEIQIA-ICON-TICKET9 {
				background-position: -32px -288px !important;
			}
			
			.MEIQIA-ICON-TICKET10 {
				background-position: -32px -320px !important;
			}
			
			.MEIQIA-ICON-TICKET11 {
				background-position: -32px -352px !important;
			}
			
			.MEIQIA-ICON-TICKET12 {
				background-position: -32px -384px !important;
			}
			
			.MEIQIA-ICON-CALL {
				background-position: -32px -448px !important;
			}
		</style>
		<style type="text/css" id="MEIQIA-PANEL-STYLE">
			#MEIQIA-PANEL-HOLDER {
				position: fixed;
				bottom: 0px;
				right: 60px;
				z-index: -1;
				width: 688px;
				height: 540px;
				padding: 0;
				margin: 0;
				overflow: hidden;
				visibility: hidden;
				box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15);
				border: 1px solid #eee\0;
				*border: 1px solid #eee;
			}
			
			#MEIQIA-IFRAME {
				display: none;
				float: none;
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: 1;
				width: 100% !important;
				height: 100% !important;
				padding: 0;
				margin: 0;
				border: 0;
				background: none;
			}
			
			#MEIQIA-DRAG-HANDLE {
				float: none;
				position: absolute;
				top: 0;
				left: 0;
				right: 140px;
				z-index: 3;
				width: auto;
				height: 60px;
				border: 0;
				padding: 0;
				margin: 0;
				background: none;
				cursor: move;
			}
			
			#MEIQIA-DRAG-MASK {
				display: none;
				float: none;
				position: absolute;
				top: 0;
				left: 0;
				z-index: 2;
				width: 100%;
				height: 100%;
				padding: 0;
				margin: 0;
				border: 0;
				background: none;
			}
		</style>
		<style type="text/css" id="MEIQIA-INVITE-STYLE">
			#MEIQIA-INVITE,
			#MEIQIA-INVITE div,
			#MEIQIA-INVITE span {
				float: none;
				width: auto;
				height: auto;
				padding: 0;
				margin: 0;
				border: 0;
				background: none;
			}
			
			#MEIQIA-INVITE {
				position: fixed;
				z-index: 2147483647;
				display: none;
				width: 340px;
				height: 130px;
				margin-bottom: 64px;
				border: 1px solid #f7f7f7;
				border-radius: 4px;
				box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16);
				text-align: left;
				cursor: pointer;
				color: #000;
				line-height: 1.428571429;
				background-color: #fff;
			}
			
			#MEIQIA-INVITE #MEIQIA-INVITE-ARROW1,
			#MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 {
				position: absolute;
				font-size: 0;
				line-height: 0;
			}
			
			#MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 {
				z-index: 2;
			}
			
			#MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 {
				z-index: 1;
			}
			
			#MEIQIA-INVITE {
				top: 50%;
				left: 50%;
				margin: -65px 0 0 -170px;
			}
			
			#MEIQIA-INVITE #MEIQIA-INVITE-ARROW1,
			#MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 {
				display: none;
			}
			
			#MEIQIA-INVITE #MEIQIA-INVITE-CLOSE {
				position: absolute;
				right: -20px;
				top: -20px;
				width: 40px;
				height: 40px;
				cursor: pointer;
				background-position: -12px -492px;
			}
			
			#MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:hover {
				background-position: -12px -556px;
			}
			
			#MEIQIA-INVITE #MEIQIA-INVITE-INSIDE {
				width: 300px;
				height: 44px;
				margin: 46px 20px 0;
				text-align: left;
				font-size: 14px;
				line-height: 22px;
				overflow: hidden;
				color: #000;
				/*word-break: break-all;*/
			}
		</style>
	</head>

	<!--[if lt IE 10]>
			<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->
	<!--start header-->

	<body class="new-juzi-body style-login-v2">

		<header class="navbar navbar-static-top bs-docs-nav" id="top" role="banner" style="background-image: initial;
			background-color: rgba(255,136,102,.95);">
			<div class="container navbox boxed">
				<div class="navbar-header">
					<button class="navbar-toggle collapsed" type="button">
						<span class="sr-only"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a style="background: url(${basePath}registerAndLogin/logo-with-slogan.png); background-size: cover;" class="logo fll navbar-brand for-login" href="${basePath}index.jsp">
						<h3 class="seeo">e家无忧-社区任务</h3>
					</a>
				</div>

			</div>
		</header>

		<!-- end 面包屑导航 -->
		<!--end header-->
		<div class="thewrap  ">
			<!-- NEW -->

			<!--页面顶部通栏广告位-->
			<div class="boxed mobile-none bill-box">
				<!-- 											 -->
			</div>
			<!--end 页面顶部通栏广告位-->

			<div class="login-v2-wrap">
				<!-- 调整默认header的样式 -->
				<style>
					body {
						background: url() !important;
						background-color: transparent !important;
					}
					
					.subnavbox {
						display: none;
					}
					
					.leftside-navbar {
						display: none;
					}
					
					.navbar-right {
						display: none;
					}
					
					.for-login {
						white-space: nowrap;
						position: relative;
					}
					
					.for-login:after {
						content: 'e家无忧-社区任务';
						position: absolute;
						line-height: 60px;
						font-size: 16px;
						color: #ffffff;
						margin-left: 20px;
						top: 50%;
						transform: translateY(-50%);
						left: 100%;
					}
				</style>
				<div>
					<div class="loginbox-v2 oldcheck-false">
						<form action="${basePath}UserinfoServlet?type=login" id="login_form" name="login_form"  method="post" accept-charset="utf-8">

							<div class="formrow row-title">
								<span>请登录</span>
								<a href="register.jsp" class="flr">注册 <i class="fa fa-arrow-circle-o-right"></i></a>
							</div>
							<div class="formrow row-infoalert">
								<div class="infoalert" id="login_error">
									<span class="text">账号密码不匹配，请重试。</span>
									<span class="act-close-target flr"><i class="fa fa-times-circle"></i></span>
								</div>
							</div>
							<div class="formrow row-input">
								<input name="uname" id="create_account_email" placeholder="用户名"  autocomplete="off" type="text">
							</div>
							<div class="formrow row-input">
								<input name="upwd" value="" id="create_account_password" placeholder="密码(6位以上数字或字母)"  autocomplete="off" type="password">
							</div>
							
							<div class="formrow row-btn">
								<button id="login_btn" type="submit" name="submit" class="jzbtn c">登录</button>
								<!-- <input type="submit" name="submit" class="jzbtn c" id="login_btn" value="登录"/> -->
							</div>

							
						</form>
					</div>
				</div>
			</div>
			
			<!-- start footer-->
			<div class="footer-container">
				<div class="search-input-box hidden-for-mobile">
					
				</div>
				<div class="link-box">
					<a href="${basePath}index.jsp" class="logo-box">
						<img class="logo" style="height: initial;" src="${basePath}registerAndLogin/logo-with-slogan.png" alt="图片加载失败">
					</a>
					<ul class="list-unstyled list-inline">
						<li>
							<a target="_blank" href="#">关于e家无忧-社区任务</a>
						</li>
						<li>
							<a target="_blank" href="#">加入我们</a>
						</li>
						<li>
							<a target="_blank" href="#">联系我们</a>
						</li>
						<li>
							<a target="_blank" href="#">合作伙伴</a>
						</li>

						<li>
							<a target="_blank" href="#">用户协议</a>
						</li>
						<li>
							<a target="_blank" href="#">隐私条款</a>
						</li>

					</ul>
					<div class="record-box">
						© 2013~2018 e家无忧-社区任务 | 厚溥ICP备20180723号-2
					</div>
				</div>
			</div>
			<!-- end footer-->
		</div>
		${login_message}
	</body>
	<script type="text/javascript">
		var login_error="${login_message}";
		var login_message = document.getElementById("login_error");
		if(login_error==="用户名密码有误"){
			login_message.style.display='block';
		}else if("注册成功"===login_error){
			
			login_message.style.display='block';
			login_message.innerHTML="注册成功，请使用新账号登录！";
		}
	</script>
</html>