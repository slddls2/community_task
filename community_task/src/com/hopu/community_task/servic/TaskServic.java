package com.hopu.community_task.servic;

import java.util.List;

import com.hopu.community_task.domain.PageBean;
import com.hopu.community_task.domain.Task;

/**
 * 任务业务层接口
 * @author slddls
 *
 */
public interface TaskServic {

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
