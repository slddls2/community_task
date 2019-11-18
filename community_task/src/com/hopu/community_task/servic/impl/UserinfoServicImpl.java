package com.hopu.community_task.servic.impl;

import com.hopu.community_task.dao.UserinfoDao;
import com.hopu.community_task.dao.impl.UserinfoDaoImpl;
import com.hopu.community_task.domain.Userinfo;
import com.hopu.community_task.servic.UserinfoServic;

public class UserinfoServicImpl implements UserinfoServic {

	UserinfoDao dao = new UserinfoDaoImpl();
	@Override
	public Userinfo login(String uname, String upwd) {
		
		return dao.findByNameAndPwd(uname,upwd);
	}
	@Override
	public int register(Userinfo user) {
		return dao.save(user);
	}
	@Override
	public Userinfo findById(int id) {
		return dao.findById(id);
	}

}
