function isOnlineLogin(){
	var is_login=false;
	var authToken = plus.storage.getItem('authToken');
	var u_phone = plus.storage.getItem('u_phone');
	var time = Date.parse(new Date()) / 1000;
	var token = CryptoJS.MD5('SenXi' + time).toString();
	mui.ajax(SERVER_HOST + 'user/info', {
		data: {
			time: TIME,
			token: TOKEN,
//			phone: u_phone,
			authToken: authToken
		},
		async:false, // 异步 || 同步
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		timeout: 10000, //超时时间设置为5秒；
		success: function(data) {
			console.log(JSON.stringify(data));
			if(data.status == 1) {
				is_login= true;
			} else {
				if('authToken错误'==data.msg){
					gotoPage("view_0003_login.html");
				}
			}
		},
		error: function(xhr, type, errorThrown){
			plus.ui.toast("网络请求超时");
		}
	});
	return is_login;
}
