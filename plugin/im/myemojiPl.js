// 光标移动到最后
function msgTextLastPos(obj) {
    if (window.getSelection) {//ie11 10 9 ff safari
        obj.focus(); //解决ff不获取焦点无法定位问题
        var range = window.getSelection();//创建range
        range.selectAllChildren(obj);//range 选择obj下所有子内容
        range.collapseToEnd();//光标移至最后
    }
    else if (document.selection) {//ie10 9 8 7 6 5
        var range = document.selection.createRange();//创建选择对象
        //var range = document.body.createTextRange();
        range.moveToElementText(obj);//range定位到obj
        range.collapse(false);//光标移至最后
        range.select();
    }
}
;
(function($, window, document, undefined) {
	'use strict';
	$.fn.myEmoji = function(options) {
		var defaults = {
			emojiconfig: {
				tieba: {
					name: "默认表情",
					path: "plugin/im/qqface/",
					maxNum: 75,
					file: ".gif"
				}
//				, AcFun: {
//				 	name: "AcFun表情",
//				 	path: "img/AcFun/",
//				 	maxNum: 54,
//				 	file: ".png"
//				 }
			},
			postFunction: function() {
				alert(InputText.html());
				console.log(InputText.html());
			}
		};
		var opts = $.extend(defaults, options);
		var emojiconfig = opts.emojiconfig;
		var plBox = $(this);
		var InputBox = plBox.find('.Input_Box');
		var faceDiv = plBox.find('.faceDiv');
		var InputText = InputBox.find('.Input_text');
		var InputFoot = InputBox.find('.Input_Foot');
		var imgBtn = InputFoot.find('.imgBtn');

		imgBtn.click(
			function() {
				
				var emojiContainer = faceDiv.find('.emoji_container');
				if (emojiContainer.children().length <= 0) {
					faceDiv.css({
						width: '100%',
						display: 'block'
					});
					for (var emojilist in emojiconfig) {
						emojiContainer.append('<section class="for_' + emojilist + '"></section>');
						faceDiv.find('.emoji_container section')[0].style.display = 'block';
						faceDiv.find('.emoji_tab').append('<a href="#!" data-target="for_' + emojilist + '">' + emojiconfig[emojilist].name + '</a>');
						for (var i = 1; i <= emojiconfig[emojilist].maxNum; i++) {
							if (emojiContainer.find('.for_' + emojilist) !== undefined) {
								emojiContainer.find('.for_' + emojilist).append('<a href="#!" class="_img"><img src="' + emojiconfig[emojilist].path + i + emojiconfig[emojilist].file + '" /></a>');
							}
						}
					}
					//faceDiv.find('.emoji_container section')[0].style.display = 'block';
		//			faceDiv.find('.emoji_tab a')[0].className += 'active';
					faceDiv.find('.emoji_container ._img').on('click', function() {
//						if (InputText[0].nodeName === 'DIV') {
//							//InputText.append(this.innerHTML);
//							
//							faceDiv.toggle();
//						} else {
//							InputText.append('[' + $(this).find('img').attr('data-alias')+']');
//							faceDiv.toggle();
//						}
//						var $html_str='<div class="msg-item msg-item-self" msg-type="text">'+
//					 						'<i class="msg-user mui-icon mui-icon-person"></i>'+
//					 					'<div class="msg-content">'+
//					 						'<div class="msg-content-inner">'+
//					 								this.innerHTML+
//					 						'</div>'+
//					 						'<div class="msg-content-arrow"></div>'+
//					 					'</div>'+
//					 					'<div class="mui-item-clear"></div>'+
//					 				'</div>';
//						$("#msg-list").append($html_str);
//						msg_list_em.scrollTop =msg_list_em.scrollHeight;
						var inner = document.getElementById('Input_text').innerHTML;
						document.getElementById('Input_text').innerHTML = inner + this.innerHTML;
						faceDiv.toggle();
					});
					faceDiv.find('.emoji_tab a').on('click', function() {
						$(this).parent().prev().find('section').hide();
						faceDiv.find('.emoji_container .' + $(this).attr('data-target')).show();
						faceDiv.find('.emoji_tab a').removeClass('active');
						this.className += ' active';
					});
				} else {
					faceDiv.toggle();
				}
			}
		);
		
		
		
		//InputFoot.find('.postBtn').on('click', opts.postFunction);
		$(document).on('click', function(e) {
			if ((faceDiv.find($(e.target)).length) <= 0 && (InputBox.find($(e.target)).length <= 0)) {
				faceDiv.hide();
			}
		});
		
	};
})(jQuery, window, document);