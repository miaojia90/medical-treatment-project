// 自定义指令
export const focus = {
	directives: {
		'focus': {
			inserted: function(el) {
				// 聚焦元素
				el.focus()
			}
		}
	}
};