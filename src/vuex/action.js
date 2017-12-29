import {
	getUserCenterData
} from '../service/getData'
import {
	GETUSERCENTERINFO
} from './mutationTypes.js'

export default {
	//获取社区信息
	async getUserCenterInfo({
		commit,
		state
	}, userId) {
		let res = await getUserCenterData(userId);
		commit(GETUSERCENTERINFO, res);
	}
}