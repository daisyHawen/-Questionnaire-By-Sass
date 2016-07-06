/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-05-20 17:37:17
 * @version $Id$
 */
 var btn_add=document.getElementById("btn-add");
var indexBtn=[];
indexBtn['add']=document.getElementById("btn-add");
indexBtn['edit']=document.getElementById('btn-edit');
indexBtn['dlt']=document.getElementById('btn-delete');
indexBtn['dltAll']=document.getElementById('btn-delete-all');
indexBtn['view']=document.getElementById('btn-view');
var maskBtn=[];
maskBtn['cfr']=document.getElementById('btn-conform');
maskBtn['ccl']=document.getElementById('btn-cancel');
console.log(indexBtn);
/*控制部分
  点击事件
*/
indexBtn['add'].onclick=function(argument) {
	 console.log('新建问卷'); 
}
indexBtn['edit'].onclick=function(){
	console.log('编辑当前问卷'+ this);
}
indexBtn['dlt'].onclick=function(){
	console.log('删除当前问卷'+ this);
}
indexBtn['view'].onclick=function(){
	console.log('查看当前问卷信息'+ this);
}
indexBtn['dltAll'].onclick=function(){
	console.log('删除所有问卷问卷信息'+ this);
}

