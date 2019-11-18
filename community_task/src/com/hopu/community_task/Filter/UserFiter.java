package com.hopu.community_task.Filter;

import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class UserFiter
 */
@WebFilter("/TaskServlet")
public class UserFiter implements Filter {
    public UserFiter() {
    }

	public void destroy() {
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) response;
		if(req.getSession().getAttribute("userinfo")==null){
			req.getSession().setAttribute("longin-message", "请先登录");
			req.getSession().setAttribute("requestUrl", req.getRequestURI()+"?"+req.getQueryString());
			res.sendRedirect("jsp/login.jsp");
			return;
		}else{
			req.getSession().removeAttribute("longin-message");
		}
		chain.doFilter(req, response);
		
	}

	public void init(FilterConfig fConfig) throws ServletException {
	}

}
