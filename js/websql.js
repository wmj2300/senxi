var DB=null;
function CreateDataBase(name, version){
	version = version || '0.0'
	DB = openDatabase(name, version, '数据库描述', 2*1024*1024);// 数据库大小其实无所谓，塞多了自己会自动撑大的
	if(!DB){
		mui.toast('数据库创建/打开失败');
		return;
	}
	ExeSql('CREATE TABLE IF NOT EXISTS Msg(id integer primary key autoincrement,has_read integer, type integer, content text)',[],DatabaseSucc,DatabaseErr);
	return DB;
}

function DatabaseErr(tx, results){
	mui.toast('数据库创建/打开失败');
}

function DatabaseSucc(tx, results){
	console.log(JSON.stringify(results));
	//mui.toast('数据库创建成功');
}

function ExeSql(sql, arg, succ_callback,err_callback){
	if(!DB){
		return;
	}
	if(!arg){
		arg = [];
	}
//	var succ_cb=null;
//	if(succ_callback){
//		succ_cb = function(tx, results){
//			//mui.toast("执行成功");
//			succ_callback(tx, results);
//		}
//	} 
//	
//	var err_cb=null;
//	if(err_callback){
//		err_cb = function(tx, results){
//			//mui.toast("执行成功");
//			err_callback(tx, results);
//		}
//	}
	
	DB.transaction(function (tx) {
		tx.executeSql(sql, arg, succ_callback, err_callback);
	});
}
