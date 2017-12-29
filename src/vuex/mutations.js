import {
	GETUSERCENTERINFO,
	UPDATEUSERINFO
} from './mutationTypes.js'

import {
	setStore,
	getStore
} from '../utils/mUtils'

export default {
	//获取用户的信息
	[GETUSERCENTERINFO](state, userCenterInfo) {
		state.userCenterInfo = userCenterInfo;
	},
	[UPDATEUSERINFO](state, userUpdate) {
		state.userUpdate = userUpdate;
	}
}