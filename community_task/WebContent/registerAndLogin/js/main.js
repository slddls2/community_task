! function(t) {
	function e(e) {
		var i = {};
		i.title = e.range + "日排名足迹", i.subtitle = "榜单一天会更新多次，这里只显示每天最高排名", i.y_title = "排名", i.series_A = e.genre0, i.data_A = e.data0, i.series_B = e.genre1, i.data_B = e.data1, i.x_data = e.xdata;
		Highcharts.chart("container", {
			credits: {
				href: 'javascript:window.open("https://www.chandashi.com/", "_blank")',
				text: "蝉大师提供"
			},
			tooltip: {
				backgroundColor: {
					linearGradient: [0, 0, 0, 60],
					stops: [
						[0, "#FFFFFF"],
						[1, "#E0E0E0"]
					]
				},
				borderWidth: 1,
				borderColor: "#7CB5EC",
				shared: !0,
				formatter: function() {
					var e = "<b>" + this.x + "</b>";
					return t.each(this.points, function() {
						e += '<br/><span style="color:' + this.series.color + '"> ● </span> ' + this.series.name + ": <strong>" + this.y + "名</strong>"
					}), e
				}
			},
			chart: {
				type: "line"
			},
			title: {
				text: i.title
			},
			subtitle: {
				text: i.subtitle
			},
			xAxis: {
				categories: i.x_data,
				showLastLabel: !1,
				labels: {
					rotation: 0,
					step: 2
				}
			},
			yAxis: {
				title: {
					text: i.y_title
				},
				tickPositions: [1, 5, 10, 15, 20],
				reversed: !0
			},
			plotOptions: {
				line: {
					dataLabels: {
						enabled: !1
					}
				}
			},
			series: [{
				name: i.series_A,
				data: i.data_A
			}, {
				name: i.series_B,
				data: i.data_B
			}]
		})
	}

	function i() {
		var e, i = t(".usersearch-box>ul").children("li.active");
		0 == i.length ? i = t(".usersearch-box>ul").children("li").eq(1).addClass("active") : (i.removeClass("active"), e = 0 == i.prev("li[data-name]").length ? i.prev().prev() : i.prev(), e.length > 0 ? e.addClass("active") : t(".usersearch-box>ul").children("li").eq(1).addClass("active"))
	}

	function a() {
		var e, i = t(".usersearch-box>ul").children("li.active");
		0 == i.length ? i = t(".usersearch-box>ul").children("li").eq(1).addClass("active") : (i.removeClass("active"), e = 0 == i.next("li[data-name]").length ? i.next().next() : i.next(), e.length > 0 ? e.addClass("active") : t(".usersearch-box>ul").children("li").eq(1).addClass("active"))
	}

	function s(e) {
		var i;
		return i = localStorage.search_list ? t.parseJSON(localStorage.search_list) : {}, i.history ? i.history = e.concat(i.history) : i.history = e, i.history = n(i.history).slice(0, 8), i
	}

	function n(e) {
		var i, a = [],
			s = [];
		return t.each(e, function(t, e) {
			i = e.id + e.name, a.indexOf(i) < 0 && (a.push(i), s.push(e))
		}), s
	}

	function o() {
		var e, i, a = t("td[data-json]"),
			s = t("#stock_main").find(".selectpicker").val();
		t.each(a, function(a, n) {
			i = t(n).find(">span"), e = t.parseJSON(t(n).attr("data-json"))[s], i.length > 0 ? (e && (e = (Number(e) / 1e4).toFixed(2)), e = e ? r(e) + "万元" : 0 === e ? 0 : "--", i.html(e)) : (e = e ? e + "%" : "--", t(n).find(">label").html(e))
		})
	}

	function r(t) {
		t += "", t = t.substring(0, t.indexOf("."));
		var e = /(?=(?!\b)(\d{3})+$)/g;
		return t.replace(e, ",")
	}

	function l(e, i, a, s, n) {
		t.get(O + "/" + $, function(o) {
			if(200 == o.code) {
				i.removeClass("is-loading");
				var r, l;
				"detail-financing" == n && t.each(o.data, function(t, e) {
					e.id = e.investevents_id || e.acquisition_id || e.merger_id
				}), "detail-team" == n && t.each(o.data, function(t, e) {
					e.first_letter = e.name[0]
				}), r = {
					rows: o.data
				}, l = Handlebars.compile(s.html())(r) || "", a.append(l), e.find(".default_text").toggle().next(".to-hide").toggle()
			}
		}, "json")
	}
	var c = location.hostname.indexOf("www") < 0 ? "https://v6.itjuzi.com" : "https://www.itjuzi.com",
		d = t.cookie("identity"),
		f = d ? c + "/search?word=" : c + "/user/login?redirect=search?word=",
		u = t(".infoheadrow-v2.ugc-block-item");
	if(t(function() {
			function e(e) {
				t("." + e + " .comment-detail").find(".con").each(function() {
					t(this).height() > 66 && (t(this).addClass("clamp"), t(this).siblings(".btn-open-con").removeClass("hide"))
				})
			}

			function i() {
				v = t(window).height(), g = t(window).width()
			}

			function a() {
				return void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0
			}

			function s(t, e) {
				for(var i, a = [], s = {}, n = 0; null != (i = t[n]); n++) {
					var o = i[e] || i;
					s[o] || (a.push(i), s[o] = !0)
				}
				return a
			}

			function n(t, e) {
				if(1 === e) var i = '<span class="c-gray">' + t + "</span>";
				else if(1 === t) var i = '<a filter="&page=' + (t + 1) + '">下一页</a>';
				else if(t === e) var i = '<a filter="&page=' + (t - 1) + '">上一页</a>';
				else var i = '<a filter="&page=' + (t - 1) + '">上一页</a> <span class="c-gray">' + t + '</span> <a filter="&page=' + (t + 1) + '">下一页</a>';
				return i
			}

			function o(e) {
				var i = [],
					a = [],
					s = -1;
				if(t("#followed").length > 0) {
					var n = t("#followed").attr("followed") || "[-1]";
					i = JSON.parse(n);
					var o = t("#followed").attr("blacked") || "[-1]";
					a = JSON.parse(o), s = parseInt(t("#followed").attr("myid") || "[-1]")
				}
				if(e) {
					if(i.length > 0)
						for(keyi in e) t.inArray(e[keyi].id, i) >= 0 && (e[keyi].userOnFollowed = "on");
					if(a.push(s), a.length > 0)
						for(keyi in e) t.inArray(e[keyi].id, a) >= 0 && (e[keyi].userOnFollowed = "none");
					for(keyi in e) void 0 == e[keyi].goal_name && (e[keyi].goal_name = "暂未填写"), void 0 == e[keyi].scope_name && (e[keyi].scope_name = "暂未填写");
					return e
				}
			}

			function r(e) {
				t("[jktemplist]").each(function() {
					var i = t(this);
					i.addClass("on-load");
					var a = JSON.parse(t(this).attr("jktemplist")),
						s = a.getUrl,
						r = s;
					e && (r = s + e), t.get(r, function(e) {
						"object" != typeof e && (e = JSON.parse(e));
						var a = o(e.data);
						i.jktemp(a), p(), i.removeClass("on-load"), t(".jzloading-topline:first").remove(), t("body").scrollTop() > t(".main").offset().top && t("html,body").animate({
							scrollTop: 0
						}, 0);
						var s = e.current_page,
							r = e.last_page;
						t(".ui-pagechange:first").html(n(s, r))
					})
				})
			}

			function l() {
				var e = [];
				return t("[userzone-filter]").each(function() {
					var i = t(this),
						a = i.attr("userzone-filter"),
						s = [];
					i.find(".on").each(function() {
						var e = t(this).attr("filter");
						s.push(e)
					}), i.find('input[type="text"]').each(function() {
						var e = t(this).val();
						s.push(e)
					});
					var n = s.join(",");
					"" !== n && e.push(a + "" + n)
				}), e.join("")
			}

			function c() {
				t(".jzloading-topline:first").remove(), t("header:first").before('<div class="jzloading-topline"></div>')
			}

			function f() {
				var e = (t(".act-addcollection-multi").attr("user-id"), '<div class="ui-jkpopup">                                <div class="pop-mask"></div>                                <div class="popup">                                    <div class="pop-title">                                        <span>加入专辑</span>                                        <span class="act-popclose">✕</span>                                    </div>                                    <div class="pop-cont">                                        <div class="block-collectionpop-multi">                                            <div class="toolbarbox">                                                <span class="makenew"><i class="fa fa-plus-square-o"></i> <span class="text-new">新建专辑</span><span class="text-list">取消新建</span></span>                                                <span class="flr c-gray">已有<b class="num">-</b>个专辑</span>                                            </div>                                            <div class="newitembox">                                                <button class="jzbtn c act-make-album-btn">创建</button>                                                <input type="text" placeholder="请输入新专辑名称" name="">                                            </div>                                            <div class="olditembox">                                                <div class="collectionbox hscroll on-loading">                                                </div>                                                <div class="mart10 tar"><a href="' + site_url + 'v2/user_center?type=album" target="_blank" class="c-gray t-small hoverc">查看我的专辑 &gt;&gt;</a></div>                                            </div>                                        </div>                                    </div>                                    <div class="pop-footer">                                        <div class="popbtnset">                                            <a class="color-c act-collection-sure">确定</a>                                        </div>                                    </div>                                </div>                            </div>');
				t("body").append(e);
				var i = t("body").find(".pop-mask"),
					a = t("body").find(".popup"),
					s = (t("body").find(".ui-jkpopup"), t(".collectionbox:first"));
				i.removeClass("fade-out"), a.removeClass("fade-out");
				var n = T.attr("com-id"),
					o = window.site_url + "company/get_user_favorites/?com_id=" + n;
				t.get(o, function(t) {
					"string" == typeof t && (t = JSON.parse(t || []));
					var e = "";
					for(var i in t) e += "<label><input " + (t[i].status ? "checked" : "") + ' type="checkbox" name="mycollection[]" fav-id="' + t[i].fav_id + '"><span>' + t[i].fav_name + "</span></label>";
					s.append(e), s.removeClass("on-loading");
					var n = a.find("label").length;
					a.find(".num:first").text(n)
				})
			}

			function u(e) {
				var i = t("body").find(".pop-mask"),
					a = t("body").find(".popup"),
					s = t("body").find(".ui-jkpopup"),
					n = e || "fade-out";
				a.addClass(n), i.addClass("fade-out"), setTimeout(t.proxy(function() {
					s.remove()
				}), 400)
			}

			function h(e) {
				if(!e.followers || !e.followers.followers) return !1;
				var i = e.followers.followers,
					a = parseInt(e.followers.followersNum),
					s = "";
				if(isNaN(a) && (a = 0), a < 1) return s = '<p class="emptyui-follower">还没有关注者</p>', void t("#followersDiv").html(s);
				s += '<ul class="list-block user">';
				for(var n = 0; n < i.length; n++) s += "<li>", i[n].logo && i[n].logo.length > 5 ? s += "<a href=\"<?php echo site_url('user/'); ?>" + i[n].user_id + "\"><img src=\"<?php echo base_url('images/'); ?>" + i[n].logo + '" alt="" class="avatar-circle"/></a>' : s += "<a href=\"<?php echo site_url('user/'); ?>" + i[n].user_id + '"></a>', s += "</li>";
				a > 7 && (s += '<li class="more">', s += '<a data-toggle="modal" data-target="#followerModal">' + (a - 7) + "+</a>", s += "</li>"), s += "</ul>", t("#followersDiv").html(s)
			}

			function m(t, e) {
				var i = e ? new Date(1e3 * e) : new Date,
					a = function(t, e) {
						return(t += "").length < e ? new Array(++e - t.length).join("0") + t : t
					},
					s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					n = {
						1: "st",
						2: "nd",
						3: "rd",
						21: "st",
						22: "nd",
						23: "rd",
						31: "st"
					},
					o = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					r = {
						d: function() {
							return a(r.j(), 2)
						},
						D: function() {
							return r.l().substr(0, 3)
						},
						j: function() {
							return i.getDate()
						},
						l: function() {
							return s[r.w()]
						},
						N: function() {
							return r.w() + 1
						},
						S: function() {
							return n[r.j()] ? n[r.j()] : "th"
						},
						w: function() {
							return i.getDay()
						},
						z: function() {
							return(i - new Date(i.getFullYear() + "/1/1")) / 864e5 >> 0
						},
						W: function() {
							var t, e = r.z(),
								a = 364 + r.L() - e,
								s = (new Date(i.getFullYear() + "/1/1").getDay() || 7) - 1;
							return a <= 2 && (i.getDay() || 7) - 1 <= 2 - a ? 1 : e <= 2 && s >= 4 && e >= 6 - s ? (t = new Date(i.getFullYear() - 1 + "/12/31"), date("W", Math.round(t.getTime() / 1e3))) : 1 + (s <= 3 ? (e + s) / 7 : (e - (7 - s)) / 7) >> 0
						},
						F: function() {
							return o[r.n()]
						},
						m: function() {
							return a(r.n(), 2)
						},
						M: function() {
							return r.F().substr(0, 3)
						},
						n: function() {
							return i.getMonth() + 1
						},
						t: function() {
							var t;
							return 2 == (t = i.getMonth() + 1) ? 28 + r.L() : 1 & t && t < 8 || !(1 & t) && t > 7 ? 31 : 30
						},
						L: function() {
							var t = r.Y();
							return 3 & t || !(t % 100) && t % 400 ? 0 : 1
						},
						Y: function() {
							return i.getFullYear()
						},
						y: function() {
							return(i.getFullYear() + "").slice(2)
						},
						a: function() {
							return i.getHours() > 11 ? "pm" : "am"
						},
						A: function() {
							return r.a().toUpperCase()
						},
						B: function() {
							var t = 60 * (i.getTimezoneOffset() + 60),
								e = 3600 * i.getHours() + 60 * i.getMinutes() + i.getSeconds() + t,
								a = Math.floor(e / 86.4);
							return a > 1e3 && (a -= 1e3), a < 0 && (a += 1e3), 1 == String(a).length && (a = "00" + a), 2 == String(a).length && (a = "0" + a), a
						},
						g: function() {
							return i.getHours() % 12 || 12
						},
						G: function() {
							return i.getHours()
						},
						h: function() {
							return a(r.g(), 2)
						},
						H: function() {
							return a(i.getHours(), 2)
						},
						i: function() {
							return a(i.getMinutes(), 2)
						},
						s: function() {
							return a(i.getSeconds(), 2)
						},
						O: function() {
							var t = a(Math.abs(i.getTimezoneOffset() / 60 * 100), 4);
							return t = i.getTimezoneOffset() > 0 ? "-" + t : "+" + t
						},
						P: function() {
							var t = r.O();
							return t.substr(0, 3) + ":" + t.substr(3, 2)
						},
						c: function() {
							return r.Y() + "-" + r.m() + "-" + r.d() + "T" + r.h() + ":" + r.i() + ":" + r.s() + r.P()
						},
						U: function() {
							return Math.round(i.getTime() / 1e3)
						}
					};
				return t.replace(/[\\]?([a-zA-Z])/g, function(t, e) {
					return t != e ? ret = e : r[e] ? ret = r[e]() : ret = e, ret
				})
			}

			function p() {
				t(".usericon").length >= 0 && t(".usericon img").each(function() {
					var e = t(this).attr("src");
					"/" === e.charAt(e.length - 1) && t(this).closest(".usericon").html("")
				})
			}
			t(".activity-list .ui-filterui .keys a").click(function() {
				t(this).closest(".keys").find("a").removeClass("on"), t(this).addClass("on")
			}), e("homepage"), e("indus-com-list"), t(".comment-detail .btn-open-con").click(function() {
				t(this).siblings(".con").removeClass("clamp"), t(this).addClass("hide"), t(this).siblings(".btn-close-con").removeClass("hide")
			}), t(".comment-detail .btn-close-con").click(function() {
				t(this).siblings(".con").addClass("clamp"), t(this).addClass("hide"), t(this).siblings(".btn-open-con").removeClass("hide")
			}), t(".homepage .swift-horse-club ul li").hover(function() {
				t(".homepage .swift-horse-club ul li").find(".bottom").hide(), t(this).find(".bottom").show()
			}, function() {
				t(this).find(".bottom").show()
			}), t(".navbar-toggle").click(function() {
				t("html,body").scrollTop(0), t("body").addClass("open-sidebar")
			}), t(".sidebar-nav").click(function() {
				t("body").removeClass("open-sidebar")
			}), t(".sidebar-nav ul li").each(function(e) {
				t(this).addClass("animated fadeInUp"), t(this).css("animation-delay", (e + 1) / 10 + "s")
			});
			var v = 0,
				g = 0;
			i(), t(window).resize(function() {
				i()
			});
			var b = window.location.href,
				k = window.navigator.userAgent;
			if(window.site_url || (window.site_url = "https://itjuzi.com/"), window.location.href.indexOf("http://") >= 0 && (site_url = site_url.replace("https://", "http://")), window.location.href.indexOf("#thanksgn") >= 0) {
				var w = "160621v!sj级升勤辛妞狗谢感".split("").reverse().join("");
				alert(w)
			}
			if(t.fn.extend({
					jztab: function(e) {
						void 0 !== e && "" !== e || (e = "click");
						var i = t(this),
							s = ".cont";
						return i.attr("cont") && (s = i.attr("cont")), t(this).on(e, ".tab", function() {
							if(!t(this).hasClass("on")) {
								t(this).parent().find(".on").removeClass("on"), t(this).addClass("on"), i.find(s).removeClass("on").hide();
								var e = t(this).index();
								i.find(s + ":eq(" + e + ")").show().addClass("on");
								var n = a();
								t("html,body").scrollTop(n + 1), t("html,body").scrollTop(n)
							}
						}), t(this).find(s + ":first").addClass("on"), t(this).find(".tab:first").trigger("click").addClass("on"), !1
					}
				}), t(".list-usermsg").length > 0) {
				var y = t(".usermsg:first"),
					x = t(".list-usermsg:first"),
					_ = '<li class="tac c-gray t-small" style="padding: 15px 20px;">暂无新消息</li>',
					C = y.find(".btn-checkall");
				if(window.location.href.indexOf("http://") >= 0) t(".usermsg:first").remove();
				else {
					0 === x.find("li").length ? (x.html(_), t("#msgnum").remove(), C.remove()) : (t("#msgnum").html(x.find("li").length), x.on("click", ".btn-check", function() {
						var e = t(this).closest("li"),
							i = parseInt(e.attr("item-id")),
							a = site_url + "user/update_message_status/" + i;
						console.log("url-on-get:" + a), t.get(a, function(i) {
							e.animate({
								opacity: 0
							}, 500, function() {
								e.remove(), 0 == x.find("li").length ? (x.html(_), t("#msgnum").remove(), C.remove()) : t("#msgnum").html(x.find("li").length)
							})
						})
					}), y.on("click", ".btn-checkall", function() {
						var e = site_url + "user/update_message_allstatus";
						console.log("url-on-get:" + e), t.get(e, function(e) {
							x.find("li").animate({
								opacity: 0
							}, 500, function() {
								x.html(_), t("#msgnum").remove(), C.remove()
							})
						})
					}))
				}
			}
			if(function(t) {
					t.extend(t.fn, {
						jknanoo: function(t, e) {
							function i(t, e) {
								return t.replace(/\{\{([\w\.]*)\}\}/g, function(t, i) {
									if("string" == typeof e[i] || "number" == typeof e[i]) return e[i];
									if("object" == typeof e[i]) {
										var a = "";
										for(ikey in e[i]) a += "<a>" + e[i][ikey] + "</a>";
										return a
									}
									return void 0 == e[i] ? "" : "jkinfo: a value died here."
								})
							}
							var a = "";
							if("string" == typeof t && (t = JSON.parse(t)), function(t) {
									return "[object object]" == Object.prototype.toString.call(t).toLowerCase() && !t.length
								}(t)) a = i(e, t);
							else if(function(t) {
									return "[object array]" === toString.apply(t).toLowerCase()
								}(t))
								for(var s in t) a += i(e, t[s]) + "\n";
							else a = "string" == typeof t && 0 == t.indexOf("<") ? "jkinfo: it looks like an error of php outputs" : "jkinfo: datatype should be only json or array~";
							return a
						},
						jktemp: function(e, i) {
							var a = t(this);
							if(i) var s = t(i).html();
							else if(a.next().attr("type").indexOf("temp") >= 0) var s = a.next().html();
							else var s = a.html();
							if(0 == e.length) return t(this);
							var n = t(this).jknanoo(e, s);
							return a.html(n), t(this)
						}
					})
				}(window.jQuery || window.Zepto), t("[jktemp]").length > 0 && t("[jktemp]").each(function() {
					if(t(this).attr("jktemp")) return !1;
					var e = t(this),
						i = t.trim(e.find("script:eq(0)").html());
					if(data = JSON.parse(i), 0 != data.length) {
						data[0].front_user_goal_id && (data = s(data, "front_user_goal_id")), data[0].cat_id && (data = s(data, "cat_id")), data[0].front_user_skill_id && (data = s(data, "front_user_skill_id"));
						var a = o(data);
						e.jktemp(a)
					}
				}), t("[jktemplist]").length > 0 && (r(l()), t("[userzone-filter]").on("click", "a", function() {
					var e = t(this).closest("[userzone-filter]"),
						i = t(this);
					if(c(), e.hasClass("multi")) i.toggleClass("on");
					else if(e.hasClass("multi-text"));
					else {
						var a = !1;
						if(i.hasClass("on")) var a = !0;
						e.find(".on").removeClass("on"), a ? i.removeClass("on") : i.addClass("on")
					}
					r(l())
				})), t.fn.extend({
					formToCheck: function(e) {
						var i = 0;
						return form.find(':input:not(button)["required"]').each(function() {
							"" == t(this).val() && (i = 1)
						}), !i
					},
					formToData: function() {
						function e(e) {
							var i = {};
							return e.find(":input[name]").each(function() {
								var e = t(this),
									a = e.attr("name"),
									s = "";
								"radio" == e.attr("type") ? 1 == e.prop("checked") && (s = e.attr("value"), i[a] = s) : (s = e.val(), i[a] = s)
							}), i
						}
						var i = t(this);
						if(i.find(".ui-formui-cover").length > 0 && (i = i.find(".ui-formui-cover")), i.find(".ui-formui").length > 1) {
							var a = [];
							return i.find(".ui-formui").each(function() {
								var i = e(t(this));
								a.push(i)
							}), JSON.stringify(a)
						}
						var a = e(i);
						return JSON.stringify(a)
					},
					formToPackSubmit: function(e) {
						var i = t(this),
							a = i.attr("posturl"),
							s = i.closest(".form").formToData();
						t.post(a, {
							data: s
						}, function() {
							e && e()
						})
					}
				}), t("div[jztab]").each(function() {
					var e = t(this).attr("jztab");
					t(this).jztab(e), t(this).find(".tab").each(function() {
						var i = t.trim(t(this).attr("id")).toLowerCase();
						window.location.href.toLowerCase();
						"" !== i && window.location.href.indexOf("#" + i) > 0 && t(this).trigger(e)
					})
				}), void 0 == d) {
				var j = t("#loginurl").attr("href");
				j || (j = site_url + "user/login/");
				var O = '<div class="tac need2loginbox rel" style="height:1px;z-index:1;">                                                <a href="' + j + '" class="jzbtn c" style="margin-top: 30px;">登录后查看</a>                                            </div>';
				t(".list-round-v2,.list-prodcase,.haslogin,.bussiness").addClass("jzblur need2login").before(O), navigator.userAgent.toLowerCase().indexOf("chrome") < 0 && (t(".list-round-v2,.list-prodcase,.haslogin").addClass("none"), t(".need2loginbox").css({
					height: "120px"
				}).closest(".sec").find(".rowbtn").remove())
			}
			t.fn.extend({
				oneMoreItem: function(e, i, a) {
					var s = "",
						n = "";
					s = "object" == typeof e ? e.clone() : t(e).clone(), a && (s.css("position", "relative").addClass("add-onemore-item"), s.append(a)), n = "string" == typeof i ? t(i) : "object" == typeof i ? i : e.parent(), s.clearForm(), n.append(s), n.on("click", ".removeItem", function() {
						t(this).closest(".add-onemore-item").remove()
					})
				},
				clearForm: function() {
					return t(this).find(":input").not(":button,:submit,:reset,[onclear]").val("").removeAttr("checked").removeAttr("selected"), t(this)
				},
				readonlyForm: function() {
					return t(this).find(":input").not(":button,:submit,:reset").attr("disabled", "disabled"), t(this)
				},
				noReadonlyForm: function() {
					return t(this).find(":input").not(":button,:submit,:reset").removeAttr("disabled"), t(this)
				}
			}), t.fn.extend({
				imgErro: function() {
					t(this).find("img").each(function() {
						var e = t(this).attr("src"),
							i = /\/$/,
							a = /\/0$/;
						(i.test(e) || a.test(e)) && t(this).remove()
					})
				}
			}), t("a[href] .on").click(function() {
				return !1
			}), t(".list-main-icnset,.list-main-investset,.list-main-personset").on("click", ".fa,a", function(e) {
				if(void 0 === t(this).attr("href")) return !1
			}), t(".list-main-icnset:not(.thead),.list-main-investset:not(.thead),.list-main-personset:not(.thead),.list-main-prodset,.list-main-eventset:not(.thead),.list-timeline").on("click", "li", function(e) {
				t(this).find(".title a").attr("href")
			}), t(".list-round").on("click", "tr", function() {
				t(this).find(".base a").attr("href")
			}), t(".list-prodcase,.list-block-infopic,.list-display-lite").on("click", "li", function() {
				t(this).find(".title").attr("href")
			});
			var S = {
				sinaWeiBo: function(t, e, i) {
					var a = {
						url: e,
						type: "3",
						count: "1",
						title: t,
						pic: i,
						rnd: (new Date).valueOf()
					};
					void 0 === a.title && (a.title = document.title), void 0 === a.url && (a.url = window.location.href);
					var s = [];
					for(var n in a) s.push(n + "=" + encodeURIComponent(a[n] || ""));
					var o = "http://service.weibo.com/share/share.php?" + s.join("&");
					window.open(o, "sinaweibo", "height=500, width=650,toolbar=no,location=no")
				},
				qqZone: function(t, e, i) {
					var a = {
						url: e,
						showcount: "0",
						desc: "",
						summary: "",
						title: t,
						site: "",
						pics: i,
						style: "203",
						width: 22,
						height: 22
					};
					void 0 === a.title && (a.title = document.title), void 0 === a.url && (a.url = window.location.href);
					var s = [];
					for(var n in a) s.push(n + "=" + encodeURIComponent(a[n] || ""));
					var o = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + s.join("&");
					window.open(o, "qqZone", "height=600,width=680")
				}
			};
			t(".ui-sharetoolbar").length > 0 && (t(".ui-sharetoolbar").find(".fa-weixin").after('<span class="left-qrcode qr-sharelink"></span>'), t(".qr-sharelink").qrcode({
				text: window.location.href
			}), t(".ui-sharetoolbar .cardset").on("click", ".card", function() {
				t(this).html().indexOf("weibo") > 0 && S.sinaWeiBo(), t(this).html().indexOf("qq") > 0 && S.qqZone()
			})), t("#inc-lieju-qrcode").length > 0 && t("#inc-lieju-qrcode").qrcode({
				text: t(this).attr("data-qrcode-string")
			}), t(".ugc-inc").length > 0 && t("select[name=com_first_scope_id]").change(function() {
				this.value ? t.ajax({
					url: site_url + "add/get_sub_scope",
					type: "POST",
					data: {
						scope_id: this.value
					},
					dataType: "html",
					success: function(e) {
						t("select[name=com_second_scope_id]").prop("disabled", !1), t("select[name=com_second_scope_id]").empty().html(e)
					}
				}) : t("select[name=com_second_scope_id]").attr("disabled", "disabled")
			}), t(".ugc-incmore-mark").length > 0 && (t(".ondone").readonlyForm(), t(".ui-ugc-item").on("click", ".ui-ugcbtn.show", function() {
				t(this).closest(".ui-ugc-item").addClass("onedit")
			}), t(".ui-ugc-item").on("click", ".ui-ugcbtn.save", function() {
				function e() {
					i.addClass("ondone").readonlyForm()
				}
				var i = t(this).closest(".form");
				t(this).formToPackSubmit(e)
			}), t(".ui-ugc-item").on("click", ".ui-ugcbtn.cancel", function() {
				var e = t(this).closest(".ui-ugc-item");
				if(e.hasClass("onreedit")) return e.removeClass("onreedit"), void e.addClass("ondone").readonlyForm();
				e.removeClass("onedit").clearForm(), e.find(".add-onemore-item").remove(), e.find(".round-being").removeClass("none")
			}), t(".ui-ugc-item").on("click", ".ui-ugcbtn.delete", function() {
				function e() {
					a.removeClass("ondone").removeClass("onreedit").removeClass("onedit"), a.clearForm()
				}
				var i = t.trim(t(this).closest(".sec").find(".titlebar").text());
				if(confirm("确定后将清除已填写的【" + i + "】表单内容。")) {
					var a = t(this).closest(".form");
					a.find(":input").removeAttr("disable"), t(this).formToPackSubmit(e)
				}
			}), t(".ui-ugc-item").on("click", ".ui-ugcbtn.reedit", function() {
				var e = t(this).closest(".ui-ugc-item");
				e.addClass("onreedit"), e.removeClass("ondone").noReadonlyForm()
			}), t(".ui-ugc-item").on("click", ".add-onemore", function() {
				var e = t(this).closest(".ui-ugc-item").find(".ui-formui:first");
				t(this).oneMoreItem(e, void 0, '<a class="flr abs c-gray removeItem" style="top:35px;right:10px;" title="移除本项">✕</a>')
			}), t("#input-round-none").change(function() {
				t(this).prop("checked") ? (t(this).closest(".sec").find(".round-being").addClass("none"), t(".unroundbox").addClass("ui-formui-cover")) : (t(this).closest(".sec").find(".round-being").removeClass("none"), t(".unroundbox").removeClass("ui-formui-cover"))
			}));
			var T;
			if(t(".act-addcollection-multi").length > 0 && (t(".act-addcollection-multi").click(function() {
					T = t(this), f(), t(".block-collectionpop-multi").on("click", ".makenew", function() {
						var e = t(this),
							i = t(this).closest(".block-collectionpop-multi");
						e.toggleClass("on"), i.toggleClass("on-makenew")
					})
				}), t("body").on("click", ".act-make-album-btn", function() {
					var e = t(".block-collectionpop-multi"),
						i = (t(this), t(".collectionbox:first")),
						a = e.find(".newitembox input:first"),
						s = t.trim(a.val());
					if("" == s) return alert("请填写专辑名称"), !1;
					t.post("/company/make_user_favorites", {
						fav_name: s
					}, function(t) {
						"string" == typeof t && (t = JSON.parse(t));
						var s = '<label><input checked type="checkbox" name="mycollection[]" fav-id="' + t.fav_id + '"><span>' + t.fav_name + "</span></label>";
						i.prepend(s), i.scrollTop(0), a.val(""), e.removeClass("on-makenew"), e.find(".makenew").removeClass("on")
					})
				}), t("body").on("click", ".act-collection-sure", function() {
					if(!t(this).hasClass("disable")) {
						t(this).addClass("disable");
						var e = (t(this), t(".block-collectionpop-multi:first"), t(".collectionbox:first")),
							i = T.attr("com-id"),
							a = T.attr("user-id"),
							s = {};
						s.com_id = i, s.user_id = a;
						var n = [];
						e.find("input:checked").each(function() {
							var e = t(this).attr("fav-id");
							n.push(e)
						}), n = n.join(","), s.fav_id = n;
						var o = window.site_url + "company/add_user_favorites";
						t.post(o, s, function(t) {
							"object" != typeof t && (t = JSON.parse(t)), 2 == t.status ? T.removeClass("on") : 1 == t.status && (T.addClass("on"), T.text("已加入我的专辑")), u("fade-out")
						})
					}
				})), t("body").on("click", ".act-popclose", function() {
					var e = t(this);
					e.closest(".popup"), e.closest(".ui-popup").find(".pop-mask");
					if(e.closest(".ui-jkpopup").hasClass("close-none")) return void e.closest(".ui-jkpopup").addClass("none");
					u("fade-out")
				}), t("body").on("click", ".act-popclose-hide", function() {
					t(this).closest(".ui-jkpopup").addClass("none")
				}), t(".list-main-icnset,.list-main-investset,.list-main-personset").on("click", ".act-follow", function(e) {
					var i = t(this);
					if(e.stopPropagation(), i.hasClass("disable")) return !1;
					i.addClass("disable");
					var a = "watch/";
					i.hasClass("http") && (a = "follow/");
					var s = JSON.parse(t(this).attr("data-act-follow")),
						n = window.site_url + a + s.type;
					t.post(n, s, function(t) {
						return "ok" === t.status && ("unfollow" === t.handle && (i.hasClass("fa-star") ? i.removeClass("fa-star").addClass("fa-star-o") : (i.removeClass("attentioned"), i.html('<i class="fa fa-star-o"></i>关注'))), "follow" === t.handle && (i.hasClass("fa-star-o") ? i.removeClass("fa-star-o").addClass("fa-star") : (i.addClass("attentioned"), i.html('<i class="fa fa-star-o"></i>已关注'))), i.removeClass("disable")), !1
					})
				}), t(".act-follow-infopage").click(function() {
					var e = t(this);
					if(e.hasClass("disable")) return !1;
					e.addClass("disable");
					var i = "watch/";
					e.hasClass("http") && (i = "follow/");
					var a = JSON.parse(t(this).attr("data-act-follow")),
						s = site_url + i + a.type;
					t.post(s, a, function(i) {
						return "ok" === i.status && ("unfollow" === i.handle && e.removeClass("on"), "follow" === i.handle && e.addClass("on"), t(".list-block.user").length > 0 && h(i), e.removeClass("disable")), !1
					})
				}), t("body").on("click", ".act-follow-uni", function() {
					var e = t(this);
					if(e.hasClass("disable")) return !1;
					e.addClass("disable");
					var i = JSON.parse(t(this).attr("data-act-follow")),
						a = t(this).attr("data-act-url");
					if(a.indexOf("watch/blackuser") >= 0 && !e.hasClass("on")) {
						var s = "确定将该用户加入黑名单？\n · 加入黑名单将解除双方关注关系 \n · 该用户将不能对你关注和留言。";
						if(!confirm(s)) return !1
					}
					if(e.hasClass("removeitem")) {
						var s = "确定从列表中移除该项？";
						if(e.attr("data-act-url").indexOf("/del_fans") > 0 && (s = "确定移除该粉丝？"), !confirm(s)) return !1
					}
					t.post(a, i, function(i) {
						if("object" != typeof i && (i = JSON.parse(i)), "ok" === i.status) {
							if("unfollow" === i.handle && e.removeClass("on"), "follow" === i.handle && e.addClass("on"), void 0 !== i.alertmsg && alert(i.alertmsg), "hidebtn" === i.action && e.addClass("none"), "removeli" === i.action && e.closest("li").animate({
									opacity: "0"
								}, 500, function() {
									t(this).closest("li").remove()
								}), t("#followed").length > 0 && e.attr("data-act-url").indexOf("watch/people") >= 0) {
								var a = t("#followed"),
									s = a.attr("followed") || "[-1]",
									n = JSON.parse(s),
									o = parseInt(JSON.parse(e.attr("data-act-follow")).item_id);
								e.hasClass("on") ? n.push(o) : t.inArray(o, n) >= 0 && n.splice(t.inArray(o, n), 1), a.attr("followed", JSON.stringify(n))
							}
							e.attr("data-act-url").indexOf("watch/blackuser") >= 0 && (e.hasClass("on") ? e.closest(".user-pic-wrap").find(".act-follow-uni").each(function() {
								t(this).text().indexOf("关注") >= 0 && (t(this).addClass("none"), t(this).removeClass("on"))
							}) : e.closest(".user-pic-wrap").find(".act-follow-uni").each(function() {
								t(this).text().indexOf("关注") >= 0 && (t(this).removeClass("none"), t(this).removeClass("on"))
							})), e.removeClass("disable")
						}
						return !1
					})
				}), t(".ui-filterui-block").length > 0) {
				g < 750 && t(".ui-filterui-block").find("li").addClass("auto");
				var $ = t(".ui-filterui-block:first");
				$.find(".filter-more").click(function() {
					$.toggleClass("off")
				}), $.find(".keys a").click(function(t) {
					t.stopPropagation()
				}), $.find("li").click(function() {
					t(this).toggleClass("on")
				}), $.find(".on").each(function() {
					var e = t(this);
					if("全部" !== e.text()) {
						var i = e.closest("li");
						i.addClass("on"), i.index() >= 3 && (i.closest(".ui-filterui-block").removeClass("off"), t(".ui-filterui-block").offset().top, t("html,body").stop().animate({}, 800))
					}
				})
			}
			if(t(".act-claim-company").length > 0 && t(".act-claim-company").click(function(e) {
					if("claimed" == t.cookie("user_claim")) return alert("两小时内已提交过认领表单，不必重复提交。\n我们的编辑将在1天内审核，请返回等待。"), !1;
					var i = t(this).closest(".modal").find("form"),
						a = t(this).closest(".modal").find(".tip"),
						s = t(this).closest(".modal").find(".modal-footer"),
						n = i.find('input[name="claim_name"]').val(),
						o = i.find('input[name="claim_des"]').val(),
						r = i.find('input[name="claim_mobile"]').val(),
						l = i.find('input[name="claim_email"]').val(),
						c = i.find('input[name="com_id"]').val(),
						d = "";
					if(!(n && o && r && l)) return alert("请填写完整信息。"), !1;
					if(i.find(".on-loading") > 0) return alert("有正在上传的图片，请稍等。"), !1;
					if(i.find('input[name="com_lice_archive"]').each(function() {
							"" == d ? d = t(this).attr("value") : d += "," + t(this).attr("value")
						}), "" == d) return alert("请至少上传1张名片或营业执照照片。"), !1;
					var f = {
							com_id: c,
							com_lice_archive: d,
							claim_name: n,
							claim_des: o,
							claim_mobile: r,
							claim_email: l
						},
						u = window.site_url + "follow/claim_company";
					if(i.find('input[name="showmyinc"]').length > 0 && (c = i.find('input[name="com_id"]').attr("value"), f.showmyinc = 1, "" == c || void 0 == c)) return alert("请选择IT桔子收录的公司。"), !1;
					window.location.href.indexOf("https:") >= 0 && (u = u.replace("http:", "https:")), ".com/" == b.substr(b.length - 5, 5) && (u = u.replace("/follow/", "/watch/")), t.post(u, f, function(e) {
						"string" == typeof e && (e = JSON.parse(e)), i.hide(), s.hide(), a.html("感谢认领<br />我们将在24小时内审核你的提交，并将邮件通知你是否通过。<br />你也可以在个人主页里看到你的认领审核状态。"), "fail" == e.status && a.html("认领失败，您可以邮件联系 hello@itjuzi.com 获取帮助。"), "hasfollow" == e.status && a.html("您已认领过该公司，请勿重复提交。"), setTimeout("$('#modal_myinc').modal('hide')", 7e3), t.cookie("user_claim", "claimed", {
							expires: .1
						})
					})
				}), t(".act-modal-subform").length > 0 && t(".modal-dialog").on("click", ".act-modal-subform", function() {
					var e = t(this);
					if(!e.hasClass("disabled")) {
						var i = e.closest(".modal-dialog").find(".form"),
							a = e.closest(".modal-dialog").find(".tip"),
							s = e.closest(".modal-dialog").find(".modal-footer"),
							n = {},
							o = !0;
						if(i.find(":input:not(button)").each(function() {
								var e = t(this).attr("name"),
									i = t(this).val();
								if("" == i && t(this).prop("required")) return alert("信息填写不完整，请完善。"), o = !1, !1;
								n[e] = i
							}), o) {
							var r = t(this).attr("posturl");
							t.post(r, n, function(t) {
								e.addClass("disabled");
								var n = t;
								"string" == typeof t && (n = JSON.parse(t)), "ok" == n.status && (i.find(".ui-formui").hide(), i.find(":input").not(":button, :submit, :reset").val("").removeAttr("checked").removeAttr("selected"), s.hide(), a.show(), e.removeClass("disabled"), setTimeout("$('.modal').modal('hide')", 5e3))
							})
						}
					}
				}), t(".subbtn-commit").length > 0 && t(".subbtn-commit").click(function() {
					var e = t.trim(t(this).closest(".commit").find("textarea:first").val()),
						i = t(this);
					if(!i.hasClass("disable") && "" !== e) {
						if(e === window.localStorage.juzi_last_commit) return alert("请不要发重复的评论。"), !1;
						if(window.localStorage.juzi_last_commit && window.localStorage.juzi_last_commit.length >= 18) {
							var a = window.localStorage.juzi_last_commit,
								s = key_b = key_c = key_d = key_e = key_text_a = key_text_b = 0;
							s = e.indexOf(a.substr(3, 2)) >= 0 ? 1 : 0, e.indexOf(a.substr(10, 2)) >= 0 ? key_b = 1 : s = 0, e.indexOf(a.substr(15, 2)) >= 0 ? key_c = 1 : s = 0, e.indexOf(a.substr(a.length - 10, 2)) >= 0 ? key_d = 1 : s = 0, e.indexOf(a.substr(a.length - 8, 2)) >= 0 ? key_e = 1 : s = 0, e.indexOf("联系") >= 0 ? key_text_a = 1 : key_text_a = 0, e.indexOf("欢迎") >= 0 ? key_text_b = 1 : key_text_b = 0;
							if(s + key_b + key_c + key_d + key_e + key_text_a + key_text_b > 4) return alert("请不要连续发重复的内容。"), !1
						}
						t(this).addClass("disable"), window.localStorage.juzi_last_commit = e;
						var n = JSON.parse(i.attr("data-item-info")),
							o = t.extend({}, n, {
								commont_detail: e
							}),
							r = "";
						r = i.attr("posturl") ? i.attr("posturl") : window.site_url + "company/add_comment", "回复" === i.text() && (r = window.site_url + "company/add_revert_comment"), t.post(r, o, function(e) {
							if("object" != typeof e && (e = JSON.parse(e)), "ok" == e.status) {
								var a = m("Y-m-d H:i:s", e.comment_time),
									s = t(".usermenu:first").find("img:first").attr("src"),
									n = t.extend({}, o, {
										comment_time: a,
										person_img: s
									});
								if("回复" === i.text()) {
									var r = i.closest(".re-box").find(".re-for").text(),
										l = i.closest(".re-box").find(".re-for").attr("data-re-person-url");
									n = t.extend({}, n, {
										re_person_name: r,
										re_person_url: l
									});
									var c = t("#commit_temp_re").html(),
										d = Handlebars.compile(c),
										f = d(n);
									i.closest(".commit").find("textarea").val("");
									var u = i.closest(".commit").find(".re-set");
									if(u.removeClass("limited-reply").append(f), u.find(".re-set-more").insertAfter(u.find(".re-old:last")), i.closest(".re-box").hide(), u.find(".re-set-more").length > 0) {
										var h = u.find(".re-set-more .num"),
											p = parseInt(h.text());
										h.text(p)
									}
								} else {
									var c = t("#commit_temp").html(),
										d = Handlebars.compile(c),
										f = d(n);
									i.closest(".commit").find("textarea").val(""), i.closest(".block-commit").find(".commitlist").prepend(f)
								}
								i.closest(".block-commit").find(".commitlist").find(".mark-empty").remove()
							}
							i.removeClass("disable")
						})
					}
				}), t(".commitlist .commit").length > 0 && (t(".replybtn").click(function() {
					var e = t(this).closest(".commit").find(".re-box");
					if(t(this).parent().parent().hasClass("re-old")) var i = t(this).closest(".re-old").find("a:first"),
						a = i.text(),
						s = i.attr("href"),
						n = parseInt(i.attr("data-person-id"));
					else var i = t(this).closest(".right").find("a:first"),
						a = i.text(),
						s = i.attr("href"),
						n = parseInt(i.attr("data-person-id"));
					e.find(".re-for").text(t.trim(a)), e.find(".re-for").attr("data-re-person-url", s);
					var o = e.find(".subbtn-commit"),
						r = t.extend({}, JSON.parse(o.attr("data-item-info")), {
							re_person_id: n
						});
					o.attr("data-item-info", JSON.stringify(r)), e.closest(".commitlist").find(".re-box").hide(), e.show().find("textarea").val("").focus()
				}), t(".subbtn-cancel").click(function() {
					t(this).closest(".re-box").hide()
				})), t(".re-set").length > 0 && t(".re-set").each(function() {
					var e = t(this),
						i = e.find(".re-old").length;
					if(i > 3) {
						var a = i - 3,
							s = e.find(".re-set-more");
						s.find("a:first").html('<span class="numbox"><span class="num"> ' + a + " </span>条回复</span>"), s.removeClass("none"), e.addClass("limited-reply"), e.find(".re-set-more").click(function() {
							e.toggleClass("limited-reply")
						})
					}
				}), (t("form").length > 0 || t(".formcheck").length) && (t("form,.formcheck").on("blur", ":input[check]", function() {
					var e = t.trim(t(this).val());
					t(this).val(e);
					var i = t(this).attr("check");
					if("mail" === i) {
						/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(e) ? t(this).removeClass("warning") : t(this).addClass("warning")
					}
					if(!isNaN(parseInt(i))) {
						var a = parseInt(i);
						if(e.length < a ? t(this).addClass("warning") : t(this).removeClass("warning"), t(this).closest("form").find('[check="samePassword"]').length > 0) {
							var s = t(this).closest("form").find('[check="samePassword"]'),
								n = s.val();
							e != n && "" != n ? s.addClass("warning") : s.removeClass("warning")
						}
					}
					if("samePassword" === i) {
						var o = t(this).closest("form,.formcheck").find('[type="password"]:first');
						t(this).closest("form,.formcheck").find("[check-oldpassword]").length > 0 && (o = t(this).closest("form,.formcheck").find("[check-oldpassword]:first"));
						var r = o.val(),
							n = t(this).val();
						r != n ? t(this).addClass("warning") : t(this).removeClass("warning")
					}
				}), t("form,.formcheck").on("click", '[type="submit"]', function() {
					var e = t(this).closest("form,.formcheck");
					e.find("[check]").trigger("blur");
					var i = e.find(".warning").length;
					if(e.hasClass("oldcheck-false")) return !1;
					var a = "";
					return e.find(".warning").each(function() {
						var e = t(this).attr("check");
						"mail" == e && (a += "\n邮箱格式错误。"), "samePassword" == e && (a += "\n密码填写不一致。"), isNaN(parseInt(e)) || (a += "")
					}), a += "\n请改正格式不正确的表单项目(已标红)后提交。", i > 0 && t(".loginbox-v2").length > 0 ? (t("#myModal").length > 0 ? (t("#myModal").find(".modal-body").html(a), t("#myModal").modal("show")) : alert(a), !1) : void 0
				})), t(".act-searchloadmore").length > 0 && t(".act-searchloadmore").click(function() {
					var e = t(this);
					if(e.hasClass("disable")) return !1;
					e.addClass("disable");
					var i = JSON.parse(e.attr("data-item-info")),
						a = i.type,
						s = i.page,
						n = i.word,
						o = [],
						r = t("#entry-template").html(),
						l = Handlebars.compile(r),
						c = window.site_url + "search/more?word=" + n + "&type=" + a + "&page=" + s;
					t.get(c, function(s) {
						"string" == typeof s && (s = JSON.parse(s));
						for(n in s)
							if(n.indexOf(a) >= 0) {
								o = s[n].detail;
								var r = {
										source: o
									},
									c = l(r);
								if(t("#the_search_list").append(c), o.length < 10) return void e.html('<span class="c-gray cd">已没有更多数据</span>');
								i.page = parseInt(i.page) + 1;
								var d = JSON.stringify(i);
								e.attr("data-item-info", d), e.removeClass("disable"), t("#the_search_list").imgErro()
							}
					})
				}), t(".limited-itemnum").length > 0 && (t(".limited-itemnum").each(function() {
					var e = t(this).closest(".sec").find(".limited-itemnum li,.limited-itemnum tr,.commitlist .commit").length;
					if(e > 4) {
						if(0 == t(this).closest(".sec").find(".rowbtn").length) {
							t(this).after('<div class="rowbtn">                                <a class="c-gray act-unishowmore" title="展开全部"><span class="default_text">展开全部</span></a>                                </div>')
						}
						var i = t(this).closest(".sec").find(".rowbtn .default_text");
						i.html(i.text() + " <b>" + e + "</b> 条")
					}
				}), t(".act-unishowmore").click(function() {
					if(t(this).closest(".sec").find("ul:first,table:first,.commitlist:first").toggleClass("limited-itemnum"), t(this).hasClass("on")) {
						var e = t(this).closest(".sec").offset().top;
						t(this).offset().top - e > 700 && t("html,body").animate({
							scrollTop: e - 20
						}, 0)
					}
					t(this).toggleClass("on"), t(this).closest(".sec").find(".list-filter").length > 0 && t(this).closest(".sec").find(".list-filter:first").val("").trigger("input.valuechange")
				})), d && t(".needfilter").length > 0) {
				t(".needfilter").each(function() {
					if(t(this).find("li,tr").length > 4) {
						t(this).before('<div>                                                            <span class="flr" style="margin-top:-40px;margin-right:12px;"><input class="list-filter" type="text"  style="width:250px;" placeholder="筛选 时间/公司/行业/轮次/币种..."></span>                                                        </div>'), t(this).after('<div class="filter-nodata none tac c-gray" style="height:70px;line-height:70px;">没有符合筛选文本的数据</div>');
						var e = t(this);
						t(".list-filter").on("click", function() {
							var e = t(this).closest(".sec").find(".act-unishowmore:first");
							e.hasClass("on") || (e.trigger("click"), e.addClass("later-reclick"))
						}), t(".list-filter").on("blur", function() {
							var e = t(this).closest(".sec").find(".act-unishowmore:first");
							e.hasClass("later-reclick") && "" == t.trim(t(this).val()) && (e.trigger("click"), e.removeClass("later-reclick"))
						}), t(".list-filter").on("input.valuechange", function() {
							var i = t.trim(t(this).val().toLowerCase());
							if("" == i) return e.find("tr").removeClass("none"), void e.next(".filter-nodata").addClass("none");
							e.find("tr.none").removeClass("none"), e.find("tr").each(function() {
								t(this).text().toLowerCase().indexOf(i) < 0 && t(this).addClass("none")
							}), 0 == e.find("tr:visible").length ? e.next(".filter-nodata").removeClass("none") : e.next(".filter-nodata").addClass("none")
						})
					}
				})
			}
			if(t(".standalone-faq").length > 0 && (t("#clearsearch").click(function() {
					t("#ss").val("").trigger("keyup")
				}), t(".qnabox").length > 0 && t(".qnabox").on("click", "h4", function() {
					var e = t(this).closest("li");
					e.hasClass("on") ? e.toggleClass("on").find("div").stop().slideToggle() : (t(".qnabox .on").removeClass("on").find("div").slideUp(), e.addClass("on").find(">div").slideDown())
				}), function(t) {
					t.fn.textSearch = function(e, i) {
						var a = {
								divFlag: !0,
								divStr: " ",
								markClass: "",
								markColor: "red",
								nullReport: !0,
								callback: function() {
									return !1
								}
							},
							s = t.extend({}, a, i || {});
						t("span[hl]").each(function() {
							var e = document.createTextNode(t(this).text());
							t(this).replaceWith(t(e))
						}), t.regTrim = function(t) {
							var e = /[\^\.\\\|\(\)\*\+\-\$\[\]\?]/g,
								i = {};
							return i["^"] = "\\^", i["."] = "\\.", i["\\"] = "\\\\", i["|"] = "\\|", i["("] = "\\(", i[")"] = "\\)", i["*"] = "\\*", i["+"] = "\\+", i["-"] = "\\-", i.$ = "$", i["["] = "\\[", i["]"] = "\\]", i["?"] = "\\?", t = t.replace(e, function(t) {
								return i[t]
							})
						}, t(this).each(function() {
							var i = t(this);
							if("" === (e = t.trim(e))) return !1;
							var a = [];
							s.divFlag ? a = e.split(s.divStr) : a.push(e);
							var n = i.html();
							n = n.replace(/<!--(?:.*)\-->/g, "");
							var o = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g,
								r = n.match(o),
								l = 0;
							t.each(r, function(e, i) {
								/<(?:.|\s)*?>/.test(i) || (t.each(a, function(e, a) {
									if("" !== a) {
										var s = new RegExp(t.regTrim(a), "g");
										s.test(i) && (i = i.replace(s, "♂" + a + "♀"), l = 1)
									}
								}), i = i.replace(/♂/g, "<span hl >").replace(/♀/g, "</span>"), r[e] = i)
							});
							var c = r.join("");
							if(t(this).html(c), 0 === l && s.nullReport) return !1;
							s.callback()
						})
					}
				}(jQuery), t("#ss").keyup(function(e) {
					var i = t.trim(t("#ss").val());
					t("#qnabox").textSearch(i), t("#qnabox li").each(function() {
						t(this).removeClass("on hl"), t(this).find("span[hl]").length > 0 ? t(this).addClass("on hl").find(">div").show() : t(this).removeClass("on hl").find(">div").hide()
					})
				})), t(".subnav").find(".on").length > 0 || ".com/" == b.substr(b.length - 5, 5) || t(".search-large").length > 0) {
				var z = '<div class="ui-maintoolbar-box">                                        <div class="ui-maintoolbar">                                            <a class="card hoverc scroll2top">                                                <span class="t-big">                                                    <i class="fa fa-chevron-up"></i>                                                </span>                                            </a>                                            <a class="card hoverc scroll2bottom marb5">                                                <span class="t-big">                                                    <i class="fa fa-chevron-down"></i>                                                </span>                                            </a>                                            <a href="' + site_url + 'app/" target="_blank" class="card hovertext">                                                <span>                                                    <span class="t-small">APP</span>                                                </span>                                                <span class="left-qrcode">                                                    <img src="https://www.itjuzi.com/assets/front/app/pic/qr.png">                                                    <p><span class="c-gray t-small">下载IT桔子APP</span></p>                                                </span>                                            </a>                                            <a class="card hoverc">                                                <span>                                                    <i class="fa fa-qrcode t-big"></i>                                                </span>                                                <span class="left-qrcode">                                                    <img src="' + t("footer:first .fa-weixin").next(".iconblock").find("img:first").attr("src") + '">                                                    <p><span class="c-gray t-small">IT桔子公众号</span></p>                                                </span>                                            </a>                                            <a href="https://jinshuju.net/f/IueHny" target="_blank" class="card hovertext">                                                <span>                                                    <span class="t-small">反馈</span>                                                </span>                                            </a>                                        </div>                                    </div>';
				if(t("footer:first").before(z), t(".scroll2top").click(function() {
						t("html,body").animate({
							scrollTop: 0
						}, 500)
					}), t(".scroll2bottom").click(function() {
						var e = t(document).height();
						t("html,body").animate({
							scrollTop: e - v
						}, 500)
					}), t(".ui-maintoolbar:first").length > 0) {
					var N = 1,
						q = t(".ui-maintoolbar:first");
					".com/" === b.substr(b.length - 5, 5) && q.addClass("op1ed")
				}
				t(window).scroll(function() {
					N && (document.body.scrollTop > 300 ? q.addClass("op1") : q.removeClass("op1"), g > 980 && document.body.scrollHeight - document.body.scrollTop - v < 280 ? q.addClass("stopscroll") : q.removeClass("stopscroll"))
				})
			}
			if(0 == t(".about-us-banner").length && g < 550 && 0 == t("#mobile-ex-btn").length && t(".main").length > 0) {
				var z = '<div class="uiblock-mobile-ex">                                    <div id="mobile-ex-padbox" class="mobile-ex-padbox">                                    </div>                                    <div id="mobile-ex-btn" class="mobile-ex-btn">                                        <i class="fa fa-bars"></i>                                        <i class="fa fa-chevron-down"></i>                                    </div>                                </div>';
				t("footer:first").before(z);
				t("#uiblock-mobile-ex");
				if(t(".subnav").length > 0) {
					z = '<p class="gap">网站导航</p><ul class="mobile-ex-ul subnav-clone">' + t(".subnav").html() + "</ul><hr>", t("#mobile-ex-padbox").append(z);
					var J = "";
					t(".main:first .titlebar>span").each(function() {
						var e = "<li><a>";
						e += t(this).html(), e += "</a></li>", J += e
					}), z = '<p class="gap">页面导航</p><ul id="mobile-ex-hooks" class="mobile-ex-ul"><li class="scroll2top"><a>回顶部</a></li>' + J + "</ul><hr>", "" != t.trim(J) && (t("#mobile-ex-padbox").append(z), t("#mobile-ex-hooks").on("click", "li", function() {
						if(t(this).hasClass("scroll2top")) return void t("html,body").animate({
							scrollTop: 0
						}, 500);
						var e = t(this).text();
						t(".main:first .titlebar>span").each(function() {
							if(t(this).text() == e) {
								var i = t(this).offset().top - 8;
								return t("html,body").animate({
									scrollTop: i
								}, 500), !1
							}
						})
					}))
				}
			}
			if(t("#mobile-ex-btn").click(function() {
					t(this).closest(".uiblock-mobile-ex").toggleClass("on")
				}), g <= 600 ? t(".block-filter:first,.subnav,.subnav-clone").on("click", "a", function() {
					0 == t(".jzloading").length && t(".main:first").append('<div class="jzloading">加载中</div>')
				}) : t("html").on("click", "a", function() {
					void 0 != t(this).attr("href") && "_blank" != t(this).attr("target") && t("header:first").before('<div class="jzloading-topline"></div>')
				}), t(".list-main-personset").length > 0 && t(".list-main-personset .name").each(function() {
					var e = t(this).text(),
						i = t.trim(e).substr(0, 1).toUpperCase();
					t(this).closest("li").find(".usericon").attr("first-letter", i)
				}), t(".list-prodcase").length > 0 && t(".list-prodcase .person-name").each(function() {
					var e = t(this).text(),
						i = t.trim(e).substr(0, 1).toUpperCase();
					t(this).closest("li").find(".usericon").attr("first-letter", i)
				}), t(".ul-need-firstname").length > 0 && t(".ul-need-firstname a[name]").each(function() {
					var e = t(this).text(),
						i = t.trim(e).substr(0, 1).toUpperCase();
					t(this).closest("li").find(".usericon").attr("first-letter", i)
				}), t(".first-letter-box-4js").length > 0 && t(".first-letter-box-4js .person-name").each(function() {
					var e = t(this).text(),
						i = t.trim(e).substr(0, 1).toUpperCase();
					t(this).closest(".first-letter-box-4js").find(".usericon").attr("first-letter", i)
				}), t(".ugc-inc").length > 0 && t('select[name="per_role_id"],select[name="com_fund_id"]').change(function() {
					var e = t('select[name="per_role_id"]').find("option:selected").text(),
						i = t('select[name="com_fund_id"]').find("option:selected").text();
					"创始人" != e && "员工" != e || "需要融资" != i ? t("#lieju-form-tip").addClass("none") : t("#lieju-form-tip").removeClass("none")
				}), t(".userzone-nextshow").length > 0 && t(".userzone-nextshow").click(function() {
					var e = t(this).closest(".sec").find(".list-userzone-user");
					e.hasClass("slider-a") ? e.removeClass("slider-a").addClass("slider-b") : e.hasClass("slider-b") ? e.removeClass("slider-b").addClass("slider-c") : e.hasClass("slider-c") && e.removeClass("slider-c").addClass("slider-a")
				}), k.indexOf("Android") >= 0 && k.indexOf("Chrome") && void 0 === t.cookie("androidPushScreen")) {
				var z = '<div class="ui-top-infotip">                        <span class="t-small">你的浏览器可把网站<b>“添加到主屏幕”</b>哦</span>                        <span class="flr" style="padding-right:15px;">⇡ </span>                        </div>';
				t("body").prepend(z), t.cookie("androidPushScreen", "showed", {
					expires: .1
				})
			}
			if(k.indexOf("Android") >= 0 || k.indexOf("iPhone") >= 0) {
				t(".app-bottombar-holder").remove();
				var z = '<div class="app-bottombar-holder">                                <div class="bottombar">                                    <img src="https://www.itjuzi.com/assets/front/mobile/images/icon-share.png"/>                                    <h4>IT桔子</h4>                                    <span>创业者和投资人都在用！</span>                                    <a id="btnOpenApp" href="">打开App</a>                                </div>                            </div>';
				t("body").append(z), window.initLinkedme()
			}
			if(t(".sidebar").find("ul").not(".list-lite").find("a").not(".no-target").attr("target", "_blank"), 1 == t(".jkscrolltop").length) {
				var A = t(".jkscrolltop:first"),
					F = A.offset().top,
					I = A.height();
				t(".main:first").offset().bottom;
				t(".sidebar .act-unishowmore").click(function() {
					F = A.offset().top
				}), t(window).scroll(function() {
					var e = t(window).scrollTop(),
						i = t("footer:first").offset().top;
					e > F ? A.css({
						position: "fixed",
						top: 0
					}) : A.css({
						position: "static"
					}), e + I + 20 > i ? A.addClass("op0") : A.removeClass("op0")
				})
			}
			t.fn.extend({
				jksmoothjump: function() {
					return t(this).click(function() {
						num = t(t(this).attr("goto")).offset().top - 40, t("html,body").animate({
							scrollTop: num - 20
						}, 800)
					}), !1
				}
			}), t("*[goto]").each(function() {
				t(this).jksmoothjump()
			}), t(".list-norepeatli").length > 0 && (t(".list-norepeatli li").each(function() {
				var e = t(this).closest("ul"),
					i = t(this).find("a:first").attr("href"),
					a = t(this);
				0 != t(this).index() && e.find("li").each(function() {
					var e = t(this).find("a:first").attr("href");
					if(i == e) return a.remove(), !1
				})
			}), t(".sidebar .list-norepeatli li").length < 5 && (t(".sidebar .act-unishowmore").trigger("click"), t(".sidebar .act-unishowmore").remove())), t(".list-block .more").length > 0 && t(".list-block .more").click(function() {
				t("#followerModal").find("[icon-style]").each(function() {
					var e = t(this).attr("icon-style");
					t(this).attr("style", e)
				})
			}), p(), t("[minheight]").each(function() {
				var e = t(t(this).attr("minheight")),
					i = e.height() + "px";
				t(this).css({
					"min-height": i
				})
			}), t(function() {
				t('[data-toggle="tooltip"]').tooltip()
			}), window.orange = {
				updateInvestorFollowersList: h
			}
		}), t("#rank_feature").length > 0) {
		var h = t("#rank_feature").attr("attr-data-url");
		t.ajax({
			type: "GET",
			url: h,
			dataType: "json",
			beforeSend: function() {
				t(".sk-circle").hide()
			},
			success: function(t) {
				e(t)
			},
			error: function(e, i, a) {
				t("#rank_feature").html('<p style="text-align:center; font-size:20px; padding-bottom:20px;">请刷新重试</p>'), t(".titlebar a").hide()
			}
		})
	}
	for(var m = t(".scan-widgets").find("a"), p = [], v = 0; v < m.length; v++) p.push(t(m[v]).text().trim().length);
	for(var g = p[0], v = 0; v < p.length; v++) g < p[v] && (g = p[v]);
	var b = p.indexOf(g) + 1;
	t(".scan-widgets a:not(:nth-child(" + b + "))").css("display", "none"), t(".sub-titlebar.detail-compete-info>a").on("click", function() {
		t(this).addClass("active-compititor").siblings("a").removeClass("active-compititor")
	});
	var k, w = !1;
	t(".usersearch-box input").on("input", function(e) {
			var i, a, s = t(".usersearch-box"),
				n = s.attr("data-url"),
				o = !0,
				r = t(this);
			setTimeout(function() {
				(a = r.val().trim()) && a.length > 0 && o && k != a && !w && (o = !1, t.get(n, {
					name: a
				}, function(e) {
					k = a, o = !0, (e.company.length > 0 || e.investfirm.length > 0) && (e.hasCompany = e.company.length > 0, e.hasIndustry = e.investfirm.length > 0, t(".usersearch-box .click-body-remove").remove(), i = Handlebars.compile(t("#search-list-tmp").html())(e), s.append(i))
				}, "json"))
			}, 500)
		}), t(".usersearch-box input").on("compositionstart", function() {
			w = !0
		}), t(".usersearch-box input").on("compositionend", function() {
			w = !1
		}), t(".usersearch-box .header-search-btn").click(function(e) {
			var i = t(this).prev("input[type=text]").val();
			return void 0 == d ? (window.open(f + i, "_self"), !1) : !!i && (localStorage.search_list = JSON.stringify(s([{
				id: "",
				name: i
			}])), void(document.location = f + i))
		}), t(".usersearch-box input").on("click", function(e) {
			e.stopPropagation();
			var i, a;
			localStorage.search_list && (i = t.parseJSON(localStorage.search_list)), i && i.history && i.history.length > 0 && (t(".usersearch-box .click-body-remove").remove(), a = Handlebars.compile(t("#history-list-tmp").html())(i), t(".usersearch-box").append(a))
		}), t(document).on("click", ".usersearch-box>ul>li", function(e) {
			e.stopPropagation();
			var i, a = t(this).hasClass("group"),
				n = "true" == t(this).attr("data-history");
			if(a) return !1;
			n ? (t(".usersearch-box form input[type=text]").val(t(this).html().trim()), t(".usersearch-box form .header-search-btn").trigger("click")) : (i = {
				company: "https://www.itjuzi.com/company/",
				invst: "https://www.itjuzi.com/investfirm/"
			}, t(this).data().id && window.open(i[t(this).data().type] + t(this).data().id, "_self")), t(this).parent("ul").remove(), t(".usersearch-box form input[type=text]").val(t(this).data().name), localStorage.search_list = JSON.stringify(s([{
				id: t(this).data().id,
				name: t(this).data().name
			}]))
		}), t(".usersearch-box").keydown(function(e) {
			var e = e || window.event;
			switch(e.keyCode) {
				case 37:
				case 38:
					i();
					break;
				case 39:
				case 40:
					a();
					break;
				case 13:
					var s = t(this).find("input[type=text]").val();
					if(void 0 == d) return window.open(f + s, "_self"), !1;
					var n = t(".usersearch-box>ul>li.active");
					return n.length > 0 ? n.trigger("click") : t(".usersearch-box .header-search-btn").trigger("click"), !1
			}
		}), t(document).on("mouseenter", ".usersearch-box>ul>li[data-name]", function() {
			t(this).addClass("active").siblings().removeClass("active")
		}), t(document).on("click", function() {
			t(".click-body-remove").remove(), t("body").removeClass("overflow-hidden-body")
		}), t(".detail-compete-info>a").on("mouseenter", function() {
			var e, i = t(this).find(">span");
			0 == i.length && t(this).width() > 84 ? (e = t(this).html().trim(), t("<span>" + e + "</span>").appendTo(t(this)).css("left", t(this).position().left + 25)) : i.show()
		}).on("mouseleave", function() {
			t(this).find(">span").hide()
		}), t(".neeq-concept-stock .selectpicker").selectpicker({
			style: "btn-default",
			size: 4,
			width: "110"
		}).on("changed.bs.select", function() {
			if(t(this).parents("#stock_main").length > 0) o();
			else {
				var e, i, a = t(this).data().url,
					s = t(this).val(),
					n = t(this).parents(".select-box").next().find("table>tbody"),
					r = t("#item_id").val();
				t.get(a, {
					time: s,
					com_id: r
				}, function(t) {
					if(200 == t.code) {
						n.empty(), i = "";
						for(var a = 0; a < t.info.length; a++) {
							e = "<tr>";
							for(var s in t.info[a]) t.info[a][s] = t.info[a][s] ? t.info[a][s] : "--", e += "<td>" + t.info[a][s] + "</td>";
							e += "</tr>", i += e
						}
						n.append(i)
					} else alert(t.msg)
				}, "json")
			}
		}), t(".stock_titlebar a").on("show.bs.tab", function() {
			"#stock_main" == t(this).attr("href") && o()
		}),
		function() {
			t(".company-list-content .list-main-icnset > li > .maincell > .title .des-info-tip").each(function(e, i) {
				t(i).css("left", t(i).prev("a").width() + 15 + "px")
			})
		}();
	var y, x, _, C, j;
	t(".company-list-ul>li>.action").on("click", function() {
		if(void 0 == d) return void window.open(site_url + "user/login?redirect=company", "_self");
		C || (j = t(this).find(".fa"), y = j.addClass("is-loading").hasClass("fa-star"), x = y ? t(this).parents("ul").data().cancelFocus : t(this).parents("ul").data().focusUrl, _ = t(this).parents("li").data().id, C = !0, t.post(x, {
			com_id: _
		}, function(t) {
			C = !1, j.removeClass("is-loading"), 200 == t.code && (y ? j.removeClass("fa-star").addClass("fa-star-o") : j.removeClass("fa-star-o").addClass("fa-star"))
		}, "json"))
	});
	var O, S, T, $ = t("#item_id").val();
	t(".to-show-more").on("click", function() {
		if(!t(this).parents(".rowbtn").hasClass("is-loading")) {
			var e, i = t(this),
				a = i.parents(".rowbtn"),
				s = a.next("script.show-more-tmp"),
				n = i.parents(".rowbtn").prev("ul, table");
			if(n.find(".toggle-item").length > 0) n.find(".toggle-item").toggle(), i.find(".default_text").toggle().next(".to-hide").toggle();
			else {
				if(a.addClass("is-loading"), O = i.data().moreUrl, s.length > 0) return e = s.data().type, void l(i, a, n, s, e);
				T = i.data().type, S = t("#invest_id").val();
				var o, r;
				t.get(O + "/" + S, function(e) {
					200 == e.code && (a.removeClass("is-loading"), "person" == T && t.each(e.data, function(t, e) {
						e.first_letter = e.per_name[0]
					}), r = {}, r[T] = e.data, o = Handlebars.compile(t("#investfirm_tmp").html())(r) || "", n.append(o), i.find(".default_text").toggle().next(".to-hide").toggle())
				}, "json")
			}
		}
	});
	var z, N = (window.orange, t("#item_id").val()),
		q = t("#myTab"),
		J = (t(".need-vip"), t(".body-follow-btn")),
		A = t(".sidebar.right");
	t("#myTab>.move-border-box>ul>li").click(function() {
		var e = t(this).attr("data-href");
		t(this).parent().height();
		if(e) {
			var i = t(e).offset().top - 60;
			t(this).addClass("active").siblings().removeClass("active"), t(document).scrollTop(i)
		}
	}), t(document).on("click", function() {
		t(".click-body-hide").hide(), t(".album-box>ul").empty().append('<li class="is-loading"></li>')
	}), t(".to-focus-btn").on("click", function() {
		if(!(t(this).find(".is-loading").length > 0)) {
			var e, i, a = t(this);
			a.append('<div class="is-loading"></div>'), t.post(t(this).data().url, {
				type: "company",
				item_id: N
			}, function(s) {
				a.find(".is-loading").remove(), e = Number(a.find(">span>i").attr("data-count").trim()), "follow" == s.handle && (e++, t(".list-block.user").length > 0 && window.orange.updateInvestorFollowersList(s)), "unfollow" == s.handle && e >= 1 && e--, i = "(" + e + ")", e > 1e3 && (i = "(1000+)"), 0 == e && (i = ""), a.find(">span>i").attr("data-count", e).html(i), a.toggleClass("focused").find(".fa").toggleClass(".fa-heart-o fa-heart"), t(".new-btn").toggleClass("focused"), t(".body-follow-btn>a").toggleClass("hidden"), e = null, a = null
			}, "json")
		}
	}), t(".new-btn").click(function() {
		t(".to-focus-btn").trigger("click")
	}), u.length > 0 && t(window).scroll(function() {
		var e = "";
		if(document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop), e >= u.offset().top + u.height() + 10) {
			q.addClass("fixed-tab");
			for(var i = t(document).scrollTop(), a = t(".panel-for-scroll"), s = 0; s < a.length; s++) {
				var n = t(a[s]).offset().top,
					o = t(a[s]).attr("id");
				i + 70 >= n && (z = t('li[data-href="#' + o + '"]'), z.addClass("active").siblings().removeClass("active"), t(".move-border-bar").css({
					left: z.position().left,
					width: z.width()
				}))
			}
		} else q.removeClass("fixed-tab"), z = t('li[data-href="#home"]'), z.addClass("active").siblings().removeClass("active"), t(".move-border-bar").css({
			left: z.position().left,
			width: z.width()
		});
		e > A.offset().top + A.height() - 250 ? J.addClass("fixed-tab") : J.removeClass("fixed-tab"), e > 60 ? t(".subnavbox").addClass("navbar-fixed-top") : t(".subnavbox").removeClass("navbar-fixed-top")
	}), t(".move-border-bar").css({
		width: t(".company-info-tab li.active").width()
	});
	var F;
	t(".list-album-com").on("click", ".delete-from-album", function(e) {
		F = t(this).data().id;
		t("body").append('<div class="ui-jkpopup">\n                                <div class="pop-mask"></div>\n                                <div class="popup">\n                                    <div class="pop-title" style="font-size:16px;">\n                                        <span>移出专辑</span>\n                                        <span class="act-popclose">✕</span>\n                                    </div>\n<div class="pop-cont"><div class="block-collectionpop-multi">                                            <div class="newitembox">                                                移除当前专辑                                            </div>                                            <div class="olditembox text-center">确定要移除当前专辑吗？</div>                                        </div>                                    </div>                                    <div class="pop-footer">\n                                        <div class="popbtnset">\n                                            <a class="color-c album-delete-sure">确定</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>')
	}), t("body").on("click", ".album-delete-sure", function() {
		t(".delete-from-album[data-id=" + F + "]").parents("li").remove(), t(".act-popclose").trigger("click"), t.post("/album/del_album", {
			id: F
		}, function(t) {}, "json")
	})
}(jQuery), $(function() {
	"use strict";

	function t(t) {
		if("取消.." == t.html()) return !1;
		var e = $("#feedback_url").data().cancelUrl,
			i = t.attr("data-feedback-id");
		t.html("取消.."), $.post(e, {
			feedback_id: i
		}, function(e) {
			200 == e.code && t.removeClass("has-feedback").html("反馈")
		}, "json")
	}

	function e(t) {
		var e, s, n, o, r = $(t).hasClass("direct-feedback"),
			l = t.data().type;
		if(e = {
				data_source: 1,
				event_type: l,
				source_parent_id: a,
				source_childen_id: $(t).data().id
			}, r) i(r, e, event.target, t);
		else {
			o = '<div class="feadback-container click-body-remove"><div class="feadback-content"><label class="close">&times;</label><div class="feadback-head"><h2>反馈' + feedbackMap[l].title + '信息问题</h2><div class="river-line"></div></div><div class="label-content"></div><textarea placeholder="描述（选填）"></textarea><button class="feedback-btn">提交</button></div></div>', s = feedbackMap[l].keywords.split(","), n = "";
			for(var c = 0; c < s.length; c++) s[c] && s[c].trim().length > 0 && (n += "<span>" + s[c] + "</span>");
			$("body").append(o).addClass("overflow-hidden-body"), $(".feadback-container>.feadback-content").on("click", function(a) {
				a.stopPropagation();
				var s, n = $(this);
				if("SPAN" == a.target.nodeName && $(a.target).toggleClass("active"), "LABEL" == a.target.nodeName && ($("body").removeClass("overflow-hidden-body"), $(this).parent().remove()), "BUTTON" == a.target.nodeName) {
					if("提交.." == a.target.innerHTML) return !1;
					e.description = "", s = $(".label-content>.active");
					for(var o = 0; o < s.length; o++) e.description += $(s[o]).text().trim() + ",";
					e.description += n.find("textarea").val() || "", e.description = e.description.replace(/,$/, ""), a.target.innerHTML = "提交..", i(r, e, a.target, t)
				}
			}).find(".label-content").append(n)
		}
	}

	function i(t, e, i, a) {
		var s, n = $("#feedback_url").data().addUrl;
		$.post(n, e, function(e) {
			200 == e.code && (t ? a.addClass("has-feedback").html("已反馈") : ($(".feadback-content").remove(), $(i).html("提交"), s = '<div class="success-content"><img src="../assets/front/images/img/correct.png" alt="图片加载失败"><div class="feadback-head"><h2>反馈成功！</h2><div class="river-line"></div></div><p>感谢您的反馈~</p><p>我们会立即处理并跟进，并将处理结果第一时间通知您！</p></div>', $(s).appendTo(".feadback-container").on("click", function(t) {
				t.stopPropagation()
			}), setTimeout(function() {
				$(document).trigger("click")
			}, 1500)), a.attr("data-feedback-id", e.feedback_id))
		}, "json")
	}
	var a = $("#item_id").attr("data-id");
	$(document).on("click", ".toggle-feedback-btn", function(i) {
		i.stopPropagation();
		var a = $(this).hasClass("has-feedback"),
			s = $(this).hasClass("direct-feedback");
		a && s && t($(this)), a || e($(this))
	}), $(document).on("mouseenter", ".toggle-feedback-btn", function(t) {
		t.stopPropagation();
		var e = $(this).hasClass("has-feedback"),
			i = $(this).hasClass("direct-feedback");
		e && i && $(this).css({
			color: "#607d8b"
		}).html("取消")
	}), $(document).on("mouseleave", ".toggle-feedback-btn", function(t) {
		t.stopPropagation();
		var e = $(this).hasClass("has-feedback"),
			i = $(this).hasClass("direct-feedback");
		e && i && $(this).css({
			color: "#f86"
		}).html("已反馈")
	})
}), $(function() {
	"use strict";

	function t(t) {
		return {
			1: "<p>我们将在2个工作日内完成审核</p><p>届时您可能会收到来自桔子的确认电话</p>",
			2: "<p>您已提交认证申请，请耐心等待</p><p>我们将在2个工作日内完成审核</p>",
			3: "<p>您已经是桔子认证用户，无需重复认证！</p>",
			4: "<p>可能是网络问题，请您重新上传</p>"
		}[t]
	}
	var e, i, a;
	! function(t, i, a) {
		$(t) && $(t).length > 0 && (e || (e = WebUploader.create({
			auto: !0,
			dnd: i,
			paste: a,
			swf: "Uploader.swf",
			server: $(t).attr("data-server"),
			pick: {
				id: t,
				innerHTML: "上传名片",
				multiple: !1
			},
			fileVal: $(t).attr("data-file-val"),
			accept: {
				title: "Images",
				extensions: "gif,jpg,jpeg,bmp,png",
				mimeTypes: "image/jpg,image/jpeg,image/png"
			},
			fileNumLimit: 1,
			fileSizeLimit: 20971520
		}), e.on("uploadStart", function(t) {
			$(".error").html(""), $("#uploader-picker").addClass("uploading").find(".webuploader-pick").html("上传中...")
		}), e.on("uploadSuccess", function(t, e) {
			$(".uploader-drag-box>img").attr("src", e.file.url), $("#com_lice_archive").val(e.file.file_name), $("#uploader-picker").removeClass("uploading").find(".webuploader-pick").html("重新上传")
		}), e.on("uploadComplete", function(t) {
			e.reset()
		}), e.on("error", function(t) {
			"Q_EXCEED_SIZE_LIMIT" == t && $(".error").html("图片大小超出限制，请重新上传!")
		})))
	}("#uploader-picker", ".uploader-drag-box", ".uploader-drag-box"), $("#claim_modal").modal({
		backdrop: "static",
		show: !1
	}), $(".to-post-btn").on("click", function() {
		if("提交中..." == $(this).html()) return !1;
		var e = $("#com_lice_archive").val(),
			s = $(".error"),
			n = $(this);
		return e ? !s.html() && ($(this).html("提交中..."), i = $("#com_id").val(), void $.post($(this).data().url, {
			com_id: i,
			com_lice_archive: e
		}, function(e) {
			n.html(n.attr("data-old")), a = e.status;
			var i = $("#claim_modal");
			1 == e.status ? i.find(".warn").hide().siblings(".correct").show().siblings(".info-title").html("名片提交成功!") : i.find(".correct").hide().siblings(".warn").show().siblings(".info-title").html("名片提交失败!"), i.modal("show").find(".info").html(t(e.status)), i = null
		}, "json")) : (s.html("名片不能为空，请上传名片!"), !1)
	}), $(".claim_modal_btn").on("click", function() {
		$("#claim_modal").modal("hide"), 4 != a && window.open("https://www.itjuzi.com/", "_self")
	})
});