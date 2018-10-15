(function(win, doc) {
		var head = doc.querySelector('head')
		var body = doc.querySelector('body')
		var div = doc.createElement('div')
		var Toast = doc.createElement('div')
		var Loader = doc.createElement('div')
		var Msg = doc.createElement('div')
		
		
		Msg.className = 'mv-msg'
		var msgshow = function(obj){
			Msg.style.display = 'block'
			Msg.innerHTML = obj
			body.appendChild(Msg)
			
			setTimeout(function(){
				Msg.style.display = 'none'
			},1500)
		}
		
		

	//Toast提示框
		Toast.className = 'toast'
		Toast.style.display = 'none'
		var toastshow = function (param) {
			Toast.innerHTML = `<div class="mv-toast"></div>
									<div class="mv-toast-cont">
									${param.title?param.title:'成功'}
							   </div>`
			body.appendChild(Toast)
			Toast.style.display = 'block'
			
			setTimeout(function(){
				toasthide()
			},1500)
		}
		
		var toasthide = function () {
			Toast.style.display = 'none'
		}
	
	//Loader加载中
		Loader.className = 'toast'
		Loader.style.display = 'none'
		var loadshow = function (par = '加载中') {
			Loader.innerHTML = `<div class="mv-load">
								    <div class="mv-loader"></div>
								</div>
								<div class="mv-load-cont">
									${par}
								</div>`
			body.appendChild(Loader)
			Loader.style.display = 'block'
		}

		var loadhide = function () {
			Loader.style.display = 'none'
		}

		
		
	//Model模态框	
		var y,x;
		SetModel()
		setTimeout(function () {
			SetModel();
		}, 300);
		doc.addEventListener('DOMContentLoaded', SetModel, false);
		win.addEventListener('resize', SetModel, false);
		win.addEventListener('load', SetModel, false);
	
		div.style.position = 'fixed'
		div.style.display = 'none'
		div.style.backgroundColor = 'rgba(0,0,0,.5)'
		div.style.top = '0px'
		div.style.zIndex = 50000
		div.className = 'model'
		var modelshow = function(param) {
			div.innerHTML = `<div class="mv-model-viwe">
									<div class="mv-model-title">${param.title}</div>
									<div class="mv-model-cont" style="color:${param.color}">
										${param.cont}
									</div>
									<div class="mv-model-btn">
										<div class="mv-model-btn-left" id="cancel"><span>${param.cancelText?param.cancelText:'取消'}</span></div>
										<div class="mv-model-btn-right" style="color:${param.color}" id="determine"><span>${param.deteText?param.deteText:'确定'}</span></div>
									</div>
								</div>`

			body.appendChild(div)
			div.style.display = 'block'
			body.style.overflow = 'hidden'

			doc.getElementById('determine').addEventListener('click',function(){
				modelhide()
				param.success()
			})
			doc.getElementById('cancel').addEventListener('click',function(){
				modelhide()
				param.fail()
			})
			doc.addEventListener('touchmove',function(event){
				event.preventDefault();
			},false)
			
			if (!param.cancel) {
				doc.getElementById('cancel').style.display = 'none'
			}
		}
		
		var modelhide = function() {
			body.style.overflow = 'auto'
			div.style.display = 'none'
			document.addEventListener('touchmove', function (event) {
			    window.event.returnValue = true;
			}, false);
		}

		function Xwidth () {
			return doc.documentElement.clientWidth <= 640 ? doc.documentElement.clientWidth : 640
		}
		
		function Yheight () {
			return doc.documentElement.clientHeight
		}
		
		function SetModel() {
			y = Yheight()
			x = Xwidth()
			
			div.style.width = x + 'px'
			div.style.height = y + 'px'
		}
		
		win.mv = {
			ModelSo: modelshow,
			ModelDe: modelhide,
			ToastSo: toastshow,
			ToastDe: toasthide,
			LoadSo: loadshow,
			LoadDe: loadhide,
			MsgSo: msgshow
		}
	})(window, document)
	
	
	
	function on () {
		mv.ModelSo({
			title:'此商品正在开运中',    //提示标题
			cont:'开运开运开运开开运开运开运开运开运开运开运开运开运',        //提示内容
			cancel: true,           //是否显示取消按钮   默认显示
			color: 'red',                  //确定文本颜色
			cancelText: '取消授权',          //取消按钮文本  默认是取消
			deteText:'同意授权',             //确定按钮文本   默认是确定
			success: function () {
				console.log('用户点击了确定')
			},
			fail: function () {
				console.log('用户点击了取消')
			}
		})
	}