package com.hopu.community_task.dao.impl;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.hopu.community_task.dao.TaskDao;
import com.hopu.community_task.dao.UserinfoDao;
import com.hopu.community_task.domain.PageBean;
import com.hopu.community_task.domain.Task;
import com.hopu.community_task.domain.Userinfo;
import com.hopu.community_task.util.DBUtil;
/**
 * 任务表dao层实现类
 * @author slddls
 *
 */
public class TaskDaoImpl implements TaskDao {

	private PreparedStatement pst;
	private ResultSet rs;
	@Override
	public int save(Task task) {
		String sql = "insert into task(content,start_time,"
				+ "start_uid,state,t_img,task_money,tname,start_user_tel)  "
				+ "values(?,?,?,?,?,?,?,?)";
		pst=DBUtil.getPst(sql);
		int num=0;
		try {
			pst.setString(1, task.getContent());
			pst.setString(2, task.getStart_time());
			pst.setInt(3, task.getStart_user().getUid());
			pst.setString(4, "0");
			pst.setString(5, task.getT_img());
			pst.setInt(6, task.getTask_money());
			pst.setString(7, task.getTname());
			pst.setString(8, task.getStart_user_tel());
			num = pst.executeUpdate();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		if(num>0){
			num=findByT_img(task);
		}
		return num;
	}

	@Override
	public int update(Task task) {
		String sql = "update task set content=?,start_time=?"
				+ ",start_uid=?,state=?,t_img=?,task_money=?,"
				+ "tname=?,start_user_tel=?  where tid=?";
		pst=DBUtil.getPst(sql);
		try {
			pst.setString(1, task.getContent());
			pst.setString(2, task.getStart_time());
			pst.setInt(3, task.getStart_user().getUid());
			pst.setString(4, "0");
			pst.setString(5, task.getT_img());
			pst.setInt(6, task.getTask_money());
			pst.setString(7, task.getTname());
			pst.setString(8, task.getStart_user_tel());
			pst.setInt(9, task.getTid());
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
	public int remove(int tid) {
		String sql = "delete from task where tid=?";
		pst=DBUtil.getPst(sql);
		try {
			pst.setInt(1, tid);
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
	public Task findById(int tid) {
		String sql = "select t.* from task t where tid=?";
		pst=DBUtil.getPst(sql);
		try {
			pst.setInt(1, tid);
			rs=pst.executeQuery();
			if(rs.next()){
				Task task  = tasks();
				/*new Task(rs.getInt("tid"), rs.getString("tname"), 
						rs.getString("content"), new Userinfo(rs.getInt("start_uid")), 
						rs.getString("start_time"), rs.getString("state"), 
						new Userinfo(rs.getInt("end_uid")), rs.getInt("task_money"), 
						rs.getString("end_time"), rs.getString("t_img"));
				dao = new UserinfoDaoImpl();
				task.setStart_user(dao.findById(task.getStart_user().getUid()));
				task.setEnd_user(dao.findById(task.getEnd_user().getUid()));
				task.setStart_user_tel(rs.getString("start_user_tel"));
				task.setEnd_user_tel(rs.getString("end_user_tel"));*/
				return task;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		return null;
	}

	@Override
	public List<Task> likeFind(String str) {
		String sql = "select t.* from task t where tname like ? or content like ? "
				+ "order by state, task_money desc,start_time desc";
		pst=DBUtil.getPst(sql);
		try {
			pst.setString(1, "%"+str+"%");
			pst.setString(2, "%"+str+"%");
			rs=pst.executeQuery();
			new UserinfoDaoImpl();
			List<Task> list =new ArrayList<Task>();
			Task task = null;
			while(rs.next()){
				task = tasks();
				list.add(task);
			}
			return list;
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		return null;
	}

	private Task tasks() throws SQLException {
		Task task;
		task = new Task(rs.getInt("tid"), rs.getString("tname"), 
				rs.getString("content"), new Userinfo(rs.getInt("start_uid")), 
				rs.getString("start_time"), rs.getString("state"), 
				new Userinfo(rs.getInt("end_uid")), rs.getInt("task_money"), 
				rs.getString("end_time"), rs.getString("t_img"));
		UserinfoDao dao = new UserinfoDaoImpl();
		task.setStart_user(dao.findById(task.getStart_user().getUid()));
		task.setEnd_user(dao.findById(task.getEnd_user().getUid()));
		task.setStart_user_tel(rs.getString("start_user_tel"));
		task.setEnd_user_tel(rs.getString("end_user_tel"));
		return task;
	}

	@Override
	public List<Task> find(PageBean pageBean) {
		String sql = "select t.* from task t  "
				+ " order by state, task_money desc,start_time desc   limit ?,?";
		pst=DBUtil.getPst(sql);
		try {
			pst.setInt(1, (pageBean.getCurrentPage()-1)*pageBean.getPageSize());
			pst.setInt(2, pageBean.getPageSize());
			rs=pst.executeQuery();
			new UserinfoDaoImpl();
			List<Task> list =new ArrayList<Task>();
			Task task = null;
			while(rs.next()){
				task = tasks();
				list.add(task);
			}
			return list;
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		return null;
	}
	 
	private int findByT_img(Task task){
		String sql ="select tid from task where tname=?  and  content=?  "
				+ "and  start_uid=?  and  start_time=?  and  state=? "
				+ " and task_money=?  ";
		pst=DBUtil.getPst(sql);
		try {
			pst.setString(1, task.getTname());
			pst.setString(2, task.getContent());
			pst.setInt(3, task.getStart_user().getUid());
			pst.setString(4, task.getStart_time());
			pst.setString(5, "0");
			pst.setInt(6, task.getTask_money());
			rs=pst.executeQuery();
			if(rs.next()){
				return rs.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		return 0;
	}

	@Override
	public String update_jiequ2(Task task) {
		String sql = "update task set end_user_tel=?,state=1,end_uid=?,end_time=? where tid=? ";
		pst=DBUtil.getPst(sql);
		try {
			pst.setString(1, task.getEnd_user_tel());
			pst.setInt(2, task.getEnd_user().getUid());
			pst.setString(3, task.getEnd_time());
			pst.setInt(4, task.getTid());
			int num = pst.executeUpdate();
			if(num>0){
				return task.getTid()+"";
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		return null;
	}

	@Override
	public int update_fangqi(String tid) {
		String sql = "update task set end_uid=null,end_time=null,"
				+ "end_user_tel=NULL,state=0 where tid=?";
		pst=DBUtil.getPst(sql);
		try {
			pst.setString(1, tid);
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
	public int update_wancheng(String tid, String end_time) {
		String sql = "update task set end_time=?,state=2 where tid=?";
		pst=DBUtil.getPst(sql);
		try {
			pst.setString(1, end_time);
			pst.setString(2, tid);
			int num = pst.executeUpdate();
			return num;
		} catch (SQLException e) {
			e.printStackTrace();
		}finally{
			DBUtil.close(rs);
		}
		return 0;
	}
}
