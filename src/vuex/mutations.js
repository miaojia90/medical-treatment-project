import {
	GETUSERCENTERINFO
} from './mutationTypes.js'

import {
	setStore,
	getStore
} from '../utils/mUtils'

export default {
	//获取用户的信息
	[GETUSERCENTERINFO](state, userCenterInfo) {
		state.userCenterInfo = userCenterInfo;
	}
}