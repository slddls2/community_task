package com.hopu.community_task.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hopu.community_task.domain.PageBean;
import com.hopu.community_task.domain.Task;
import com.hopu.community_task.servic.TaskServic;
import com.hopu.community_task.servic.impl.TaskServicImpl;

/**
 * 任务控制层
 */
@MultipartConfig
@WebServlet("/PublicTaskServlet")
public class PublicTaskServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private TaskServic servic = new TaskServicImpl();
	@SuppressWarnings("null")
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String type = request.getParameter("type");
		
		switch (type) {
		
		case "findById":
			 String tid = request.getParameter("tid");
			if(tid!=null||!tid.equals("")||!tid.equals("null")){
				Task task2 = servic.findById(Integer.parseInt(tid));
				if(task2==null){
					response.sendRedirect("index.jsp");
				}else{
					request.setAttribute("task", task2);
					request.getRequestDispatcher("jsp/findTaskById.jsp").forward(request, response);
				}
			}else{
				response.sendRedirect("index.jsp");
			}
			
			break;
		case "likeFind":
			likeFind(request, response);
			break;
		case "Find":
			find(request, response);
			break;
		
		default:
			break;
		}
	}

	/**分页查询
	 * @param request
	 * @param response
	 * @throws ServletException
	 * @throws IOException
	 */
	private void find(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String pageSize = request.getParameter("pageSize");
		String currentPage = request.getParameter("currentPage");
		PageBean page = new PageBean();
		page.setCurrentPage(currentPage==null?1:Integer.parseInt(currentPage));
		if(pageSize!=null&&!pageSize.equals("")){
			page.setPageSize(Integer.parseInt(pageSize));
		}
		if(page.getCurrentPage()<1){
			page.setCurrentPage(1);
		}
		List<Task> taskList = servic.find(page);
		//防止页数超出
		while((taskList==null||taskList.size()<1)&&page.getCurrentPage()>1){
			page.setCurrentPage(page.getCurrentPage()-1);
			taskList=servic.find(page);
		}
		for (int i = 0; i < taskList.size(); i++) {
			System.out.println(taskList.get(i));
		}
		request.setAttribute("taskList", taskList);
		request.setAttribute("currentPage", page.getCurrentPage());
		request.getRequestDispatcher("main.jsp").forward(request, response);
	}

	/**模糊搜索
	 * @param request
	 * @param response
	 * @throws ServletException
	 * @throws IOException
	 */
	private void likeFind(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String likeFind = request.getParameter("like");
		List<Task> likeTask = servic.likeFind(likeFind);
		request.getSession().setAttribute("taskList", likeTask);
		request.getRequestDispatcher("main.jsp").forward(request, response);
	}

	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
