package com.hopu.community_task.domain;

import java.io.Serializable;
/**
 * 任务类
 * @author slddls
 *
 */
public class Task implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7411791966259405671L;
	
	private int tid;
	private String tname;
	private String content;
	private Userinfo start_user;
	private String start_time;
	/*任务状态：0 --未接   1 --已接未完成    2 --已完成
	 * 		  
	 * */
	private String state;
	private Userinfo end_user;
	private int task_money;
	private String end_time;
	private String t_img;
	private String start_user_tel;
	private String end_user_tel;
	
	
	public Task(int tid, String tname, String content, Userinfo start_user, String start_time, String state,
			Userinfo end_user, int task_money, String end_time, String t_img, String start_user_tel,
			String end_user_tel) {
		super();
		this.tid = tid;
		this.tname = tname;
		this.content = content;
		this.start_user = start_user;
		this.start_time = start_time;
		this.state = state;
		this.end_user = end_user;
		this.task_money = task_money;
		this.end_time = end_time;
		this.t_img = t_img;
		this.start_user_tel = start_user_tel;
		this.end_user_tel = end_user_tel;
	}
	public Task() {
		super();
	}
	public Task(int tid, String tname, String content, Userinfo start_user, String start_time, String state,
			Userinfo end_user, int task_money, String end_time, String t_img) {
		super();
		this.tid = tid;
		this.tname = tname;
		this.content = content;
		this.start_user = start_user;
		this.start_time = start_time;
		this.state = state;
		this.end_user = end_user;
		this.task_money = task_money;
		this.end_time = end_time;
		this.t_img = t_img;
	}
	public Task(String tname, String content, Userinfo start_user, String start_time, int task_money,
			String t_img) {
		super();
		this.tname = tname;
		this.content = content;
		this.start_user = start_user;
		this.start_time = start_time;
		this.task_money = task_money;
		this.t_img = t_img;
	}
	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public String getTname() {
		return tname;
	}
	public void setTname(String tname) {
		this.tname = tname;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Userinfo getStart_user() {
		return start_user;
	}
	public void setStart_user(Userinfo start_user) {
		this.start_user = start_user;
	}
	public String getStart_time() {
		if(start_time.length()>=16){
			start_time = start_time.substring(0, 16);
		}
		return start_time;
	}
	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public Userinfo getEnd_user() {
		return end_user;
	}
	public void setEnd_user(Userinfo end_user) {
		this.end_user = end_user;
	}
	public int getTask_money() {
		return task_money;
	}
	public void setTask_money(int task_money) {
		this.task_money = task_money;
	}
	public String getEnd_time() {
		if(end_time!=null&&end_time.length()>=16){
			end_time = end_time.substring(0, 16);
		}
		return end_time;
	}
	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}
	public String getT_img() {
		return t_img;
	}
	public void setT_img(String t_img) {
		this.t_img = t_img;
	}
	public String getStart_user_tel() {
		return start_user_tel;
	}
	public void setStart_user_tel(String start_user_tel) {
		this.start_user_tel = start_user_tel;
	}
	public String getEnd_user_tel() {
		return end_user_tel;
	}
	public void setEnd_user_tel(String end_user_tel) {
		this.end_user_tel = end_user_tel;
	}
	@Override
	public String toString() {
		return "Task [tid=" + tid + ", tname=" + tname + ", content=" + content + ", start_user=" + start_user
				+ ", start_time=" + start_time + ", state=" + state + ", end_user=" + end_user + ", task_money="
				+ task_money + ", end_time=" + end_time + ", t_img=" + t_img + ", start_user_tel=" + start_user_tel
				+ ", end_user_tel=" + end_user_tel + "]";
	}
}
