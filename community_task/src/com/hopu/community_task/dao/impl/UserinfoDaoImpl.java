package com.hopu.community_task.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.hopu.community_task.dao.UserinfoDao;
import com.hopu.community_task.domain.Userinfo;
import com.hopu.community_task.util.DBUtil;
/**
 * 用户表dao层实现类
 * @author slddls
 *
 */
public class UserinfoDaoImpl implements UserinfoDao {

	private PreparedStatement pst;
	private ResultSet rs;
	@Override
	public Userinfo findByNameAndPwd(String uname, String upwd) {
		String sql = "select * from userinfo where uname=? and upwd=?";
		pst = DBUtil.getPst(sql);
		try {
			pst.setString(1, uname);
			pst.setString(2, upwd);
			rs=pst.executeQuery();
			if(rs.next()){
				Userinfo u=new Userinfo(rs.getInt("uid"), rs.getString("uname"),
						"", rs.getString("realName"),rs.getString("sex"), 
						rs.getString("identity"),rs.getString("qq"), 
						rs.getString("weixin"), rs.getString("tel"),
						rs.getInt("good_value"), rs.getInt("money"));
				return u;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		
		return null;
	}
	@Override
	public int save(Userinfo user) {
		String sql =  "insert into userinfo(uname,upwd,realName,sex,identity,"
				+ "qq,weixin,tel,good_value,money) values(?,?,?,?,?,?,?,?,0,0)";
		pst=DBUtil.getPst(sql);
		try {
			pst.setString(1, user.getUname());
			pst.setString(2, user.getUpwd());
			pst.setString(3, user.getRealName());
			pst.setString(4, user.getSex());
			pst.setString(5, user.getIdentity());
			pst.setString(6, user.getQq());
			pst.setString(7, user.getWeixin());
			pst.setString(8, user.getTel());
			int num = pst.executeUpdate();
			return num;
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		return 0;
	}
	@Override
	public Userinfo findById(int id) {
		String sql = "select * from userinfo where uid=?";
		pst = DBUtil.getPst(sql);
		try {
			pst.setInt(1, id);
			rs=pst.executeQuery();
			if(rs.next()){
				Userinfo u=new Userinfo(rs.getInt("uid"), rs.getString("uname"),
						"", rs.getString("realName"),rs.getString("sex"), 
						rs.getString("identity"),rs.getString("qq"), 
						rs.getString("weixin"), rs.getString("tel"),
						rs.getInt("good_value"), rs.getInt("money"));
				return u;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		
		return null;
	}

}
