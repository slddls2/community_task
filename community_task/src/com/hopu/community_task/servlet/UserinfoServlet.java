package com.hopu.community_task.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hopu.community_task.domain.Userinfo;
import com.hopu.community_task.servic.UserinfoServic;
import com.hopu.community_task.servic.impl.UserinfoServicImpl;
import com.hopu.community_task.util.MD5Util;


@WebServlet("/UserinfoServlet")
public class UserinfoServlet extends HttpServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = -370680018956838100L;

	private UserinfoServic servic = new UserinfoServicImpl();
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String type = request.getParameter("type");
		switch (type) {
		case "login"://登录
			String uname = request.getParameter("uname");
			String upwd = request.getParameter("upwd");
			upwd=MD5Util.md5(upwd);
			Userinfo userinfo = servic.login(uname,upwd);
			if(userinfo!=null){
				request.getSession().removeAttribute("login_message");
				request.getSession().setAttribute("userinfo", userinfo);
				String url = (String) request.getSession().getAttribute("requestUrl");
				if(url!=null&&!url.equals("")){
					response.sendRedirect(url);
				}else{
					response.sendRedirect("PublicTaskServlet?type=Find");
				}
			}else{
				request.setAttribute("login_message", "用户名密码有误");
				request.getRequestDispatcher("jsp/login.jsp").forward(request, response);
			}
			break;
		case "register":
			String uname0 = request.getParameter("uname");
			String upwd0 = request.getParameter("upwd");
			upwd0=MD5Util.md5(upwd0);
			String sex = request.getParameter("sex");
			String realName = request.getParameter("realName");
			String identity = request.getParameter("identity");
			String tel = request.getParameter("tel");
			String weixin = request.getParameter("weixin");
			String qq = request.getParameter("qq");
			Userinfo user = new Userinfo(uname0, upwd0, realName, sex, identity, qq, weixin, tel);
			int num  = servic.register(user);
			if(num>0){
				request.setAttribute("login_message", "注册成功");
				request.getRequestDispatcher("jsp/login.jsp").forward(request, response);
			}else{
				request.setAttribute("reg_message", "服务器繁忙");
				request.getRequestDispatcher("jsp/register.jsp").forward(request, response);
			}
			break;
		case "findId"://查询
			
			break;
		case "exit"://退出
			request.getSession().invalidate();	
			response.sendRedirect("PublicTaskServlet?type=Find");
			break;
		default:
			break;
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
