import {
	getUserCenterData,
	updateUserData
} from '../service/getData'
import {
	GETUSERCENTERINFO,
	UPDATEUSERINFO
} from './mutationTypes.js'

export default {
	//获取社区信息
	async getUserCenterInfo({
		commit,
		state
	}, userId) {
		let res = await getUserCenterData(userId);
		commit(GETUSERCENTERINFO, res);
	},
	//更新用户的信息
	async updateUserInfo({
		commit,
		state
	}, {
		userId,
		parameters
	}) {
		let res = await updateUserData(userId, parameters);
		commit(UPDATEUSERINFO, res);
	},
}