package com.hopu.community_task.servic.impl;

import java.util.List;

import com.hopu.community_task.dao.TaskDao;
import com.hopu.community_task.dao.impl.TaskDaoImpl;
import com.hopu.community_task.domain.PageBean;
import com.hopu.community_task.domain.Task;
import com.hopu.community_task.servic.TaskServic;

public class TaskServicImpl implements TaskServic {
	
	TaskDao dao = new TaskDaoImpl();

	@Override
	public int save(Task task) {
		return dao.save(task);
	}

	@Override
	public int update(Task task) {
		return dao.update(task);
	}

	@Override
	public int remove(int tid) {
		return dao.remove(tid);
	}

	@Override
	public Task findById(int tid) {
		return dao.findById(tid);
	}

	@Override
	public List<Task> likeFind(String str) {
		return dao.likeFind(str);
	}

	@Override
	public List<Task> find(PageBean pageBean) {
		List<Task> list = dao.find(pageBean);
		
		return list;
	}

	@Override
	public String update_jiequ2(Task task) {
		return dao.update_jiequ2(task);
	}

	@Override
	public int update_fangqi(String tid) {
		return dao.update_fangqi(tid);
	}

	@Override
	public int update_wancheng(String tid, String end_time) {
		return dao.update_wancheng(tid,end_time);
	}


}
