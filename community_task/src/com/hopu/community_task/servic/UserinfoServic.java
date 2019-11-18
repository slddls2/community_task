package com.hopu.community_task.servic;

import com.hopu.community_task.domain.Userinfo;

/**
 * 用户业务层接口
 * @author slddls
 *
 */
public interface UserinfoServic {

	Userinfo login(String uname, String upwd);

	int register(Userinfo user);
	
	Userinfo findById(int id);

}
