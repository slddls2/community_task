$(function(){function e(e){$(".loginbox-v2").find(".act-close-target"),$(".loginbox-v2:not(.none):first .infoalert").addClass("show shake").find(".text").html(e),setTimeout(function(){$(".loginbox-v2:not(.none):first .infoalert").removeClass("shake")},300)}function t(e){$(".loginbox-v2:not(.none):first .infoalert").find(".text").html()!=e&&"clear"!=e||$(".loginbox-v2:not(.none):first .infoalert").removeClass("show shake")}function i(e){r&&(timer=setInterval(function(){n>1?(n--,e.html("等待"+n+"s"),e.removeClass("canget-verific-code")):(clearInterval(timer),n=s,e.html("发送验证码"),e.addClass("canget-verific-code"),o=!0)},1e3))}var s,n,a,o=!0,r=!0,l=$("input[name=code]"),c=$("input[name=mobile]"),f=$("input[name=email]");$(".loginbox-v2").length>0&&($(".loginbox-v2").find("input").attr("autocomplete","off"),$(".loginbox-v2").addClass("oldcheck-false"),$(".loginbox-v2").find(".act-close-target").on("click",function(){$(this).closest(".infoalert").removeClass("show shake")}),$(".loginbox-v2").find($('button[type="submit"]')).on("click",function(){var e=$(this).closest(".loginbox-v2");if(e.find(".infoalert").hasClass("show")||e.find(".warning").length>0)return!1}),$(".loginbox-v2").find('input[check="email"]').on("blur",function(){var i=$.trim($(this).val()),s=/^([a-zA-Z0-9]+[\-|\_|\.|\+]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[\-|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,n="邮箱格式不正确，请修改。";if(s.test(i)){if(t(n),$(this).removeClass("warning"),"true"==$(this).attr("checkreg")){var o=site_url+"user/check_register_email",r=$(this);a=!1,$.post(o,{email:i},function(s){"string"==typeof s&&(s=JSON.parse(s)),"reged"==s.status?(n='该邮箱已经注册，请<a class="tag" style="margin-top:0px;position:relative;top:-2px;" href="'+site_url+"user/login?juzi_key="+f.val()+'">登录</a>',a=!0,e(n),r.addClass("warning")):"success"==s.status?(n='该邮箱已经注册，请<a class="tag" style="margin-top:0px;position:relative;top:-2px;" href="'+site_url+"user/login?juzi_key="+f.val()+'">登录</a>',a=!0,t(n),r.removeClass("warning")):(n='邮件发送失败，<a class="tag" style="margin-top:0px;position:relative;top:-2px;" href="'+site_url+"user/send_active_email?email="+i+'">重发激活邮件</a>',e(n),r.addClass("warning"))})}if("true"==$(this).attr("checklogin")){var o=site_url+"user/check_login_email",r=$(this);$.post(o,{email:i},function(s){"string"==typeof s&&(s=JSON.parse(s)),"reged"==s.status?(n="该邮箱未注册，请更换邮箱或注册。",e(n),r.addClass("warning")):"unactive"==s.status?(n='邮箱未激活，<a class="tag" style="margin-top:0px;position:relative;top:-2px;" href="'+site_url+"user/send_active_email?email="+i+'">重发激活邮件</a>',e(n),r.addClass("warning")):"success"==s.status&&(n="",t("clear"),r.removeClass("warning"))})}}else e(n),$(this).addClass("warning")}),$(".loginbox-v2").find('input[type="password"]:first').on("blur",function(){if(a)return!1;var i=$(this).val(),s=$(".loginbox-v2:not(.none):first .infoalert").find(".text").html();if(!(s.indexOf("前往邮箱激活")>=0||s.indexOf("账号密码错误")>=0||s.indexOf("已绑定")>=0)){var n="密码长度请大于6位，小于16位。";i.length<6||i.length>=16?(e(n),$(this).addClass("warning")):(t(n),$(this).removeClass("warning"))}}));var u=!1;$("button.regist-signin-btn").on("click",function(){if($("input.required").trigger("blur"),$(".infoalert:visible").length>0)return!1;if(!r)return!1;if(u)return!1;var t,i=$("button[data-checkcode-url]"),s=$(this);i.length>0?(t=i.data().checkcodeUrl,u=!0,$.post(t,{juzi_code:l.val(),juzi_phone:c.val()},function(t){if(u=!1,r=!1,t)s.parents("form").submit();else{e("验证码输入错误"),l.addClass("warning")}},"json")):(r=!1,s.parents("form").submit())}),l.on("focus",function(){var e=$(".loginbox-v2:not(.none):first .infoalert").find(".text").html();e.indexOf("验证码输入错误")>=0&&(t("验证码输入错误"),$(this).removeClass("warning"))}),$(document).on("click","a[check='change_code']",function(){$("img[check='img']").attr("src","https://www.itjuzi.com/user/captcha?_=1513655993648019 ")}),$("input[name='mobile']").blur(function(){var e=($(this),$(this).val());/^(((1[0-9]{1}))+\d{9})$/.test(e)?($(".infoalert").removeClass("show shake"),$(".jzbtn").attr("type","submit"),$("#phone_span").remove(),$(".get-verific-code").addClass("canget-verific-code"),$.ajax({type:"post",url:site_url+"user/mobile_only",data:{mobile:e},success:function(e){1==e?($(".infoalert").addClass("show shake"),setTimeout(function(){$(".loginbox-v2:not(.none):first .infoalert").removeClass("shake")},300),$(".infoalert").addClass("o"),$(".text").html('该手机号已注册，请<a class="tag" style="margin-top:0px;position:relative;top:-2px;" href="'+site_url+"user/login?juzi_key="+c.val()+'">登录</a>!'),a=!0):($(".infoalert").removeClass("show shake"),$(".infoalert").removeClass("o"),a=!1)}})):($(".infoalert").removeClass("show shake"),$(".jzbtn").removeAttr("type"),$(".get-verific-code").removeClass("canget-verific-code"),$(".infoalert").addClass("show shake"),setTimeout(function(){$(".loginbox-v2:not(.none):first .infoalert").removeClass("shake")},300),$(".infoalert").addClass("o"),$(".text").html("手机号格式不正确"))}),$(document).on("click",'span[check="click_code"]',function(){if(!o)return!1;o=!1;var e=$(this);$(".infoalert").removeClass("show shake");var t=$("input[check='mobile']").val(),l=new Date,f=l.getTime(),u=$(".infoalert").hasClass("o"),h=$("#token").val();s=60,n=s,r=!1;var v=$("input[name='code']");t?u?($(".infoalert").addClass("show shake"),setTimeout(function(){$(".loginbox-v2:not(.none):first .infoalert").removeClass("shake")},300),$(".infoalert").addClass("o"),$(".text").html('该手机号已注册，请<a class="tag" style="margin-top:0px;position:relative;top:-2px;" href="'+site_url+"user/login?juzi_key="+c.val()+'">登录</a>!'),a=!0):($(".infoalert").removeClass("show shake"),v.removeClass("warning"),a=!1,r=!0,i(e),$.ajax({type:"post",url:site_url+"user/send_register_code",data:{mobile:t,click_time:f,token:h},success:function(e){return!1}})):($(".infoalert").addClass("show shake"),setTimeout(function(){$(".loginbox-v2:not(.none):first .infoalert").removeClass("shake")},300),$(".text").html("请输入手机号"))})});