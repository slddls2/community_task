drop database if exists community;
create database community;



drop table if exists userinfo;
create table userinfo (
  uid int(11) not null auto_increment,
  uname varchar(20) not null,
  upwd char(32) not null,
  realname varchar(20) not null,
  sex char(3) default null,
  identity char(18) not null,
  good_value int(11) not null,
  money int(11) not null,
  qq varchar(20) default null,
  weixin varchar(20) default null,
  tel char(11) default null,
  primary key  (uid)
) engine=innodb auto_increment=10 default charset=utf8;



insert into userinfo values ('1', '11', '6512bd43d9caa6e02c990b0a82652dca', '11', '11', '11', '0', '0', '11', '11', '11');
insert into userinfo values ('2', '22', '6512bd43d9caa6e02c990b0a82652dca', '11', '11', '11', '0', '0', '11', '11', '11');
insert into userinfo values ('3', 'xu0813001', '96304cf1db4a48bdd280bf58a56c3be0', '安亮', null, '', '0', '0', '', 'xu0813001', '');
insert into userinfo values ('4', 'sld', '25d55ad283aa400af464c76d713c07ad', '熟练度', null, '', '0', '0', '', '', '');
insert into userinfo values ('5', 'xiaoxin', '14d5cef31a2fccde671fea8106c27e2e', '小欣', null, '622825123456789', '0', '0', '', '', '');



drop table if exists task;
create table task (
  tid int(11) not null auto_increment,
  tname varchar(80) not null,
  content text not null,
  start_uid int(11) not null,
  start_time datetime not null,
  state varchar(20) not null,
  end_uid int(11) default null,
  task_money int(11) default null,
  end_time datetime default null,
  contact varchar(20) default null,
  t_img varchar(100) default null,
  start_user_tel varchar(20) not null,
  end_user_tel varchar(20) default null,
  primary key  (tid),
  key fk_end_uid (end_uid),
  key fk_start_uid (start_uid),
  constraint fk_end_uid foreign key (end_uid) references userinfo (uid),
  constraint fk_start_uid foreign key (start_uid) references userinfo (uid)
) engine=innodb auto_increment=14 default charset=utf8;



insert into task values ('1', '找人帮忙照顾几天小狗', '出门几天，家里的狗无人照料，找个爱狗人士帮忙照顾几天', '8', '2018-08-19 22:49:00', '2', '3', '200', '2018-08-20 00:59:00', null, 'upload/img/20180819224909644.jpg', '微信:sd3398112', '微信:xu0813001');
insert into task values ('2', '帮去快递', '下班太晚了，回去小区商店都关门了，谁能帮我取下快递，晚上11点以后给我', '8', '2018-08-19 23:39:00', '0', null, '0', null, null, 'upload/img/index.jpg', '微信:123321', null);
insert into task values ('3', '谁能帮我换个灯泡？？？', '老公不在，卧室的灯不亮了，谁能帮我换一下~~~~', '3', '2018-08-20 01:35:00', '1', '8', '0', '2018-08-22 10:55:00', null, 'upload/img/20180819222346.jpg', '微信:ss344567', '电话:13175321598');
