package com.hopu.community_task.servlet;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.sql.Date;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hopu.community_task.domain.Task;
import com.hopu.community_task.domain.Userinfo;
import com.hopu.community_task.servic.TaskServic;
import com.hopu.community_task.servic.impl.TaskServicImpl;
import com.hopu.community_task.util.HttpUtil;

/**
 * 任务控制层
 */
@MultipartConfig
@WebServlet("/TaskServlet")
public class TaskServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private TaskServic servic = new TaskServicImpl();
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String type = request.getParameter("type");
		
		switch (type) {
		case "forwardAdd":
			forwardAdd(request, response);
			break;
		case "save":
			save(request, response);
			break;
		case "findById":
			findById(request, response);
			break;
		case "update":
			update(request, response);
			break;
		case "update_update":
			update_update(request, response);
			break;
		case "update_jiequ":
			update_jiequ(request, response);
			break;
		case "update_jiequ2":
			update_jiequ2(request, response);
			break;
		case "update_over":
			update_over(request, response);
			break;
		case "update_fangqi":
			update_fangqi(request, response);
			break;
		case "update_jujue":
			update_fangqi(request, response);
			break;
		case "update_wancheng":
			String tid = request.getParameter("tid");
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
			String end_time = df.format(new Date(System.currentTimeMillis()));
			servic.update_wancheng(tid,end_time);
			response.sendRedirect("PublicTaskServlet?type=findById&tid="+tid);
			break;
		default:
			break;
		}
	}

	private void update(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String tid = request.getParameter("tid");
		Task task = servic.findById(Integer.parseInt(tid));
		request.setAttribute("task", task);
		request.getRequestDispatcher("jsp/updateTask.jsp").forward(request, response);
	}

	private void update_fangqi(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
		String tid = request.getParameter("tid");
		servic.update_fangqi(tid);
		response.sendRedirect("PublicTaskServlet?type=findById&tid="+tid);
	}

	private void update_update(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		String tid = request.getParameter("tid");
		String tname = request.getParameter("tname");
		String content = request.getParameter("content");
		String task_money = request.getParameter("task_money");
		String start_user_tel=request.getParameter("telType")+":"+request.getParameter("tel");
		int task_money_int = task_money==null||task_money.equals("")?0:Integer.parseInt(task_money);
		Userinfo start_user = (Userinfo) request.getSession().getAttribute("userinfo");
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
		String start_time = df.format(new Date(System.currentTimeMillis()));
		Task task = new Task( tname, content, start_user, start_time,  task_money_int,  null);
		task.setStart_user_tel(start_user_tel);
		task.setTid(Integer.parseInt(tid));
		//文件保存路径  
		String path = request.getSession().getServletContext().getRealPath("/")+"upload/img/";
		//保存文件，返回文件名
		String fileName = HttpUtil.upload(request, "t_img", path);
		if(fileName!=null&&!fileName.equals("")){
			task.setT_img("upload/img/"+fileName);
		}else{
			task.setT_img(request.getParameter("oid_t_img"));
		}
		//保存任务
		int tid2 = servic.update(task);
		if(tid2>0){
			request.getSession().removeAttribute("updateTask-message");
			//跳转详情页面
			response.sendRedirect("PublicTaskServlet?type=findById&tid="+tid);
		}else{
			request.getSession().setAttribute("updateTask-message", "服务器繁忙，请重试");
			response.sendRedirect("TaskServlet?type=update&tid="+tid);
		}
		
	}

	private void update_over(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String tid = request.getParameter("tid");
		int remove = servic.remove(Integer.parseInt(tid));
		if(remove>0){
			response.sendRedirect("index.jsp");
		}
	}

	private void update_jiequ2(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String tid=request.getParameter("tid");
		String tel=request.getParameter("tel");
		String telType=request.getParameter("telType");
		Userinfo user =(Userinfo)request.getSession().getAttribute("userinfo");
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
		String end_time = df.format(new Date(System.currentTimeMillis()));
		Task task = new Task();
		task.setTid(Integer.parseInt(tid));
		task.setEnd_user(user);
		task.setEnd_time(end_time);
		task.setEnd_user_tel(telType+":"+tel);
		String tidNum = servic.update_jiequ2(task);
		/*if(tidNum!=null){
			request.setAttribute("jiequ_message", "接取成功,请尽快完成");
		}else{
			request.setAttribute("jiequ_message", "网络开小差了，请稍后在试");
		}
		request.getRequestDispatcher("PublicTaskServlet?type=findById&tid="+tid)
				.forward(request, response);*/
		response.sendRedirect("PublicTaskServlet?type=findById&tid="+tidNum);
	}

	private void update_jiequ(HttpServletRequest request, HttpServletResponse response) throws IOException {
		String tid = request.getParameter("tid");
		response.sendRedirect("TaskServlet?type=findById&tid="+tid);
	}

	private void findById(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String tid = request.getParameter("tid");
		if(tid!=null||!"".equals(tid)){
			Task task2 = servic.findById(Integer.parseInt(tid));
			if(task2==null){
				response.sendRedirect("index.jsp");
			}else{
				request.setAttribute("task", task2);
				request.getRequestDispatcher("jsp/findTaskById2.jsp").forward(request, response);
			}
		}else{
			response.sendRedirect("index.jsp");
		}
	}

	/**添加任务
	 * @param request
	 * @param response
	 * @throws UnsupportedEncodingException
	 * @throws IOException
	 * @throws ServletException
	 */
	private void save(HttpServletRequest request, HttpServletResponse response)
			throws UnsupportedEncodingException, IOException, ServletException {
		request.setCharacterEncoding("utf-8");
		String tname = request.getParameter("tname");
		String content = request.getParameter("content");
		String task_money = request.getParameter("task_money");
		String task_img = request.getParameter("t_img");
		String start_user_tel=request.getParameter("telType")+":"+request.getParameter("tel");
		int task_money_int = task_money==null||task_money.equals("")?0:Integer.parseInt(task_money);
		Userinfo start_user = (Userinfo) request.getSession().getAttribute("userinfo");
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm");//设置日期格式
		String start_time = df.format(new Date(System.currentTimeMillis()));
		Task task = new Task( tname, content, start_user, start_time,  task_money_int,  null);
		task.setStart_user_tel(start_user_tel);
		//文件保存路径  
		String path = request.getSession().getServletContext().getRealPath("/")+"upload/img/";
		//保存文件，返回文件名
		String fileName = HttpUtil.upload(request, "t_img", path);
		if(fileName!=null&&!fileName.equals("")){
			task.setT_img("upload/img/"+fileName);
		}
		System.out.println(task);
		//保存任务
		int save = servic.save(task);
		if(save>0){
			request.getSession().removeAttribute("addTask-message");
			//跳转详情页面
			response.sendRedirect("PublicTaskServlet?type=findById&tid="+save);
		}else{
			request.getSession().setAttribute("addTask-message", "服务器繁忙，请重试");
			response.sendRedirect("jsp/addTask.jsp");
		}
	}

	/**进入发布新任务页面前先判断是否登录
	 * @param request
	 * @param response
	 * @throws IOException
	 */
	private void forwardAdd(HttpServletRequest request, HttpServletResponse response) throws IOException {
		if(request.getSession().getAttribute("userinfo")==null){
			request.getSession().setAttribute("longin-message", "请先登录");
			response.sendRedirect("jsp/login.jsp");
		}else{
			request.getSession().removeAttribute("longin-message");
			response.sendRedirect("jsp/addTask.jsp");
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
