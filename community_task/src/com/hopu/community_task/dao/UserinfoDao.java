package com.hopu.community_task.dao;

import com.hopu.community_task.domain.Userinfo;

/**
 * 用户表dao层接口
 * @author slddls
 *
 */
public interface UserinfoDao {

	Userinfo findByNameAndPwd(String uname, String upwd);

	Userinfo findById(int id);
	
	int save(Userinfo user);

}
