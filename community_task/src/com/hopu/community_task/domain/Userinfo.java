package com.hopu.community_task.domain;

import java.io.Serializable;
/**
 * 用户类
 * @author slddls
 *
 */
public class Userinfo implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -2309881552931100613L;
	
	private int uid;
	private String uname;
	private String upwd;
	private String realName;
	private String sex;
	private String identity;
	private String qq;
	private String weixin;
	private String tel;
	private int gool_value;//好心值
	private int money;//虚拟币
	public Userinfo() {
		super();
	}
	
	public Userinfo(String uname, String upwd, String realName, String sex, String identity, String qq, String weixin,
			String tel) {
		super();
		this.uname = uname;
		this.upwd = upwd;
		this.realName = realName;
		this.sex = sex;
		this.identity = identity;
		this.qq = qq;
		this.weixin = weixin;
		this.tel = tel;
	}

	public Userinfo(int uid, String uname, String upwd, String realName, String sex, String identity, String qq,
			String weixin, String tel, int gool_value, int money) {
		super();
		this.uid = uid;
		this.uname = uname;
		this.upwd = upwd;
		this.realName = realName;
		this.sex = sex;
		this.identity = identity;
		this.qq = qq;
		this.weixin = weixin;
		this.tel = tel;
		this.gool_value = gool_value;
		this.money = money;
	}

	public Userinfo(int uid) {
		this.uid = uid;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public String getUname() {
		return uname;
	}

	public void setUname(String uname) {
		this.uname = uname;
	}

	public String getUpwd() {
		return upwd;
	}

	public void setUpwd(String upwd) {
		this.upwd = upwd;
	}

	public String getRealName() {
		return realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getIdentity() {
		return identity;
	}

	public void setIdentity(String identity) {
		this.identity = identity;
	}

	public String getQq() {
		return qq;
	}

	public void setQq(String qq) {
		this.qq = switchs(qq);
	}

	public String getWeixin() {
		return weixin;
	}

	public void setWeixin(String weixin) {
		this.weixin = switchs(weixin);
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = switchs(tel);
	}

	public int getGool_value() {
		return gool_value;
	}

	public void setGool_value(int gool_value) {
		this.gool_value = gool_value;
	}

	public int getMoney() {
		return money;
	}

	public void setMoney(int money) {
		this.money = money;
	}

	private String switchs(String str){
		if(str==null){
			str="";
		}
		return str;
	}
}
