package com.hopu.community_task.dao;

import java.util.List;

import com.hopu.community_task.domain.PageBean;
import com.hopu.community_task.domain.Task;

/**
 * 任务表dao层接口
 * @author slddls
 *
 */
public interface TaskDao {
	
	int save(Task task);
	
	int update(Task task);
	
	int remove(int tid);
	
	Task findById(int tid);
	
	List<Task> likeFind(String str);
	
	List<Task> find(PageBean pageBean);

	String update_jiequ2(Task task);

	int update_fangqi(String tid);

	int update_wancheng(String tid, String end_time);
	
	
	
	
}
