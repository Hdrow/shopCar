'use strict';
// 全选逻辑
;(function(){
	var checkBox = document.querySelectorAll('.checkbox-wrap');
	for(var i = 0; i < checkBox.length; i++){
		checkBox[i].addEventListener('click', function(){
			this.classList.toggle('checked');
		})
	}
	
	var checkAll = document.querySelector('.pro-t .checkbox-wrap');

	var checkList = document.querySelectorAll('.pro-b .checkbox-wrap');
	
	var checkInput = document.querySelectorAll('.pro-b input[type="checkbox"]');
	checkAll.addEventListener('click',function(){
		
		if(this.classList.contains('checked')){
		
			for(var i = 0; i < checkList.length; i++){
				checkList[i].classList.add('checked');
				checkInput[i].checked = true;
			}
		}else{
			
			for(var i = 0; i < checkList.length; i++){
				checkList[i].classList.remove('checked');
				checkInput[i].checked = false;
			}
		}
	})
})()
// 垃圾桶动画
;(function(){
	var del = document.querySelectorAll('.del-wrap');
	var modal = document.querySelector('.jd-modal');
	var delT = null;
	for(var i = 0; i < del.length; i++){
		del[i].addEventListener('click',function(){
			
			delT = this.querySelector('.del-t');
			delT.style.transform = 'rotate(-25deg) translateX(-2px)';
			modal.style.display = 'block';
		})
	}
	
	var cancel = modal.querySelector('.cancel');
	cancel.addEventListener('click',function(){
		
		delT.style.transform = 'none';
		modal.style.display = 'none';
	})
})()
// 加减的逻辑
;(function(){
	var jia = document.querySelectorAll('.jia');
	var jian = document.querySelectorAll('.jian');
	for(var i = 0; i < jia.length; i++){
		jia[i].addEventListener('click',function(){
			setVal('jia',this);
		})
		jian[i].addEventListener('click',function(){
			
			setVal('jian',this);
		})
	}

	function setVal(tips,_this){
		// 找到点击的那个对象对应的input
		var val = _this.parentNode.children[1].children[0].value;
		if(tips == 'jia'){
			val++;
		}else if(tips == 'jian'){
			val--;
			if(val <= 1){
				val = 1;	
			}
		}
		_this.parentNode.children[1].children[0].value = val;
	}
})()

